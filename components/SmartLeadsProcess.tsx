"use client"
import { useEffect, useRef, useState } from 'react'
import { Phone, FileText, Settings, Rocket, TrendingUp, CheckCircle, Clock } from 'lucide-react'

export default function SmartLeadsProcess() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  const steps = [
    {
      number: "1",
      title: "SmartCheck",
      duration: "45 min, bezpłatnie",
      icon: <Phone className="w-6 h-6" />,
      emoji: "📞",
      subtitle: "Bezpłatna rozmowa wideo gdzie:",
      features: [
        "Omawiamy Twoje obecne problemy z marketingiem",
        "Analizujemy na Twoim ekranie istniejące kampanie reklamowe",
        "Sprawdzamy konfigurację analityki i proces obsługi leadów",
        "Przedstawiam już na spotkaniu wstępny plan działania",
        "Ustalamy czy SmartLeads pasuje do Twojej firmy"
      ],
      color: "from-[#C11369] to-[#049FE3]",
      bgColor: "from-[#C11369]/10 to-[#049FE3]/10"
    },
    {
      number: "2",
      title: "Podpisanie umowy + Szczegółowy brief",
      duration: "1-2 godziny",
      icon: <FileText className="w-6 h-6" />,
      emoji: "📋",
      subtitle: "Głębokie spotkanie strategiczne:",
      features: [
        "Szczegółowa analiza Twoich klientów i procesu sprzedaży",
        "Określenie celów i KPI na najbliższe miesiące",
        "Omówienie budżetu i oczekiwań czasowych",
        "Ustalenie harmonogramu raportowania i komunikacji",
        "Przygotowanie materiałów potrzebnych do kampanii"
      ],
      color: "from-[#049FE3] to-[#C11369]",
      bgColor: "from-[#049FE3]/10 to-[#C11369]/10"
    },
    {
      number: "3",
      title: "Przygotowanie systemu",
      duration: "3-4 dni",
      icon: <Settings className="w-6 h-6" />,
      emoji: "⚙️",
      subtitle: "Przygotowanie techniczne:",
      features: [
        "Szczegółowa analiza obecnej analityki i systemów",
        "Weryfikacja śledzenia konwersji i integracji z CRM",
        "Przygotowanie pierwszych kampanii reklamowych",
        "Tworzenie lub optymalizacja landing pages",
        "Konfiguracja systemów raportowania"
      ],
      color: "from-[#C11369] to-[#049FE3]",
      bgColor: "from-[#C11369]/10 to-[#049FE3]/10"
    },
    {
      number: "4",
      title: "Start kampanii",
      duration: "2 tydzień współpracy",
      icon: <Rocket className="w-6 h-6" />,
      emoji: "🚀",
      subtitle: "Uruchomienie systemu:",
      features: [
        "Launch zoptymalizowanych kampanii na wszystkich kanałach",
        "Pierwsza weryfikacja działania śledzenia konwersji",
        "Start systematycznego zbierania danych do optymalizacji",
        "Pierwsze leadsy zwykle w ciągu 7-10 dni"
      ],
      color: "from-[#049FE3] to-[#C11369]",
      bgColor: "from-[#049FE3]/10 to-[#C11369]/10"
    },
    {
      number: "5",
      title: "Ciągła optymalizacja",
      duration: "cotygodniowo",
      icon: <TrendingUp className="w-6 h-6" />,
      emoji: "📈",
      subtitle: "Systematyczne doskonalenie:",
      features: [
        "Cotygodniowa analiza wyników i optymalizacje",
        "Miesięczne raporty biznesowe z rekomendacjami",
        "Stałe testowanie nowych rozwiązań i podejść",
        "Skalowanie najlepiej działających elementów"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-gray-100/30 via-transparent to-gray-100/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            JAK TO DZIAŁA - <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">REALNY PROCES</span> WSPÓŁPRACY
          </h2>
        </div>

        {/* Timeline for Desktop */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#C11369] via-[#049FE3] to-green-500 rounded-full" />
            
            {/* Timeline steps */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`group transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-white rounded-full border-4 ${
                    activeStep === index ? 'border-[#C11369] scale-125' : 'border-gray-300'
                  } flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-2xl font-heading font-bold text-[#333333]">{step.number}</span>
                  </div>
                  <p className={`mt-3 text-sm font-body ${
                    activeStep === index ? 'text-[#C11369] font-semibold' : 'text-gray-600'
                  } transition-colors`}>
                    {step.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step Details - Desktop (active step only) */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <StepCard step={steps[activeStep]} />
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Scroll container */}
            <div className="overflow-x-auto scrollbar-hide pb-4 pt-4 -mx-4 px-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="w-[85vw] flex-shrink-0"
                    style={{ maxWidth: '400px' }}
                  >
                    <div className="mt-2">
                      <StepCard step={step} mobile />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, mobile = false }: { step: any; mobile?: boolean }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-full">
      {/* Header */}
      <div className={`bg-gradient-to-r ${step.bgColor} p-6 ${mobile ? 'lg:p-8' : 'p-8'} border-b border-gray-100`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 lg:gap-4">
            <span className={`${mobile ? 'text-3xl lg:text-4xl' : 'text-4xl'}`}>{step.emoji}</span>
            <div>
              <h3 className={`font-heading ${mobile ? 'text-lg lg:text-2xl' : 'text-2xl'} font-bold text-[#333333]`}>
                KROK {step.number}: {step.title}
              </h3>
              <p className={`font-body text-gray-600 mt-1 ${mobile ? 'text-sm lg:text-base' : 'text-base'}`}>
                <Clock className="inline w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                {step.duration}
              </p>
            </div>
          </div>
        </div>
        <p className={`font-heading font-semibold ${mobile ? 'text-base lg:text-lg' : 'text-lg'} text-[#333333]`}>
          {step.subtitle}
        </p>
      </div>

      {/* Features */}
      <div className={`${mobile ? 'p-5 lg:p-8' : 'p-8'}`}>
        <div className="space-y-3 lg:space-y-4">
          {step.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
              </div>
              <p className={`font-body text-gray-700 ${mobile ? 'text-sm lg:text-base' : 'text-base'}`}>
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}