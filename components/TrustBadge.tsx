import { ReactNode } from 'react'

interface TrustBadgeProps {
  icon: ReactNode
  title: string
  description: string
}

export default function TrustBadge({ icon, title, description }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-700">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-charcoal-950">{title}</h3>
      <p className="text-sm text-charcoal-600 max-w-xs">{description}</p>
    </div>
  )
}
