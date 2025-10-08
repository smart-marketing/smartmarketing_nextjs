"use client"
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import TrustSection from '@/components/TrustSection'
import ResourcesSection from '@/components/ResourcesSection'
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Shield, Target, Zap, Clock, ArrowRight } from 'lucide-react'

export default function SmartCheckPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [currentProblem, setCurrentProblem] = useState(0)
  const [currentBenefit, setCurrentBenefit] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const problems = [
    {
      title: "Wydajemy 8k miesięcznie na reklamy, ale nie wiemy co działa",
      description: "Kampanie działają chaotycznie. Dzisiaj świetnie, jutro katastrofa. Bez jasnych przyczyn."
    },
    {
      title: "Koszt leada/sprzedaży rośnie, a jakość spada",
      description: "Każdy miesiąc to walka o utrzymanie wyników przy rosnących kosztach reklamowych."
    },
    {
      title: "Nie wiemy co optymalizować, od czego zacząć",
      description: "Google Ads pokazuje setki metryk. Analytics tysiące danych. A Ty nie wiesz co jest naprawdę ważne."
    },
    {
      title: "Poprzednie agencje obiecywały złote góry, efektów zero",
      description: "Opłacałeś 3-6 miesięcy \"optymalizacji\" i jedyne co masz to rachunki i frustrację."
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      emoji: "🖥️",
      title: "LIVE ANALIZA NA TWOIM EKRANIE",
      points: [
        "Udostępniasz ekran, analizujemy razem Twoje kampanie",
        "Sprawdzamy Google Ads, Meta Ads, TikTok Ads,analitykę, stronę www",
        "Identyfikujemy błędy które kosztują Cię najwięcej pieniędzy",
        "Wszystko w czasie rzeczywistym, z wyjaśnieniem co i dlaczego"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      emoji: "💡",
      title: "3-5 KONKRETNYCH QUICK WINS",
      points: [
        "Rzeczy które możesz poprawić jeszcze dziś",
        "Często dają 20-40% poprawę wyników w tydzień",
        "Proste zmiany, duży impact",
        "Dostajesz je niezależnie od tego czy się zdecydujesz na współpracę"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      emoji: "📋",
      title: "PLAN DZIAŁANIA NA 90 DNI",
      points: [
        "Co optymalizować w pierwszej kolejności",
        "Jakie kanały mają największy potencjał",
        "Realistyczne cele i timeframe",
        "Propozycja SmartLeads, SmartCommerce lub inne rozwiązanie"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      emoji: "🎯",
      title: "ODPOWIEDZI NA WSZYSTKIE PYTANIA",
      points: [
        "Dlaczego kampanie nie działają jak powinny",
        "Gdzie tracisz najwięcej budżetu",
        "Co robić z sezonowością/konkurencją",
        "Jak mierzyć prawdziwy ROI marketingu"
      ]
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Wypełniasz formularz",
      time: "30 sekund",
      description: "Podajesz email, telefon i mówisz czym się interesujesz"
    },
    {
      number: "2",
      title: "Oddzwaniamy",
      time: "w ciągu godziny",
      description: "📞 Krótka rozmowa 5 minut - poznajemy Twoją sytuację\n📅 Umawiamy termin SmartCheck na najbliższy dzień"
    },
    {
      number: "3",
      title: "Spotkanie przez Google Meet",
      time: "45 minut",
      description: "🖥️ Ty udostępniasz ekran\n🔍 Analizujemy Twoje kampanie na żywo\n💡 Pokazujemy błędy i możliwości\n📊 Przedstawiamy plan działania"
    },
    {
      number: "4",
      title: "Dostajesz wartość",
      time: "niezależnie od decyzji",
      description: "✅ Lista quick wins do wdrożenia\n✅ Zrozumienie co blokuje Twój marketing\n✅ Propozycja współpracy (jeśli pasujemy)\n✅ Decyzja po spotkaniu lub w 24h - bez pressure"
    }
  ]

  const faqs = [
    {
      question: "Czy SmartCheck to naprawdę za darmo?",
      answer: "Tak, 100% za darmo. Bez ukrytych kosztów, bez \"darmowy audyt a płatna implementacja\". Dostajesz wartość niezależnie od decyzji."
    },
    {
      question: "Czy będziecie naciskać na współpracę?",
      answer: "Nie. Na końcu przedstawimy propozycję współpracy jeśli widzimy że pasujemy. Ale zero pressure. Wielu klientów wdrożyło nasze wskazówki samodzielnie i jesteśmy z tego zadowoleni."
    },
    {
      question: "Co jeśli nie mam dostępu do kampanii (prowadzi je freelancer/agencja)?",
      answer: "Spokojnie - możemy przeanalizować samą stronę www i dać rekomendacje. Ale najlepsze efekty będą gdy mamy wgląd w kampanie."
    },
    {
      question: "Jakie dane/dostępy potrzebuję przygotować?",
      answer: "Wystarczy link do strony www i możliwość pokazania na ekranie Google Ads/Meta Ads (nie musimy mieć bezpośredniego dostępu)."
    },
    {
      question: "Ile dokładnie trwa spotkanie?",
      answer: "Standardowo 45 minut. Czasem 30 minut jeśli szybko identyfikujemy problemy. Czasem godzinę jeśli jest więcej do omówienia. Nie śpieszymy się."
    },
    {
      question: "Czy mogę nagrywać spotkanie?",
      answer: "Oczywiście! Polecamy nawet - łatwiej potem wdrożyć wskazówki."
    },
    {
      question: "Co się stanie po SmartCheck?",
      answer: "Jeśli się zdecydujesz - podpisujemy umowę i startujemy. Jeśli nie - rozstajemy się w dobrych relacjach. Żadnych follow-upów, nachalnych telefonów czy emaili."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="min-h-[45vh] lg:min-h-[45vh] relative overflow-hidden flex items-center pt-32 pb-10 lg:pt-20">
          {/* Animated gradient background - zgodny z resztą serwisu */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white">
            <div className="absolute inset-0">
              <div 
                className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#049FE3]/10 via-[#C11369]/10 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
              />
              <div 
                className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#C11369]/10 via-[#049FE3]/10 to-transparent rounded-full blur-3xl animate-pulse delay-700"
                style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
              />
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-20 h-20 border-2 border-[#049FE3]/20 rounded-full animate-float" />
            <div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-[#C11369]/20 rounded-full animate-float-delayed" />
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-[#C11369]/10 to-[#049FE3]/10 rounded-full animate-float" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              {/* Headline */}
              <div className={`space-y-8 mb-4 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Znajdziemy 3-5 błędów <br></br><span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">w Twoich kampaniach które kosztują Cię najwięcej</span> 
                </h1>
                <p className="font-body text-xl lg:text-2xl text-gray-700">
                  45 minut bezpłatnej analizy na żywo może zaoszczędzić Ci tysiące złotych przepalanych co miesiąc.
                </p>
              </div>
                        {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-2 justify-center items-center transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="#kontakt"
              className="group relative inline-flex items-center mt-10 gap-2 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-full font-heading font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>BEZPŁATNA KONSULTACJA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#049FE3] to-[#C11369] rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </a>
            

          </div>
              
            </div>
          </div>
        </section>

        <CTASection />

        {/* Problems Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#333333]">
              Czy któreś z tych frustracji brzmi znajomo?
            </h2>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-3 text-[#333333]">{problem.title}</h3>
                      <p className="font-body text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative overflow-visible">
                <div 
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentProblem * 100}%)` }}
                >
                  {problems.map((problem, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
                        <div className="flex items-start gap-4">
                          <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-heading text-lg font-bold mb-3 text-[#333333]">{problem.title}</h3>
                            <p className="font-body text-gray-600 text-sm">{problem.description}</p>
                          </div>
                        </div>
                      </div>
                      {/* Preview next card */}
                      {index < problems.length - 1 && (
                        <div className="absolute right-0 top-0 w-8 opacity-30 pointer-events-none">
                          <div className="bg-white rounded-r-2xl h-full shadow" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() => setCurrentProblem(Math.max(0, currentProblem - 1))}
                  disabled={currentProblem === 0}
                  className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-30 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex gap-2">
                  {problems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProblem(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentProblem === index ? 'bg-red-500 w-8' : 'bg-red-200 w-2'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentProblem(Math.min(problems.length - 1, currentProblem + 1))}
                  disabled={currentProblem === problems.length - 1}
                  className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-30 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            <p className="font-heading text-2xl md:text-3xl font-bold text-center mt-12 bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">
              W ciągu 45 minut SmartCheck pokażemy Ci dokładnie gdzie leży problem.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                CO DOSTAJESZ NA SMARTCHECK
              </h2>
              <p className="font-body text-xl md:text-2xl text-gray-600">
                45 minut które mogą zmienić Twój biznes
              </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all group">
                  <div className="text-[#049FE3] mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-6">
                    {benefit.emoji} {benefit.title}
                  </h3>
                  <ul className="space-y-3">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative px-2">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${currentBenefit * 100}%)` }}
                  >
                    {benefits.map((benefit, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                          <div className="text-[#049FE3] mb-3">{benefit.icon}</div>
                          <h3 className="font-heading text-base font-bold mb-3 leading-tight">
                            {benefit.emoji} {benefit.title}
                          </h3>
                          <ul className="space-y-2">
                            {benefit.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="font-body text-gray-700 text-sm leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <div className="flex justify-center items-center gap-3 mt-6">
                  <button
                    onClick={() => setCurrentBenefit(Math.max(0, currentBenefit - 1))}
                    disabled={currentBenefit === 0}
                    className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-30 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex gap-2">
                    {benefits.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentBenefit(index)}
                        className={`h-2 rounded-full transition-all ${
                          currentBenefit === index ? 'bg-[#049FE3] w-8' : 'bg-gray-300 w-2'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentBenefit(Math.min(benefits.length - 1, currentBenefit + 1))}
                    disabled={currentBenefit === benefits.length - 1}
                    className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-30 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              JAK WYGLĄDA SMARTCHECK - KROK PO KROKU
            </h2>

            {/* Step Navigator */}
            <div className="flex justify-center mb-12 overflow-x-auto pb-4">
              <div className="inline-flex gap-2 bg-white rounded-full p-2 shadow-lg">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`px-6 py-3 rounded-full font-heading font-semibold transition-all whitespace-nowrap ${
                      currentStep === index
                        ? 'bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white shadow-lg scale-105'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Krok {step.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Step Content */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                      {steps[currentStep].number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#333333]">
                        {steps[currentStep].title}
                      </h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full font-body">
                        {steps[currentStep].time}
                      </span>
                    </div>
                    <p className="font-body text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                      {steps[currentStep].description}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:hover:bg-gray-100 transition-colors font-heading font-semibold"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Poprzedni
                  </button>
                  <div className="flex gap-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentStep === index ? 'bg-[#049FE3] w-8' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    disabled={currentStep === steps.length - 1}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white hover:shadow-lg disabled:opacity-30 transition-all font-heading font-semibold"
                  >
                    Następny
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section - COMMENTED OUT */}
        {/* 
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Shield className="w-20 h-20 mx-auto mb-6 animate-pulse" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              GWARANCJA SATYSFAKCJI
            </h2>
            <p className="font-body text-xl md:text-2xl mb-8">
              Jesteśmy na tyle pewni wartości SmartCheck, że:
            </p>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12 border-2 border-white/30 hover:bg-white/20 transition-all">
              <p className="font-heading text-2xl md:text-3xl font-bold mb-6">
                🛡️ Jeśli nie pokażemy minimum 3 konkretnych ulepszeń w Twoich kampaniach, dostaniesz 200 zł na swoje reklamy.
              </p>
              <p className="font-body text-lg md:text-xl">
                Bez pytań. Bez warunków. Zwykły przelew.
              </p>
            </div>
            <p className="font-body text-sm md:text-base mt-6 opacity-90">
              *Dotychczas nikt nie skorzystał z tej gwarancji - zawsze znajdowaliśmy co najmniej 5 rzeczy do poprawy.
            </p>
          </div>
        </section>
        */}

        {/* Target Audience Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              DLA KOGO JEST SMARTCHECK
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ideal Fit */}
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
                <h3 className="font-heading text-2xl font-bold mb-6 text-green-800">
                  ✅ SmartCheck IDEALNIE PASUJE jeśli:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Wydajesz już na reklamy (Google Ads, Meta Ads, TikTok) ale wyniki nie zadowalają",
                    "Nie wiesz co optymalizować i od czego zacząć poprawę efektywności",
                    "Masz budżet min. 3k miesięcznie na kampanie reklamowe",
                    "Szukasz konkretów - nie teorii, tylko praktycznych działań",
                    "Jesteś otwarty na zmiany w kampaniach i procesach",
                    "Chcesz partnera do długoterminowej współpracy, nie quick fix"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Ideal */}
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 hover:shadow-xl transition-shadow">
                <h3 className="font-heading text-2xl font-bold mb-6 text-red-800">
                  ❌ SmartCheck NIE JEST DLA CIEBIE jeśli:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Nie prowadzisz jeszcze kampanii reklamowych - nie będzie co analizować",
                    "Szukasz darmowej robocizny - dajemy wskazówki, nie wykonujemy pracy za Ciebie",
                    "Nie masz budżetu 3k+ miesięcznie na kampanie - nie będziemy efektywni",
                    "Oczekujesz natychmiastowych efektów - dobry marketing to system, nie quick win",
                    "Nie chcesz nic zmieniać w obecnym podejściu - wtedy SmartCheck to strata czasu"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              FAQ - NAJCZĘSTSZE PYTANIA
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-heading font-bold text-lg pr-4">❓ {faq.question}</span>
                    <ChevronRight 
                      className={`w-6 h-6 flex-shrink-0 transition-transform text-[#049FE3] ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 font-body text-gray-700">
                      ✅ {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 px-4">
          <CTASection />
        </section>

        {/* Trust Section */}
        <TrustSection />

        {/* Resources Section */}
        <ResourcesSection />
      </main>
      <Footer />
    </>
  )
}
                    