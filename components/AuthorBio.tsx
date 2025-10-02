"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Award, TrendingUp, Zap, Mail } from 'lucide-react'

export default function AuthorBio() {
  const certifications = [
    "Oficjalny Partner Google z pełnym zestawem certyfikatów",
    "Certyfikowany Doradca TikTok i Microsoft",
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#333333] mb-2">
              O autorze
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#C11369] to-[#049FE3] mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo & Basic Info */}
              <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
                <div className="inline-block relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#C11369] to-[#049FE3] rounded-2xl blur opacity-30" />
                  <Image
                    src="/milosz-wein.jpg"
                    alt="Miłosz Wein"
                    width={160}
                    height={160}
                    className="relative rounded-2xl shadow-lg"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#333333] mt-4 mb-1">
                  Miłosz Wein
                </h3>
                <p className="font-body text-[#049FE3] font-semibold mb-3">
                  Właściciel Agencji, Specjalista ds Marketingu
                </p>
                <a
                  href="https://pl.linkedin.com/in/mi%C5%82osz-wein-2a643422a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0077B5] hover:underline font-body text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  Profil LinkedIn
                </a>
              </div>

              {/* Bio & Certifications */}
              <div className="flex-1">
                <div className="mb-6">
                  <p className="font-body text-gray-700 leading-relaxed mb-4">
                    <strong>Jestem założycielem Smart Marketing - agencji skupionej na budowaniu systemów sprzedażowych dla firm B2C z długim cyklem decyzyjnym i e-commerce</strong>. Zamiast tworzyć kampanie "pod klienta", buduję powtarzalne procesy, które działają - oparte na 6 latach doświadczenia w marketingu i sprzedaży.
                  </p>
                </div>

                {/* Certifications */}
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#049FE3]/5 to-[#C11369]/5 rounded-xl p-3">
                      <Award className="w-5 h-5 text-[#049FE3] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-6 py-3 rounded-full font-heading font-semibold text-sm hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Zap className="w-4 h-4" />
                      Porozmawiajmy o Twoim biznesie
                    </a>
                    <a
                      href="mailto:m.wein@agencjasmart.marketing"
                      className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-[#333333] px-6 py-3 rounded-full font-heading font-semibold text-sm hover:border-[#049FE3] hover:text-[#049FE3] transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      m.wein@agencjasmart.marketing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}