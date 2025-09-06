import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShareButtons from '@/components/ShareButtons'
import TableOfContents from '@/components/TableOfContents'
import ReadingProgress from '@/components/ReadingProgress'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/mdx'
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight, ChevronRight, Bookmark, Heart, MessageCircle, TrendingUp, BookOpen, Sparkles } from 'lucide-react'
import CTASection from '@/components/CTASection'

// Komponenty dostępne w MDX
const components = {
  Image,
  // Gradient CTA Button
  CTAButton: ({ text, href }: { text: string; href: string }) => (
    <div className="my-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#C11369]/20 to-[#049FE3]/20 blur-3xl" />
      <div className="relative text-center">
        <a
          href={href}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          {text}
          <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  ),
  // Animated Info Box
  InfoBox: ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'success' }) => {
    const gradients = {
      info: 'from-[#049FE3]/10 via-[#049FE3]/5 to-[#C11369]/10',
      warning: 'from-amber-500/10 via-orange-500/5 to-red-500/10',
      success: 'from-green-500/10 via-emerald-500/5 to-teal-500/10'
    }
    const borders = {
      info: 'border-[#049FE3]/30',
      warning: 'border-amber-500/30',
      success: 'border-green-500/30'
    }
    return (
      <div className={`my-8 p-8 bg-gradient-to-r ${gradients[type]} rounded-3xl border-2 ${borders[type]} backdrop-blur-sm relative overflow-hidden group`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#049FE3]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
        <div className="relative z-10 prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    )
  },
  // Stats Card
  StatsCard: ({ label, value, change }: { label: string; value: string; change?: string }) => (
    <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-[#C11369]/30 hover:shadow-xl transition-all duration-300">
      <p className="text-sm text-gray-600 mb-2">{label}</p>
      <p className="text-3xl font-heading font-bold bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
        {value}
      </p>
      {change && (
        <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          {change}
        </p>
      )}
    </div>
  ),
}

// Generowanie statycznych ścieżek
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Metadata dla SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Wpis nie znaleziony | Smart Marketing',
    }
  }

  return {
    title: `${post.title} | Smart Marketing Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(params.slug)
  const url = `https://agencjasmart.marketing/blog/${params.slug}`

  return (
    <>
      <Header />
      <ReadingProgress />
      <TableOfContents />
      <article className="min-h-screen bg-white">
        {/* Hero section z gradientem */}
        <div className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#C11369]/5 via-transparent to-[#049FE3]/5 rounded-full blur-3xl animate-spin-slow" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Animated breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm mb-8 overflow-x-auto">
                <Link href="/" className="text-gray-500 hover:text-[#C11369] transition-all duration-300 whitespace-nowrap group flex items-center gap-1">
                  <span className="group-hover:translate-x-1 transition-transform">Strona główna</span>
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <Link href="/blog" className="text-gray-500 hover:text-[#C11369] transition-all duration-300 whitespace-nowrap group flex items-center gap-1">
                  <span className="group-hover:translate-x-1 transition-transform">Blog</span>
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="font-semibold bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent whitespace-nowrap">
                  {post.category}
                </span>
              </nav>

              {/* Floating category badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-5 py-2.5 rounded-full mb-8 shadow-lg animate-float">
                <Tag className="w-4 h-4" />
                <span className="font-heading font-semibold text-sm uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Enhanced animated title */}
              <h1 className="font-heading font-black leading-tight mb-6">
                <span className="block text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-[#333333] via-[#C11369] to-[#049FE3] bg-clip-text text-transparent animate-gradient bg-300">
                  {post.title}
                </span>
              </h1>

              {/* Gradient excerpt */}
              <p className="font-body text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
                {post.excerpt}
              </p>

              {/* Meta info with hover effects */}
              <div className="flex flex-wrap items-center gap-6 text-sm animate-fade-in-up animation-delay-400">
                <div className="group flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
                  <div className="p-2 bg-gradient-to-br from-[#C11369]/10 to-[#049FE3]/10 rounded-full group-hover:scale-110 transition-transform">
                    <User className="w-4 h-4 text-[#C11369]" />
                  </div>
                  <span className="font-semibold text-gray-700">{post.author}</span>
                </div>
                
                <div className="group flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
                  <div className="p-2 bg-gradient-to-br from-[#049FE3]/10 to-[#C11369]/10 rounded-full group-hover:scale-110 transition-transform">
                    <Calendar className="w-4 h-4 text-[#049FE3]" />
                  </div>
                  <time dateTime={post.date} className="font-medium text-gray-600">
                    {new Date(post.date).toLocaleDateString('pl-PL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <div className="group flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
                  <div className="p-2 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full group-hover:scale-110 transition-transform">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-600">{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image with parallax effect */}
        {post.image && (
          <div className="relative -mt-10 mb-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Floating stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-semibold">234</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-semibold">45</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold">89</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sticky share sidebar */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
          <div className="flex flex-col gap-4">
            <ShareButtons url={url} title={post.title} />
          </div>
        </div>

        {/* Content with enhanced typography */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Typography */}
            <div className="prose prose-2xl max-w-none blog-content">
              <MDXRemote source={post.content} components={components} />
            </div>

            {/* Enhanced tags section */}
            {post.tags.length > 0 && (
              <div className="mt-16 pt-12 border-t-2 border-gray-100">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-heading text-xl font-bold text-[#333333] flex items-center gap-2">
                    <Tag className="w-5 h-5 text-[#C11369]" />
                    Tagi:
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="group relative px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm font-semibold text-gray-700 hover:text-white transition-all duration-300 overflow-hidden"
                      >
                        <span className="relative z-10">#{tag}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#C11369] to-[#049FE3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced share section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#C11369]/5 via-white to-[#049FE3]/5 rounded-3xl border-2 border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="font-heading text-xl font-bold text-[#333333] mb-2">
                    Spodobał Ci się ten artykuł?
                  </p>
                  <p className="font-body text-gray-600">
                    Podziel się nim ze swoją siecią!
                  </p>
                </div>
                <ShareButtons url={url} title={post.title} />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced related posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-heading text-4xl font-bold text-[#333333] mb-4">
                    Podobne artykuły
                  </h2>
                  <p className="font-body text-gray-600">
                    Kontynuuj czytanie i rozwijaj swoją wiedzę
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <article className="h-full bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#C11369]/30 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center gap-2 text-sm text-[#C11369] font-semibold mb-4">
                          <div className="w-2 h-2 bg-[#C11369] rounded-full animate-pulse" />
                          {relatedPost.category}
                        </div>
                        
                        <h3 className="font-heading text-xl font-bold text-[#333333] mb-4 group-hover:bg-gradient-to-r group-hover:from-[#C11369] group-hover:to-[#049FE3] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="font-body text-gray-600 mb-6 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{relatedPost.readingTime}</span>
                          <span className="text-[#049FE3] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                            Czytaj więcej
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Enhanced newsletter CTA */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#C11369]/5 via-white to-[#049FE3]/5">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#C11369]/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#049FE3]/20 rounded-full blur-3xl animate-float animation-delay-1000" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
                <BookOpen className="w-5 h-5 text-[#C11369] animate-pulse" />
                <span className="font-heading font-semibold text-[#333333]">Newsletter</span>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Chcesz więcej takich treści?
              </h2>
              <p className="font-body text-lg text-gray-600 mb-10">
                Dołącz do <span className="font-bold text-[#C11369]">2,847</span> subskrybentów i otrzymuj najlepsze strategie marketingowe
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="twoj@email.pl"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#C11369] focus:outline-none transition-all duration-300 text-center sm:text-left"
                />
                <button
                  type="submit"
                  className="group px-8 py-4 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white rounded-full font-heading font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Zapisz mnie
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
              
              <p className="mt-4 text-sm text-gray-500">
                Bez spamu. Możesz się wypisać w każdej chwili.
              </p>
            </div>
          </div>
        </section>

        {/* Back to blog with animation */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 text-[#C11369] font-heading font-semibold text-lg hover:gap-5 transition-all duration-300"
            >
              <div className="p-3 bg-[#C11369]/10 rounded-full group-hover:bg-[#C11369] group-hover:text-white transition-all">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span>Wróć do wszystkich artykułów</span>
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </>
  )
}