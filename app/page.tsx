import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden flex items-center">
          {/* Animated gradient blob */}
          <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#C11369]/20 to-[#049FE3]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#049FE3]/20 to-[#C11369]/20 rounded-full blur-3xl animate-pulse delay-700" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#333333]">
              Lorem Ipsum <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">Dolor Sit</span> Amet
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-full font-heading font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Rozpocznij współpracę
              </button>
              <button className="bg-white border-2 border-[#333333] text-[#333333] px-8 py-4 rounded-full font-heading font-semibold hover:bg-[#333333] hover:text-white transition-all duration-300">
                Zobacz portfolio
              </button>
            </div>
          </div>
        </section>
        
        {/* Spacer for testing */}
        <div className="h-screen bg-gradient-to-b from-white to-gray-50" />
      </main>
      <Footer />
    </>
  )
}