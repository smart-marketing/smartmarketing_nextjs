import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import ResourcesSection from '@/components/ResourcesSection'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, TrendingUp, Brain, Users, Linkedin, Target, BarChart3, Lightbulb, Zap, BookOpen } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O nas - Smart Marketing | Agencja Performance Marketingu',
  description: 'Poznaj zespół Smart Marketing. Specjalizujemy się w Meta Ads i Google Ads dla MŚP. 50+ zadowolonych klientów, średnio 4.9/5 gwiazdek.',
  alternates: {
    canonical: 'https://agencjasmart.marketing/o-nas'
  },
  openGraph: {
    title: 'O nas - Smart Marketing',
    description: 'Poznaj zespół Smart Marketing. Specjalizujemy się w Meta Ads i Google Ads dla MŚP.',
    url: 'https://agencjasmart.marketing/o-nas',
    type: 'website',
  }
}

export default function AboutPage() {
  const miloszCerts = [
    "Jeden z najlepszych sprzedawców w regionie Bydgoszcz - doświadczenie w sprzedaży bezpośredniej i bankowości",
    "Oficjalny Partner Google z pełnym zestawem certyfikatów",
    "Certyfikowany Doradca TikTok i Microsoft",
    "Specjalista Google Umiejętności Jutra AI - wykorzystuje sztuczną inteligencję do optymalizacji kampanii"
  ]

  const sandraCerts = [
    "Sukces w sprzedaży bezpośredniej - doświadczenie bankowe w kontakcie z klientami",
    "Absolwentka Google Umiejętności Jutra - jedyny program honorowany oficjalnie na rynku pracy",
    "Kilka tysięcy złotych inwestycji w najlepszą wiedzę copywritingową",
    "Ponad 2000 obserwujących na LinkedIn - buduje personal brand w branży"
  ]

  const methodology = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Copywriting jako fundament skutecznej komunikacji"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      text: "Głęboka analiza danych do optymalizacji i podejmowania decyzji"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Zaawansowana wiedza techniczna o platformach reklamowych (Google, Meta, TikTok)"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: "Uwzględnienie UX w procesie projektowania kampanii i stron docelowych"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      text: "Wykorzystanie potencjału AI w optymalizacji kampanii i tworzeniu skuteczniejszych treści"
    }
  ]

  const whyUs = [
    { icon: "🎯", title: "Działamy od 2019 roku", desc: "widzimy trendy zanim staną się modne" },
    { icon: "🏆", title: "Mamy certyfikaty i partnerstwa", desc: "współpracujemy bezpośrednio z gigantami (Google, TikTok, Microsoft)" },
    { icon: "📈", title: "Nasz background sprzedażowy", desc: "rozumiemy, co naprawdę znaczy ROI" },
    { icon: "🤖", title: "Stawiamy na AI", desc: "technologia, która daje przewagę konkurencyjną" },
    { icon: "💡", title: "Mamy autorską metodykę", desc: "nie kopiujemy, tworzymy rozwiązania na miarę" }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-6">
                Poznaj zespół, który zmienia biznes klientów w <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">sukcesy</span>
              </h1>
              <p className="font-body text-xl text-gray-600">
                Miłosz & Sandra - Duet, który łączy sprzedaż z marketingiem
              </p>
            </div>

            {/* Intro */}
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#C11369]/5 to-[#049FE3]/5 rounded-3xl p-8 mb-20 border border-[#C11369]/20">
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-[#333333]">Nie jesteśmy zwykłą agencją marketingową.</span> Jesteśmy zespołem dwóch specjalistów, którzy <span className="font-bold">najpierw sami osiągnęli sukcesy w sprzedaży</span>, a dopiero potem przeszli do marketingu. Dlaczego to ważne? <span className="font-bold text-[#C11369]">Bo rozumiemy biznes od strony wyników, nie tylko kampanii.</span>
              </p>
            </div>

            {/* Team Members */}
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 mb-20">
              {/* Miłosz */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex flex-col items-center text-center mb-6">
                  <Image
                    src="/milosz-wein.jpg"
                    alt="Miłosz Wein"
                    width={180}
                    height={180}
                    className="rounded-2xl shadow-lg mb-4"
                  />
                  <h3 className="font-heading text-2xl font-bold text-[#333333] mb-2">
                    Miłosz Wein
                  </h3>
                  <p className="font-body text-[#049FE3] font-semibold mb-4">
                    Strategia i Technologia
                  </p>
                  <a
                    href="https://pl.linkedin.com/in/mi%C5%82osz-wein-2a643422a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0077B5] hover:underline"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-body text-sm">LinkedIn</span>
                  </a>
                </div>
                
                <div className="space-y-3 mb-6">
                  {miloszCerts.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#049FE3] flex-shrink-0 mt-0.5" />
                      <p className="font-body text-sm text-gray-700">{cert}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-body text-sm text-gray-600">
                    <span className="font-semibold text-[#333333]">Odpowiada za:</span> strategie kampanii, analitykę, systemy CRM, strony WWW i całą techniczną stronę projektów
                  </p>
                </div>
              </div>

              {/* Sandra */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex flex-col items-center text-center mb-6">
                  <Image
                    src="/sandra-korgul.png"
                    alt="Sandra Korgul"
                    width={180}
                    height={180}
                    className="rounded-2xl shadow-lg mb-4"
                    />
                  <h3 className="font-heading text-2xl font-bold text-[#333333] mb-2">
                    Sandra Korgul
                  </h3>
                  <p className="font-body text-[#C11369] font-semibold mb-4">
                    Copywriting i Konwersja
                  </p>
                  <a
                    href="https://pl.linkedin.com/in/sandra-korgul-408120249"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C11369] hover:underline"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-body text-sm">LinkedIn</span>
                  </a>
                </div>
                
                <div className="space-y-3 mb-6">
                  {sandraCerts.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#C11369] flex-shrink-0 mt-0.5" />
                      <p className="font-body text-sm text-gray-700">{cert}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-body text-sm text-gray-600">
                    <span className="font-semibold text-[#333333]">Specjalizacja:</span> <span className="font-semibold">teksty, które przekonują do zakupu</span> - od reklam po strony sprzedażowe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                  Metodyka Smart Marketing - 5 Filarów Sukcesu
                </h2>
                <p className="font-body text-lg text-gray-600">
                  <span className="font-bold">Nie robimy kampanii "na oko".</span> Każdy projekt opieramy na sprawdzonej metodyce, która łączy:
                </p>
              </div>

              <div className="space-y-4">
                {methodology.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#049FE3] to-[#C11369] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="font-body text-gray-700 flex-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#333333] mb-12 text-center">
                Dlaczego Smart Marketing?
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {whyUs.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-heading font-bold text-[#333333] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#C11369]/5 to-[#049FE3]/5 rounded-3xl p-8 text-center border border-[#C11369]/20">
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">
                  Gotowy na Smart Marketing, który zwiększy Twoje przychody?
                </h3>
                <p className="font-body text-lg text-gray-700 mb-6">
                  <span className="font-semibold">Przekonaj się, dlaczego firmy wybierają nas jako partnera do wzrostu.</span>
                </p>
                <p className="font-body text-gray-600 italic">
                  Zarezerwuj bezpłatny SmartCheck - 45 minut analizy Twojego marketingu na żywo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
        <ResourcesSection />
      </main>
      <Footer />
    </>
  )
}