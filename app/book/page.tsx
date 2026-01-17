'use client'

import { useState } from 'react'
import CTAButton from '@/components/CTAButton'
import { FiCheckCircle } from 'react-icons/fi'
import { supabase } from '@/lib/supabase'

export default function Book() {
  const [formData, setFormData] = useState<{
    propertyType: string
    numberOfWindows: string
    serviceType: string[]
    location: string
    name: string
    email: string
    phone: string
    message: string
  }>({
    propertyType: '',
    numberOfWindows: '',
    serviceType: [],
    location: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({
      ...prev,
      serviceType: checked
        ? [...prev.serviceType, name]
        : prev.serviceType.filter(item => item !== name)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const { error: supabaseError } = await supabase
        .from('inquiries')
        .insert([
          {
            type: 'quote',
            property_type: formData.propertyType,
            number_of_windows: formData.numberOfWindows,
            service_type: formData.serviceType,
            location: formData.location,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message || null,
          },
        ])

      if (supabaseError) {
        throw supabaseError
      }

      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('There was an error submitting your request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 text-primary-700 mx-auto mb-6">
            <FiCheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-charcoal-950 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-charcoal-700 mb-8">
            We've received your quote request. Our team will contact you within 24 hours 
            with your personalized estimate.
          </p>
          <p className="text-charcoal-600 mb-8">
            In the meantime, feel free to call us at <a href="tel:+19043157978" className="text-primary-700 font-semibold">(904) 315-7978</a> 
            if you have any questions.
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
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-950 mb-6">
            Request a Free Quote
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed mb-4">
            Tell us about your business and we'll provide a custom quote tailored to your needs.
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
            <span>💼</span>
            <span>No obligation • Affordable rates</span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-charcoal-100 p-8 md:p-12 shadow-sm">
            {/* Property Type */}
            <div className="mb-8">
              <label htmlFor="propertyType" className="block text-sm font-semibold text-charcoal-950 mb-3">
                Property Type <span className="text-primary-700">*</span>
              </label>
              <select
                id="propertyType"
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              >
                <option value="">Select business type</option>
                <option value="retail">Retail Storefront</option>
                <option value="restaurant">Restaurant / Food Service</option>
                <option value="office">Office / Professional</option>
                <option value="strip-mall">Strip Mall / Multiple Units</option>
                <option value="salon">Salon / Spa</option>
                <option value="auto">Auto Repair / Service</option>
                <option value="other">Other Business</option>
              </select>
            </div>

            {/* Number of Windows */}
            <div className="mb-8">
              <label htmlFor="numberOfWindows" className="block text-sm font-semibold text-charcoal-950 mb-3">
                Approximate Number of Windows <span className="text-primary-700">*</span>
              </label>
              <select
                id="numberOfWindows"
                name="numberOfWindows"
                required
                value={formData.numberOfWindows}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              >
                <option value="">Select range</option>
                <option value="1-10">1-10 windows</option>
                <option value="11-20">11-20 windows</option>
                <option value="21-35">21-35 windows</option>
                <option value="36-50">36-50 windows</option>
                <option value="50+">50+ windows</option>
              </select>
            </div>

            {/* Service Type */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-charcoal-950 mb-3">
                Services Needed <span className="text-primary-700">*</span>
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="exterior"
                    checked={(formData.serviceType as string[]).includes('exterior')}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-primary-700 border-charcoal-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-charcoal-700">Exterior Window Cleaning</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="interior"
                    checked={(formData.serviceType as string[]).includes('interior')}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-primary-700 border-charcoal-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-charcoal-700">Interior Window Cleaning</span>
                </label>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <label htmlFor="location" className="block text-sm font-semibold text-charcoal-950 mb-3">
                Service Location <span className="text-primary-700">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="City, FL (e.g., Boca Raton, FL)"
                className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal-950 mb-3">
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
                <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-950 mb-3">
                  Phone Number <span className="text-primary-700">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(904) 315-7978"
                  className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-sm font-semibold text-charcoal-950 mb-3">
                Email Address <span className="text-primary-700">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              />
            </div>

            {/* Additional Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-charcoal-950 mb-3">
                Additional Details (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requirements, accessibility concerns, or questions..."
                className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary-700 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Request Free Quote'}
            </button>

            <p className="text-center text-sm text-charcoal-600 mt-4">
              By submitting this form, you agree to be contacted by CrystalClear Window Cleaning. 
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
