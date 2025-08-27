"use client"
import { useEffect, useRef, useState } from 'react'
import { Target, BarChart3, RefreshCw, Brain, MessageCircle, CheckCircle, TrendingUp, Zap } from 'lucide-react'

export default function SmartCommerceSolution() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const solutions = [
    {
      emoji: "🎯",
      icon: <Target className="w-6 h-6" />,
      title: "WIELOKANAŁOWY SYSTEM SPRZEDAŻY",
      features: [
        "Google Ads (PMAX, Shopping, Search) - maksymalna widoczność produktów",
        "Meta Ads (katalogi produktów, DPA, retargeting) - dotarcie do klientów w każdej fazie zakupu",
        "TikTok Ads - produkty lifestyle i consumer (jeśli pasuje do branży)",
        "Optymalizacja budżetu między platformami w czasie rzeczywistym"
      ],
      gradient: "from-[#049FE3] to-[#C11369]"
    },
    {
      emoji: "📊",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "ANALIZA RENTOWNOŚCI BIZNESU",
      features: [
        "Konfiguracja zaawansowanej analityki e-commerce (nie tylko podstawowe śledzenie)",
        "Analiza marż, kosztów logistyki i prawdziwej rentowności",
        "Śledzenie całej ścieżki klienta - od pierwszego kliknięcia do powtórnych zakupów",
        "Raporty biznesowe pokazujące prawdziwy zysk, nie tylko przychody"
      ],
      gradient: "from-[#C11369] to-[#049FE3]"
    },
    {
      emoji: "🔄",
      icon: <RefreshCw className="w-6 h-6" />,
      title: "OPTYMALIZACJA CAŁEGO LEJKA SPRZEDAŻY",
      features: [
        "Analiza i optymalizacja procesu zakupowego w sklepie",
        "Testy landing pages i stron produktowych pod konwersje",
        "Optymalizacja kampanii pod wartość zamówienia, nie tylko ilość transakcji",
        "Automatyzacje remarketing dla koszyka porzuconego i powtórnych zakupów"
      ],
      gradient: "from-[#049FE3] to-[#C11369]"
    },
    {
      emoji: "🤖",
      icon: <Brain className="w-6 h-6" />,
      title: "WYKORZYSTANIE AI W OPTYMALIZACJI",
      features: [
        "Ułatwienie i przyspieszenie analizy danych ze sprzedaży",
        "Wsparcie przy tworzeniu kreacji reklamowych produktowych",
        "Optymalizacja procesów sprzedażowych i posprzedażowych",
        "AI nie zastępuje człowieka, a stanowi jego turbodoładowanie"
      ],
      gradient: "from-[#C11369] to-[#049FE3]",
      highlight: true
    },
    {
      emoji: "💬",
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WSPARCIE W ROZWOJU BIZNESU",
      features: [
        "Konsultacje dot. strategii cenowej i pozycjonowania",
        "Pomoc w optymalizacji asortymentu na podstawie danych",
        "Analiza konkurencji i możliwości ekspansji",
        "Wsparcie w planowaniu sezonowości i promocji"
      ],
      gradient: "from-[#049FE3] to-[#C11369]"
    }
  ]

  return (
    <section id="rozwiazanie" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#049FE3]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#C11369]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            <span className="bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">SmartCommerce Growth</span>
            <br />
            Kompletny system sprzedaży, nie tylko kampanie
          </h2>
          <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 inline-block">
            <p className="font-body text-lg text-gray-700">
              <span className="font-semibold">Różnica między nami a innymi agencjami?</span>
              <br />
              My analizujemy całą rentowność biznesu, nie tylko ROAS kampanii.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`group relative bg-white rounded-3xl border ${solution.highlight ? 'border-[#049FE3]/30 shadow-xl' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                  {/* Gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient}`} />
                  
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl">{solution.emoji}</span>
                      <h3 className="font-heading font-bold text-xl text-[#333333]">
                        {solution.title}
                      </h3>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {solution.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          <div className={`w-6 h-6 bg-gradient-to-br ${solution.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <p className="font-body text-sm text-gray-700 leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result Box */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#049FE3] to-[#C11369] rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border border-[#049FE3]/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full px-6 py-2 mb-6">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-heading font-bold">REZULTAT</span>
                </div>
                <p className="font-heading text-2xl font-bold text-[#333333]">
                  Zwiększenie rentowności sklepu o
                  <span className="bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent"> 30-200% </span>
                  w ciągu 6 miesięcy
                </p>
                <p className="font-body text-lg text-gray-600 mt-2">
                  z pełną kontrolą nad rzeczywistym zyskiem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}