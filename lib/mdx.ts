import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  tags: string[]
  image?: string
  readingTime?: string
}

export interface Post extends PostMeta {
  content: string
}

// Pobiera wszystkie slugi wpisów
export function getPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(postsDirectory)
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx$/, ''))
  } catch {
    return []
  }
}

// Pobiera metadane pojedynczego wpisu
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)
    
    return {
      slug,
      title: data.title || 'Bez tytułu',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      author: data.author || 'Smart Marketing',
      category: data.category || 'Marketing',
      tags: data.tags || [],
      image: data.image,
      readingTime: stats.text,
      content
    }
  } catch {
    return null
  }
}

// Pobiera wszystkie wpisy z metadanymi
export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug)
      if (!post) return null
      const { content, ...meta } = post
      return meta
    })
  )
  
  return posts
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Pobiera powiązane wpisy (na podstawie kategorii i tagów)
export async function getRelatedPosts(
  currentSlug: string, 
  limit: number = 3
): Promise<PostMeta[]> {
  const current = await getPostBySlug(currentSlug)
  if (!current) return []
  
  const allPosts = await getAllPosts()
  
  // Filtruj i oceniaj podobieństwo
  const scored = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0
      
      // +3 punkty za tę samą kategorię
      if (post.category === current.category) score += 3
      
      // +1 punkt za każdy wspólny tag
      const commonTags = post.tags.filter(tag => 
        current.tags.includes(tag)
      )
      score += commonTags.length
      
      return { post, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
  
  return scored.slice(0, limit).map(item => item.post)
}

// Pobiera wpisy z danej kategorii
export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const posts = await getAllPosts()
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

// Pobiera wszystkie kategorie
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories).sort()
}