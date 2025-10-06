"use client"
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Linkedin, Facebook, Instagram, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Kontakt' // automatycznie stanie się "Blog - Smart Marketing"
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    business: 'leads',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Symulacja wysyłki
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Przekierowanie na thank you page
    window.location.href = '/thank-you'
  }

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "794 312 947",
      link: "tel:794312947",
      description: "Pon-Pt: 9:00 - 17:00"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@agencjasmart.marketing",
      link: "mailto:info@agencjasmart.marketing",
      description: "Odpowiadamy w ciągu 24h"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "794 312 947",
      link: "https://wa.me/48794312947",
      description: "Najszybsza forma kontaktu"
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-6">
                Skontaktuj się z nami
              </h1>
              <p className="font-body text-xl text-gray-600">
                Porozmawiajmy o tym, jak możemy zwiększyć Twoje przychody
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 -mt-20 relative z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.title === "WhatsApp" ? "_blank" : undefined}
                    rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C11369] to-[#049FE3] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-[#333333] mb-2">
                      {method.title}
                    </h3>
                    <p className="font-body text-[#C11369] font-semibold mb-1">
                      {method.value}
                    </p>
                    <p className="font-body text-sm text-gray-600">
                      {method.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left - Info & Team */}
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[#333333] mb-6">
                    Poznajmy się lepiej
                  </h2>
                  <p className="font-body text-gray-600 mb-8">
                    Pierwszy krok to zawsze rozmowa. Opowiedz nam o swoich celach biznesowych, 
                    a my pokażemy, jak możemy pomóc je osiągnąć.
                  </p>

                  {/* Team Members */}
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/milosz-wein.jpg"
                        alt="Miłosz Wein"
                        width={80}
                        height={80}
                        className="rounded-xl"
                      />
                      <div>
                        <h3 className="font-heading font-semibold text-[#333333]">
                          Miłosz Wein
                        </h3>
                        <p className="font-body text-sm text-gray-600 mb-2">
                          Właściciel Agencji, Specjalista ds Marketingu
                        </p>
                        <a
                          href="https://pl.linkedin.com/in/mi%C5%82osz-wein-2a643422a"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#0077B5] hover:underline text-sm"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Image
                        src="/sandra-korgul.png"
                        alt="Sandra Korgul"
                        width={80}
                        height={80}
                        className="rounded-xl"
                      />
                      <div>
                        <h3 className="font-heading font-semibold text-[#333333]">
                          Sandra Korgul
                        </h3>
                        <p className="font-body text-sm text-gray-600 mb-2">
                          Copywriter
                        </p>
                        <a
                          href="https://pl.linkedin.com/in/sandra-korgul-408120249"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#0077B5] hover:underline text-sm"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-heading font-semibold text-[#333333] mb-4">
                      Co możesz zyskać już podczas pierwszej rozmowy:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-gray-700">
                          Bezpłatną analizę obecnych działań marketingowych
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-gray-700">
                          Konkretne wskazówki do wdrożenia od razu
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-gray-700">
                          Wstępny plan działania dopasowany do Twojej branży
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right - Contact Form */}
                <div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h3 className="font-heading text-2xl font-bold text-[#333333] mb-6">
                      Napisz do nas
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block font-body text-sm font-medium text-gray-700 mb-2">
                            Imię i nazwisko *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all"
                          />
                        </div>

                        {/* Company */}
                        <div>
                          <label htmlFor="company" className="block font-body text-sm font-medium text-gray-700 mb-2">
                            Firma
                          </label>
                          <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block font-body text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block font-body text-sm font-medium text-gray-700 mb-2">
                            Telefon *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all"
                          />
                        </div>
                      </div>

                      {/* Business Type */}
                      <div>
                        <label htmlFor="business" className="block font-body text-sm font-medium text-gray-700 mb-2">
                          Czym się interesujesz? *
                        </label>
                        <select
                          id="business"
                          required
                          value={formData.business}
                          onChange={(e) => setFormData({...formData, business: e.target.value})}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all bg-white"
                        >
                          <option value="leads">SmartLeads - Generowanie leadów B2C</option>
                          <option value="ecommerce">SmartCommerce - Sprzedaż e-commerce</option>
                          <option value="consultation">Tylko konsultacja</option>
                          <option value="other">Inne</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block font-body text-sm font-medium text-gray-700 mb-2">
                          Wiadomość
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C11369] focus:border-[#C11369] transition-all resize-none"
                          placeholder="Opisz krótko swoje cele i wyzwania marketingowe..."
                        />
                      </div>

                      {/* GDPR */}
                      <div className="flex items-start">
                        <input
                          id="gdpr"
                          type="checkbox"
                          required
                          className="mt-1 w-4 h-4 text-[#C11369] border-gray-300 rounded focus:ring-[#C11369]"
                        />
                        <label htmlFor="gdpr" className="ml-3 font-body text-xs text-gray-600">
                          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i przedstawienia oferty. 
                          Administratorem danych jest Smart Marketing. Szczegóły w polityce prywatności.
                        </label>
                      </div>

                      {/* Submit */}
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
                            <span>Wyślij wiadomość</span>
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Optional */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-[#333333] mb-4">
                Pracujemy zdalnie
              </h2>
              <p className="font-body text-gray-600 mb-8">
                Obsługujemy klientów z całej Polski. Wszystkie spotkania prowadzimy online przez Google Meet.
              </p>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
                <MapPin className="w-5 h-5 text-[#C11369]" />
                <span className="font-body text-gray-700">Polska</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}