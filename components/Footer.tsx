"use client"
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-white text-[#333333] border-t border-gray-100">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C11369]/5 to-[#049FE3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#049FE3]/5 to-[#C11369]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              src="/logo.webp"
              alt="Smart Marketing"
              width={200}
              height={66}
              className="h-14 w-auto mb-6"
            />
            <p className="font-body text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#C11369] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#C11369] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#049FE3] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-[#333333]">
              Szybkie linki
            </h3>
            <ul className="space-y-3">
              {['Strona główna', 'O nas', 'Usługi', 'Portfolio', 'Blog', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-gray-600 hover:text-[#C11369] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-[#C11369] group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-[#333333]">
              Nasze usługi
            </h3>
            <ul className="space-y-3">
              {[
                'Marketing internetowy',
                'Social Media',
                'SEO & SEM',
                'Strony internetowe',
                'Branding',
                'Content Marketing'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="font-body text-gray-600 hover:text-[#049FE3] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-[#049FE3] group-hover:w-4 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:794312947"
                  className="font-body text-gray-600 hover:text-[#333333] transition-colors duration-200 flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-[#049FE3] to-[#C11369] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-white" />
                  </div>
                  <span>794 312 947</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@agencjasmart.marketing"
                  className="font-body text-gray-600 hover:text-[#333333] transition-colors duration-200 flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-[#C11369] to-[#049FE3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-white" />
                  </div>
                  <span className="break-all">info@agencjasmart.marketing</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#049FE3] to-[#C11369] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-white" />
                </div>
                <span className="font-body text-gray-600">
                  Lorem ipsum dolor sit amet,<br />
                  consectetur adipiscing elit
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-semibold mb-4 text-[#333333]">
              Zapisz się do newslettera
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Otrzymuj najnowsze informacje o trendach w marketingu
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Twój adres email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#C11369] font-body"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-3 rounded-full font-heading font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Zapisz się
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-gray-500 text-sm text-center md:text-left">
              © 2025 Smart Marketing. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="font-body text-gray-500 hover:text-[#C11369] transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="font-body text-gray-500 hover:text-[#049FE3] transition-colors">
                Regulamin
              </a>
              <a href="#" className="font-body text-gray-500 hover:text-[#333333] transition-colors">
                RODO
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#C11369] to-[#049FE3] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 group"
        aria-label="Przewiń do góry"
      >
        <ArrowUp size={20} className="group-hover:animate-bounce" />
      </button>
    </footer>
  )
}