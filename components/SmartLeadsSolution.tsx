"use client"
import { useEffect, useRef, useState } from 'react'
import { Target, BarChart3, RefreshCw, Brain, MessageCircle, CheckCircle, TrendingUp, Zap, Users, FileText } from 'lucide-react'

export default function SmartLeadsSolution() {
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
      title: "WIELOKANAŁOWY SYSTEM POZYSKIWANIA",
      features: [
        "Google Ads (Search, Display, YouTube) - celowanie w osoby aktywnie szukających",
        "Meta Ads (Facebook, Instagram) - budowanie świadomości i remarketing",
        "TikTok Ads - dotarcie do młodszych grup docelowych (jeśli pasuje)",
        "Optymalizacja budżetu między platformami w czasie rzeczywistym"
      ],
      gradient: "from-[#C11369] to-[#049FE3]"
    },
    {
      emoji: "📊",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "INTELIGENTNE ŚLEDZENIE I ANALIZA",
      features: [
        "Konfiguracja zaawansowanej analityki (nie tylko podstawowe śledzenie)",
        "Wdrożenie systemów CRM dopasowanych do Twojej branży",
        "Śledzenie całej ścieżki klienta - od pierwszego kliknięcia do podpisania umowy",
        "Raporty biznesowe pokazujące prawdziwy ROI każdej kampanii"
      ],
      gradient: "from-[#049FE3] to-[#C11369]"
    },
    {
      emoji: "🔄",
      icon: <RefreshCw className="w-6 h-6" />,
      title: "OPTYMALIZACJA POD TWÓJ PROCES SPRZEDAŻY",
      features: [
        "Dostosowanie landing pages pod Twój sposób prezentacji oferty",
        "Optymalizacja formularzy pod jakość leadów, nie ilość",
        "Testy różnych komunikatów reklamowych dopasowanych do Twojej branży",
        "Automatyzacje nurturingowe dla leadów niegotowych do rozmowy"
      ],
      gradient: "from-[#C11369] to-[#049FE3]"
    },
    {
      emoji: "🤖",
      icon: <Brain className="w-6 h-6" />,
      title: "WYKORZYSTANIE AI W OPTYMALIZACJI",
      features: [
        "Ułatwienie i przyspieszenie analizy danych - AI pomaga nam szybciej przetwarzać dane z kampanii",
        "Wsparcie przy tworzeniu kreacji reklamowych - generowanie pomysłów i testowanie tekstów",
        "Optymalizacja procesów sprzedażowych - analiza ścieżki klienta i identyfikacja usprawnień",
        "AI nie zastępuje człowieka, a stanowi jego turbodoładowanie"
      ],
      gradient: "from-[#049FE3] to-[#C11369]",
      highlight: true
    },
    {
      emoji: "💬",
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WSPARCIE W ZAMYKANIU SPRZEDAŻY",
      features: [
        "Konsultacje dot. procesu sprzedażowego",
        "Pomoc w przygotowaniu materiałów do prezentacji",
        "Analiza powodów utraty klientów i optymalizacja lejka",
        "Szkolenia zespołu z obsługi leadów internetowych"
      ],
      gradient: "from-[#C11369] to-[#049FE3]"
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
            <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">SmartLeads Engine</span>
            <br />
            Kompletny system leadów, nie tylko kampanie
          </h2>
          <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 inline-block">
            <p className="font-body text-lg text-gray-700">
              <span className="font-semibold">Różnica między nami a innymi agencjami?</span>
              <br />
              My budujemy cały system, nie tylko uruchamiamy reklamy.
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
                <div className={`group relative bg-white rounded-3xl border ${solution.highlight ? 'border-[#C11369]/30 shadow-xl' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#C11369] to-[#049FE3] rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border border-[#C11369]/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full px-6 py-2 mb-6">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-heading font-bold">REZULTAT</span>
                </div>
                <p className="font-heading text-2xl font-bold text-[#333333]">
                  Przewidywalny system 
                  <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent"> 50+ jakościowych leadów </span>
                  miesięcznie
                </p>
                <p className="font-body text-lg text-gray-600 mt-2">
                  zamiast loterii reklamowej
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}