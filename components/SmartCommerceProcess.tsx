"use client"
import { useEffect, useRef, useState } from 'react'
import { Phone, FileText, Settings, Rocket, TrendingUp, CheckCircle, Clock } from 'lucide-react'

export default function SmartCommerceProcess() {
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
        "Omawiamy Twoje obecne problemy z kampaniami e-commerce",
        "Analizujemy na Twoim ekranie istniejące kampanie reklamowe i sklep",
        "Sprawdzamy konfigurację analityki i śledzenie sprzedaży",
        "Przedstawiam już na spotkaniu wstępny plan działania",
        "Ustalamy czy SmartCommerce pasuje do Twojego sklepu"
      ],
      color: "from-[#049FE3] to-[#C11369]",
      bgColor: "from-[#049FE3]/10 to-[#C11369]/10"
    },
    {
      number: "2",
      title: "Podpisanie umowy + Szczegółowy brief",
      duration: "1-2 godziny",
      icon: <FileText className="w-6 h-6" />,
      emoji: "📋",
      subtitle: "Głębokie spotkanie strategiczne:",
      features: [
        "Szczegółowa analiza Twoich produktów, marż i klientów",
        "Określenie celów sprzedażowych i rentowności na najbliższe miesiące",
        "Omówienie budżetu i oczekiwań czasowych",
        "Analiza konkurencji i pozycjonowania cenowego",
        "Przygotowanie materiałów potrzebnych do kampanii"
      ],
      color: "from-[#C11369] to-[#049FE3]",
      bgColor: "from-[#C11369]/10 to-[#049FE3]/10"
    },
    {
      number: "3",
      title: "Przygotowanie systemu",
      duration: "3-4 dni",
      icon: <Settings className="w-6 h-6" />,
      emoji: "⚙️",
      subtitle: "Przygotowanie techniczne:",
      features: [
        "Szczegółowa analiza obecnej analityki e-commerce i integracji",
        "Weryfikacja śledzenia konwersji i przychodów",
        "Przygotowanie pierwszych kampanii produktowych",
        "Audit i optymalizacja najważniejszych stron sklepu",
        "Konfiguracja systemów raportowania rentowności"
      ],
      color: "from-[#049FE3] to-[#C11369]",
      bgColor: "from-[#049FE3]/10 to-[#C11369]/10"
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
        "Pierwsza weryfikacja działania śledzenia sprzedaży",
        "Start systematycznego zbierania danych do optymalizacji",
        "Pierwsze transakcje z kampanii zwykle w ciągu 3-7 dni"
      ],
      color: "from-[#C11369] to-[#049FE3]",
      bgColor: "from-[#C11369]/10 to-[#049FE3]/10"
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
        "Miesięczne raporty rentowności z rekomendacjami",
        "Stałe testowanie nowych produktów i podejść",
        "Skalowanie najlepiej sprzedających się kategorii"
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
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            JAK TO DZIAŁA - <span className="bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">REALNY PROCES</span> WSPÓŁPRACY
          </h2>
        </div>

        {/* Timeline for Desktop */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#049FE3] via-[#C11369] to-green-500 rounded-full" />
            
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
                    activeStep === index ? 'border-[#049FE3] scale-125' : 'border-gray-300'
                  } flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-2xl font-heading font-bold text-[#333333]">{step.number}</span>
                  </div>
                  <p className={`mt-3 text-sm font-body ${
                    activeStep === index ? 'text-[#049FE3] font-semibold' : 'text-gray-600'
                  } transition-colors`}>
                    {step.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step Details */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile: All steps visible */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <StepCard step={step} />
              </div>
            ))}
          </div>

          {/* Desktop: Active step only */}
          <div className="hidden lg:block">
            <StepCard step={steps[activeStep]} />
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step }: { step: any }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${step.bgColor} p-8 border-b border-gray-100`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{step.emoji}</span>
            <div>
              <h3 className="font-heading text-2xl font-bold text-[#333333]">
                KROK {step.number}: {step.title}
              </h3>
              <p className="font-body text-gray-600 mt-1">
                <Clock className="inline w-4 h-4 mr-1" />
                {step.duration}
              </p>
            </div>
          </div>
        </div>
        <p className="font-heading font-semibold text-lg text-[#333333]">
          {step.subtitle}
        </p>
      </div>

      {/* Features */}
      <div className="p-8">
        <div className="space-y-4">
          {step.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-6 h-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="font-body text-gray-700">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}