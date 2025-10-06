"use client"
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, TrendingUp, Target, Clock } from 'lucide-react'
import SmartLeadsProblems from '@/components/SmartLeadsProblems'
import SmartLeadsSolution from '@/components/SmartLeadsSolution'
import SmartLeadsProcess from '@/components/SmartLeadsProcess'
import SmartLeadsTarget from '@/components/SmartLeadsTarget'
import SmartLeadsCases from '@/components/SmartLeadsCases'
import SmartLeadsFAQ from '@/components/SmartLeadsFAQ'
import CTASection from '@/components/CTASection'
import ResourcesSection from '@/components/ResourcesSection'

export const metadata = {
  title: 'Dla firm usługowych & B2B', // automatycznie stanie się "Blog - Smart Marketing"
}


export default function SmartLeadsPage() {
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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section - podobny do głównej strony */}
        <section className="min-h-[85vh] lg:h-screen relative overflow-hidden flex items-center pt-28 pb-16 lg:pt-20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white">
            <div className="absolute inset-0">
              <div 
                className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#C11369]/10 via-[#049FE3]/10 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
              />
              <div 
                className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#049FE3]/10 via-[#C11369]/10 to-transparent rounded-full blur-3xl animate-pulse delay-700"
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
            <div className="max-w-5xl mx-auto pt-6">
              {/* Main heading */}
                <h1 
                  className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 lg:mb-6 leading-tight transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                <span className="text-[#333333]">Zamieniamy </span>
                <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
                  chaotyczny marketing
                </span>
                <br />
                <span className="text-[#333333]">w przewidywalne źródło </span>
                <span className="text-[#333333]">wartościowych leadów</span>
              </h1>

              {/* Transformation showcase */}
                <div 
                  className={`flex flex-col md:flex-row gap-3 md:gap-6 max-w-6xl mx-auto mb-4 lg:mb-6 transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* FROM */}
                <div className="relative group flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white/80 backdrop-blur-sm border border-red-200 rounded-xl p-4 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">✕</span>
                      </div>
                      <span className="font-heading font-semibold text-gray-600 uppercase text-xs tracking-wider">OD</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm md:text-base text-gray-700">
                      frustracji <span className="font-semibold text-red-600">drogimi kampaniami</span> i przypadkowymi zapytaniami
                    </p>
                  </div>
                </div>

                {/* TO */}
                <div className="relative group flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#049FE3]/20 to-[#C11369]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white/80 backdrop-blur-sm border border-[#049FE3]/30 rounded-xl p-4 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#049FE3] to-[#C11369] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="font-heading font-semibold text-gray-600 uppercase text-xs tracking-wider">DO</span>
                    </div>
                    <p className="font-body text-sm md:text-base text-gray-700">
                      <span className="font-semibold bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">systematycznego pozyskiwania</span> klientów, którzy chcą współpracować
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div 
                className={`flex justify-center mt-10 transition-all duration-1000 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <a
                  href="#kontakt"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-heading font-semibold text-sm lg:text-base hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span className="hidden sm:inline">Umów SmartCheck - sprawdź potencjał za 0 zł</span>
                  <span className="sm:hidden">Umów SmartCheck za 0 zł</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#049FE3] to-[#C11369] rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                </a>
              </div>

              {/* Trust indicators */}
              <div 
                className={`flex flex-wrap justify-center items-center gap-4 md:gap-12 mt-6 lg:mt-10 transition-all duration-1000 delay-900 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="/investsolar.png" alt="InvestSolar" className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white object-contain bg-white" />
                    <img src="/tartak.png" alt="Bielińscy Drewno" className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white object-contain bg-white" />
                    <img src="/hidrami.png" alt="Hidrami" className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white object-contain bg-white" />
                  </div>
                  <span className="font-body text-xs lg:text-sm text-gray-600">50+ firm</span>
                </div>
                <div className="flex items-center gap-1 lg:gap-2">
                  <span className="font-heading font-bold text-lg lg:text-xl text-[#C11369]">5000+</span>
                  <span className="font-body text-xs lg:text-sm text-gray-600">wygenerowanych leadów</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SmartLeadsProblems />
        <SmartLeadsSolution />
        <SmartLeadsProcess />
        <SmartLeadsTarget />
        <SmartLeadsCases />
        <SmartLeadsFAQ />

        <CTASection />
        <ResourcesSection />

        {/* Tu możesz dodać więcej sekcji specyficznych dla SmartLeads */}
        
      </main>
      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </>
  )
}