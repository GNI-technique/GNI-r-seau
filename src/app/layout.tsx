import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GNI – Réseau Immobilier | 0% sur votre CA, 150€ par vente',
  description:
    'GNI est le premier réseau immobilier à remplacer les commissions sur votre chiffre d\'affaires par une contribution fixe de seulement 150€ par vente réalisée. Gardez 100% de votre CA.',
  keywords: [
    'réseau immobilier sans commission',
    'franchise immobilière alternative',
    'réseau immobilier indépendant',
    'GNI réseau immobilier',
    'agence immobilière 0 commission',
    '150 euros par vente immobilier',
    'réseau immobilier directeurs agence',
    'réseau immobilier rentabilité',
  ],
  authors: [{ name: 'GNI – Réseau Immobilier' }],
  creator: 'GNI',
  publisher: 'GNI',
  metadataBase: new URL('https://www.gni.fr'),
  alternates: {
    canonical: 'https://www.gni.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.gni.fr',
    siteName: 'GNI – Réseau Immobilier',
    title: 'GNI – 0% sur votre CA | 150€ par vente réalisée',
    description:
      'Le premier réseau immobilier qui vous laisse garder 100% de votre chiffre d\'affaires. Contribution fixe de 150€ par vente, accompagnement depuis 2007.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GNI – Le réseau qui gagne quand vous gagnez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GNI – 0% sur votre CA | 150€ par vente',
    description:
      'Le premier réseau immobilier avec contribution fixe. Gardez 100% de votre CA.',
    images: ['/og-image.png'],
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GNI – Réseau Immobilier',
  url: 'https://www.gni.fr',
  logo: 'https://www.gni.fr/logo.png',
  description:
    'GNI est le premier réseau immobilier français proposant un modèle sans commission sur le chiffre d\'affaires. Contribution fixe de 150€ par vente réalisée.',
  foundingDate: '2007',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'French',
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-dark text-brand-light antialiased">
        {children}
      </body>
    </html>
  )
}
