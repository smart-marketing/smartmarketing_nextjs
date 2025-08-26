"use client"
import { useEffect, useRef, useState } from 'react'
import { Mail, FileText, Youtube, ArrowRight, CheckCircle, BookOpen, Video, Send } from 'lucide-react'

export default function ResourcesSection() {
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

  const resources = [
    {
      icon: <Mail className="w-8 h-8" />,
      emoji: "📧",
      title: "SmartLetter Newsletter",
      subtitle: "Cotygodniowe insights o marketingu",
      features: [
        "Praktyczne tips które wdrożysz od razu",
        "Case studies i błędy do unikania",
        "Nowe trendy w Google Ads, Meta, TikTok"
      ],
      ctaText: "Zapisz się za darmo",
      href: "#newsletter",
      color: "from-[#C11369] to-[#049FE3]",
      bgColor: "from-[#C11369]/5 to-[#049FE3]/5"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      emoji: "📝",
      title: "Blog Smart Marketing",
      subtitle: "Szczegółowe poradniki i strategie",
      features: [
        "Optymalizacja kampanii krok po kroku",
        "Analiza przypadków rzeczywistych klientów",
        "Narzędzia i automatyzacje dla MŚP"
      ],
      ctaText: "Czytaj najnowsze artykuły",
      href: "/blog",
      color: "from-[#049FE3] to-[#C11369]",
      bgColor: "from-[#049FE3]/5 to-[#C11369]/5"
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      emoji: "🎥",
      title: "YouTube Smart Marketing",
      subtitle: "Video content i live analizy",
      features: [
        "Przeglądy kont reklamowych na żywo",
        "Tutoriale optymalizacji",
        "Q&A i odpowiedzi na pytania"
      ],
      ctaText: "Subskrybuj kanał",
      href: "https://youtube.com/@smartmarketing",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-500/5 to-red-600/5",
      external: true
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-gray-100/50 via-transparent to-gray-100/50 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Nie jesteś jeszcze gotowy na spotkanie?
          </h2>
          <p className="font-body text-xl text-gray-600">
            Zacznij od darmowych materiałów - zbuduj wiedzę, poznaj nasze podejście:
          </p>
        </div>

        {/* Resources Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group h-full">
                  <div className={`relative bg-gradient-to-br ${resource.bgColor} rounded-3xl p-8 h-full border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col`}>
                    {/* Emoji badge */}
                    <div className="text-4xl mb-4">{resource.emoji}</div>
                    
                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-[#333333] mb-2">
                      {resource.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="font-body text-gray-600 mb-6">
                      {resource.subtitle}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {resource.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <a
                      href={resource.href}
                      target={resource.external ? "_blank" : undefined}
                      rel={resource.external ? "noopener noreferrer" : undefined}
                      className={`group/btn flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r ${resource.color} text-white rounded-xl font-heading font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
                    >
                      <span>{resource.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full px-8 py-4">
            <p className="font-body text-gray-700">
              <span className="italic">Kiedy będziesz gotowy na rozmowę - </span>
              <span className="font-heading font-semibold bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
                SmartCheck
              </span>
              <span className="italic"> czeka na Ciebie.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}