import type { Metadata } from 'next'
import TestimonialCard from '@/components/TestimonialCard'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Business Reviews | Window Cleaning Testimonials | Boca Raton',
  description: 'Read what business owners say about CrystalClear Window Cleaning. Real reviews from satisfied small businesses in Boca Raton and South Florida.',
}

export default function Reviews() {
  const testimonials = [
    {
      name: 'Robert Chen',
      location: 'Delray Beach, FL - Retail Store',
      rating: 5,
      text: 'As a small business owner, I appreciate their attention to detail and reliability. They\'ve been cleaning our storefront windows monthly for over a year. Professional, efficient, and very affordable. Highly recommend!',
    },
    {
      name: 'Maria Rodriguez',
      location: 'Boca Raton, FL - Strip Mall Owner',
      rating: 5,
      text: 'We have three storefronts in a strip mall, and CrystalClear handles all of them. Their biweekly service keeps our windows spotless, and the bulk pricing is very reasonable. They work around our business hours, which is perfect.',
    },
    {
      name: 'David Park',
      location: 'Boca Raton, FL - Restaurant Owner',
      rating: 5,
      text: 'The fact that they\'re FAU students shows in their work ethic. Professional, thorough, and affordable. They clean our restaurant windows monthly, and customers always comment on how clean everything looks. Great value!',
    },
    {
      name: 'Jennifer Martinez',
      location: 'Boca Raton, FL - Boutique Owner',
      rating: 5,
      text: 'First-time customer, and I\'m impressed. They did an excellent job cleaning our storefront windows. The team was respectful, worked quickly, and left everything spotless. Very affordable too.',
    },
    {
      name: 'Michael Thompson',
      location: 'Deerfield Beach, FL - Office Manager',
      rating: 5,
      text: 'I\'ve tried several window cleaning services for our small office, and CrystalClear is by far the best. They clean both interior and exterior windows. The difference is night and day, and their rates are very competitive.',
    },
    {
      name: 'Lisa Chen',
      location: 'Boca Raton, FL - Salon Owner',
      rating: 5,
      text: 'Excellent service from start to finish. Quick response to my quote request, and they scheduled us for biweekly service. The windows look brand new every time. Very reliable and affordable for a small business like ours.',
    },
    {
      name: 'Amanda Foster',
      location: 'Boca Raton, FL - Coffee Shop',
      rating: 5,
      text: 'Professional, reliable, and detail-oriented. They clean our coffee shop windows monthly, and it makes such a difference in how our storefront looks. The pricing is very reasonable, and they always show up on time.',
    },
    {
      name: 'James Wilson',
      location: 'Delray Beach, FL - Auto Repair Shop',
      rating: 5,
      text: 'Great experience overall. The team showed up on time, worked efficiently around our customers, and cleaned up after themselves. Our windows haven\'t looked this good in years. Very affordable service.',
    },
    {
      name: 'Sarah Garcia',
      location: 'Boca Raton, FL - Gift Shop',
      rating: 5,
      text: 'I was skeptical about using a student-owned business, but CrystalClear proved me wrong. They\'re more professional than some established companies I\'ve used. Great service, fair pricing, and I love supporting local students.',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
              What Business Owners Say
            </h1>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              Don't just take our word for it. See what small business owners 
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
            Join Our Satisfied Business Clients
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            Experience the CrystalClear difference. Request your free quote today.
          </p>
          <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
            Request a Free Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
