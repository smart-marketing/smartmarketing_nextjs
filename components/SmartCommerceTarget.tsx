"use client"
import { useEffect, useRef, useState } from 'react'
import { CheckCircle, XCircle, TrendingUp, DollarSign, Package, Settings, ShoppingBag, Store, ArrowRight } from 'lucide-react'

export default function SmartCommerceTarget() {
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

  const idealFor = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Jesteś producentem lub masz dobre ceny zakupowe",
      description: "konkurencyjne marże pozwalają na efektywne kampanie"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Myślisz o biznesie długoterminowo",
      description: "budujesz skalowalne źródło przychodów"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Możesz inwestować min. 3k miesięcznie",
      description: "w kampanie reklamowe"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Chcesz kontrolować rentowność",
      description: "nie tylko przychody, ale prawdziwy zysk"
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Masz stabilną logistykę",
      description: "potrafisz obsłużyć zwiększoną sprzedaż"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Jesteś otwarty na optymalizacje",
      description: "sklepu, procesów, asortymentu"
    }
  ]

  const notFor = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Nie masz konkurencyjnych marż",
      description: "niskie marże uniemożliwiają efektywne kampanie"
    },
    {
      icon: <Store className="w-5 h-5" />,
      title: "Sprzedajesz tylko przez marketplace",
      description: "(Allegro, Amazon) - mamy inne rozwiązania"
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Prowadzisz dropshipping bez kontroli nad marżami",
      description: "zbyt mała rentowność"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Nie możesz przeznaczyć 3k miesięcznie",
      description: "na kampanie reklamowe"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Szukasz szybkich, jednorazowych efektów",
      description: "SmartCommerce to system długoterminowy"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Nie chcesz optymalizować sklepu",
      description: "sukces wymaga współpracy w ulepszeniach"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333]">
            DLA KOGO JEST <span className="bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">SMARTCOMMERCE</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Ideal For */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 h-full border border-green-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-white">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#333333]">
                    SmartCommerce <span className="text-green-600">IDEALNIE PASUJE</span> jeśli:
                  </h3>
                </div>

                <div className="space-y-4">
                  {idealFor.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex gap-3 p-4 bg-white rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${300 + index * 50}ms` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-semibold text-[#333333] mb-1">
                          {item.title}
                        </p>
                        <p className="font-body text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Not For */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 h-full border border-red-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center text-white">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#333333]">
                    SmartCommerce <span className="text-red-600">NIE JEST DLA CIEBIE</span> jeśli:
                  </h3>
                </div>

                <div className="space-y-4">
                  {notFor.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex gap-3 p-4 bg-white rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${300 + index * 50}ms` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <XCircle className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-semibold text-[#333333] mb-1">
                          {item.title}
                        </p>
                        <p className="font-body text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl p-8 max-w-3xl mx-auto">
            <p className="font-heading text-xl font-semibold text-[#333333] mb-6">
              Nie jesteś pewny czy SmartCommerce do Ciebie pasuje?
              <br />
              <span className="text-2xl bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">
                Sprawdźmy to na bezpłatnym SmartCheck!
              </span>
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#049FE3] to-[#C11369] text-white px-8 py-4 rounded-full font-heading font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <span>Umów bezpłatną analizę</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}