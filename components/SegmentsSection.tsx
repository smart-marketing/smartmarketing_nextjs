"use client"
import { useEffect, useRef, useState } from 'react'
import { Building2, ShoppingCart, CheckCircle2, ArrowRight, Users, TrendingUp, Target, BarChart3, Zap, PieChart } from 'lucide-react'

export default function SegmentsSection() {
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

  const segments = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "SmartLeads",
      subtitle: "Firmy B2C z procesem sprzedażowym",
      idealFor: "Sprzedaży produktów/usług 5k+ wymagających konsultacji i wycen",
      color: "from-[#C11369] to-[#049FE3]",
      accentColor: "#C11369",
      minBudget: "3000 PLN",
      budgetLabel: "Minimalny budżet reklamowy",
      features: [
        { 
          icon: <Target className="w-5 h-5" />,
          text: "Od leada do zamknięcia sprzedaży - kompleksowe śledzenie w CRM" 
        },
        { 
          icon: <Users className="w-5 h-5" />,
          text: "Jakość > ilość - leadów dla Twojego sposobu sprzedaży" 
        },
        { 
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Google + Meta + TikTok zintegrowane z Twoim procesem" 
        },
        { 
          icon: <BarChart3 className="w-5 h-5" />,
          text: "Widzisz prawdziwy ROI - ile każda kampania przynosi zysku" 
        }
      ],
      targetAudience: "Dla Ciebie, jeśli prowadzisz konsultacje/doradztwo przed sprzedażą",
      ctaText: "Dowiedz się więcej o SmartLeads",
      href: "#smartleads"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "SmartCommerce",
      subtitle: "Sklepy internetowe",
      idealFor: "Producentów lub dystrybutorów z dobrymi cenami zakupowymi ",
      color: "from-[#049FE3] to-[#C11369]",
      accentColor: "#049FE3",minBudget: "5000 PLN",
      budgetLabel: "Minimalny budżet reklamowy",
      features: [
        { 
          icon: <Zap className="w-5 h-5" />,
          text: "Rentowność nad wszystko - analizujemy marże, koszty, prawdziwy zysk" 
        },
        { 
          icon: <TrendingUp className="w-5 h-5" />,
          text: "360° podejście do biznesu - od reklam po optymalizację sklepu" 
        },
        { 
          icon: <PieChart className="w-5 h-5" />,
          text: "Multi-channel growth - Google, Meta, TikTok w jednej strategii" 
        },
        { 
          icon: <BarChart3 className="w-5 h-5" />,
          text: "Strategia biznesowa - ceny, asortyment, positioning" 
        }
      ],
      targetAudience: "Dla Ciebie, jeśli myślisz o biznesie długoterminowo, nie tylko o ruchu na stronie",
      ctaText: "Dowiedz się więcej o SmartCommerce",
      href: "#smartcommerce"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Z KIM PRACUJEMY?
          </h2>
          <p className="font-body text-xl text-gray-600">
            Specjalizujemy się w dwóch segmentach biznesu:
          </p>
        </div>

        {/* Segments Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {segments.map((segment, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="group relative h-full">
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 lg:p-10 h-full border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300">
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${segment.color} rounded-t-3xl`} />
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${segment.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        {segment.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-[#333333] mb-1">
                          {segment.title}
                        </h3>
                        <p className="font-body text-gray-600">
                          {segment.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Ideal for */}
                    <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                      <p className="font-heading font-semibold text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Idealne dla:
                      </p>
                      <p className="font-body text-sm text-gray-700">
                        {segment.idealFor}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {segment.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white shadow-md group-hover/item:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <p className="font-body text-gray-700 leading-relaxed flex-1">
                            {feature.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Minimum Budget */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl px-4 py-3 mb-6">
                    <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-gray-600">
                        Minimalny budżet reklamowy:
                        </span>
                        <span className={`font-heading text-lg font-bold bg-gradient-to-r ${segment.color} bg-clip-text text-transparent`}>
                        od {segment.minBudget}/msc
                        </span>
                    </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={segment.href}
                      className={`group/cta flex items-center justify-center gap-3 w-full bg-gradient-to-r ${segment.color} text-white px-6 py-4 rounded-2xl font-heading font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                    >
                      <span>{segment.ctaText}</span>
                      <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                    </a>

                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-[0.03] rounded-3xl transition-opacity pointer-events-none`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="font-body text-gray-600 mb-6">
            Nie wiesz, które rozwiązanie jest dla Ciebie?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-white border-2 border-[#333333] text-[#333333] px-8 py-4 rounded-full font-heading font-semibold hover:bg-[#333333] hover:text-white transition-all duration-300 group"
          >
            <span>Porozmawiajmy o Twoich potrzebach</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}