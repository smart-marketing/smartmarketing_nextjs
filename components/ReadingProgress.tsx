'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (scrollTop / docHeight) * 100
      setProgress(Math.min(scrollProgress, 100))
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <>
      {/* Fixed progress bar at top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-[#C11369] to-[#049FE3] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Glowing effect at the end */}
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/50 blur-sm animate-pulse" />
        </div>
      </div>

      {/* Percentage indicator */}
      <div className={`fixed top-20 right-4 z-50 transition-all duration-300 ${
        progress > 5 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="bg-white/90 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#C11369]"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${progress}, 100`}
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="font-heading font-bold text-sm text-[#333333]">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  )
}