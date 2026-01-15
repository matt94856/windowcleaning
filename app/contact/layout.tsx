import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Window Cleaning | Boca Raton',
  description: 'Contact CrystalClear Window Cleaning. Phone, email, and service area information. Serving Boca Raton, Delray Beach, and South Florida.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
