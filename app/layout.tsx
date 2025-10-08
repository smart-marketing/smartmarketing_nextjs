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
  metadataBase: new URL('https://agencjasmart.marketing'), // ⬅️ DODAJ TO
  title: {
    default: "Smart Marketing - Agencja Marketingowa dla MŚP | Meta Ads & Google Ads",
    template: "%s | Smart Marketing"
  },
  description: "Agencja performance marketingu specjalizująca się w Meta Ads i Google Ads. Zwiększamy sprzedaż e-commerce i generujemy leady B2C. Sprawdź nasze rozwiązania SmartLeads i SmartCommerce.",
  keywords: ["performance marketing", "meta ads", "facebook ads", "google ads", "agencja marketingowa", "leady b2c", "e-commerce marketing", "reklama online"],
  authors: [{ name: "Smart Marketing" }],
  creator: "Smart Marketing",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://agencjasmart.marketing",
    siteName: "Smart Marketing",
    title: "Smart Marketing - Agencja Marketingowa dla MŚP",
    description: "Specjalizujemy się w Meta Ads i Google Ads. Zwiększamy sprzedaż e-commerce i generujemy leady B2C.",
    images: [
      {
        url: "/og-image.png", // Stwórz ten obrazek 1200x630px
        width: 1200,
        height: 630,
        alt: "Smart Marketing - Agencja Marketingowa dla MŚP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Marketing - Agencja Marketingowa dla MŚP",
    description: "Specjalizujemy się w Meta Ads i Google Ads. Zwiększamy sprzedaż e-commerce i generujemy leady B2C.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'twój-kod-weryfikacji-google', // Dodaj później
    // yandex: 'twój-kod-weryfikacji-yandex', // Jeśli potrzebne
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${spaceGrotesk.variable} ${manrope.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Smart Marketing",
      "url": "https://agencjasmart.marketing",
      "logo": "https://agencjasmart.marketing/logo.png",
      "description": "Agencja marketingowa dla MŚP specjalizująca się w Meta Ads i Google Ads",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PL"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+48-794-312-947",
        "contactType": "customer service",
        "email": "info@agencjasmart.marketing",
        "availableLanguage": ["pl"]
      },
      "sameAs": [
        "https://www.facebook.com/smartmarketing",
        "https://www.linkedin.com/company/smartmarketing"
      ]
    })
  }}
/>