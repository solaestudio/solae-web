'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
  external?: boolean
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
}: ButtonProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (variant === 'secondary') {
    return (
      <Link
        href={href}
        className={`btn-secondary ${className}`}
        {...externalProps}
      >
        {children}
        <em className="font-serif not-italic" style={{ fontStyle: 'italic' }}>→</em>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`btn-primary ${className}`}
      {...externalProps}
    >
      {children}
    </Link>
  )
}
