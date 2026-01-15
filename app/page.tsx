import { FiShield, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { FiDroplet, FiHome, FiBuilding, FiSun } from 'react-icons/fi'
import CTAButton from '@/components/CTAButton'
import TrustBadge from '@/components/TrustBadge'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'

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
              Premium Window Cleaning
              <span className="block text-primary-700 mt-2">That Shines</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional window cleaning services in Boca Raton and South Florida. 
              Locally owned, detail-oriented, and built on trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
                Get Instant Quote
              </CTAButton>
              <CTAButton href="/services" variant="outline" className="text-lg px-10 py-4">
                View Services
              </CTAButton>
            </div>
            <p className="text-sm text-charcoal-600">
              ✓ Free Estimates  ✓ Insured & Licensed  ✓ Satisfaction Guaranteed
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
              Comprehensive Window Care
            </h2>
            <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
              From residential homes to commercial buildings, we deliver premium results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ServiceCard
              icon={<FiDroplet className="w-7 h-7" />}
              title="Exterior Cleaning"
              description="Complete exterior window washing with streak-free results"
              features={['Water-fed pole system', 'Eco-friendly solutions', 'Streak-free finish']}
            />
            <ServiceCard
              icon={<FiHome className="w-7 h-7" />}
              title="Interior Cleaning"
              description="Detailed interior window cleaning for crystal-clear views"
              features={['Frame cleaning', 'Sill cleaning', 'Spot-free finish']}
            />
            <ServiceCard
              icon={<FiSun className="w-7 h-7" />}
              title="Screen Cleaning"
              description="Thorough screen cleaning to restore airflow and clarity"
              features={['Removal & cleaning', 'Frame maintenance', 'Reinstallation']}
            />
            <ServiceCard
              icon={<FiBuilding className="w-7 h-7" />}
              title="Commercial"
              description="Professional commercial window cleaning for businesses"
              features={['Regular schedules', 'Bulk pricing', 'Flexible timing']}
            />
          </div>
          <div className="text-center">
            <CTAButton href="/services" variant="outline">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-950 mb-4">
              Transparent, Fair Pricing
            </h2>
            <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
              Premium quality at competitive local rates. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-100">
              <h3 className="text-2xl font-bold text-charcoal-950 mb-2">Small Home</h3>
              <p className="text-4xl font-bold text-primary-700 mb-4">$149<span className="text-lg text-charcoal-600 font-normal">+</span></p>
              <p className="text-charcoal-600 mb-6">Perfect for condos and townhomes</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Up to 20 windows
                </li>
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Interior & exterior
                </li>
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Screen cleaning included
                </li>
              </ul>
            </div>
            <div className="bg-primary-700 rounded-xl p-8 border-2 border-primary-800 text-white transform scale-105 shadow-xl">
              <div className="inline-block bg-white text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Medium Home</h3>
              <p className="text-4xl font-bold mb-4">$199<span className="text-lg font-normal opacity-90">+</span></p>
              <p className="opacity-90 mb-6">Ideal for single-family homes</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm">
                  <span className="mr-2">✓</span>
                  Up to 35 windows
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✓</span>
                  Interior & exterior
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✓</span>
                  Screen & track cleaning
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✓</span>
                  Hard water removal
                </li>
              </ul>
            </div>
            <div className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-100">
              <h3 className="text-2xl font-bold text-charcoal-950 mb-2">Large Home</h3>
              <p className="text-4xl font-bold text-primary-700 mb-4">$299<span className="text-lg text-charcoal-600 font-normal">+</span></p>
              <p className="text-charcoal-600 mb-6">For larger properties and estates</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  35+ windows
                </li>
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  Complete interior & exterior
                </li>
                <li className="flex items-start text-sm text-charcoal-700">
                  <span className="text-primary-700 mr-2">✓</span>
                  All add-ons included
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-charcoal-600 mb-6">
              Get your instant quote in 60 seconds. Pricing varies by property size and specific needs.
            </p>
            <CTAButton href="/pricing" variant="primary">
              View Full Pricing
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-950 mb-4">
              Trusted by Boca Raton Homeowners
            </h2>
            <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
              See what our clients say about our premium service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <TestimonialCard
              name="Sarah Martinez"
              location="Boca Raton, FL"
              rating={5}
              text="CrystalClear exceeded my expectations. The team was professional, punctual, and the windows have never looked better. Highly recommend!"
            />
            <TestimonialCard
              name="Robert Chen"
              location="Delray Beach, FL"
              rating={5}
              text="As a small business owner, I appreciate their attention to detail and reliability. They've been cleaning our storefront windows monthly for over a year."
            />
            <TestimonialCard
              name="Jennifer Williams"
              location="Boca Raton, FL"
              rating={5}
              text="The fact that they're FAU students shows in their work ethic. Professional, thorough, and reasonably priced. My windows sparkle!"
            />
          </div>
          <div className="text-center">
            <CTAButton href="/reviews" variant="outline">
              Read More Reviews
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Crystal-Clear Windows?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Get your instant quote in 60 seconds. No obligation, transparent pricing.
          </p>
          <CTAButton href="/book" variant="secondary" className="bg-white text-primary-700 hover:bg-charcoal-50">
            Get Your Instant Quote Now
          </CTAButton>
        </div>
      </section>
    </>
  )
}
