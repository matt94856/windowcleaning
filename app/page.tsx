import { FiShield, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { FiDroplet, FiHome, FiBriefcase, FiSun } from 'react-icons/fi'
import CTAButton from '@/components/CTAButton'
import TrustBadge from '@/components/TrustBadge'
import ServiceCard from '@/components/ServiceCard'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-charcoal-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>🏆</span>
              <span>FAU Student-Owned & Operated</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-950 mb-6 text-balance">
              Professional Window Cleaning
              <span className="block text-primary-700 mt-2">For Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Affordable, reliable window cleaning for small businesses, strip malls, and storefronts in <strong>Boca Raton</strong> and South Florida. 
              Biweekly and monthly service plans available. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
                Request a Quote
              </CTAButton>
              <CTAButton href="/services" variant="outline" className="text-lg px-10 py-4">
                View Services
              </CTAButton>
            </div>
            <p className="text-sm text-charcoal-600">
              ✓ Affordable Rates  ✓ Flexible Scheduling  ✓ Insured & Licensed  ✓ Satisfaction Guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TrustBadge
              icon={<FiShield className="w-8 h-8" />}
              title="Fully Insured"
              description="Comprehensive coverage for your peace of mind"
            />
            <TrustBadge
              icon={<FiAward className="w-8 h-8" />}
              title="Premium Quality"
              description="Attention to detail in every window we clean"
            />
            <TrustBadge
              icon={<FiUsers className="w-8 h-8" />}
              title="FAU Students"
              description="Local, professional, and committed to excellence"
            />
            <TrustBadge
              icon={<FiCheckCircle className="w-8 h-8" />}
              title="100% Guarantee"
              description="Satisfaction guaranteed or we'll make it right"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-950 mb-4">
              Commercial Window Cleaning Services
            </h2>
            <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
              Professional window cleaning for strip malls, storefronts, and small businesses. 
              Keep your windows spotless with our affordable recurring service plans.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceCard
              icon={<FiBriefcase className="w-7 h-7" />}
              title="Storefront Cleaning"
              description="Complete exterior window cleaning for retail stores and businesses"
              features={['Streak-free finish', 'Flexible scheduling', 'Affordable rates']}
            />
            <ServiceCard
              icon={<FiDroplet className="w-7 h-7" />}
              title="Recurring Service"
              description="Biweekly or monthly service plans to keep your windows consistently clean"
              features={['Regular maintenance', 'Consistent quality', 'Discounted rates']}
            />
            <ServiceCard
              icon={<FiSun className="w-7 h-7" />}
              title="Strip Mall Service"
              description="Professional cleaning for multiple storefronts in strip malls"
              features={['Bulk pricing', 'Coordinated scheduling', 'Volume discounts']}
            />
          </div>
          <div className="text-center">
            <CTAButton href="/services" variant="outline">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Service Plans Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-950 mb-4">
              Affordable Service Plans
            </h2>
            <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
              Custom pricing tailored to your business needs. We offer competitive rates with flexible scheduling options.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-100">
              <h3 className="text-2xl font-bold text-charcoal-950 mb-2">Single Storefront</h3>
              <p className="text-charcoal-600 mb-6">Perfect for individual businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Custom pricing
                </li>
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Flexible scheduling
                </li>
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  One-time or recurring service
                </li>
              </ul>
            </div>
            <div className="bg-primary-700 rounded-xl p-8 border-2 border-primary-800 text-white transform scale-105 shadow-xl">
              <div className="inline-block bg-white text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Recurring Service</h3>
              <p className="opacity-90 mb-6">Biweekly or monthly plans</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm">
                  <span className="mr-2">✓</span>
                  Discounted rates
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✓</span>
                  Consistent maintenance
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✓</span>
                  Priority scheduling
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✓</span>
                  No long-term contracts
                </li>
              </ul>
            </div>
            <div className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-100">
              <h3 className="text-2xl font-bold text-charcoal-950 mb-2">Strip Mall / Multiple Units</h3>
              <p className="text-charcoal-600 mb-6">Volume pricing available</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Bulk pricing discounts
                </li>
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Coordinated service
                </li>
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Custom scheduling
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-charcoal-600 mb-6">
              All pricing is customized based on your specific needs. Contact us for a free, no-obligation quote.
            </p>
            <CTAButton href="/book" variant="primary">
              Request a Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Keep Your Windows Spotless?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Request a free quote for your business. Affordable rates, flexible scheduling, no obligation.
          </p>
          <CTAButton href="/book" variant="secondary" className="hover:bg-charcoal-800">
            Request a Free Quote
          </CTAButton>
        </div>
      </section>
    </>
  )
}
