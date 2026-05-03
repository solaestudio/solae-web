'use client'

import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
