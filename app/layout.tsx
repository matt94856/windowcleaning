import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Commercial Window Cleaning | Small Businesses | FAU Student-Owned | Boca Raton',
  description: 'Affordable window cleaning for small businesses, strip malls, and storefronts in Boca Raton and South Florida. Biweekly and monthly service plans. Locally owned by FAU students.',
  keywords: 'commercial window cleaning, small business window cleaning, strip mall window cleaning, storefront cleaning, Boca Raton, FAU, South Florida, affordable window cleaning',
  openGraph: {
    title: 'Commercial Window Cleaning for Small Businesses | FAU Student-Owned',
    description: 'Affordable window cleaning for small businesses and strip malls in Boca Raton and South Florida.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'CrystalClear Window Cleaning',
    image: 'https://www.crystalclearwindows.com/logo.png',
    '@id': 'https://www.crystalclearwindows.com',
    url: 'https://www.crystalclearwindows.com',
    telephone: '+19043157978',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boca Raton',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.3683,
      longitude: -80.1289,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Boca Raton',
      },
      {
        '@type': 'City',
        name: 'Delray Beach',
      },
      {
        '@type': 'City',
        name: 'Deerfield Beach',
      },
    ],
    serviceType: 'Window Cleaning Service',
    description: 'Affordable commercial window cleaning for small businesses, strip malls, and storefronts in Boca Raton and South Florida.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
