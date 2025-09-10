"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false)
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

        {/* Logos Grid */}
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8">
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
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#049FE3]/0 to-[#C11369]/0 group-hover:from-[#049FE3]/5 group-hover:to-[#C11369]/5 rounded-xl transition-all duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}