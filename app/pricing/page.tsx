import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import { FiCheck } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Transparent Window Cleaning Pricing | Boca Raton',
  description: 'Fair, transparent pricing for premium window cleaning services in Boca Raton. Get your instant quote in 60 seconds.',
}

export default function Pricing() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed mb-8">
            Premium quality at competitive local rates. No hidden fees, no surprises. 
            Get your instant quote in 60 seconds.
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold">
            <span>⚡</span>
            <span>Instant Quote Available</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Small Home */}
            <div className="bg-white rounded-xl border-2 border-charcoal-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-charcoal-950 mb-2">Small Home</h3>
              <p className="text-5xl font-bold text-primary-700 mb-1">
                $149<span className="text-2xl text-charcoal-600 font-normal">+</span>
              </p>
              <p className="text-charcoal-600 mb-6">Starting price</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Up to 20 windows</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Interior & exterior cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Screen cleaning included</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Frame & sill cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Perfect for condos & townhomes</span>
                </li>
              </ul>
              <CTAButton href="/book" variant="outline" className="w-full">
                Get Quote
              </CTAButton>
            </div>

            {/* Medium Home - Featured */}
            <div className="bg-primary-700 rounded-xl border-2 border-primary-800 p-8 text-white transform scale-105 shadow-xl relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-white text-primary-700 px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-2">Medium Home</h3>
              <p className="text-5xl font-bold mb-1">
                $199<span className="text-2xl font-normal opacity-90">+</span>
              </p>
              <p className="opacity-90 mb-6">Starting price</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Up to 35 windows</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Interior & exterior cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Screen & track cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hard water removal</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Ideal for single-family homes</span>
                </li>
              </ul>
              <CTAButton href="/book" variant="secondary" className="w-full bg-white text-primary-700 hover:bg-charcoal-50">
                Get Quote
              </CTAButton>
            </div>

            {/* Large Home */}
            <div className="bg-white rounded-xl border-2 border-charcoal-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-charcoal-950 mb-2">Large Home</h3>
              <p className="text-5xl font-bold text-primary-700 mb-1">
                $299<span className="text-2xl text-charcoal-600 font-normal">+</span>
              </p>
              <p className="text-charcoal-600 mb-6">Starting price</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">35+ windows</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Complete interior & exterior</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">All add-ons included</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Skylight cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">For larger properties & estates</span>
                </li>
              </ul>
              <CTAButton href="/book" variant="outline" className="w-full">
                Get Quote
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-charcoal-50 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-xl p-10 border border-charcoal-100">
            <h2 className="text-3xl font-bold text-charcoal-950 mb-4 text-center">
              Commercial Window Cleaning
            </h2>
            <p className="text-xl text-charcoal-700 mb-8 text-center">
              Custom pricing for commercial properties, offices, and retail spaces
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-charcoal-950 mb-2">What's Included:</h3>
                <ul className="space-y-2 text-charcoal-700">
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-primary-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular maintenance schedules</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-primary-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bulk pricing for multiple locations</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-primary-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Flexible timing to minimize disruption</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-primary-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High-rise and ground-level service</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-950 mb-2">Pricing Factors:</h3>
                <ul className="space-y-2 text-charcoal-700">
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Number of windows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Frequency of service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Accessibility and height</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Special requirements</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <CTAButton href="/book" variant="primary">
                Request Commercial Quote
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-8 text-center">
            What Affects Pricing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-charcoal-50 rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-950 mb-3">Property Size</h3>
              <p className="text-charcoal-700 text-sm">
                Number of windows, stories, and overall property size directly impact pricing.
              </p>
            </div>
            <div className="bg-charcoal-50 rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-950 mb-3">Service Type</h3>
              <p className="text-charcoal-700 text-sm">
                Interior, exterior, or both. Add-ons like hard water removal or skylight cleaning.
              </p>
            </div>
            <div className="bg-charcoal-50 rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-950 mb-3">Accessibility</h3>
              <p className="text-charcoal-700 text-sm">
                Hard-to-reach windows, height requirements, and special equipment needs.
              </p>
            </div>
            <div className="bg-charcoal-50 rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-950 mb-3">Condition</h3>
              <p className="text-charcoal-700 text-sm">
                First-time cleaning, hard water stains, or excessive buildup may require additional time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No Hidden Fees */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-primary-50 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-4">
            No Hidden Fees. Ever.
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            We believe in transparent pricing. Your quote includes everything, 
            and we'll never surprise you with additional charges.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-700">
            <span className="bg-white px-4 py-2 rounded-full">✓ Free Estimates</span>
            <span className="bg-white px-4 py-2 rounded-full">✓ Transparent Pricing</span>
            <span className="bg-white px-4 py-2 rounded-full">✓ No Surprise Fees</span>
            <span className="bg-white px-4 py-2 rounded-full">✓ Satisfaction Guaranteed</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-charcoal-950 mb-4">
            Get Your Instant Quote
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            Answer a few quick questions and get your personalized quote in 60 seconds.
          </p>
          <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
            Get Instant Quote Now
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
