"use client"
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, CheckCircle, TrendingUp, Target, Globe, Users, ArrowRight, Sparkles } from 'lucide-react'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Wystąpił błąd')
      }

      setIsSuccess(true)
      setEmail('')
    } catch (err: any) {
      setError(err.message || 'Wystąpił błąd. Spróbuj ponownie.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Praktyka, nie teoria",
      description: "Konkretne wskazówki z prawdziwych kampanii naszych klientów - co działa w Google Ads, Meta Ads i TikTok Ads"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Dla firm usługowych i e-commerce",
      description: "Skupiamy się na dwóch rzeczach: jak generować więcej jakościowych leadów i jak zwiększać sprzedaż w sklepach online"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Polski rynek",
      description: "Analizujemy polską rzeczywistość biznesową, nie przepisujemy teorii z zagranicznych źródeł"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Od praktyków",
      description: "Piszą Miłosz i Sandra - specjaliści którzy na co dzień prowadzą kampanie dla 15+ firm MŚP"
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center pt-32 pb-8 lg:pt-36 lg:pb-12">
          {/* Animated gradient background */}
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
            <div className="max-w-4xl mx-auto text-center">
              {/* Main heading */}
              <h1 
                className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="text-[#333333]">Praktyczna wiedza </span>
                <span className="text-[#333333]">o marketingu</span>
                <br />
                <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
                  prosto do Twojej skrzynki
                </span>
              </h1>

              {/* Subheading */}
              <p 
                className={`font-body text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Cotygodniowy newsletter dla właścicieli firm, którzy chcą więcej leadów i większej sprzedaży online.
              </p>

              {/* Newsletter Form */}
              <div 
                className={`transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-3 shadow-2xl border border-gray-200 flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="firmowy adres e-mail"
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#C11369] focus:outline-none font-body text-lg transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-2xl font-heading font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Zapisuję...
                          </>
                        ) : (
                          <>
                            ZAPISZ SIĘ ZA DARMO
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                    {error && (
                      <p className="font-body text-sm text-red-600 mt-4 text-center">
                        {error}
                      </p>
                    )}
                    <p className="font-body text-sm text-gray-500 mt-4 italic">
                      Raz w tygodniu. Bez spamu. Wypisz się w każdej chwili.
                    </p>
                  </form>
                ) : (
                  <div className="max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 animate-fade-in-up">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-green-800">
                        Świetnie! Jesteś zapisany 🎉
                      </h3>
                      <p className="font-body text-green-700 text-center">
                        Pierwszy SmartLetter w Twojej skrzynce już za kilka minut 📧
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/5 to-transparent rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
                DLACZEGO WARTO SIĘ <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">ZAPISAĆ</span>
              </h2>
            </div>

            {/* Features Grid */}
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#C11369]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C11369]/10 to-[#049FE3]/10 rounded-2xl flex items-center justify-center text-[#C11369] mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#333333] mb-3">
                    📊 {feature.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-16 text-center">
              <p className="font-heading text-2xl md:text-3xl font-bold text-[#333333] flex items-center justify-center gap-3 flex-wrap">
                <span>Pierwszy SmartLetter w Twojej skrzynce już za kilka minut</span>
                <Sparkles className="w-8 h-8 text-[#C11369] animate-pulse" />
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}