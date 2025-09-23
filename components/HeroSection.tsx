"use client"
import { useEffect, useState } from 'react'
import { ArrowRight, TrendingUp, Target, Clock, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Add styles to head
  useEffect(() => {
    const styleSheet = document.createElement("style")
    styleSheet.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
      }
      
      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-10deg); }
      }
      
      @keyframes draw {
        from { stroke-dashoffset: 300; }
        to { stroke-dashoffset: 0; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-delayed {
        animation: float-delayed 6s ease-in-out infinite;
        animation-delay: 3s;
      }
      
      .animate-draw {
        stroke-dasharray: 300;
        animation: draw 2s ease-out forwards;
        animation-delay: 0.5s;
      }
      
      /* Hide scrollbar for mobile carousel */
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `
    document.head.appendChild(styleSheet)
    return () => {
      document.head.removeChild(styleSheet)
    }
  }, [])

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

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center py-20 sm:py-24 lg:py-32">
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

      {/* Floating elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-20 h-20 border-2 border-[#049FE3]/20 rounded-full animate-float" />
        <div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-[#C11369]/20 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-[#C11369]/10 to-[#049FE3]/10 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main heading with animation */}
          <h1 
            className={`font-heading text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl mt-10 font-bold text-center mb-6 sm:mb-8 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-[#333333]">Zamieniamy </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
                chaotyczny marketing
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8">
                <path
                  d="M0,4 Q75,0 150,4 T300,4"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-draw"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C11369" />
                    <stop offset="100%" stopColor="#049FE3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <span className="text-[#333333]">w przewidywalne </span>
            <span className="relative">
              <span className="text-[#333333]">źródło klientów</span>
            </span>
          </h1>

          {/* Transformation showcase - mobile carousel / desktop grid */}
          <div 
            className={`mb-8 sm:mb-10 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Mobile carousel wrapper */}
            <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 w-max">
                {/* FROM card */}
                <div className="relative group flex-shrink-0 w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl blur-xl" />
                  <div className="relative bg-white/80 backdrop-blur-sm border border-red-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">✕</span>
                      </div>
                      <span className="font-heading font-semibold text-gray-600 uppercase text-xs tracking-wider">OD</span>
                    </div>
                    <p className="font-body text-sm text-gray-700">
                      <span className="font-semibold text-red-600">przepalania budżetu</span> i frustrujących domysłów
                    </p>
                  </div>
                </div>

                {/* TO card */}
                <div className="relative group flex-shrink-0 w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#049FE3]/20 to-[#C11369]/20 rounded-xl blur-xl" />
                  <div className="relative bg-white/80 backdrop-blur-sm border border-[#049FE3]/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#049FE3] to-[#C11369] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="font-heading font-semibold text-gray-600 uppercase text-xs tracking-wider">DO</span>
                    </div>
                    <p className="font-body text-sm text-gray-700">
                      <span className="font-semibold bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">precyzyjnego systemu</span>, który przynosi mierzalne rezultaty
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <p className="font-body text-base text-gray-700">
                    <span className="font-semibold text-red-600">przepalania budżetu</span> i frustrujących domysłów
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
                  <p className="font-body text-base text-gray-700">
                    <span className="font-semibold bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent">precyzyjnego systemu</span>, który przynosi mierzalne rezultaty
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* Time promise badge */}
            <div 
            className={`flex justify-center mb-6 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C11369]/10 to-[#049FE3]/10 backdrop-blur-sm border border-[#C11369]/20 rounded-full px-6 py-3">
                <Clock className="w-5 h-5 text-[#C11369]" />
                <span className="font-heading font-semibold text-[#333333]">
                Rezultaty już w <span className="text-[#C11369]">2-8 tygodni</span>
                </span>
                <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#049FE3] rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-[#049FE3] rounded-full animate-pulse delay-100" />
                <div className="w-2 h-2 bg-[#049FE3] rounded-full animate-pulse delay-200" />
                </div>
            </div>
            </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="#kontakt"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-full font-heading font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>Rozpocznij transformację</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#049FE3] to-[#C11369] rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </a>
            
            <a
              href="/case-studies"
              className="group inline-flex items-center gap-3 bg-white border-2 border-[#333333] text-[#333333] px-8 py-4 rounded-full font-heading font-semibold hover:bg-[#333333] hover:text-white transition-all duration-300"
            >
              <Target className="w-5 h-5" />
              <span>Zobacz rezultaty</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div 
            className={`flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-10 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="/investsolar.png" alt="InvestSolar" className="w-8 h-8 rounded-full border-2 border-white object-contain bg-white" />
                <img src="/aiwa.png" alt="Aiwa" className="w-8 h-8 rounded-full border-2 border-white object-contain bg-white" />
                <img src="/manta.webp" alt="Manta" className="w-8 h-8 rounded-full border-2 border-white object-contain bg-white" />
                <img src="/hidrami.png" alt="Hidrami" className="w-8 h-8 rounded-full border-2 border-white object-contain bg-white" />
                <img src="/logo-termo-expert.png" alt="TermoExpert" className="w-8 h-8 rounded-full border-2 border-white object-contain bg-white" />
              </div>
              <span className="font-body text-sm text-gray-600">50+ zadowolonych klientów</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-[#C11369]">4.9</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map((i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-4 sm:bottom-8 lg:bottom-14 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#C11369] transition-colors animate-bounce"
        aria-label="Przewiń w dół"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}