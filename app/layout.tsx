import type { Metadata } from "next"
import { Space_Grotesk, Manrope } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Smart Marketing - Agencja Marketingowa",
  description: "Zwiększamy sprzedaż Twojej firmy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${spaceGrotesk.variable} ${manrope.variable} font-body`}>{children}</body>
    </html>
  )
}