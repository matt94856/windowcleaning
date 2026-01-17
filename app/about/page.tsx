import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import { FiAward, FiUsers, FiMapPin, FiTarget } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'About Us | FAU Student-Owned Commercial Window Cleaning | Boca Raton',
  description: 'Learn about CrystalClear Window Cleaning, an affordable commercial window cleaning service for small businesses, owned and operated by FAU students in Boca Raton, South Florida.',
}

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🎓</span>
            <span>FAU Student-Owned & Operated</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Built on Excellence,<br />
            Rooted in Community
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed">
            We're not a franchise. We're local FAU students building something exceptional, 
            providing affordable window cleaning services for small businesses in our community.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
              CrystalClear Window Cleaning was founded by a team of Florida Atlantic University 
              students who saw an opportunity to deliver premium window cleaning services to 
              our local community. We're not amateurs—we're entrepreneurs committed to excellence.
            </p>
            <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
              What started as a way to fund our education has become a passion for perfection. 
              We've invested in professional training, premium equipment, and comprehensive 
              insurance because we believe in doing things right—not just fast.
            </p>
            <p className="text-lg text-charcoal-700 leading-relaxed">
              Every window we clean reflects our commitment to quality, attention to detail, 
              and respect for your property. We're building a business that our community 
              can trust, and that starts with every single job.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-charcoal-50 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal-950 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-charcoal-700">
              Our values drive everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-700 mx-auto mb-4">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">Premium Quality</h3>
              <p className="text-charcoal-600 text-sm">
                We don't cut corners. Every window receives the same attention to detail, 
                whether it's a small condo or a large estate.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-700 mx-auto mb-4">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">Local Ownership</h3>
              <p className="text-charcoal-600 text-sm">
                As FAU students, we're invested in this community. Your satisfaction isn't 
                just good business—it's our reputation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-700 mx-auto mb-4">
                <FiMapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">Community Focus</h3>
              <p className="text-charcoal-600 text-sm">
                We serve Boca Raton and South Florida with pride. This is our home, 
                and we treat your property like our own.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-700 mx-auto mb-4">
                <FiTarget className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">Professional Standards</h3>
              <p className="text-charcoal-600 text-sm">
                Fully insured, professionally trained, and committed to continuous improvement. 
                We're building a business that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal-950 mb-8 text-center">
            Why Choose CrystalClear?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-700 font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal-950 mb-2">
                  Student-Owned, Professional Results
                </h3>
                <p className="text-charcoal-700">
                  Being students doesn't mean we're amateurs. We've invested in professional 
                  training, premium equipment, and comprehensive insurance. We approach every 
                  job with the seriousness it deserves.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-700 font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal-950 mb-2">
                  Local Roots, Local Pride
                </h3>
                <p className="text-charcoal-700">
                  We're not a franchise. We're your neighbors, building a business in the 
                  community we call home. When you choose us, you're supporting local students 
                  and getting exceptional service.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-700 font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal-950 mb-2">
                  Fair Pricing, Premium Quality
                </h3>
                <p className="text-charcoal-700">
                  We believe premium service shouldn't come with premium markups. Our pricing 
                  is competitive, transparent, and fair—because building trust means being 
                  honest about costs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-700 font-semibold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal-950 mb-2">
                  Attention to Detail
                </h3>
                <p className="text-charcoal-700">
                  We notice the things others miss. From frame edges to window sills, we clean 
                  every surface thoroughly. Our goal isn't just clean—it's perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-primary-50 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-charcoal-950 mb-6">
            Our Commitment to You
          </h2>
          <p className="text-xl text-charcoal-700 leading-relaxed mb-8">
            We're building a business that stands the test of time. That means every customer 
            interaction, every window cleaned, and every detail matters. We're not here to 
            make a quick buck—we're here to build something exceptional.
          </p>
          <p className="text-lg text-charcoal-700 leading-relaxed">
            When you choose CrystalClear, you're choosing a team that's invested in your 
            satisfaction. We're fully insured, professionally trained, and committed to 
            continuous improvement. Your trust is our most valuable asset.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-charcoal-950 mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            See why Boca Raton homeowners trust CrystalClear for their window cleaning needs.
          </p>
          <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
            Get Your Instant Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
