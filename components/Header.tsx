'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-charcoal-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-charcoal-950">CrystalClear</span>
              <span className="text-xs text-charcoal-600 -mt-1">Window Cleaning</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-700 border-b-2 border-primary-700 pb-1'
                    : 'text-charcoal-700 hover:text-primary-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="ml-4 rounded-lg bg-primary-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 transition-colors"
            >
              Get Instant Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-charcoal-700 hover:text-primary-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium ${
                  isActive(item.href)
                    ? 'text-primary-700'
                    : 'text-charcoal-700 hover:text-primary-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg bg-primary-700 px-6 py-3 text-base font-semibold text-white text-center hover:bg-primary-800 transition-colors"
            >
              Get Instant Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
