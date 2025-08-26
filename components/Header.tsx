"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hideTopBar, setHideTopBar] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide top bar on scroll down, show on scroll up
      if (currentScrollY > 100) {
        setHideTopBar(currentScrollY > lastScrollY)
      } else {
        setHideTopBar(false)
      }
      
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'O nas', href: '#o-nas' },
    { name: 'Dla firm usługowych', href: '#uslugi' },
    { name: 'Dla e-commerce', href: '#ecommerce' },
    { name: 'Case studies', href: '#case-studies' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <>
        {/* Top Bar */}
        <div 
        className={`fixed w-full top-0 z-50 bg-gray-50 border-b border-gray-200 text-[#333333] transition-transform duration-300 ${
            hideTopBar ? '-translate-y-full' : 'translate-y-0'
        }`}
        >
        <div className="container mx-auto px-4">
            <div className="flex justify-center items-center py-2 text-sm gap-6 md:gap-8">
            <a 
                href="tel:794312947" 
                className="flex items-center gap-2 hover:text-[#049FE3] transition-colors"
            >
                <Phone size={14} className="text-[#049FE3]" />
                <span className="font-body">794 312 947</span>
            </a>
            <div className="w-px h-4 bg-gray-300" />
            <a 
                href="mailto:info@agencjasmart.marketing" 
                className="flex items-center gap-2 hover:text-[#C11369] transition-colors"
            >
                <Mail size={14} className="text-[#C11369]" />
                <span className="font-body hidden sm:inline">info@agencjasmart.marketing</span>
                <span className="font-body sm:hidden">Email</span>
            </a>
            </div>
        </div>
        </div>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          hideTopBar ? 'top-0' : 'top-10'
        } ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-3 border-b border-gray-100' 
            : 'bg-white/10 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative z-50">
              <Image
                src="/logo.webp"
                alt="Smart Marketing"
                width={180}
                height={60}
                className="h-12 w-auto md:h-14"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-6 xl:gap-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="font-heading font-medium transition-colors duration-200 text-[#333333] hover:text-[#C11369]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a
                href="tel:794312947"
                className="bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-6 py-3 rounded-full font-heading font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Bezpłatna konsultacja
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-[#333333]"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full px-8">
          <ul className="flex flex-col gap-8 text-center mb-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading font-medium text-[#333333] hover:text-[#C11369] transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Contact Info */}
          <div className="flex flex-col gap-4 items-center">
            <a
              href="tel:794312947"
              className="flex items-center gap-3 text-[#333333] hover:text-[#C11369] transition-colors"
            >
              <Phone size={20} />
              <span className="font-body">794 312 947</span>
            </a>
            <a
              href="mailto:info@agencjasmart.marketing"
              className="flex items-center gap-3 text-[#333333] hover:text-[#C11369] transition-colors"
            >
              <Mail size={20} />
              <span className="font-body">info@agencjasmart.marketing</span>
            </a>
          </div>
          
          {/* Mobile CTA */}
          <a
            href="tel:794312947"
            className="mt-8 bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-8 py-4 rounded-full font-heading font-semibold hover:shadow-xl transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Umów konsultację
          </a>
        </div>
      </div>
    </>
  )
}