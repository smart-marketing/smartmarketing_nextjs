"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  // Lista logo klientów
  const logos = [
    { name: 'Aiwa', file: 'aiwa.png' },
    { name: 'Manta', file: 'manta.webp' },
    { name: 'Elisa', file: 'elisa.png' },
    { name: 'Hidrami', file: 'hidrami.png' },
    { name: 'Tartak', file: 'tartak.png' },
    { name: 'Szynkowski', file: 'szynkowski.png' },
    { name: 'Investsolar', file: 'investsolar.png' },
    { name: 'Gruneinspirationne', file: 'gruneinspirationne.png' },
    { name: 'JWP', file: 'jwp.webp' },
    { name: 'Fendal', file: 'fendal.png' },
    { name: 'Markostal', file: 'markostal.png' },
    { name: 'Termoexpert', file: 'logo-termo-expert.png' }
  ]

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

  // Autoplay tylko na mobile
  useEffect(() => {
    if (!isAutoPlaying || window.innerWidth >= 768) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % logos.length
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, logos.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length)
    }
    
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % logos.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  return (
    <section ref={sectionRef} className="py-10 lg:py-10 bg-white relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C11369]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Zaufali nam
          </h2>
          <p className="font-body text-gray-600 text-lg">
            Pomagamy firmom rosnąć od 2019 roku
          </p>
        </div>

        {/* Logos Grid and Carousel */}
        <div className="max-w-8xl mx-auto">
          {/* Desktop Grid - ukryte na mobile */}
          <div className="hidden md:grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="group relative bg-white rounded-xl p-4 md:p-6 aspect-[3/2] flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                  <Image
                    src={`/${logo.file}`}
                    alt={logo.name}
                    width={150}
                    height={80}
                    className="object-contain w-full h-full filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#049FE3]/0 to-[#C11369]/0 group-hover:from-[#049FE3]/5 group-hover:to-[#C11369]/5 rounded-xl transition-all duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out gap-3"
                style={{ transform: `translateX(-${currentIndex * (100/3.5)}%)` }}
              >
                {logos.map((logo, index) => (
                  <div key={index} className="w-[calc(100%/3.5)] flex-shrink-0">
                    <div className="bg-white rounded-lg p-3 aspect-[4/3] flex items-center justify-center border border-gray-100 shadow-sm">
                      <Image
                        src={`/${logo.file}`}
                        alt={logo.name}
                        width={120}
                        height={60}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-1.5 hover:bg-white transition-colors z-10"
              aria-label="Previous logo"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-1.5 hover:bg-white transition-colors z-10"
              aria-label="Next logo"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-1.5 mt-4">
              {logos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 3000)
                  }}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 h-1.5 bg-gradient-to-r from-[#C11369] to-[#049FE3]'
                      : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                  } rounded-full`}
                  aria-label={`Go to logo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}