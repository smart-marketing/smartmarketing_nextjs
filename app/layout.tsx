import type { Metadata } from "next"
import { Space_Grotesk, Manrope } from "next/font/google"
import "./globals.css"
import CookieConsent from '@/components/CookieConsent';

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
  description: "Smart Marketing - agencja dla MŚP. Zamieniamy chaotyczny marketing w przewidywalne źródło klientów. SmartLeads dla firm usługowych, SmartCommerce dla e-commerce.",
  keywords: [
    'agencja marketingowa MŚP',
    'kampanie Google Ads',
    'kampanie Meta Ads',
    'generowanie leadów B2C',
    'marketing e-commerce',
    'zwiększenie sprzedaży online',
    'Google Partner Polska',
    'optymalizacja kampanii',
    'audyt Google Ads',
    'SmartLeads',
    'SmartCommerce',
    'bezpłatna konsultacja marketingowa',
    'leady dla firm usługowych',
    'ROAS sklep internetowy',
    'agencja Elbląg'
  ],
  authors: [{ name: "Smart Marketing" }],
  creator: "Smart Marketing",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://agencjasmart.marketing",
    siteName: "Smart Marketing",
    title: "Smart Marketing - Agencja Marketingowa dla MŚP",
    description: "Smart Marketing - agencja dla MŚP. Zamieniamy chaotyczny marketing w przewidywalne źródło klientów. SmartLeads dla firm usługowych, SmartCommerce dla e-commerce.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smart Marketing - Agencja Marketingowa dla MŚP",
      },
    ],
  },
    twitter: {
    card: "summary_large_image",
    title: "Smart Marketing - Agencja Marketingowa dla MŚP",
    description: "Smart Marketing - agencja dla MŚP. Zamieniamy chaotyczny marketing w przewidywalne źródło klientów. SmartLeads dla firm usługowych, SmartCommerce dla e-commerce.",
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
    <head>
      {/* Preconnect dla Google Fonts - ultra szybkie ładowanie */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Preload logo */}
      <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
       {/* DNS Prefetch dla external resources */}
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://www.google-analytics.com" />
  <link rel="dns-prefetch" href="https://connect.facebook.net" />
  
  {/* Preconnect dla krytycznych zasobów */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  
  {/* Preload krytycznych zasobów */}
  <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
  <link rel="preload" href="/og-image.png" as="image" type="image/png" />
<meta name="google-site-verification" content="jc3PLdf-kMVAZIbemnqU89npbIj_rY0FZRhM-ce91-M" />
    </head>
    <body className={`${spaceGrotesk.variable} ${manrope.variable} font-body antialiased`}>
      {children}
            <CookieConsent />  {/* ⬅️ DODAJ TO */}
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