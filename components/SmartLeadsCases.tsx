"use client"
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, TrendingUp, MapPin, Briefcase, Target, Zap } from 'lucide-react'

export default function SmartLeadsCases() {
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
      mainResult: "5000+ leadów",
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
      href: "#case-garaze"
    },
    {
      id: 2,
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#049FE3]/5 via-transparent to-[#C11369]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#C11369]/5 via-transparent to-[#049FE3]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Case Studies SmartLeads
          </h2>
          <p className="font-body text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz realne wyniki firm usługowych, które nam zaufały
          </p>
        </div>

        {/* Desktop Grid - 2 columns */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CaseCard study={study} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Scroll container */}
            <div className="overflow-x-auto scrollbar-hide pb-4 pt-4 -mx-4 px-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {caseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="w-[85vw] flex-shrink-0"
                    style={{ maxWidth: '400px' }}
                  >
                    <div className="mt-2">
                      <CaseCard study={study} mobile />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {caseStudies.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="font-body text-sm md:text-base text-gray-600 mb-6">
            Chcesz podobnych rezultatów dla swojej firmy usługowej?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-heading font-semibold text-sm md:text-base hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Rozpocznij generowanie leadów</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

function CaseCard({ study, mobile = false }: { study: any; mobile?: boolean }) {
  return (
    <div className="group h-full">
      <div className="relative bg-white rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
        {/* Top gradient bar */}
        <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />
        
        {/* Case number badge */}
        <div className="absolute top-6 right-6 w-12 h-12 lg:w-14 lg:h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
          <span className="font-heading text-xl lg:text-2xl font-bold text-gray-400">
            #{study.id}
          </span>
        </div>
        
        {/* Content */}
        <div className={`${mobile ? 'p-6' : 'p-8'} flex-1 flex flex-col`}>
          {/* Title and Icon */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center text-white`}>
              {study.icon}
            </div>
            <h3 className={`font-heading ${mobile ? 'text-lg lg:text-xl' : 'text-xl'} font-bold text-[#333333]`}>
              {study.title}
            </h3>
          </div>

          {/* Main Result */}
          <div className="mb-6">
            <p className={`font-heading ${mobile ? 'text-2xl lg:text-3xl' : 'text-3xl'} font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}>
              {study.mainResult}
            </p>
            <p className={`font-body ${mobile ? 'text-sm' : 'text-base'} text-gray-600`}>
              {study.timeFrame}
            </p>
          </div>

          {/* Description */}
          <div className="mb-6 flex-1">
            <ul className="space-y-2">
              {study.description.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#C11369] mt-1">•</span>
                  <span className={`font-body ${mobile ? 'text-xs lg:text-sm' : 'text-sm'} text-gray-700`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  {study.metrics.icon}
                  <span className={`font-body ${mobile ? 'text-xs' : 'text-sm'}`}>{study.metrics.label}</span>
                </div>
                <span className={`font-heading font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent ${mobile ? 'text-lg' : 'text-xl'}`}>
                  {study.metrics.value}
                </span>
              </div>
            </div>
          </div>

          {/* Market & Industry */}
          <div className={`flex items-center gap-4 ${mobile ? 'text-xs' : 'text-sm'} text-gray-500 mb-6`}>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="font-body">{study.market}</span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1">
              <Briefcase className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="font-body">{study.industry}</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={study.href}
            className="group/btn flex items-center justify-center gap-2 w-full py-3 px-4 lg:px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300"
          >
            <span className={`font-heading font-semibold text-gray-700 ${mobile ? 'text-sm' : 'text-base'}`}>
              Sprawdź pełne case study
            </span>
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}