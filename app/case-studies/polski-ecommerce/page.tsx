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
  AlertCircle,
  BarChart3,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Lock,
  Unlock,
  Sparkles,
  Rocket,
  Brain,
  Shield,
  DollarSign,
  Activity
} from 'lucide-react'

export default function EcommerceCyfrowy() {
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
      title: 'Zablokowane konto',
      description: 'Całkowita blokada Google Ads - zero ruchu, zero sprzedaży',
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: 'Naruszenie regulaminu',
      description: 'Automatyczne systemy Google wykryły problemy',
      icon: <AlertCircle className="w-5 h-5" />
    },
    {
      title: 'Produkty cyfrowe',
      description: 'Brak innych kanałów sprzedaży - tylko Google Ads',
      icon: <Package className="w-5 h-5" />
    },
    {
      title: 'Presja biznesowa',
      description: 'Każdy dzień bez kampanii to stracone przychody',
      icon: <Clock className="w-5 h-5" />
    }
  ]

  const beforeAfter = [
    { 
      label: 'Przed blokowaniem', 
      revenue: '30 000 zł', 
      budget: '15 000 zł',
      roas: '200%',
      color: 'from-gray-400 to-gray-600'
    },
    { 
      label: 'Po odblokowaniu (miesiąc 6)', 
      revenue: '150 000 zł', 
      budget: '22 500 zł',
      roas: '667%',
      color: 'from-green-500 to-emerald-600'
    }
  ]

  const timeline = [
    {
      phase: 'Odblokowanie',
      duration: '2-3 tygodnie',
      title: 'Walka o odblokowanie konta',
      description: 'Audyt, poprawki, odwołanie do Google',
      icon: <Shield className="w-6 h-6" />,
      budget: '-',
      revenue: '0 zł'
    },
    {
      phase: 'Miesiąc 1',
      duration: '30 dni',
      title: 'Ostrożny restart',
      description: 'Budżet 3-4k, testowanie i monitoring',
      icon: <Rocket className="w-6 h-6" />,
      budget: '3-4k',
      revenue: '~12-15k'
    },
    {
      phase: 'Miesiące 2-3',
      duration: '60 dni',
      title: 'Stopniowe skalowanie',
      description: 'Zwiększenie budżetu do 15-18k',
      icon: <TrendingUp className="w-6 h-6" />,
      budget: '8-18k',
      revenue: '30-50k'
    },
    {
      phase: 'Miesiące 4-6',
      duration: '90 dni',
      title: 'Agresywne skalowanie',
      description: 'Budżet 20-25k, optymalizacja każdego elementu',
      icon: <Zap className="w-6 h-6" />,
      budget: '20-25k',
      revenue: '150k'
    }
  ]

  const results = [
    { value: '150 000 zł', label: 'przychód', sublabel: 'miesięcznie (m6)' },
    { value: '667%', label: 'ROAS', sublabel: 'zwrot z inwestycji' },
    { value: '2100+', label: 'transakcji', sublabel: 'miesięcznie' },
    { value: '71 zł', label: 'AOV', sublabel: 'średnia wartość' }
  ]

  const mistakes = [
    'Zbyt szybkie zwiększanie budżetu (max 20-30% tygodniowo)',
    'Brak segmentacji produktów w feedzie Performance Max',
    'Ignorowanie Search przy dużych budżetach',
    'Optymalizacja pod kliknięcia zamiast pod transakcje',
    'Brak systematycznej analizy danych co tydzień'
  ]

  const keyLessons = [
    {
      title: 'Stopniowe skalowanie',
      description: 'Start od 3-4k budżetu, stopniowy wzrost do 22,5k. Algorytm potrzebuje czasu na naukę.',
      icon: <TrendingUp className="w-5 h-5 text-green-500" />
    },
    {
      title: 'Pierwsze 3 miesiące = fundamenty',
      description: 'Testowanie i optymalizacja pozwoliły na agresywne skalowanie w miesiącach 4-6.',
      icon: <Brain className="w-5 h-5 text-green-500" />
    },
    {
      title: 'Produkty cyfrowe = ekstremalne skalowanie',
      description: '2100 transakcji miesięcznie możliwe dzięki braku ograniczeń logistycznych.',
      icon: <Package className="w-5 h-5 text-green-500" />
    },
    {
      title: 'ROAS rośnie z budżetem',
      description: 'Z 200% przy 15k budżetu do 667% przy 22,5k. Większy budżet ≠ gorszy zwrot.',
      icon: <DollarSign className="w-5 h-5 text-green-500" />
    },
    {
      title: 'Performance Max + Search',
      description: 'Idealne połączenie - PMAX dla zasięgu, Search dla gotowych do zakupu.',
      icon: <Target className="w-5 h-5 text-green-500" />
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section ref={sectionRef}  className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
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
                <span className="text-[#333333] font-semibold">E-commerce Cyfrowy</span>
              </nav>

              {/* Company badge */}
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-8">
                <Package className="w-5 h-5 text-[#C11369]" />
                <span className="font-heading font-semibold text-[#333333]">Produkty cyfrowe</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">Rynek polski</span>
              </div>

              {/* Title */}
              <h1 className={`font-heading font-black text-5xl md:text-6xl lg:text-7xl mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <span className="bg-gradient-to-r from-[#049FE3] via-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
                  Od zera do 150 000 zł
                </span>
                <br />
                <span className="text-[#333333]">w 6 miesięcy</span>
              </h1>

              <p className={`font-body text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Historia odblokowania konta reklamowego i wzrostu od 30 000 zł do ponad 150 000 zł 
                miesięcznie przy lepszej rentowności.
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
        <section className="py-16 bg-gradient-to-r  from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-center">
                <Lock className="w-16 h-16 text-red-400 mx-auto mb-6" />
                <p className="font-heading text-2xl md:text-3xl text-white mb-6 italic leading-relaxed">
                  "Nasze konto Google Ads zostało zablokowane. Kompletnie. Przed blokowaniem robiliśmy 
                  30 000 zł miesięcznie przy 15 000 zł budżetu. Teraz? Zero sprzedaży, zero ruchu, 
                  zero przychodów. Potrzebujemy pomocy, i to szybko."
                </p>
                <footer className="mt-6">
                  <div className="font-body text-gray-400">
                    — Artur, Właściciel sklepu z produktami cyfrowymi
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
                  Diagnoza: naruszenie regulaminu i blokada
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Dla biznesu opartego na produktach cyfrowych zablokowane konto Google Ads 
                  to wyrok śmierci. Nie ma magazynu do wyprzedania, nie ma innych kanałów sprzedaży.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl flex items-center justify-center text-red-500 mb-4">
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

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-6 flex items-center gap-3">
                  <Brain className="w-7 h-7 text-[#C11369]" />
                  Audyt całego konta
                </h3>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                  Moja pierwsza robota to był dokładny audyt całego konta reklamowego i strony internetowej. 
                  Szukałem wszystkiego, co mogło wywołać czerwoną flagę u Google:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Treści na stronie',
                    'Sposób prezentacji produktów',
                    'Struktura kampanii',
                    'Kreacje reklamowe',
                    'Landing page',
                    'Polityka prywatności i regulaminy'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                      <CheckCircle className="w-5 h-5 text-[#049FE3] flex-shrink-0" />
                      <span className="font-body text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <p className="font-body text-gray-700 leading-relaxed">
                    <strong>Znalazłem kilka potencjalnych problemów.</strong> Niektóre sformułowania 
                    w reklamach mogły być odebrane jako wprowadzające w błąd. Część landing page nie 
                    była wystarczająco przejrzysta. Drobne rzeczy, ale wystarczające żeby automatyczny 
                    system Google zdecydował: blokada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unlocking Process */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Unlock className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Proces odblokowania: 2-3 tygodnie walki
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Dwutorowe działanie - zmiany w koncie + szczegółowe odwołanie do Google
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 mb-12">
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-6">
                  Co musi zawierać odwołanie?
                </h3>
                <div className="space-y-4">
                  {[
                    'Że rozumiesz, co było nie tak',
                    'Jakie konkretne kroki podjąłeś żeby naprawić problem',
                    'Że wdrożyłeś mechanizmy żeby to się nie powtórzyło'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-green-50 rounded-xl p-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="font-body text-gray-700 pt-1">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 border-2 border-orange-500/20">
                  <p className="font-body text-gray-700 leading-relaxed">
                    <strong>Najgorsza część: oczekiwanie.</strong> Google może odpowiedzieć w 24 godziny 
                    albo w 3 tygodnie. Nie masz kontroli, nie możesz przyspieszyć procesu. Klient dzwonił 
                    co drugi dzień - każdy dzień bez kampanii to stracone przychody.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-heading font-bold text-green-600">
                      Po 2,5 tygodnia: konto odblokowane ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Od 0 do 150k: timeline sukcesu
                </h2>
                <p className="font-body text-xl text-gray-600">
                  6 miesięcy systematycznego wzrostu i optymalizacji
                </p>
              </div>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon & Phase */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#049FE3] to-[#C11369] rounded-2xl flex items-center justify-center text-white mb-3">
                          {item.icon}
                        </div>
                        <div className="text-center">
                          <div className="font-heading font-bold text-[#333333]">{item.phase}</div>
                          <div className="font-body text-xs text-gray-500">{item.duration}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-heading text-2xl font-bold text-[#333333] mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body text-gray-600 mb-4">
                          {item.description}
                        </p>
                        <div className="flex gap-6">
                          <div className="bg-blue-50 rounded-xl px-4 py-2">
                            <div className="font-body text-xs text-gray-500">Budżet</div>
                            <div className="font-heading font-bold text-[#049FE3]">{item.budget}</div>
                          </div>
                          <div className="bg-green-50 rounded-xl px-4 py-2">
                            <div className="font-body text-xs text-gray-500">Przychód</div>
                            <div className="font-heading font-bold text-green-600">{item.revenue}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-20 bg-gradient-to-br from-red-50 via-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Przed vs. Po: porównanie wyników
                </h2>
                <p className="font-body text-xl text-gray-600">
                  Nie tylko odzyskaliśmy poprzedni poziom - przekroczyliśmy go 5x przy lepszej rentowności
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {beforeAfter.map((period, index) => (
                  <div key={index} className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${
                    index === 0 ? 'border-gray-300' : 'border-green-500'
                  }`}>
                    <div className="text-center mb-6">
                      <h3 className="font-heading text-2xl font-bold text-[#333333] mb-2">
                        {period.label}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="font-body text-sm text-gray-500 mb-1">Przychód miesięczny</div>
                        <div className={`font-heading text-4xl font-bold bg-gradient-to-r ${period.color} bg-clip-text text-transparent`}>
                          {period.revenue}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="font-body text-sm text-gray-500 mb-1">Budżet reklamowy</div>
                        <div className="font-heading text-2xl font-bold text-[#333333]">
                          {period.budget}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="font-body text-sm text-gray-500 mb-1">ROAS</div>
                        <div className={`font-heading text-3xl font-bold bg-gradient-to-r ${period.color} bg-clip-text text-transparent`}>
                          {period.roas}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 text-white text-center">
                <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Wzrost o 400%
                </h3>
                <p className="font-body text-xl text-green-100 leading-relaxed">
                  Z 30 000 zł do 150 000 zł miesięcznego przychodu.
                  <br />
                  ROAS wzrósł z 200% do 667% - o ponad 3x!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Lessons Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                  Kluczowe wnioski
                </h2>
                <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                  Jak osiągnęliśmy pięciokrotny wzrost sprzedaży
                </p>
              </div>

              <div className="space-y-6">
                {keyLessons.map((lesson, index) => (
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

        {/* Mistakes Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <h2 className="font-heading text-3xl font-bold text-[#333333] mb-8 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  5 błędów przy skalowaniu Google Ads
                </h2>
                <ul className="space-y-4">
                  {mistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="font-body text-gray-700">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#C11369]/10 to-[#049FE3]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                Czy ta strategia sprawdzi się w Twoim biznesie?
              </h2>
              <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
                Jeśli sprzedajesz produkty cyfrowe - kursy online, szablony, e-booki, oprogramowanie - 
                ten model może działać u Ciebie. Kluczowe elementy to <strong>compliance z politykami Google, 
                połączenie Performance Max i Search, stopniowe skalowanie i systematyczna optymalizacja</strong>.
              </p>
              <p className="font-body text-lg text-gray-600 mb-12">
                A jeśli Twoje konto Google Ads jest zablokowane? <strong>Nie panikuj.</strong> To może być 
                początek czegoś lepszego.
              </p>
              
              <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#049FE3]/20">
                <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">
                  Masz zablokowane konto lub chcesz skalować sprzedaż?
                </h3>
                <p className="font-body text-gray-600 mb-8">
                  Zapraszam na bezpłatny SmartCheck. Przeanalizujemy Twoje konto, zidentyfikujemy 
                  potencjalne ryzyka blokady i pokażemy, jak zbudować stabilny system sprzedaży przez 
                  Google Ads - taki, który można bezpiecznie skalować.
                </p>
                <a
                  href="/#kontakt"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#049FE3] to-[#C11369] text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Umów bezpłatny SmartCheck
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="font-body text-sm text-gray-500 mt-6 italic">
                  "W produktach cyfrowych każdy dzień bez kampanii to stracone przychody. 
                  A każdy procent lepszego ROAS to tysiące złotych różnicy."
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
                href="/case-studies/ecommerce-de"
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