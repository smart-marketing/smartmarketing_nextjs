import { NextResponse } from 'next/server'
import { getAllPosts, getAllCategories } from '@/lib/mdx'

export async function GET() {
  try {
    const posts = await getAllPosts()
    const categories = await getAllCategories()
    
    return NextResponse.json({
      posts,
      categories,
      total: posts.length
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { 
        posts: [], 
        categories: [],
        total: 0,
        error: 'Failed to fetch posts' 
      },
      { status: 500 }
    )
  }
}