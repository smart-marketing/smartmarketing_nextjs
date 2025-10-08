import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}