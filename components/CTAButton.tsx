import Link from 'next/link'
import type { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary',
  className = '' 
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold transition-all duration-200 shadow-sm'
  
  const variants = {
    primary: 'bg-primary-700 text-white hover:bg-primary-800 hover:shadow-md',
    secondary: 'bg-charcoal-950 text-white hover:bg-charcoal-800 hover:shadow-md',
    outline: 'bg-white text-primary-700 border-2 border-primary-700 hover:bg-primary-50',
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
