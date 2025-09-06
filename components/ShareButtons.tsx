'use client'

import { useState } from 'react'
import { Twitter, Facebook, Linkedin, Copy, Check } from 'lucide-react'

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')}
        className="group p-3 bg-white hover:bg-black hover:text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </button>
      <button 
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')}
        className="group p-3 bg-white hover:bg-[#1877f2] hover:text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </button>
      <button 
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')}
        className="group p-3 bg-white hover:bg-[#0077b5] hover:text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </button>
      <button 
        onClick={handleCopy}
        className="group p-3 bg-white hover:bg-gradient-to-r hover:from-[#C11369] hover:to-[#049FE3] hover:text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        aria-label="Copy link"
      >
        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
      </button>
    </div>
  )
}