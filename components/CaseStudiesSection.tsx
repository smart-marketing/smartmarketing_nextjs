"use client"
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, TrendingUp, MapPin, Briefcase, BarChart3, Target, Zap } from 'lucide-react'

export default function CaseStudiesSection() {
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

  const caseStudies = [
    {
      id: 1,
      title: "Garaże Blaszane",
      mainResult: "5300+ leadów",
      timeFrame: "w 10 miesięcy",
      description: [
        "Konfigurator produktu zintegrowany z kampaniami reklamowymi",
        "Wysoka jakość leadów = regularna, przewidywalna sprzedaż"
      ],
      market: "Polska",
      industry: "B2C konstrukcje",
      gradient: "from-[#C11369] to-[#049FE3]",
      icon: <Target className="w-6 h-6" />,
      metrics: {
        icon: <TrendingUp className="w-4 h-4" />,
        label: "Wzrost leadów",
        value: "+450%"
      },
      href: "/case-studies/markostal"
    },
    {
      id: 2,
      title: "Niemiecki E-commerce",
      mainResult: "100k zł sprzedaży",
      timeFrame: "w 4 miesiące",
      description: [
        "Nowa marka, nowy rynek, start od zera",
        "Tylko kampanie Google Ads"
      ],
      market: "Niemcy",
      industry: "E-commerce",
      gradient: "from-[#049FE3] to-[#C11369]",
      icon: <BarChart3 className="w-6 h-6" />,
      metrics: {
        icon: <Zap className="w-4 h-4" />,
        label: "ROAS",
        value: "4.2x"
      },
      href: "#case-ecommerce"
    },
    {
      id: 3,
      title: "Instalacje OZE",
      mainResult: "Od 0 do 2M zł",
      timeFrame: "sprzedaży w 6 miesięcy",
      description: [
        "1126 kontaktów | 77% leadów kwalifikowanych",
        "Google Ads + Meta Ads + TikTok Ads + Microsoft Ads"
      ],
      market: "Polska",
      industry: "OZE",
      gradient: "from-green-500 to-[#049FE3]",
      icon: <Zap className="w-6 h-6" />,
      metrics: {
        icon: <Target className="w-4 h-4" />,
        label: "Konwersja",
        value: "77%"
      },
      href: "#case-oze"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#049FE3]/5 via-transparent to-[#C11369]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#C11369]/5 via-transparent to-[#049FE3]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Case Studies
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Realne wyniki naszych klientów - sprawdź, co możemy osiągnąć razem
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group h-full">
                  <div className="relative bg-white rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Top gradient bar */}
                    <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />
                    
                    {/* Case number badge */}
                    <div className="absolute top-6 right-6 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
                      <span className="font-heading text-2xl font-bold text-gray-400">
                        #{study.id}
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
                      <div className="space-y-2 mb-6 flex-1">
                        {study.description.map((line, i) => (
                          <p key={i} className="font-body text-sm text-gray-700 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>

                      {/* Metrics Badge */}
                      <div className="bg-gray-50 rounded-xl p-3 mb-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-600">
                              {study.metrics.icon}
                            </div>
                            <span className="font-body text-xs text-gray-600">
                              {study.metrics.label}
                            </span>
                          </div>
                          <span className={`font-heading font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                            {study.metrics.value}
                          </span>
                        </div>
                      </div>

                      {/* Market & Industry */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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

                      {/* CTA */}
                      <a
                        href={study.href}
                        className={`group/btn flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300`}
                      >
                        <span className="font-heading font-semibold text-gray-700">
                          Sprawdź pełne case study
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="font-body text-gray-600 mb-6">
            Chcesz podobnych rezultatów?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-full font-heading font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Porozmawiajmy o Twoim projekcie</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}