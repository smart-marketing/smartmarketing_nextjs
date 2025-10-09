"use client"
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle, Mail, TrendingUp, ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function ThankYouPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Success Icon with Animation */}
              <div 
                className={`mb-8 flex justify-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C11369] to-[#049FE3] rounded-full blur-2xl opacity-30 animate-pulse" />
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                    <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 
                className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="text-[#333333]">Jesteś </span>
                <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
                  na liście!
                </span>
                <span className="inline-block ml-3">🎉</span>
              </h1>

              {/* Subheading */}
              <p 
                className={`font-body text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Dziękujemy za zaufanie i dołączenie do <strong>SmartLetter</strong>
              </p>

              {/* Email Info */}
              <div 
                className={`inline-flex items-center gap-3 bg-gradient-to-r from-[#C11369]/10 to-[#049FE3]/10 px-6 py-3 rounded-full mb-12 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Mail className="w-5 h-5 text-[#C11369]" />
                <span className="font-body text-gray-700">
                  <strong>Pierwszy newsletter</strong> trafi do Ciebie już za kilka minut
                </span>
              </div>

              {/* What's Next Section */}
              <div 
                className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-12 transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#333333] mb-8 flex items-center justify-center gap-3">
                  <Sparkles className="w-7 h-7 text-[#C11369]" />
                  Co dalej?
                </h2>

                <div className="grid sm:grid-cols-3 gap-6 text-left">
                  {/* Step 1 */}
                  <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-[#C11369]/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C11369]/20 to-[#049FE3]/20 rounded-xl flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-[#C11369]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#333333] mb-2">
                      1. Sprawdź pocztę
                    </h3>
                    <p className="font-body text-gray-600 text-sm">
                      Za chwilę otrzymasz pierwszy SmartLetter pełen praktycznej wiedzy marketingowej
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-[#C11369]/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C11369]/20 to-[#049FE3]/20 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-[#049FE3]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#333333] mb-2">
                      2. Czytaj regularnie
                    </h3>
                    <p className="font-body text-gray-600 text-sm">
                      Co tydzień otrzymasz porady, case study i najnowsze trendy w performance marketingu
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-[#C11369]/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C11369]/20 to-[#049FE3]/20 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-[#C11369]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#333333] mb-2">
                      3. Wdrażaj wiedzę
                    </h3>
                    <p className="font-body text-gray-600 text-sm">
                      Stosuj nasze sprawdzone strategie, aby zwiększyć wyniki swojego marketingu
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Link 
                  href="/"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Wróć na stronę główną
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-heading font-semibold text-lg hover:border-[#C11369] hover:text-[#C11369] transition-all duration-300"
                >
                  Zobacz blog
                </Link>
              </div>



            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}