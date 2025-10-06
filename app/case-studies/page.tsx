"use client"
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import ResourcesSection from '@/components/ResourcesSection'
import { ArrowRight, TrendingUp, Target, Zap, ShoppingCart, BarChart3, MapPin, Briefcase, Filter } from 'lucide-react'

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const caseStudies = [
    {
      id: 1,
      category: 'leads',
      title: "Garaże Blaszane",
      mainResult: "5000+ leadów",
      timeFrame: "w 10 miesięcy",
      description: "Konfigurator produktu zintegrowany z kampaniami reklamowymi. Wysoka jakość leadów = regularna, przewidywalna sprzedaż.",
      market: "Polska",
      industry: "B2C konstrukcje",
      gradient: "from-[#C11369] to-[#049FE3]",
      icon: <Target className="w-6 h-6" />,
      metrics: {
        label: "Wzrost leadów",
        value: "+450%"
      },
      image: "/case-garaze.jpg",
      href: "/case-studies/markostal"
    },
    {
      id: 2,
      category: 'ecommerce',
      title: "E-commerce na rynek DE",
      mainResult: "100k+ zł sprzedaży",
      timeFrame: "w 4 miesiące",
      description: "Nowa marka, nowy rynek, start od zera. Tylko kampanie Google Ads przyniosły 100k zł obrotów w 4 miesiące.",
      market: "Niemcy",
      industry: "E-commerce",
      gradient: "from-[#049FE3] to-[#C11369]",
      icon: <ShoppingCart className="w-6 h-6" />,
      metrics: {
        label: "ROAS",
        value: "3.2x"
      },
      image: "/case-niemiecki.jpg",
      href: "/case-studies/ecommerce-de"
    },
    {
      id: 3,
      category: 'leads',
      title: "Instalacje OZE",
      mainResult: "Od 0 do 2M zł",
      timeFrame: "sprzedaży w 6 miesięcy",
      description: "1126 kontaktów | 77% leadów kwalifikowanych. Google Ads + Meta Ads + TikTok Ads + Microsoft Ads.",
      market: "Polska",
      industry: "OZE",
      gradient: "from-green-500 to-[#049FE3]",
      icon: <Zap className="w-6 h-6" />,
      metrics: {
        label: "Konwersja",
        value: "77%"
      },
      image: "/case-oze.jpg",
      href: "/case-studies/investsolar"
    },
    {
      id: 4,
      category: 'ecommerce',
      title: "Polski sklep online",
      mainResult: "0 → 150k zł",
      timeFrame: "miesięcznie",
      description: "Od sporadycznych zamówień do stabilnych 150k zł miesięcznie. Kluczem była optymalizacja całego lejka.",
      market: "Polska",
      industry: "E-commerce",
      gradient: "from-[#C11369] to-[#049FE3]",
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: {
        label: "Wzrost",
        value: "+850%"
      },
      image: "/case-polski.jpg",
      href: "/case-studies/polski-sklep"
    }
  ]

  const filters = [
    { id: 'all', name: 'Wszystkie', count: caseStudies.length },
    { id: 'leads', name: 'Generowanie leadów', count: caseStudies.filter(c => c.category === 'leads').length },
    { id: 'ecommerce', name: 'E-commerce', count: caseStudies.filter(c => c.category === 'ecommerce').length }
  ]

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeFilter)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-6">
                Case Studies
              </h1>
              <p className="font-body text-xl text-gray-600 mb-2">
                Realne wyniki naszych klientów - zobacz, co możemy osiągnąć razem
              </p>
              

            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-2 bg-gray-50 md:sticky md:top-20 z-30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Filter className="w-5 h-5 text-gray-500" />
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-heading font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:shadow-md'
                  }`}
                >
                  {filter.name}
                  <span className="ml-2 text-sm opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredCases.map((study, index) => (
                  <div
                    key={study.id}
                    className="opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <a href={study.href} className="group block h-full">
                      <div className="relative bg-white rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                        {/* Top gradient bar */}
                        <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />
                        
                        {/* Category badge */}
                        <div className="absolute top-6 right-6 z-10">
                          <span className={`px-3 py-1 rounded-full text-xs font-heading font-semibold ${
                            study.category === 'leads' 
                              ? 'bg-[#C11369]/10 text-[#C11369]'
                              : 'bg-[#049FE3]/10 text-[#049FE3]'
                          }`}>
                            {study.category === 'leads' ? 'Leads' : 'E-commerce'}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col">
                          {/* Title and Icon */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center text-white`}>
                              {study.icon}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-[#333333]">
                              {study.title}
                            </h3>
                          </div>

                          {/* Main Result */}
                          <div className="mb-6">
                            <p className={`font-heading text-3xl lg:text-4xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}>
                              {study.mainResult}
                            </p>
                            <p className="font-body text-gray-600">
                              {study.timeFrame}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="font-body text-gray-700 mb-6 flex-1">
                            {study.description}
                          </p>

                          {/* Metrics */}
                          <div className="bg-gray-50 rounded-xl p-4 mb-6">
                            <div className="flex items-center justify-between">
                              <span className="font-body text-sm text-gray-600">
                                {study.metrics.label}
                              </span>
                              <span className={`font-heading font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                                {study.metrics.value}
                              </span>
                            </div>
                          </div>

                          {/* Market & Industry */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span className="font-body">{study.market}</span>
                              </div>
                              <span className="text-gray-300">|</span>
                              <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                <span className="font-body">{study.industry}</span>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
        
                <ResourcesSection />
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