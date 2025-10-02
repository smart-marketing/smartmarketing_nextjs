'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Zap, 
  Users, 
  BarChart3, 
  CheckCircle,
  Calendar,
  MapPin,
  Package,
  AlertCircle,
  Lightbulb,
  Rocket,
  Award,
  ChevronRight,
  Play,
  Euro,
  Building2,
  Facebook,
  MessageSquare
} from 'lucide-react'

export default function MarkostalCaseStudy() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Dane do wykresu postępu
  const timeline = [
    { month: 'Maj 2023', leads: 0, label: 'Audyt dotychczasowych działań' },
    { month: 'Czerwiec 2023', leads: 56, label: 'Pierwsze rezultaty w Meta Ads' },
    { month: 'Lipiec 2023', leads: 113, label: 'Rozszerzenie współpracy o Google Ads' },
    { month: 'Sierpień 2023', leads: 467, label: 'Kolejne nowe kanały: TikTok i Microsoft Ads' },
    { month: 'Wrzesień 2023', leads: 680, label: 'Boom najskuteczniejszych wyników' },
    { month: 'Grudzień 2023', leads: 1127, label: 'Ponad 2 miliony złotych sprzedaży w 6 miesięcy' }
  ]

  const problems = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Kampanie bez kwalifikacji leadów',
      description: 'Mnóstwo "pomyłek" i zapytań od osób niebędących klientammi'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Stosowanie 2-3 kreacji w wielu kampaniach',
      description: 'W dodatku bardzo słabych i mało konkretnych'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Brak systemu CRM i śledzenia procesu sprzedaży',
      description: 'Nikt nie wiedział co się dzieje z leadami'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Zero analityki',
      description: 'Brak danych do podejmowania decyzji, opieranie się jedynie na danych z Facebook'
    }
  ]

  const solutions = [
    {
      number: '01',
      title: 'Analiza i strategia',
      description: 'Głęboka analiza klienta końcowego, jego potrzeb i wątpliwości',
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      number: '02',
      title: 'Nowe konkretne reklamy na Facebooku',
      description: 'Treści, które rozwiewały obiekcje klientów i przedstawiały mocną ofertę',
      icon: <Facebook className="w-5 h-5" />
    },
    {
      number: '03',
      title: 'Mocny nacisk na video',
      description: 'Pionowe video z pracownikami firmy i przykładowymi realizacjami',
      icon: <Play className="w-5 h-5" />
    },
    {
      number: '04',
      title: 'Multi-channel kampanie',
      description: 'Google Ads (Search + PMAX), Meta Ads, TikTok Ads, Bing Ads - każdy kanał z inną strategią',
      icon: <Rocket className="w-5 h-5" />
    },
    {
      number: '05',
      title: 'Wdrożenie systemu CRM',
      description: 'Kontrola jakości leadów z poszczególnych kanałów i monitoring procesu sprzedaży',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ]

  const results = [
    { value: '1126', label: 'leadów', sublabel: 'w 6 miesięcy' },
    { value: '29 zł', label: 'koszt leada', sublabel: 'średnio' },
    { value: '77%', label: 'kwalifikacji', sublabel: 'leadów' },
    { value: '4', label: 'kanały reklamowe', sublabel: 'Google, Meta, TikTok, Bing' }
  ]

  const mistakes = [
    'Skupianie się na sobie zamiast na kliencie',
    'Sprzedawanie technologii zamiast korzyści',
    'Te same kreacje na wszystkich kanałach',
    'Brak porządnej analityki',
    'Raportowanie "zasięgów" zamiast sprzedaży'
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link href="/" className="text-gray-500 hover:text-[#C11369] transition-colors">
                  Strona główna
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link href="/case-studies" className="text-gray-500 hover:text-[#C11369] transition-colors">
                  Case Studies
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-[#333333] font-semibold">Invest Solar</span>
              </nav>

              {/* Company badge */}
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-8">
                <Building2 className="w-5 h-5 text-[#C11369]" />
                <span className="font-heading font-semibold text-[#333333]">Invest Solar</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">Branża OZE</span>
              </div>

              {/* Title */}
              <h1 className={`font-heading font-black text-5xl md:text-6xl lg:text-7xl mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <span className="bg-gradient-to-br from-green-500 to-[#049FE3] bg-clip-text text-transparent">
                  Od 0 do 2 miliona zł + obrotu
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-[#333333] mt-4">
                  w 6 miesięcy dla firmy z branży OZE
                </span>
              </h1>

              {/* Excerpt */}
              <p className="font-body text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
Historia transformacji firmy z branży OZE, która przestała przepalać budżet reklamowy 
i zaczęła generować leady prowadzące do rzeczywistej sprzedaży.
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {results.map((result, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-700 delay-${index * 100} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-green-500 to-[#049FE3] bg-clip-text text-transparent">
                      {result.value}
                    </div>
                    <div className="text-[#333333] font-semibold mt-1">{result.label}</div>
                    <div className="text-sm text-gray-500">{result.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Opening Quote */}
        <section className="py-20 bg-gradient-to-r from-[#C11369]/5 to-[#049FE3]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="relative">
                <div className="absolute -top-8 -left-4 text-8xl text-[#C11369]/20 font-serif">"</div>
                <p className="font-heading text-2xl md:text-3xl text-[#333333] font-medium italic leading-relaxed">
                  Wydaję 10 000 zł miesięcznie na reklamy, ale nie widzę efektów. 
                  Mam wrażenie, że pieniądze idą w błoto, a ja nie mam pojęcia, 
                  co się dzieje z tymi kampaniami. Potrzebuje leadów.
                </p>
                <footer className="mt-6">
                  <div className="font-body text-gray-600">
                    — Właściciel Invest Solar, pierwsza rozmowa (maj 2023)
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Problem Section with Before Screenshot */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Diagnoza: 10 tysięcy złotych w błoto
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Kiedy przeanalizowałem ich obecną sytuację w czerwcu 2023 roku, zobaczyłem klasyczny przykład marnotrawstwa budżetu reklamowego znanego z setek firm usługowych w Polsce.
                </p>
              </div>

              {/* Before Screenshot 
              <div className="mb-12">
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full font-heading font-bold text-sm">
                      PRZED - Stara strona
                    </div>
                    <Image
                      src="/markostal-stara-www.webp"
                      alt="Stara strona Markostal - przed optymalizacją"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                </div>
                <p className="text-center mt-4 font-body text-gray-600 italic">
                  "Witamy na stronie Markostal" - zero wartości dla klienta, zero skupienia na jego potrzebach
                </p>
              </div>*/}

              <div className="grid md:grid-cols-2 gap-6">
                {problems.map((problem, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C11369]/30 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl group-hover:scale-110 transition-transform">
                        <div className="text-red-500">
                          {problem.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-[#333333] mb-2">
                          {problem.title}
                        </h3>
                        <p className="font-body text-gray-600">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200">
                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#333333]">Najgorsze było to,</span> że poprzednia agencja raportowała sukces. 
                  <span className="italic">"Mamy świetne zasięgi!", "CTR rośnie!", "Kampanie działają!".</span> Tyle że gdy właściciel patrzył na konto bankowe, tam nic się nie działo. Nikt nie śledził najważniejszej metryki - <span className="font-bold text-[#333333]">ile kampanie generują rzeczywistej sprzedaży</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Nasza strategia: od fundamentów do skalowania
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Rozpoczęliśmy od tego, od czego zawsze zaczynamy - głębokiej analizy klienta końcowego.
                </p>
              </div>

              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start gap-6 bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C11369]/30 hover:shadow-xl transition-all">
                      {/* Number */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#C11369] to-[#049FE3] rounded-2xl flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                          {solution.number}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-heading text-2xl font-bold text-[#333333] mb-3 flex items-center gap-3">
                          {solution.title}
                          <span className="text-[#C11369]">{solution.icon}</span>
                        </h3>
                        <p className="font-body text-lg text-gray-600">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector line */}
                    {index < solutions.length - 1 && (
                      <div className="absolute left-10 top-full h-6 w-0.5 bg-gradient-to-b from-[#C11369] to-[#049FE3]" />
                    )}
                  </div>
                ))}
              </div>

            
            </div>
          </div>
        </section>

        {/* Timeline/Progress Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#333333] mb-6">
                  Progres w liczbach
                </h2>
                <p className="font-body text-l text-gray-600">
                  6 miesięcy systematycznego wzrostu
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C11369] to-[#049FE3]" />

                {/* Timeline items */}
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Content */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ml-16 md:ml-0">
                          <div className="font-heading text-sm text-[#C11369] font-semibold mb-2">
                            {item.month}
                          </div>
                          <div className="text-xl font-heading font-bold text-[#333333] mb-2">
                            {item.leads > 0 ? `${item.leads.toLocaleString()} leadów` : item.label}
                          </div>
                          {item.leads > 0 && (
                            <div className="text-gray-600">{item.label}</div>
                          )}
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-[#C11369] rounded-full transform -translate-x-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Kluczowe wnioski i lekcje
                </h2>
              </div>

              {/* 3D Configurator Lesson */}
              <div className="bg-gradient-to-br from-[#C11369]/5 to-[#049FE3]/5 rounded-3xl p-10 mb-12 border-2 border-[#C11369]/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-lg">
                    <Lightbulb className="w-6 h-6 text-[#C11369]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">
                      Lekcja o oferie wabik i video marketingu
                    </h3>
                    <p className="font-body text-lg text-gray-700 leading-relaxed mb-4">
                      Pod koniec sierpnia 2023 roku przekonałem klienta do wprowadzenia nowej, bardzo atrakcyjnej oferty promocyjnej na panele fotowoltaiczne. Pełniła rolę "wabika" - przyciągała uwagę ceną, ale pozwalała rozpocząć rozmowę o pełnym rozwiązaniu.

Drugą kluczową zmianą było przygotowanie serii rolek (reels) do kampanii płatnych. To był strzał w dziesiątkę. Video pokazywały nie techniczne parametry, ale realne korzyści - rodziny z niższymi rachunkami, piękne instalacje, proces montażu budujący zaufanie. Rezultat? Z 213 kontaktów w lipcu-sierpniu do 611 we wrześniu-listopadzie, z czego 95% kwalifikowanych.                    </p>
                    <p className="font-body text-lg text-gray-700 leading-relaxed">
                      Większość osób klikała z ciekawości, projektowała garaże "dla zabawy", zostawiała dane i nigdy nie miała zamiaru nic kupować.
                      <span className="font-bold text-[#333333]"> Szybko zmieniłem podejście na prosty formularz z opcjami do wyboru.</span> Mniej efektowny, 
                      ale praktycznie 100% kwalifikacji.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 Mistakes */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-8">
                  Pięć błędów, których unikaj w branży budowlanej
                </h3>
                <div className="space-y-4">
                  {mistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-[#C11369]/30 hover:shadow-lg transition-all">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="font-body text-gray-700 text-lg">
                        {mistake}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Showcase */}
        <section className="py-20 bg-gradient-to-br from-[#C11369]/5 via-white to-[#049FE3]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Wyniki mówią same za siebie
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Styczeń 2024 roku - czas podsumowań. Wyniki przeszły nasze najśmielsze oczekiwania.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl border-2 border-[#C11369]/20">
                  <Package className="w-12 h-12 text-[#C11369] mx-auto mb-4" />
                  <div className="font-heading text-5xl font-bold bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent mb-2">
                    1127
                  </div>
                  <div className="font-body text-gray-600">kwalifikowanych leadów</div>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl border-2 border-[#049FE3]/20">
                  <Euro className="w-12 h-12 text-[#049FE3] mx-auto mb-4" />
                  <div className="font-heading text-5xl font-bold bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent mb-2">
                    10-35 zł
                  </div>
                  <div className="font-body text-gray-600">średni koszt pozyskania</div>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl border-2 border-green-500/20">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <div className="font-heading text-5xl font-bold text-green-500 mb-2">
                    10+
                  </div>
                  <div className="font-body text-gray-600">transakcji miesięcznie</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-white">
                <blockquote className="text-center">
                  <p className="font-heading text-2xl md:text-3xl mb-6 italic">
                    "Właściciel Invest Solar bardzo szybko zapomniał o wcześniejszych 
                    problemach z marketingiem i pozyskiwaniem leadów."
                  </p>
                  <footer className="font-body text-gray-400">
                    — Rezultat, który mówi wszystko
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans 
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <h2 className="font-heading text-3xl font-bold text-[#333333] mb-8 flex items-center gap-3">
                  <Rocket className="w-8 h-8 text-[#C11369]" />
                  Co dalej? Planujemy skalowanie
                </h2>
                <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
                  Współpraca z Markotalem trwa nadal. Teraz, kiedy podstawy są solidne, 
                  planujemy skalowanie na kolejne rynki. <span className="font-bold">Niemcy i Czechy</span> to ogromny potencjał, 
                  a nasze kampanie w języku polskim już pokazały, że model działa.
                </p>
                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  Planujemy też dalsze testy - nowe kanały reklamowe, nowe formaty kreacji, 
                  optymalizacje konfiguratora. W marketingu nigdy nie można powiedzieć "mamy gotowe", 
                  bo rynek się zmienia, konkurencja się uczy, klienci mają nowe oczekiwania.
                </p>
              </div>
            </div>
          </div>
        </section>*/}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#C11369]/10 to-[#049FE3]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                Czy ta strategia sprawdzi się w Twojej branży?
              </h2>
              <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
                Historia Invest Solar to nie przypadek. Ten sam model - głęboka analiza klienta, oferta wabik przyciągająca uwagę, video marketing pokazujący realne korzyści, dywersyfikacja na cztery uzupełniające się kanały reklamowe - sprawdza się w całej branży B2C z wysoką wartością transakcji i długim procesem decyzyjnym.
              </p>
              <p className="font-body text-lg text-gray-600 mb-12">
                Czy sprzedajesz garaże, schody, fotowoltaikę, bramy, czy okna - problemy są podobne. 
                Jeśli potrafisz odpowiedzieć na wątpliwości klienta i poprowadzić go przez proces decyzyjny, wygrasz.
              </p>
              
              <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#C11369]/20">
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">
                  Rozpoznajesz problemy Invest Solar w swojej firmie?
                </h3>
                <p className="font-body text-gray-600 mb-8">
                  Zapraszam na SmartCheck - bezpłatną konsultację. W 45 minut przeanalizujemy Twoje obecne kampanie, 
                  pokażemy potencjał optymalizacji i opracujemy plan działania na następne 90 dni.
                </p>
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Umów się na SmartCheck
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="font-body text-sm text-gray-500 mt-6 italic">
                  "Czasami wystarczy jeden dobry ruch, żeby wszystko się zmieniło."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link
                href="/case-studies"
                className="group flex items-center gap-2 text-gray-600 hover:text-[#C11369] transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-heading font-semibold">Wróć do Case Studies</span>
              </Link>
              
              <Link
                href="/case-studies/niemiecki-ecommerce"
                className="group flex items-center gap-2 text-gray-600 hover:text-[#049FE3] transition-colors"
              >
                <span className="font-heading font-semibold">Następne Case Study</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  )
}