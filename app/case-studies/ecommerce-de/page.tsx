"use client"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuthorBio from '@/components/AuthorBio'
import CTASection from '@/components/CTASection'
import { 
  ChevronRight, 
  TrendingUp, 
  ShoppingCart, 
  Euro,
  Package,
  Target,
  Calendar,
  Globe,
  BarChart3,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  Sparkles,
  Rocket,
  Brain
} from 'lucide-react'

export const metadata = {
  title: 'Case study e-commerce DE', // automatycznie stanie się "Blog - Smart Marketing"
}

export default function EcommerceDE() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const challenges = [
    {
      title: 'Nowy brand',
      description: 'Zero rozpoznawalności na niemieckim rynku',
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: 'Pełna sezonowość',
      description: 'Cały rok zarobku w 4 miesiące (marzec-czerwiec)',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: 'Silna konkurencja',
      description: 'Dojrzały rynek z ustalonymi graczami',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: 'Presja czasu',
      description: 'Miesiąc na setup przed startem sezonu',
      icon: <Clock className="w-5 h-5" />
    }
  ]

  const results = [
    { value: '105 000 zł', label: 'sprzedaż', sublabel: 'w 4,5 miesiąca' },
    { value: '322%', label: 'ROAS', sublabel: 'zwrot z inwestycji' },
    { value: '600+', label: 'zamówień', sublabel: 'od nowych klientów' },
    { value: '172 zł', label: 'AOV', sublabel: 'średnia wartość' }
  ]

  const timeline = [
    {
      month: 'Styczeń',
      title: 'Setup techniczny',
      description: 'Google Merchant Center, feed produktowy, analityka',
      icon: <Brain className="w-6 h-6" />
    },
    {
      month: 'Luty',
      title: 'Start kampanii',
      description: 'Performance Max - faza uczenia algorytmu',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      month: 'Marzec',
      title: 'Rozkręcanie',
      description: 'Pierwsze poważne wyniki, kampania nabiera rozpędu',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      month: 'Kwiecień',
      title: 'Szczyt sezonu',
      description: 'Największa sprzedaż, kampania na pełnych obrotach',
      icon: <Zap className="w-6 h-6" />
    },
    {
      month: 'Maj-Czerwiec',
      title: 'Końcówka',
      description: 'Naturalne wyhamowanie po szczycie sezonu',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  const problems = [
    'Niekompletne metody płatności przez część sezonu',
    'Problemy z tłumaczeniami produktów i kategorii',
    'Błędy techniczne w Google Merchant Center',
    'Tłumaczenia w panelu zamiast importu z XML',
    'Niespójności między polskim a niemieckim sklepem'
  ]

  const lessons = [
    {
      title: 'Import produktów w docelowym języku',
      description: 'Tłumaczenie w panelu generuje błędy. Import XML w języku docelowym eliminuje problemy.',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      title: 'Metody płatności = konwersja',
      description: 'Brak preferowanej metody = porzucony koszyk. Wszystkie popularne metody przed startem.',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      title: 'Performance Max potrzebuje 2-3 tygodni',
      description: 'Nie oceniaj po tygodniu. Algorytm potrzebuje czasu na naukę i optymalizację.',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      title: 'Sezonowość wymaga gotowości',
      description: 'W sezonowych branżach nie ma czasu na testy. Wszystko gotowe przed szczytem.',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      title: 'Analiza full funnel',
      description: 'ROAS to nie wszystko. Pełna ścieżka od kliknięcia do zakupu pokazuje prawdziwy potencjał.',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section ref={sectionRef} className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#049FE3]/10 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#C11369]/10 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
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
                <span className="text-[#333333] font-semibold">E-commerce DE</span>
              </nav>

              {/* Company badge */}
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-8">
                <Globe className="w-5 h-5 text-[#049FE3]" />
                <span className="font-heading font-semibold text-[#333333]">Sklep e-commerce</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">Rynek niemiecki</span>
              </div>

              {/* Title */}
              <h1 className={`font-heading font-black text-5xl md:text-6xl lg:text-7xl mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <span className="bg-gradient-to-r from-[#049FE3] via-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
                  Od zera do 105 000 zł
                </span>
                <br />
                <span className="text-[#333333]">w 4 miesiące</span>
              </h1>

              <p className={`font-body text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Historia ekspansji zagranicznej, która pokazuje moc Google Ads i znaczenie 
                dopracowania każdego elementu sklepu.
              </p>

              {/* Key metrics */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {results.map((result, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-xl border border-gray-100">
                    <div className="font-heading text-3xl font-bold bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent mb-1">
                      {result.value}
                    </div>
                    <div className="font-body text-sm text-gray-600">{result.label}</div>
                    <div className="font-body text-xs text-gray-400">{result.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-center">
                <p className="font-heading text-2xl md:text-3xl text-white mb-6 italic leading-relaxed">
                  "Chcemy wejść na rynek niemiecki. Sklep jest w trakcie realizacji, planujemy 
                  start w lutym. Pytanie tylko - czy będzie w ogóle sprzedaż? To nowy brand, 
                  nowy rynek, nie znamy niemieckich klientów, konkurencja jest ogromna."
                </p>
                <footer className="mt-6">
                  <div className="font-body text-gray-400">
                    — Właściciel sklepu, listopad 2024
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Wyzwanie: nowy brand na dojrzałym rynku
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Branża drzewek i krzewów owocowych to bardzo specyficzny biznes. 
                  Pełna sezonowość - ludzie kupują sadzonki wiosną. Marzec-czerwiec to cały rok zarobku.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#049FE3]/10 to-[#C11369]/10 rounded-xl flex items-center justify-center text-[#049FE3] mb-4">
                      {challenge.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#333333] mb-2">
                      {challenge.title}
                    </h3>
                    <p className="font-body text-gray-600 text-sm">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl p-8 border-2 border-red-500/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#333333] mb-3">
                      Największa obawa klienta
                    </h3>
                    <p className="font-body text-lg text-gray-700 italic">
                      "Wydamy budżet, zbudujemy cały sklep i się okaże, że nikt nie kupuje."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Od przygotowań do sukcesu
                </h2>
                <p className="font-body text-xl text-gray-600">
                  Dokładna oś czasu kampanii: od stycznia do czerwca 2025
                </p>
              </div>

              <div className="relative">
                {/* Timeline line - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#049FE3] via-[#C11369] to-[#049FE3] transform -translate-x-1/2" />

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-12`}>
                      {/* Content */}
                      <div className={`w-full md:w-5/12 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all">
                          <div className={`flex items-center gap-3 mb-3 ${
                            index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''
                          }`}>
                            <div className="w-12 h-12 bg-gradient-to-br from-[#049FE3] to-[#C11369] rounded-xl flex items-center justify-center text-white">
                              {item.icon}
                            </div>
                            <span className="font-heading text-sm font-bold text-[#049FE3]">
                              {item.month}
                            </span>
                          </div>
                          <h3 className="font-heading text-xl font-bold text-[#333333] mb-2">
                            {item.title}
                          </h3>
                          <p className="font-body text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#049FE3] rounded-full z-10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <h2 className="font-heading text-3xl font-bold text-[#333333] mb-8 flex items-center gap-3">
                  <Target className="w-8 h-8 text-[#049FE3]" />
                  Strategia: Performance Max z feedem produktowym
                </h2>
                
                <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
                  Zdecydowaliśmy się na strategię opartą wyłącznie na <strong>Google Ads</strong>, 
                  konkretnie na kampaniach <strong>Performance Max z feedem produktowym</strong>. 
                  To najbardziej efektywne rozwiązanie dla sklepów z dużym asortymentem - 
                  algorytm Google sam optymalizuje wyświetlanie produktów w różnych miejscach: 
                  wyszukiwarce, YouTube, Gmail, Display.
                </p>

                <div className="bg-gradient-to-r from-[#049FE3]/10 to-[#C11369]/10 rounded-2xl p-6 mb-6">
                  <h3 className="font-heading text-xl font-bold text-[#333333] mb-3">
                    Pierwsze dwa tygodnie: cierpliwość
                  </h3>
                  <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Kampania zbierała dane, uczyła się, testowała różne segmenty odbiorców. 
                    Sprzedaż powoli się rozkręcała. Klient dzwonił co drugi dzień: 
                    <em>"Czy to normalne, że tak wolno idzie?"</em>
                  </p>
                  <p className="font-body text-gray-700 leading-relaxed">
                    <strong>Normalnie.</strong> Performance Max potrzebuje czasu żeby zrozumieć, 
                    kto kupuje, jakie produkty najlepiej się sprzedają, w jakich momentach ludzie 
                    są najbardziej skłonni do zakupu.
                  </p>
                </div>

                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  <strong>Marzec przyniósł pierwsze poważne wyniki.</strong> Kampania nauczyła się 
                  już podstaw i zaczęła agresywnie targetować potencjalnych klientów. 
                  <strong>Kwiecień to był prawdziwy szczyt sezonu.</strong> Niemcy masowo kupowali 
                  drzewka owocowe do swoich ogrodów. Kampania działała na pełnych obrotach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Wyniki po 4,5 miesiąca
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  30 czerwca 2025 - koniec sezonu, czas podsumowań. 
                  Dla pierwszego sezonu na nowym rynku z nowym brandem to był zdecydowany sukces.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl border-2 border-[#049FE3]/20">
                  <Euro className="w-12 h-12 text-[#049FE3] mx-auto mb-4" />
                  <div className="font-heading text-5xl font-bold bg-gradient-to-r from-[#049FE3] to-[#C11369] bg-clip-text text-transparent mb-2">
                    105 000 zł
                  </div>
                  <div className="font-body text-gray-600">wygenerowana sprzedaż</div>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl border-2 border-[#C11369]/20">
                  <TrendingUp className="w-12 h-12 text-[#C11369] mx-auto mb-4" />
                  <div className="font-heading text-5xl font-bold bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent mb-2">
                    322%
                  </div>
                  <div className="font-body text-gray-600">ROAS (zwrot z inwestycji)</div>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl border-2 border-green-500/20">
                  <Package className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <div className="font-heading text-5xl font-bold text-green-500 mb-2">
                    600+
                  </div>
                  <div className="font-body text-gray-600">zamówień zrealizowanych</div>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Google Ads Screenshots Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Potwierdzenie wyników z Google Ads
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Oto rzeczywiste dane z panelu Google Ads pokazujące każdy etap ścieżki zakupowej
                </p>
              </div>

              <div className="space-y-8">
                {/* Screenshot 1 - Overall Results */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-2 shadow-xl border border-gray-200">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-[#049FE3] to-[#C11369] p-4">
                      <h3 className="font-heading text-xl font-bold text-white flex items-center gap-3">
                        <BarChart3 className="w-6 h-6" />
                        Ogólny wynik kampanii w Google Ads
                      </h3>
                    </div>
                    <div className="relative group">
                      <Image
                        src="/ecommerce-de1.png"
                        alt="Ogólny wynik kampanii Google Ads - sprzedaż 105 000 zł"
                        width={1200}
                        height={700}
                        className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Screenshot 2 - Add to Cart */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-2 shadow-xl border border-blue-200">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-[#049FE3] p-4">
                      <h3 className="font-heading text-xl font-bold text-white flex items-center gap-3">
                        <ShoppingCart className="w-6 h-6" />
                        Potwierdzenie dodań do koszyka
                      </h3>
                      <p className="font-body text-sm text-blue-100 mt-1">
                        4167 dodań na kwotę 339 000 zł
                      </p>
                    </div>
                    <div className="relative group">
                      <Image
                        src="/ecommerce-de2.png"
                        alt="Potwierdzenie dodań do koszyka - 4167 add to cart"
                        width={1200}
                        height={700}
                        className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Screenshot 3 - Checkout */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-2 shadow-xl border border-orange-200">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-[#C11369] p-4">
                      <h3 className="font-heading text-xl font-bold text-white flex items-center gap-3">
                        <Users className="w-6 h-6" />
                        Potwierdzenie przejść do checkout
                      </h3>
                      <p className="font-body text-sm text-orange-100 mt-1">
                        1320 przejść na kwotę 264 000 zł
                      </p>
                    </div>
                    <div className="relative group">
                      <Image
                        src="/ecommerce-de4.png"
                        alt="Potwierdzenie przejść do checkout - 1320 begin checkout"
                        width={1200}
                        height={700}
                        className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-12 bg-gradient-to-r from-[#049FE3]/10 to-[#C11369]/10 rounded-3xl p-8 border-2 border-[#049FE3]/20">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#333333] mb-3">
                      100% transparentność wyników
                    </h3>
                    <p className="font-body text-gray-700 leading-relaxed">
                      Wszystkie liczby przedstawione w tym case study są <strong>prawdziwe 
                      i potwierdzone rzeczywistymi danymi z Google Ads</strong>. Wierzymy w pełną 
                      transparentność - każdy wynik można zweryfikować w panelu reklamowym.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Odkrycie: duży potencjał do wykorzystania
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Analiza ścieżki zakupowej pokazała interesujące liczby i ogromną przestrzeń do rozwoju
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-2xl p-6 border-2 border-blue-500/20">
                  <div className="text-center">
                    <ShoppingCart className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                    <div className="font-heading text-3xl font-bold text-blue-500 mb-1">
                      4167
                    </div>
                    <div className="font-body text-sm text-gray-600 mb-2">dodania do koszyka</div>
                    <div className="font-heading text-xl font-bold text-[#333333]">
                      339 000 zł
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-orange-500/20">
                  <div className="text-center">
                    <Users className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                    <div className="font-heading text-3xl font-bold text-orange-500 mb-1">
                      1320
                    </div>
                    <div className="font-body text-sm text-gray-600 mb-2">przejścia do checkout</div>
                    <div className="font-heading text-xl font-bold text-[#333333]">
                      264 000 zł
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-green-500/20">
                  <div className="text-center">
                    <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                    <div className="font-heading text-3xl font-bold text-green-500 mb-1">
                      600+
                    </div>
                    <div className="font-body text-sm text-gray-600 mb-2">finalne zakupy</div>
                    <div className="font-heading text-xl font-bold text-[#333333]">
                      105 000 zł
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 border-2 border-yellow-500/20 mb-8">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#333333] mb-3">
                      Współczynnik konwersji: 1,06%
                    </h3>
                    <p className="font-body text-lg text-gray-700 leading-relaxed">
                      Kampania Google Ads działała dobrze - przyciągała tysiące potencjalnych klientów 
                      gotowych do zakupu. Ludzie dodawali produkty do koszyka na kwotę 339 000 zł. 
                      Ale na ścieżce do finalizacji zamówienia była wyraźna przestrzeń do poprawy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-7 h-7 text-red-500" />
                  Zidentyfikowane problemy
                </h3>
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="font-body text-gray-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 mb-12">
                <h2 className="font-heading text-3xl font-bold text-[#333333] mb-6">
                  Lekcja: zawsze jest przestrzeń do poprawy
                </h2>
                <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
                  To był dla mnie ważny moment. Często jako agencja skupiamy się przede wszystkim 
                  na kampaniach - optymalizujemy ROAS, redukujemy koszty, testujemy różne ustawienia. 
                  Ale prawda jest taka, że <strong>sukces e-commerce to połączenie dobrej kampanii 
                  i dopracowanego sklepu.</strong>
                </p>
                <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
                  W tym przypadku kampania działała bardzo dobrze - <strong>ROAS 322%</strong> to wynik, 
                  z którego większość e-commerce może tylko pomarzyć. Ale analiza ścieżki zakupowejpokazała, że gdyby sklep był bardziej dopracowany, współczynnik konwersji mógłby być wyższy.
                </p>
                <div className="bg-gradient-to-r from-[#049FE3]/10 to-[#C11369]/10 rounded-2xl p-6">
                  <p className="font-body text-gray-700 leading-relaxed">
                    Różnica między 1,06% a branżowym benchmarkiem 2-3% to <strong>dziesiątki tysięcy złotych 
                    dodatkowej sprzedaży</strong> przy tym samym budżecie reklamowym.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Five Lessons Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  5 lekcji z ekspansji e-commerce
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Uniwersalne prawdy o ekspansji na zagraniczne rynki
                </p>
              </div>

              <div className="space-y-6">
                {lessons.map((lesson, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      {lesson.icon}
                      <div>
                        <h3 className="font-heading text-xl font-bold text-[#333333] mb-2">
                          {index + 1}. {lesson.title}
                        </h3>
                        <p className="font-body text-gray-700 leading-relaxed">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#C11369]/10 to-[#049FE3]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                Czy ta strategia sprawdzi się w Twoim e-commerce?
              </h2>
              <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
                Historia tego sklepu pokazuje dwie rzeczy. Po pierwsze, <strong>ekspansja na 
                zagraniczne rynki jest możliwa i opłacalna</strong> - nawet dla małych polskich 
                e-commerce z nowym brandem. Google Ads to potężne narzędzie, które potrafi skutecznie 
                konkurować nawet z dużymi lokalnymi graczami.
              </p>
              <p className="font-body text-lg text-gray-600 mb-12">
                Po drugie, sukces to suma wielu elementów - dobra kampania, dopracowany sklep, 
                prawidłowa analityka. <strong>Każdy procent poprawy konwersji to tysiące złotych 
                dodatkowej sprzedaży</strong> bez wydawania złotówki więcej na reklamy.
              </p>
              
              <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#049FE3]/20">
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">
                  Planujesz ekspansję zagraniczną?
                </h3>
                <p className="font-body text-gray-600 mb-8">
                  Zapraszam na bezpłatną konsultację. Przeanalizujemy nie tylko Twoje kampanie,
                  ale też pełną ścieżkę klienta w sklepie. Pokażemy dokładnie, gdzie jest przestrzeń
                  do poprawy i jak to wykorzystać. A jeśli dopiero chcesz wejść na rynek, kompleksowo
                  Ci w tym pomożemy.
                </p>
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#049FE3] to-[#C11369] text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  <span>Umów bezpłatną konsultację</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="font-body text-sm text-gray-500 mt-6 italic">
                  "W e-commerce każdy procent konwersji to realne pieniądze. Warto je wykorzystać."
                </p>
              </div>
            </div>
          </div>
        </section>

        <AuthorBio  />

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
                href="/case-studies/markostal"
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