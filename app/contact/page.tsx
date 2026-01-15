'use client'

import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import CTAButton from '@/components/CTAButton'
import { FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to your backend/email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 text-primary-700 mx-auto mb-6">
            <FiCheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-charcoal-950 mb-4">
            Message Sent!
          </h1>
          <p className="text-xl text-charcoal-700 mb-8">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <CTAButton href="/" variant="primary">
            Return to Home
          </CTAButton>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed">
            Have questions? We're here to help. Reach out and we'll respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal-950 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-950 mb-1">Phone</h3>
                    <a href="tel:+15612345678" className="text-charcoal-700 hover:text-primary-700 transition-colors">
                      (561) 234-5678
                    </a>
                    <p className="text-sm text-charcoal-600 mt-1">Mon-Sat: 8am-6pm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-950 mb-1">Email</h3>
                    <a href="mailto:info@crystalclearwindows.com" className="text-charcoal-700 hover:text-primary-700 transition-colors">
                      info@crystalclearwindows.com
                    </a>
                    <p className="text-sm text-charcoal-600 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-950 mb-1">Service Area</h3>
                    <p className="text-charcoal-700">
                      Boca Raton, Delray Beach,<br />
                      Deerfield Beach, & Surrounding Areas
                    </p>
                    <p className="text-sm text-charcoal-600 mt-1">South Florida</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700">
                    <FiClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-950 mb-1">Business Hours</h3>
                    <p className="text-charcoal-700">
                      Monday - Saturday: 8:00 AM - 6:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area Map Placeholder */}
              <div className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-100">
                <h3 className="font-semibold text-charcoal-950 mb-4">Service Area</h3>
                <div className="aspect-video bg-white rounded-lg border border-charcoal-200 flex items-center justify-center">
                  <div className="text-center">
                    <FiMapPin className="w-12 h-12 text-primary-700 mx-auto mb-2" />
                    <p className="text-sm text-charcoal-600">
                      Map integration available<br />
                      Serving Boca Raton & South Florida
                    </p>
                  </div>
                </div>
                <p className="text-sm text-charcoal-600 mt-4 text-center">
                  We serve Boca Raton, Delray Beach, Deerfield Beach, and surrounding South Florida areas.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal-950 mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal-950 mb-2">
                    Full Name <span className="text-primary-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal-950 mb-2">
                    Email Address <span className="text-primary-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-950 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-charcoal-950 mb-2">
                    Subject <span className="text-primary-700">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="question">General Question</option>
                    <option value="service">Service Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal-950 mb-2">
                    Message <span className="text-primary-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-700 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="px-4 sm:px-6 lg:px-8 bg-primary-50 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-4">
            Ready for a Quote?
          </h2>
          <p className="text-xl text-charcoal-700 mb-8">
            Get your instant quote in 60 seconds. No obligation, transparent pricing.
          </p>
          <CTAButton href="/book" variant="primary" className="text-lg px-10 py-4">
            Get Instant Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
