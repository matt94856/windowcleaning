import type { Metadata } from 'next'
import TestimonialCard from '@/components/TestimonialCard'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Customer Reviews | Window Cleaning Testimonials | Boca Raton',
  description: 'Read what our customers say about CrystalClear Window Cleaning. Real reviews from satisfied homeowners in Boca Raton and South Florida.',
}

export default function Reviews() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      location: 'Boca Raton, FL',
      rating: 5,
      text: 'CrystalClear exceeded my expectations. The team was professional, punctual, and the windows have never looked better. I especially appreciated their attention to detail on the window frames and sills. Highly recommend!',
    },
    {
      name: 'Robert Chen',
      location: 'Delray Beach, FL',
      rating: 5,
      text: 'As a small business owner, I appreciate their attention to detail and reliability. They\'ve been cleaning our storefront windows monthly for over a year, and I\'ve never had a complaint. Professional, efficient, and reasonably priced.',
    },
    {
      name: 'Jennifer Williams',
      location: 'Boca Raton, FL',
      rating: 5,
      text: 'The fact that they\'re FAU students shows in their work ethic. Professional, thorough, and reasonably priced. My windows sparkle, and I love supporting local students. Will definitely use them again!',
    },
    {
      name: 'Michael Thompson',
      location: 'Boca Raton, FL',
      rating: 5,
      text: 'First-time customer, and I\'m impressed. They removed years of hard water stains that I thought were permanent. The team was respectful of my property and left everything spotless. Worth every penny.',
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Deerfield Beach, FL',
      rating: 5,
      text: 'I\'ve tried several window cleaning services, and CrystalClear is by far the best. They cleaned both interior and exterior, including screens and tracks. The difference is night and day. Very satisfied!',
    },
    {
      name: 'David Park',
      location: 'Boca Raton, FL',
      rating: 5,
      text: 'Excellent service from start to finish. Quick response to my quote request, transparent pricing, and outstanding results. The windows look brand new. I\'ll be scheduling regular cleanings with them.',
    },
    {
      name: 'Amanda Foster',
      location: 'Boca Raton, FL',
      rating: 5,
      text: 'Professional, reliable, and detail-oriented. They cleaned my entire home including skylights, which I\'ve never been able to get properly cleaned before. Very impressed with their thoroughness.',
    },
    {
      name: 'James Wilson',
      location: 'Delray Beach, FL',
      rating: 5,
      text: 'Great experience overall. The team showed up on time, worked efficiently, and cleaned up after themselves. My windows haven\'t looked this good since I moved in. Highly recommend!',
    },
    {
      name: 'Maria Garcia',
      location: 'Boca Raton, FL',
      rating: 5,
      text: 'I was skeptical about using a student-owned business, but CrystalClear proved me wrong. They\'re more professional than some established companies I\'ve used. Great service, fair pricing.',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed">
            Don't just take our word for it. See what homeowners and business owners 
            throughout Boca Raton and South Florida are saying about CrystalClear.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-charcoal-50 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-700 mb-2">4.9/5</div>
              <p className="text-charcoal-700">Average Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-700 mb-2">200+</div>
              <p className="text-charcoal-700">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-700 mb-2">100%</div>
              <p className="text-charcoal-700">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-charcoal-950 mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            Experience the CrystalClear difference. Get your instant quote today.
          </p>
          <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
            Get Your Instant Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
