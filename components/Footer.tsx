'use client'

import Link from 'next/link'

const STUDIO_LINKS = [
  ['The Studio', '/studio'],
  ['Canvas UGC', '/canvas-ugc'],
  ['Work With Us', '/work-with-us'],
  ['Who We Work With', '/who-we-work-with'],
]

const ACADEMY_LINKS = [
  ['Solae Academy', '/academy'],
  ['The Course', '/academy#course'],
  ['The Job Board', '/academy#job-board'],
  ['Contact', '/contact'],
]

export default function Footer() {
  return (
    <footer className="bg-brown-deep" style={{ borderTop: '0.5px solid #6b5645' }}>
      <div className="max-w-content mx-auto px-8 py-20 lg:py-24">

        {/* Wordmark */}
        <div className="mb-14">
          <span
            className="font-sans text-creme uppercase"
            style={{ fontSize: '18px', letterSpacing: '0.48em' }}
          >
            Solae Studio
          </span>
        </div>

        {/* Site map + contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14" style={{ borderTop: '0.5px solid #6b5645', paddingTop: '40px' }}>

          <div>
            <p className="eyebrow text-muted mb-5">Studio</p>
            <nav className="flex flex-col gap-3">
              {STUDIO_LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-sans text-[13px] text-creme transition-opacity duration-300 hover:opacity-100"
                  style={{ opacity: 0.55 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.55')}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="eyebrow text-muted mb-5">Academy</p>
            <nav className="flex flex-col gap-3">
              {ACADEMY_LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-sans text-[13px] text-creme transition-opacity duration-300"
                  style={{ opacity: 0.55 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.55')}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="eyebrow text-muted mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@solaestudio.com"
                className="font-sans text-[13px] text-creme transition-opacity duration-300"
                style={{ opacity: 0.55 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.55')}
              >
                hello@solaestudio.com
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-muted mb-5">Follow</p>
            <div className="flex flex-col gap-3">
              {/* TBD: replace with actual handles */}
              {['Instagram', 'TikTok', 'YouTube'].map((handle) => (
                <a
                  key={handle}
                  href="#"
                  className="font-sans text-[13px] text-creme transition-opacity duration-300"
                  style={{ opacity: 0.55 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.55')}
                >
                  {handle}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-14 max-w-sm" style={{ borderTop: '0.5px solid #6b5645', paddingTop: '40px' }}>
          <p className="eyebrow text-muted mb-6">Studio Notes</p>
          <p className="font-sans text-[13px] text-creme mb-5" style={{ opacity: 0.55 }}>
            Methodology, observations, and occasional dispatches from the studio.
          </p>
          <form
            className="flex gap-3"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <div className="flex-1 relative">
              <label
                htmlFor="footer-email"
                className="eyebrow text-muted absolute -top-5 left-0"
                style={{ fontSize: '9px' }}
              >
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                className="field"
                required
              />
            </div>
            <button type="submit" className="btn-primary" style={{ padding: '8px 20px', fontSize: '11px' }}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '0.5px solid #6b5645', paddingTop: '24px' }}>
          <p className="font-sans text-[11px] text-muted" style={{ letterSpacing: '0.08em' }}>
            Solae Studio · MMXXVI
          </p>
        </div>

      </div>
    </footer>
  )
}
