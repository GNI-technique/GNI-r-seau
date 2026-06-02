import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GNI - Groupe National Immobilier | Commission fixe par vente',
  description:
    "GNI est un réseau national de franchises immobilières fondé en 2007. Un modèle unique : commission fixe par vente, pas un pourcentage. Rejoignez 180+ agences franchisées.",
  keywords: [
    'réseau immobilier franchise',
    'franchise immobilière commission fixe',
    'réseau immobilier indépendant',
    'GNI réseau immobilier',
    'agence immobilière franchisée',
    'franchise immobilier forfait fixe',
    'réseau immobilier directeurs agence',
    'Groupe National Immobilier',
  ],
  authors: [{ name: 'GNI – Groupe National Immobilier' }],
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
    siteName: 'GNI – Groupe National Immobilier',
    title: 'GNI - Groupe National Immobilier | Commission fixe par vente',
    description:
      "Réseau national de franchises immobilières fondé en 2007. Commission fixe par vente, territoire exclusif, outils inclus. 180+ agences actives.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GNI – Groupe National Immobilier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GNI - Groupe National Immobilier | Commission fixe',
    description: 'Réseau national de franchises immobilières. Commission fixe par vente.',
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
  name: 'GNI – Groupe National Immobilier',
  url: 'https://www.gni.fr',
  logo: 'https://www.gni.fr/logo-gni-transparent.png',
  description:
    "GNI est un réseau national de franchises immobilières fondé en 2007. Modèle unique : commission fixe par vente.",
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
    <html lang="fr" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
