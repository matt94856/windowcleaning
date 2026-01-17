import type { Metadata } from 'next'
import { FiDroplet, FiHome, FiSun, FiBriefcase, FiLayers, FiSquare } from 'react-icons/fi'
import ServiceCard from '@/components/ServiceCard'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Commercial Window Cleaning Services Boca Raton | Small Businesses | Affordable',
  description: 'Professional, affordable window cleaning for small businesses, strip malls, and storefronts in Boca Raton, FL. Biweekly and monthly service plans. Free quotes.',
  keywords: 'commercial window cleaning boca raton, small business window cleaning, strip mall window cleaning boca raton, affordable window cleaning boca raton',
}

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Commercial Window Cleaning Services
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed">
            Professional window cleaning for small businesses, strip malls, and storefronts. 
            Affordable recurring service plans to keep your windows consistently clean and your business looking its best.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FiBriefcase className="w-7 h-7" />}
              title="Storefront Cleaning"
              description="Complete exterior window cleaning for retail stores and small businesses. Professional service that keeps your storefront looking its best."
              features={[
                'Streak-free, spotless finish',
                'Frame and sill cleaning included',
                'Eco-friendly cleaning solutions',
                'Flexible scheduling around business hours',
                'Affordable rates'
              ]}
            />
            <ServiceCard
              icon={<FiDroplet className="w-7 h-7" />}
              title="Recurring Service Plans"
              description="Biweekly or monthly service plans to keep your windows consistently clean. Discounted rates for regular customers."
              features={[
                'Biweekly or monthly options',
                'Discounted pricing for recurring service',
                'Consistent, reliable maintenance',
                'Priority scheduling',
                'No long-term contracts required'
              ]}
            />
            <ServiceCard
              icon={<FiSun className="w-7 h-7" />}
              title="Strip Mall Service"
              description="Professional cleaning for multiple storefronts in strip malls. Coordinated service with volume pricing discounts."
              features={[
                'Bulk pricing for multiple units',
                'Coordinated scheduling',
                'Volume discounts available',
                'Single point of contact',
                'Flexible service frequency'
              ]}
            />
            <ServiceCard
              icon={<FiSquare className="w-7 h-7" />}
              title="Glass Door Cleaning"
              description="Specialized cleaning for glass doors and entryways. Includes frame and hardware cleaning for a complete service."
              features={[
                'Entry door cleaning',
                'Hardware maintenance',
                'Complete glass surface cleaning',
                'Enhanced professional appearance',
                'Frame cleaning included'
              ]}
            />
            <ServiceCard
              icon={<FiLayers className="w-7 h-7" />}
              title="Interior Window Cleaning"
              description="Detailed interior window cleaning for offices and businesses with interior-facing windows. Removes fingerprints, smudges, and dust."
              features={[
                'Complete frame and sill cleaning',
                'Removes fingerprints and smudges',
                'Dust and debris removal',
                'Spot-free, streak-free finish',
                'Minimal disruption to operations'
              ]}
            />
            <ServiceCard
              icon={<FiHome className="w-7 h-7" />}
              title="One-Time Deep Clean"
              description="Thorough one-time cleaning service for businesses that need immediate attention or occasional maintenance."
              features={[
                'Complete exterior cleaning',
                'Frame and sill cleaning',
                'Perfect for new businesses or special events',
                'Flexible scheduling',
                'Affordable rates'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-charcoal-50 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal-950 mb-4">
              Premium Add-Ons
            </h2>
            <p className="text-xl text-charcoal-700">
              Enhance your service with these specialized options
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-charcoal-100">
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">After-Hours Service</h3>
              <p className="text-charcoal-600 text-sm">
                Available for businesses that prefer service outside of regular business hours to minimize disruption.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-charcoal-100">
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">Emergency Service</h3>
              <p className="text-charcoal-600 text-sm">
                Quick response for special events, grand openings, or urgent cleaning needs. Same-day service available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-charcoal-950 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            Get your instant quote and schedule your premium window cleaning service today.
          </p>
          <CTAButton href="/book" variant="primary">
            Get Instant Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
