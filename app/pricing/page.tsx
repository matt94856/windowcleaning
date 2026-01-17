import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import { FiCheck, FiCalendar, FiDollarSign, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Affordable Window Cleaning Pricing Boca Raton | Custom Quotes',
  description: 'Affordable window cleaning pricing for small businesses in Boca Raton, FL. Custom quotes based on your needs. No contracts. Request your free quote today.',
  keywords: 'window cleaning cost boca raton, affordable window cleaning boca raton, window cleaning prices boca raton, cheap window cleaning boca raton',
}

export default function Pricing() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Affordable Pricing for Your Business
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed mb-8">
            Custom pricing tailored to your business needs. We offer competitive rates 
            with flexible service options. Contact us for a free, no-obligation quote.
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold">
            <span>💼</span>
            <span>Custom Quotes Available</span>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Single Storefront */}
            <div className="bg-white rounded-xl border-2 border-charcoal-100 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-700 mb-6 mx-auto">
                <FiDollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-950 mb-2 text-center">Single Storefront</h3>
              <p className="text-charcoal-600 mb-6 text-center">Perfect for individual businesses</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Custom pricing based on size</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">One-time or recurring service</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Affordable rates</span>
                </li>
              </ul>
              <CTAButton href="/book" variant="outline" className="w-full">
                Request Quote
              </CTAButton>
            </div>

            {/* Recurring Service - Featured */}
            <div className="bg-primary-700 rounded-xl border-2 border-primary-800 p-8 text-white transform scale-105 shadow-xl relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-white text-primary-700 px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white mb-6 mx-auto mt-2">
                <FiCalendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Recurring Service</h3>
              <p className="opacity-90 mb-6 text-center">Biweekly or monthly plans</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Discounted rates for regular service</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Consistent maintenance</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>No long-term contracts</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Flexible frequency options</span>
                </li>
              </ul>
              <CTAButton href="/book" variant="secondary" className="w-full">
                Request Quote
              </CTAButton>
            </div>

            {/* Strip Mall / Multiple Units */}
            <div className="bg-white rounded-xl border-2 border-charcoal-100 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-700 mb-6 mx-auto">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-950 mb-2 text-center">Strip Mall / Multiple Units</h3>
              <p className="text-charcoal-600 mb-6 text-center">Volume pricing available</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Bulk pricing discounts</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Coordinated service</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Custom scheduling</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700">Single point of contact</span>
                </li>
              </ul>
              <CTAButton href="/book" variant="outline" className="w-full">
                Request Quote
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-charcoal-50 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-8 text-center">
            What Affects Pricing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-950 mb-3">Number of Windows</h3>
              <p className="text-charcoal-700 text-sm">
                The total number of windows and glass surfaces that need cleaning.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-950 mb-3">Service Frequency</h3>
              <p className="text-charcoal-700 text-sm">
                Recurring service plans (biweekly/monthly) receive discounted rates compared to one-time service.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-950 mb-3">Accessibility</h3>
              <p className="text-charcoal-700 text-sm">
                Ground-level storefronts are typically more affordable than high-rise or hard-to-reach windows.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-950 mb-3">Number of Locations</h3>
              <p className="text-charcoal-700 text-sm">
                Multiple storefronts or strip mall units qualify for volume pricing discounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-8 text-center">
            Why Our Pricing Works for Small Businesses
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <FiDollarSign className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal-950 mb-2">
                  Affordable Rates
                </h3>
                <p className="text-charcoal-700">
                  We understand small businesses need cost-effective solutions. Our pricing is competitive 
                  and designed to fit your budget without compromising on quality.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <FiCalendar className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal-950 mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-charcoal-700">
                  We work around your business hours. Whether you need early morning, after-hours, or 
                  weekend service, we accommodate your schedule.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <FiUsers className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal-950 mb-2">
                  No Contracts Required
                </h3>
                <p className="text-charcoal-700">
                  We don't require long-term contracts. You can start with a one-time service or 
                  recurring plan, and adjust as your needs change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 bg-primary-50 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            Contact us today for a custom quote tailored to your business. No obligation, 
            transparent pricing, and quick response.
          </p>
          <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
            Request a Free Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
