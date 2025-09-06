'use client'

import { useEffect, useState } from 'react'
import { ChevronRight, List } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Pobierz wszystkie nagłówki
    const elements = document.querySelectorAll('.blog-content h2, .blog-content h3')
    const headingElements: Heading[] = []

    elements.forEach((elem, index) => {
      const id = `heading-${index}`
      elem.setAttribute('id', id)
      headingElements.push({
        id,
        text: elem.textContent?.replace(/^\d+\.\s*/, '') || '',
        level: parseInt(elem.tagName[1])
      })
    })

    setHeadings(headingElements)
  }, [])

  useEffect(() => {
    // Obserwuj który nagłówek jest aktualnie widoczny
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -70% 0px' }
    )

    const elements = document.querySelectorAll('.blog-content h2, .blog-content h3')
    elements.forEach(elem => observer.observe(elem))

    return () => observer.disconnect()
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40 max-w-xs">
      <div className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 transition-all duration-500 ${
        isOpen ? 'w-80' : 'w-14'
      }`}>
        {/* Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-t-2xl"
        >
          {isOpen ? (
            <>
              <div className="flex items-center gap-2">
                <List className="w-5 h-5 text-[#C11369]" />
                <span className="font-heading font-bold text-[#333333]">Spis treści</span>
              </div>
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </>
          ) : (
            <List className="w-5 h-5 text-[#C11369] mx-auto" />
          )}
        </button>

        {/* Content */}
        {isOpen && (
          <div className="p-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <nav className="space-y-1">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    w-full text-left transition-all duration-300 rounded-lg
                    ${heading.level === 3 ? 'pl-6' : 'pl-2'}
                    ${activeId === heading.id 
                      ? 'bg-gradient-to-r from-[#C11369]/10 to-[#049FE3]/10 text-[#C11369] font-semibold' 
                      : 'text-gray-600 hover:text-[#333333] hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="py-2 px-3 flex items-center gap-2">
                    {activeId === heading.id && (
                      <div className="w-2 h-2 bg-[#C11369] rounded-full animate-pulse" />
                    )}
                    <span className={`${heading.level === 3 ? 'text-sm' : 'text-base'} line-clamp-2`}>
                      {heading.text}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Progress indicator */}
        {isOpen && (
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Postęp czytania</span>
              <span className="font-semibold text-[#C11369]">
                {Math.round((headings.findIndex(h => h.id === activeId) + 1) / headings.length * 100)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}