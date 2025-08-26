"use client"
import { useState, useEffect, useRef } from 'react'
import { CheckCircle, Clock, Users, Target, FileText, Phone, Mail, Building2, Send } from 'lucide-react'

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    business: 'leads'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "45-minutowa analiza na żywo",
      description: "(screen sharing)"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Sprawdzimy Twoje kampanie",
      description: "i identyfikujemy błędy"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Konkretne quick wins",
      description: "rzeczy do wdrożenia od razu"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Plan działania",
      description: "SmartLeads, SmartCommerce lub inne rozwiązanie"
    }
  ]

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    // Tu dodaj prawdziwą wysyłkę do API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      // Przekierowanie na thank you page
      window.location.href = '/thank-you'
    } else {
      alert('Wystąpił błąd. Spróbuj ponownie.')
      setIsSubmitting(false)
    }
  } catch (error) {
    alert('Wystąpił błąd. Spróbuj ponownie.')
    setIsSubmitting(false)
  }
}

  return (
    <section 
      id="kontakt" 
      ref={sectionRef} 
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#C11369]/10 via-transparent to-[#049FE3]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C11369]/10 to-[#049FE3]/10 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C11369] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C11369]"></span>
              </span>
              <span className="font-body text-sm font-semibold text-gray-700">BEZPŁATNA KONSULTACJA</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
              Umów <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">SmartCheck</span>
            </h2>
            <p className="font-body text-xl text-gray-600">
              sprawdź potencjał swojego marketingu za <span className="font-bold text-[#C11369]">0 zł</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Benefits side */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="font-heading text-2xl font-bold text-[#333333] mb-8">
                Co się stanie:
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-white shadow-md">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-[#333333] mb-1">
                        {benefit.title}
                      </p>
                      <p className="font-body text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#C11369]/5 to-[#049FE3]/5 rounded-2xl border border-[#C11369]/20">
                <p className="font-heading font-semibold text-[#333333] text-center">
                  Bez ukrytych opłat. Bez pressure. Decyzja po spotkaniu.
                </p>
              </div>
            </div>

            {/* Form side */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-6">
                  Zarezerwuj bezpłatną analizę
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Adres email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all"
                        placeholder="twoj@email.pl"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Numer telefonu *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all"
                        placeholder="123 456 789"
                      />
                    </div>
                  </div>

                  {/* Business type */}
                  <div>
                    <label htmlFor="business" className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Interesujesz się *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building2 className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="business"
                        required
                        value={formData.business}
                        onChange={(e) => setFormData({...formData, business: e.target.value})}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all appearance-none bg-white"
                      >
                        <option value="leads">SmartLeads - Generowanie leadów B2C</option>
                        <option value="ecommerce">SmartCommerce - Sprzedaż e-commerce</option>
                        <option value="other">Inne rozwiązanie</option>
                      </select>
                    </div>
                  </div>

                  {/* GDPR checkbox */}
                  <div className="flex items-start">
                    <input
                      id="gdpr"
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-[#C11369] border-gray-300 rounded focus:ring-[#C11369]"
                    />
                    <label htmlFor="gdpr" className="ml-3 font-body text-xs text-gray-600">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i przedstawienia oferty. 
                      Administratorem danych jest Smart Marketing.
                    </label>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-6 py-4 rounded-xl font-heading font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Wysyłanie...</span>
                      </>
                    ) : (
                      <>
                        <span>Umów bezpłatną analizę</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {/* Trust text */}
                  <p className="text-center font-body text-xs text-gray-500">
                    Odpowiadamy w ciągu 24h w dni robocze
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}