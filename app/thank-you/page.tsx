import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Phone, Clock, Calendar, Monitor, Lightbulb, Link2, Target, Brain, Youtube, Mail, ArrowRight } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
                Brawo! Zgłoszenie wysłane
              </h1>
            </div>

            {/* What happens next */}
            <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                {/* Zdjęcie Miłosza */}
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <Image
                    src="/milosz-wein.jpg"
                    alt="Miłosz Wein"
                    width={150}
                    height={150}
                    className="rounded-2xl shadow-lg mx-auto lg:mx-0"
                  />
                  <p className="text-center lg:text-left mt-3 font-heading font-semibold text-[#333333]">
                    Miłosz Wein
                  </p>
                  <p className="text-center lg:text-left font-body text-sm text-gray-600">
                    Founder Smart Marketing
                  </p>
                </div>
                
                {/* Lista kroków */}
                <div className="flex-1">
                  <h2 className="font-heading text-2xl font-bold text-[#333333] mb-6">
                    Co się teraz dzieje:
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-heading font-semibold text-[#333333]">
                          W ciągu godziny oddzwoni Miłosz <span className="text-[#C11369]">(794 312 947)</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-heading font-semibold text-[#333333]">
                          5-minutowa rozmowa - poznamy Twoją sytuację
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-heading font-semibold text-[#333333]">
                          Umówimy SmartCheck na najbliższy wygodny termin
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-heading font-semibold text-[#333333]">
                          SmartLetter ląduje w Twojej skrzynce - pierwsze insights za chwilę
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meeting details */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* How meeting looks */}
              <div className="bg-gradient-to-br from-[#C11369]/5 to-[#049FE3]/5 rounded-3xl p-6 border border-[#C11369]/20">
                <h3 className="font-heading text-xl font-bold text-[#333333] mb-4">
                  Jak będzie wyglądało spotkanie SmartCheck?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-[#049FE3] mt-1" />
                    <p className="font-body text-gray-700">
                      <span className="font-semibold">45 minut przez Google Meet</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-[#049FE3] mt-1" />
                    <p className="font-body text-gray-700">
                      <span className="font-semibold">Ty udostępniasz ekran</span> - analizujemy na żywo Twoje kampanie
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#C11369] mt-1" />
                    <p className="font-body text-gray-700">
                      <span className="font-semibold">Dostajesz konkretne rekomendacje</span> - quick wins i długoterminowy plan
                    </p>
                  </div>
                </div>
              </div>

              {/* What to prepare */}
              <div className="bg-gradient-to-br from-[#049FE3]/5 to-[#C11369]/5 rounded-3xl p-6 border border-[#049FE3]/20">
                <h3 className="font-heading text-xl font-bold text-[#333333] mb-4">
                  Co warto mieć przygotowane:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p className="font-body text-gray-700">
                      <span className="font-semibold">Link do strony www</span> - to wystarczy na start
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p className="font-body text-gray-700">
                      <span className="font-semibold">Dostęp do Google Ads/Meta Ads</span> - żeby pokazać kampanie
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p className="font-body text-gray-700">
                      <span className="font-semibold">Główne wyzwania</span> w marketingu które Cię frustują
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Meanwhile check */}
            <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg border border-gray-100">
              <h3 className="font-heading text-xl font-bold text-[#333333] mb-6">
                Tymczasem sprawdź:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/#case-studies"
                  className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-200 hover:border-[#C11369] hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#C11369] to-[#049FE3] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-[#333333] mb-1">
                      Nasze case studies
                    </p>
                    <p className="font-body text-sm text-gray-600 mb-2">
                      zobacz jak pracujemy z podobnymi firmami
                    </p>
                    <span className="font-body text-sm text-[#C11369] group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      3 najlepsze rezultaty klientów
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>

                <a 
                  href="https://youtube.com/@smartmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-200 hover:border-[#049FE3] hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-[#333333] mb-1">
                      YouTube Smart Marketing
                    </p>
                    <p className="font-body text-sm text-gray-600 mb-2">
                      analizujemy kampanie firm na żywo
                    </p>
                    <span className="font-body text-sm text-[#049FE3] group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      Obejrzyj najnowsze video
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Questions */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-[#333333] mb-4">
                ❓ Pytania przed spotkaniem?
              </h3>
              <p className="font-body text-gray-700 mb-4">
                Napisz: <a href="mailto:info@agencjasmart.marketing" className="text-[#C11369] font-semibold hover:underline">info@agencjasmart.marketing</a> - odpowiem w ciągu 2h
              </p>
              <div className="inline-flex items-center gap-3 text-sm text-gray-500">
                <Phone className="w-4 h-4" />
                <span>794 312 947</span>
                <span className="text-gray-300">|</span>
                <Mail className="w-4 h-4" />
                <span>info@agencjasmart.marketing</span>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}