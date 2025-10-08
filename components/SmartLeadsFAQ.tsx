"use client"
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, HelpCircle, CheckCircle } from 'lucide-react'

export default function SmartLeadsFAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItem, setOpenItem] = useState<number | null>(0)
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

  const faqItems = [
    {
      question: "Czy 3000 zł budżetu reklamowego wystarczy?",
      answer: "Tak! To dobry start dla większości branż. 90% naszych klientów naturalnie zwiększa budżet do 5-15k po pierwszych efektach, gdy widzą jakość generowanych leadów."
    },
    {
      question: "Jak szybko zobaczymy pierwsze leady?",
      answer: "Pierwsze leady zwykle w ciągu 7-14 dni od startu kampanii. Jakościowe leady i pełna optymalizacja systemu w ciągu 4-8 tygodni."
    },
    {
      question: "Czy obsługujecie naszą branżę?",
      answer: "Specjalizujemy się w firmach B2C i B2B z procesem sprzedażowym wymagającym konsultacji. Na SmartCheck sprawdzimy czy nasza metodyka pasuje do Twojej branży."
    },
    {
      question: "Co jeśli nie będziemy zadowoleni z wyników?",
      answer: "Umowa miesięczna + 30-dniowa gwarancja satysfakcji w pierwszym miesiącu. Możliwość wypowiedzenia bez podawania przyczyny."
    },
    {
      question: "Czy potrzebujemy własny system CRM?",
      answer: "Nie musisz mieć - pomożemy wybrać i wdrożyć odpowiedni system dopasowany do Twojej branży. To kluczowe dla skutecznego śledzenia ROI kampanii."
    },
    {
      question: "Ile firm obsługujecie jednocześnie?",
      answer: "Maksymalnie 15 klientów SmartLeads. Świadomie ograniczamy liczbę - jakość współpracy ważniejsza od ilości kontraktów."
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#C11369]/5 via-transparent to-[#049FE3]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            FAQ
          </h2>
          <p className="font-body text-xl text-gray-600">
            Najczęstsze pytania o SmartLeads:
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => setOpenItem(openItem === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#C11369] to-[#049FE3] rounded-lg flex items-center justify-center text-white">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-[#333333] pr-4">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openItem === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`transition-all duration-300 ${
                    openItem === index ? 'max-h-96' : 'max-h-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-6">
                      <div className="flex items-start gap-4 pt-2 border-t border-gray-100">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <p className="font-body text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="font-body text-gray-600 mb-6">
            Masz inne pytanie? Odpowiemy na wszystkie podczas bezpłatnego SmartCheck
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-[#C11369] font-heading font-semibold hover:gap-4 transition-all duration-300"
          >
            <span>Umów rozmowę</span>
            <span>→</span>
          </a>
        </div>
      </div>
      {/* Schema.org FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
    </section>
  )
}