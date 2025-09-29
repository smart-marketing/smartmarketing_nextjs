"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

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

  // Blokuj scroll gdy menu jest otwarte
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Dla firm usługowych', href: '/dla-firm-uslugowych' },
    { name: 'Dla e-commerce', href: '/dla-ecommerce' },
    { name: 'Case studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
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
              <Link href="/">
                <Image
                  src="/logo.webp"
                  alt="Smart Marketing"
                  width={180}
                  height={60}
                  className="h-12 w-auto md:h-14 cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-6 xl:gap-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="font-heading font-medium transition-colors duration-200 text-[#333333] hover:text-[#C11369]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a
                href="/kontakt"
                className="bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-6 py-3 rounded-full font-heading font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Bezpłatna konsultacja
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-[#333333] rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-40 lg:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Zamknij menu"
          >
            <X size={28} className="text-[#333333]" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 pb-2">
            <Image
              src="/logo.webp"
              alt="Smart Marketing"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-lg font-heading font-medium text-[#333333] hover:text-[#C11369] hover:bg-gradient-to-r hover:from-[#C11369]/5 hover:to-[#049FE3]/5 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <div className="border-t border-gray-100 p-6 space-y-4">
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:794312947"
                className="flex items-center gap-3 text-[#333333] hover:text-[#049FE3] transition-colors group"
              >
                <div className="p-2 bg-[#049FE3]/10 rounded-lg group-hover:bg-[#049FE3]/20 transition-colors">
                  <Phone size={18} className="text-[#049FE3]" />
                </div>
                <span className="font-body text-base">794 312 947</span>
              </a>
              
              <a
                href="mailto:info@agencjasmart.marketing"
                className="flex items-center gap-3 text-[#333333] hover:text-[#C11369] transition-colors group"
              >
                <div className="p-2 bg-[#C11369]/10 rounded-lg group-hover:bg-[#C11369]/20 transition-colors">
                  <Mail size={18} className="text-[#C11369]" />
                </div>
                <span className="font-body text-base break-all">info@agencjasmart.marketing</span>
              </a>
            </div>
            
            {/* CTA Button */}
            <a
              href="tel:794312947"
              className="block w-full text-center bg-gradient-to-r from-[#C11369] to-[#049FE3] text-white px-6 py-4 rounded-full font-heading font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Umów konsultację
            </a>
          </div>

          {/* Bottom Safe Area for iPhone */}
          <div className="h-safe-area-inset-bottom" />
        </div>
      </div>
    </>
  )
}