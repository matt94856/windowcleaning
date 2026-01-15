import type { Metadata } from 'next'
import { FiDroplet, FiHome, FiSun, FiBriefcase, FiLayers, FiDoor } from 'react-icons/fi'
import ServiceCard from '@/components/ServiceCard'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Window Cleaning Services | Premium Quality | Boca Raton',
  description: 'Comprehensive window cleaning services including exterior, interior, screen cleaning, and commercial services in Boca Raton and South Florida.',
}

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed">
            Premium window cleaning services tailored to your needs. From residential 
            homes to commercial buildings, we deliver exceptional results with 
            attention to detail.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FiDroplet className="w-7 h-7" />}
              title="Exterior Window Cleaning"
              description="Complete exterior window washing using professional water-fed pole systems and eco-friendly cleaning solutions. Perfect for removing dirt, grime, and environmental buildup."
              features={[
                'Water-fed pole system for hard-to-reach windows',
                'Eco-friendly, streak-free cleaning solutions',
                'Frame and sill cleaning included',
                'Removes dirt, pollen, and environmental buildup',
                'Safe for all window types and materials'
              ]}
            />
            <ServiceCard
              icon={<FiHome className="w-7 h-7" />}
              title="Interior Window Cleaning"
              description="Detailed interior window cleaning that removes fingerprints, smudges, and dust. We clean frames, sills, and glass to perfection."
              features={[
                'Complete frame and sill cleaning',
                'Removes fingerprints and smudges',
                'Dust and debris removal',
                'Spot-free, streak-free finish',
                'Attention to detail on every pane'
              ]}
            />
            <ServiceCard
              icon={<FiSun className="w-7 h-7" />}
              title="Screen Cleaning"
              description="Thorough screen cleaning service that removes dust, pollen, and debris. We carefully remove, clean, and reinstall your screens."
              features={[
                'Careful removal and reinstallation',
                'Deep cleaning of screen mesh',
                'Frame cleaning and maintenance',
                'Restores airflow and visibility',
                'Extends screen lifespan'
              ]}
            />
            <ServiceCard
              icon={<FiLayers className="w-7 h-7" />}
              title="Track Cleaning"
              description="Comprehensive window track cleaning that removes dirt, debris, and buildup. Essential for smooth window operation and cleanliness."
              features={[
                'Removes dirt and debris buildup',
                'Improves window operation',
                'Prevents future issues',
                'Complete track system cleaning',
                'Professional tools and techniques'
              ]}
            />
            <ServiceCard
              icon={<FiBriefcase className="w-7 h-7" />}
              title="Commercial Window Cleaning"
              description="Professional commercial window cleaning services for offices, retail stores, and commercial buildings. Flexible scheduling and bulk pricing available."
              features={[
                'Regular maintenance schedules',
                'Bulk pricing for multiple locations',
                'Flexible timing to minimize disruption',
                'High-rise and ground-level service',
                'Professional equipment and techniques'
              ]}
            />
            <ServiceCard
              icon={<FiDoor className="w-7 h-7" />}
              title="Glass Door Cleaning"
              description="Specialized cleaning for glass doors, sliding doors, and French doors. Includes frame, track, and hardware cleaning."
              features={[
                'Sliding door track cleaning',
                'French door frame cleaning',
                'Hardware maintenance',
                'Complete glass surface cleaning',
                'Enhanced curb appeal'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-charcoal-100">
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">Hard Water Removal</h3>
              <p className="text-charcoal-600 text-sm">
                Specialized treatment to remove hard water stains and mineral deposits from windows and glass surfaces.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-charcoal-100">
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">Skylight Cleaning</h3>
              <p className="text-charcoal-600 text-sm">
                Professional skylight cleaning using specialized equipment to safely reach and clean overhead glass.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-charcoal-100">
              <h3 className="text-xl font-semibold text-charcoal-950 mb-2">Gutter Cleaning</h3>
              <p className="text-charcoal-600 text-sm">
                Complete gutter cleaning service to complement your window cleaning and maintain your home's exterior.
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
