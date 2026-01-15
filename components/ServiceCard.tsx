import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features?: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-charcoal-100 p-8 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary-50 text-primary-700 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-charcoal-950 mb-2">{title}</h3>
      <p className="text-charcoal-600 mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-charcoal-600">
              <span className="text-primary-700 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
