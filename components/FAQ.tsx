'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-charcoal-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex items-center justify-between hover:text-primary-700 transition-colors"
      >
        <span className="text-lg font-semibold text-charcoal-950 pr-8">{question}</span>
        {isOpen ? (
          <FiChevronUp className="w-5 h-5 text-charcoal-600 flex-shrink-0" />
        ) : (
          <FiChevronDown className="w-5 h-5 text-charcoal-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 text-charcoal-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const faqs = [
    {
      question: 'How much does window cleaning cost in Boca Raton?',
      answer: 'Our pricing is customized based on your specific needs, including the number of windows, service frequency, and location. We offer competitive, affordable rates for small businesses and strip malls. Contact us for a free, no-obligation quote tailored to your business.',
    },
    {
      question: 'Do you offer recurring window cleaning services?',
      answer: 'Yes! We offer biweekly and monthly recurring service plans. Recurring customers receive discounted rates and priority scheduling. There are no long-term contracts required, so you can adjust your service frequency as needed.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Boca Raton, Delray Beach, Deerfield Beach, and surrounding South Florida areas. We specialize in small businesses, retail storefronts, and strip malls throughout the region.',
    },
    {
      question: 'How often should I have my business windows cleaned?',
      answer: 'For most businesses, we recommend biweekly or monthly service to keep your storefront looking professional. The frequency depends on your location, foot traffic, and budget. We can help you determine the best schedule for your business.',
    },
    {
      question: 'Do you clean windows for strip malls?',
      answer: 'Absolutely! We specialize in strip mall window cleaning and offer volume pricing for multiple units. We can coordinate service across all your storefronts with a single point of contact, making it convenient and cost-effective.',
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we are fully insured and licensed. We carry comprehensive liability insurance to protect your property and our team while we work.',
    },
    {
      question: 'Can you work around my business hours?',
      answer: 'Yes! We understand that businesses need flexible scheduling. We offer early morning, after-hours, and weekend service options to minimize disruption to your operations.',
    },
    {
      question: 'What makes your service affordable?',
      answer: 'As FAU students, we keep our overhead low, which allows us to offer competitive rates without compromising on quality. We also offer discounts for recurring service and volume pricing for multiple locations.',
    },
    {
      question: 'Do I need to sign a contract?',
      answer: 'No, we don\'t require long-term contracts. You can start with a one-time service or recurring plan and adjust as your needs change. We believe in earning your business through quality service, not contracts.',
    },
    {
      question: 'How quickly can you provide a quote?',
      answer: 'We typically respond to quote requests within 24 hours. You can request a free quote through our website form, and we\'ll provide a customized estimate based on your specific needs.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal-700">
            Common questions about our affordable window cleaning services in Boca Raton
          </p>
        </div>
        <div className="bg-white rounded-xl border border-charcoal-100 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
