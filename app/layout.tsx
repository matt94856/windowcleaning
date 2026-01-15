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
  title: 'Premium Window Cleaning | FAU Student-Owned | Boca Raton',
  description: 'Professional window cleaning services in Boca Raton and South Florida. Premium quality, locally owned and operated by FAU students. Get your instant quote today.',
  keywords: 'window cleaning, Boca Raton, FAU, South Florida, professional window cleaning, commercial window cleaning',
  openGraph: {
    title: 'Premium Window Cleaning | FAU Student-Owned',
    description: 'Professional window cleaning services in Boca Raton and South Florida.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
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
