'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PRIMARY_LINKS = [
  ['Studio', '/studio'],
  ['The Method', '/canvas-ugc'],
  ['Work With Us', '/work-with-us'],
  ['Academy', '/academy'],
] as const

const ALL_LINKS = [
  ['Studio', '/studio'],
  ['The Method', '/canvas-ugc'],
  ['Work With Us', '/work-with-us'],
  ['Who We Work With', '/who-we-work-with'],
  ['Academy', '/academy'],
  ['Contact', '/contact'],
] as const

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(46,35,29,0.97)' : 'transparent',
          borderBottom: scrolled ? '0.5px solid #6b5645' : 'none',
        }}
      >
        <div
          className="max-w-content mx-auto px-8 flex items-center justify-between"
          style={{ height: '72px' }}
        >
          {/* Wordmark — Lockup A */}
          <Link
            href="/"
            className="font-sans text-creme uppercase text-[13px] tracking-wide transition-opacity duration-300 hover:opacity-70"
            style={{ letterSpacing: '0.45em' }}
          >
            Solae Studio
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {PRIMARY_LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-[11px] uppercase transition-opacity duration-300"
                style={{
                  letterSpacing: '0.15em',
                  color: pathname === href ? '#c8b89e' : '#e5e0d4',
                  opacity: pathname === href ? 1 : 0.65,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity =
                    pathname === href ? '1' : '0.65')
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden font-sans text-[11px] uppercase text-creme"
            style={{ letterSpacing: '0.2em' }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className="fixed inset-0 z-[100] bg-brown flex flex-col justify-center px-10 md:hidden transition-opacity duration-500"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        aria-hidden={!menuOpen}
      >
        {/* Close */}
        <button
          className="absolute top-6 right-8 font-sans text-[11px] uppercase text-creme/60"
          style={{ letterSpacing: '0.2em' }}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          Close
        </button>

        {/* Chapter-index style links */}
        <nav className="flex flex-col gap-6" aria-label="Mobile primary">
          {ALL_LINKS.map(([label, href], i) => (
            <Link
              key={href}
              href={href}
              className="font-serif italic text-creme transition-opacity duration-300 hover:opacity-70"
              style={{ fontSize: 'clamp(28px, 8vw, 44px)' }}
            >
              <span className="text-muted font-sans text-[11px] not-italic mr-4 align-middle" style={{ letterSpacing: '0.1em' }}>
                {String(i + 1).padStart(2, '0')}.
              </span>
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-16 divider pt-8">
          <p className="font-sans text-[11px] uppercase text-muted" style={{ letterSpacing: '0.2em' }}>
            Solae Studio · MMXXVI
          </p>
        </div>
      </div>
    </>
  )
}
