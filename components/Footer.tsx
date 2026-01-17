import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col space-y-2 mb-4">
              <span className="text-2xl font-bold">CrystalClear</span>
              <span className="text-sm text-charcoal-400">Window Cleaning</span>
            </div>
            <p className="text-charcoal-300 text-sm leading-relaxed max-w-md">
              Affordable window cleaning for small businesses, strip malls, and storefronts in Boca Raton and South Florida. 
              Professionally run by FAU students, delivering reliable service with attention to detail.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <span className="text-xs font-semibold text-primary-400 bg-primary-400/10 px-3 py-1 rounded-full">
                FAU Student-Owned & Operated
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-charcoal-300 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-charcoal-300 hover:text-white text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-charcoal-300 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-charcoal-300 hover:text-white text-sm transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal-300 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiPhone className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+19043157978" className="text-charcoal-300 hover:text-white text-sm transition-colors">
                  (904) 315-7978
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@crystalclearwindows.com" className="text-charcoal-300 hover:text-white text-sm transition-colors">
                  info@crystalclearwindows.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-300 text-sm">
                  Serving Boca Raton &<br />South Florida
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-charcoal-400 text-sm">
              © {new Date().getFullYear()} CrystalClear Window Cleaning. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-charcoal-400 text-sm">Insured & Licensed</span>
              <span className="text-charcoal-400 text-sm">100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
