import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import { FiMapPin, FiCheckCircle, FiDollarSign, FiCalendar } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Affordable Window Cleaning Boca Raton | Commercial & Small Business',
  description: 'Professional, affordable window cleaning for small businesses and strip malls in Boca Raton, FL. Biweekly and monthly service plans available. FAU student-owned. Free quotes.',
  keywords: 'window cleaning boca raton, affordable window cleaning boca raton, commercial window cleaning boca raton, small business window cleaning boca raton, strip mall window cleaning boca raton',
}

export default function BocaRaton() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FiMapPin className="w-4 h-4" />
            <span>Serving Boca Raton, FL</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Affordable Window Cleaning
            <span className="block text-primary-700 mt-2">in Boca Raton</span>
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed mb-8">
            Professional window cleaning services for small businesses, retail storefronts, and strip malls 
            throughout Boca Raton. Competitive rates, flexible scheduling, and reliable service.
          </p>
          <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
            Get Your Free Quote
          </CTAButton>
        </div>
      </section>

      {/* Why Choose Us for Boca Raton */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-charcoal-50 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-charcoal-950 mb-12 text-center">
            Why Boca Raton Businesses Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 text-primary-700 mx-auto mb-4">
                <FiDollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal-950 mb-2">Affordable Rates</h3>
              <p className="text-sm text-charcoal-600">
                Competitive pricing designed for small businesses in Boca Raton
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 text-primary-700 mx-auto mb-4">
                <FiCalendar className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal-950 mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-charcoal-600">
                Early morning, after-hours, or weekend service available
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 text-primary-700 mx-auto mb-4">
                <FiCheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal-950 mb-2">Local & Reliable</h3>
              <p className="text-sm text-charcoal-600">
                FAU student-owned, serving Boca Raton with pride
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 text-primary-700 mx-auto mb-4">
                <FiMapPin className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal-950 mb-2">Boca Raton Focus</h3>
              <p className="text-sm text-charcoal-600">
                Specializing in local businesses and strip malls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in Boca Raton */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-8 text-center">
            Serving All of Boca Raton
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-charcoal-100">
              <h3 className="font-semibold text-charcoal-950 mb-3">Areas We Serve</h3>
              <ul className="space-y-2 text-charcoal-700 text-sm">
                <li>• Downtown Boca Raton</li>
                <li>• Mizner Park</li>
                <li>• Town Center</li>
                <li>• East Boca Raton</li>
                <li>• West Boca Raton</li>
                <li>• All commercial districts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-charcoal-100">
              <h3 className="font-semibold text-charcoal-950 mb-3">Business Types</h3>
              <ul className="space-y-2 text-charcoal-700 text-sm">
                <li>• Retail storefronts</li>
                <li>• Strip malls</li>
                <li>• Restaurants & cafes</li>
                <li>• Professional offices</li>
                <li>• Salons & spas</li>
                <li>• Auto service centers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 bg-primary-50 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-charcoal-950 mb-4">
            Ready for Professional Window Cleaning in Boca Raton?
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            Get your free, no-obligation quote today. Affordable rates, flexible scheduling, 
            and reliable service for Boca Raton businesses.
          </p>
          <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
            Request Your Free Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
