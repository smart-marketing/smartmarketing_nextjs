"use client"
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Clock, User, Tag, Search, TrendingUp, Lightbulb, Target, Brain, CheckCircle, Mail, Youtube } from 'lucide-react'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const blogPosts = [
    {
      id: 1,
      title: "Jak zmniejszyć koszt pozyskania leada o 40% w 30 dni",
      excerpt: "Praktyczny przewodnik po optymalizacji kampanii Google Ads dla firm usługowych. Sprawdzone metody, które wdrożysz od razu.",
      category: "Google Ads",
      author: "Miłosz Wein",
      date: "15 sierpnia 2025",
      readTime: "7 min",
      image: "/blog-1.jpg",
      href: "/blog/zmniejszyc-koszt-leada",
      icon: <Target className="w-5 h-5" />,
      featured: true
    },
    {
      id: 2,
      title: "PMAX dla e-commerce - kompletny poradnik 2025",
      excerpt: "Wszystko o kampaniach Performance Max dla sklepów internetowych. Konfiguracja, optymalizacja, najczęstsze błędy.",
      category: "E-commerce",
      author: "Miłosz Wein",
      date: "10 sierpnia 2025",
      readTime: "12 min",
      image: "/blog-2.jpg",
      href: "/blog/pmax-ecommerce-poradnik",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Copywriting który sprzedaje - 15 zasad dla landing page",
      excerpt: "Jak pisać teksty reklamowe, które konwertują? Psychologia przekazu, struktura treści, praktyczne przykłady.",
      category: "Copywriting",
      author: "Sandra Korgul",
      date: "5 sierpnia 2025",
      readTime: "10 min",
      image: "/blog-3.jpg",
      href: "/blog/copywriting-landing-page",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      id: 4,
      title: "AI w marketingu - narzędzia które naprawdę działają",
      excerpt: "Przegląd praktycznych zastosowań sztucznej inteligencji w kampaniach. Od analizy danych po generowanie kreacji.",
      category: "AI & Automatyzacja",
      author: "Miłosz Wein",
      date: "1 sierpnia 2025",
      readTime: "9 min",
      image: "/blog-4.jpg",
      href: "/blog/ai-marketing-narzedzia",
      icon: <Brain className="w-5 h-5" />,
      featured: true
    },
    {
      id: 5,
      title: "Meta Ads dla firm B2B - case study +250% leadów",
      excerpt: "Jak wykorzystać Facebook i Instagram do generowania leadów B2B? Analiza kampanii która zwiększyła wyniki o 250%.",
      category: "Social Media",
      author: "Sandra Korgul",
      date: "28 lipca 2025",
      readTime: "8 min",
      image: "/blog-5.jpg",
      href: "/blog/meta-ads-b2b",
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Analityka e-commerce - KPI które musisz śledzić",
      excerpt: "Które wskaźniki naprawdę wpływają na rentowność sklepu? Praktyczny przewodnik po analityce dla e-commerce.",
      category: "E-commerce",
      author: "Miłosz Wein",
      date: "20 lipca 2025",
      readTime: "11 min",
      image: "/blog-6.jpg",
      href: "/blog/analityka-ecommerce-kpi",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ]

  const categories = [
    { id: 'all', name: 'Wszystkie', count: blogPosts.length },
    { id: 'google-ads', name: 'Google Ads', count: blogPosts.filter(p => p.category === 'Google Ads').length },
    { id: 'ecommerce', name: 'E-commerce', count: blogPosts.filter(p => p.category === 'E-commerce').length },
    { id: 'copywriting', name: 'Copywriting', count: blogPosts.filter(p => p.category === 'Copywriting').length },
    { id: 'ai', name: 'AI & Automatyzacja', count: blogPosts.filter(p => p.category === 'AI & Automatyzacja').length },
    { id: 'social', name: 'Social Media', count: blogPosts.filter(p => p.category === 'Social Media').length }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category.toLowerCase().includes(activeCategory.toLowerCase().replace('-', ' '))
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-6">
                Blog Smart Marketing
              </h1>
              <p className="font-body text-xl text-gray-600 mb-8">
                Praktyczna wiedza o marketingu online - bez ściemy, tylko sprawdzone metody
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Szukaj artykułów..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#C11369] font-body"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-start gap-4 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full font-heading text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {activeCategory === 'all' && searchQuery === '' && (
          <section className="py-12 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-2xl font-bold text-[#333333] mb-8">
                Wyróżnione artykuły
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredPosts.map((post) => (
                  <a key={post.id} href={post.href} className="group">
                    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#C11369] to-[#049FE3] rounded-lg flex items-center justify-center text-white">
                            {post.icon}
                          </div>
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-heading font-semibold">
                            Wyróżnione
                          </span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-[#333333] mb-3 group-hover:text-[#C11369] transition-colors">
                          {post.title}
                        </h3>
                        <p className="font-body text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                            <span>{post.date}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-[#C11369] group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-[#333333] mb-8">
                {searchQuery ? `Wyniki dla "${searchQuery}"` : 'Wszystkie artykuły'}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-body text-gray-500 text-lg">
                    Nie znaleziono artykułów spełniających kryteria
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="opacity-0 animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      <a href={post.href} className="group block h-full">
                        <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                          {/* Category Badge */}
                          <div className="p-6 pb-0">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-heading font-semibold mb-4">
                              {post.category}
                            </span>
                          </div>
                          
                          {/* Content */}
                          <div className="p-6 pt-0 flex-1 flex flex-col">
                            <h3 className="font-heading text-lg font-bold text-[#333333] mb-3 group-hover:text-[#C11369] transition-colors">
                              {post.title}
                            </h3>
                            <p className="font-body text-sm text-gray-600 mb-4 flex-1">
                              {post.excerpt}
                            </p>
                            
                            {/* Meta */}
                            <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <User className="w-3 h-3" />
                                  {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {post.readTime}
                                </span>
                              </div>
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* YouTube & Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/5 to-transparent rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
                Chcesz więcej praktycznej wiedzy?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* YouTube */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white">
                      <Youtube className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#333333]">
                      YouTube Smart Marketing
                    </h3>
                  </div>
                  <p className="font-body text-gray-600 mb-6">
                    Analizy kampanii na żywo, case studies, tutoriale optymalizacji. Nowy content co tydzień.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-body text-sm text-gray-700">Przeglądy kont reklamowych na żywo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-body text-sm text-gray-700">Praktyczne tutoriale krok po kroku</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-body text-sm text-gray-700">Q&A - odpowiadamy na pytania</span>
                    </li>
                  </ul>
                  <a
                    href="https://youtube.com/@smartmarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-heading font-semibold transition-all"
                  >
                    <span>Subskrybuj kanał</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-[#C11369]/5 to-[#049FE3]/5 rounded-3xl p-8 border border-[#C11369]/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#C11369] to-[#049FE3] rounded-xl flex items-center justify-center text-white">
                      <Mail className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#333333]">
                      SmartLetter Newsletter
                    </h3>
                  </div>
                  <p className="font-body text-gray-600 mb-6">
                    Cotygodniowe insights o marketingu. Zero spamu, sama wartość merytoryczna.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-body text-sm text-gray-700">Praktyczne tipy do wdrożenia od razu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-body text-sm text-gray-700">Case studies i błędy do unikania</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-body text-sm text-gray-700">Nowe trendy w Google Ads i Meta</span>
                    </li>
                  </ul>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Twój adres email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C11369] font-body"
                      required
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white rounded-xl font-heading font-semibold hover:shadow-xl transition-all"
                    >
                      <span>Zapisz się za darmo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </>
  )
}