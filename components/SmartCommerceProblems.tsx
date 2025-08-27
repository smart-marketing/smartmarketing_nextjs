"use client"
import { useEffect, useRef, useState } from 'react'
import { AlertCircle, TrendingDown, Brain, Users, CheckCircle, ArrowRight } from 'lucide-react'

export default function SmartCommerceProblems() {
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

  const problems = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Brak rentownej sprzedaży online",
      description: "Kampanie generują ruch na stronę, ale konwersje są niskie, koszty wysokie, a prawdziwy zysk ze sprzedaży trudny do policzenia"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Niewykorzystane dane",
      description: "Masz Google Analytics pełne informacji i dane ze sklepu o klientach, ale nie wiesz jak wykorzystać to do lepszych kampanii i wyższego ROAS"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Zagubienie w AI",
      description: "Wszędzie słyszysz o automatyzacji i sztucznej inteligencji, ale nie wiesz jak zastosować to w swoim sklepie internetowym"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Złe doświadczenia z agencjami",
      description: "Poprzednie współprace z agencjami lub freelancerami kończyły się rozczarowaniem: niskie zaangażowanie, słaby kontakt, brak konkretnych wyników sprzedażowych"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-gray-500/5 to-red-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Najczęściej spotykane <span className="text-red-600">problemy e-commerce</span>,
            <br className="hidden md:block" />
            z którymi się spotykamy
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300">
                  {/* Problem indicator */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold">✕</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors">
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-[#333333] mb-2">
                        {problem.title}
                      </h3>
                      <p className="font-body text-gray-600 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            {/* Decorative line */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-lg">
              <div className="text-center mb-8">
                <p className="font-body text-lg text-gray-700 mb-2">
                  <span className="font-semibold text-[#333333]">Nie jesteś w tym sam</span> - w ciągu 
                  <span className="font-bold text-[#049FE3]"> 5 lat </span> 
                  współpracy z 
                  <span className="font-bold text-[#C11369]"> 80+ firmami</span>
                </p>
                <p className="font-body text-lg text-gray-700">
                  zauważyliśmy te same problemy u większości właścicieli sklepów.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-r from-[#049FE3]/5 to-[#C11369]/5 rounded-2xl p-6 border border-[#049FE3]/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#049FE3] to-[#C11369] rounded-full flex items-center justify-center text-white shadow-lg">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-body text-gray-700 mb-2">
                      Dlatego stworzyliśmy <span className="font-heading font-bold bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">SmartCommerce</span>
                    </p>
                    <p className="font-heading text-xl font-semibold text-[#333333]">
                      skuteczny system zwiększania sprzedaży online dla sklepów internetowych.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center mt-8">
                <a
                  href="#rozwiazanie"
                  className="group inline-flex items-center gap-2 text-[#049FE3] font-heading font-semibold hover:gap-4 transition-all duration-300"
                >
                  <span>Zobacz jak rozwiązujemy te problemy</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}