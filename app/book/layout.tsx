import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Instant Quote | Window Cleaning | Boca Raton',
  description: 'Get your instant window cleaning quote in 60 seconds. Transparent pricing, no obligation. Serving Boca Raton and South Florida.',
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
