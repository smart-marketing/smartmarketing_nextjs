"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { Calendar, Clock, User, Tag, Search, Filter, ChevronRight, TrendingUp, BookOpen, ArrowRight } from 'lucide-react'



// Temporary interface until we have real data
interface Post {
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

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch posts
    fetch('/api/blog/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts || [])
        setFilteredPosts(data.posts || [])
        setCategories(data.categories || [])
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  // Filter posts based on category and search
  useEffect(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchQuery, posts])

  // Featured post (first post)
  const featuredPost = posts[0]
  const regularPosts = filteredPosts.slice(selectedCategory === 'all' && !searchQuery ? 1 : 0)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C11369]/10 to-[#049FE3]/10 px-6 py-3 rounded-full mb-6">
                <BookOpen className="w-5 h-5 text-[#C11369]" />
                <span className="font-heading font-semibold text-[#333333]">
                  Blog Smart Marketing
                </span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-6">
                Wiedza, która <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">zwiększa sprzedaż</span>
              </h1>
              
              <p className="font-body text-xl text-gray-600 mb-12">
                Praktyczne porady, case studies i strategie marketingowe dla małych i średnich firm
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Szukaj artykułów..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 rounded-full border border-gray-200 focus:border-[#C11369] focus:outline-none shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white md:sticky md:top-20 z-30 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Filter className="w-5 h-5 text-gray-500" />
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full font-heading font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Wszystkie ({posts.length})
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-heading font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category} ({posts.filter(p => p.category === category).length})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {loading ? (
                <div className="text-center py-20">
                  <div className="inline-flex items-center gap-3 text-gray-500">
                    <div className="w-8 h-8 border-4 border-gray-200 border-t-[#C11369] rounded-full animate-spin" />
                    <span className="font-body">Ładowanie artykułów...</span>
                  </div>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-20">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-gray-700 mb-2">
                    Brak artykułów
                  </h2>
                  <p className="font-body text-gray-500">
                    Wkrótce pojawią się nowe treści!
                  </p>
                </div>
              ) : (
                <>
                  {/* Featured Post */}
                  {featuredPost && selectedCategory === 'all' && !searchQuery && (
                    <div className="mb-16">
                      <div className="flex items-center gap-2 mb-8">
                        <TrendingUp className="w-5 h-5 text-[#C11369]" />
                        <h2 className="font-heading text-2xl font-bold text-[#333333]">
                          Wyróżniony artykuł
                        </h2>
                      </div>
                      
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <article className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-[#C11369]/30 hover:shadow-2xl transition-all">
                          <div className="grid lg:grid-cols-2 gap-8">
                            {featuredPost.image && (
                              <div className="relative aspect-[16/10] lg:aspect-auto">
                                <Image
                                  src={featuredPost.image}
                                  alt={featuredPost.title}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            )}
                            <div className="p-8 lg:p-10 flex flex-col justify-center">
                              <div className="inline-flex items-center gap-2 text-sm text-[#C11369] font-semibold mb-4">
                                <Tag className="w-4 h-4" />
                                {featuredPost.category}
                              </div>
                              
                              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-[#333333] mb-4 group-hover:text-[#C11369] transition-colors">
                                {featuredPost.title}
                              </h3>
                              
                              <p className="font-body text-gray-600 mb-6 line-clamp-3">
                                {featuredPost.excerpt}
                              </p>
                              
                              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4" />
                                  <span>{featuredPost.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>
                                    {new Date(featuredPost.date).toLocaleDateString('pl-PL')}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{featuredPost.readingTime}</span>
                                </div>
                              </div>
                              
                              <div className="inline-flex items-center gap-2 text-[#C11369] font-heading font-semibold group-hover:gap-4 transition-all">
                                <span>Czytaj więcej</span>
                                <ArrowRight className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                  )}

                  {/* Regular Posts Grid */}
                  {regularPosts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {regularPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                          <article className="h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#C11369]/30 hover:shadow-xl transition-all">
                            {post.image && (
                              <div className="relative aspect-[16/10]">
                                <Image
                                  src={post.image}
                                  alt={post.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            )}
                            
                            <div className="p-6">
                              <div className="text-sm text-[#C11369] font-semibold mb-3">
                                {post.category}
                              </div>
                              
                              <h3 className="font-heading text-xl font-bold text-[#333333] mb-3 group-hover:text-[#C11369] transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              
                              <p className="font-body text-gray-600 text-sm mb-4 line-clamp-3">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{post.readingTime}</span>
                                <span>
                                  {new Date(post.date).toLocaleDateString('pl-PL')}
                                </span>
                              </div>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h2 className="font-heading text-2xl font-bold text-gray-700 mb-2">
                        Brak wyników
                      </h2>
                      <p className="font-body text-gray-500">
                        Spróbuj zmienić kryteria wyszukiwania
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-[#C11369]/5 to-[#049FE3]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Nie przegap żadnego artykułu
              </h2>
              <p className="font-body text-lg text-gray-600 mb-8">
                Zapisz się do newslettera i otrzymuj cotygodniowe porady marketingowe
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Twój adres email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:border-[#C11369] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white rounded-full font-heading font-semibold hover:shadow-xl transition-all hover:scale-105"
                >
                  Zapisz się
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  )
}