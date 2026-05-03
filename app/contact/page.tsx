'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <div className="page-transition">
      {/* Header */}
      <section
        className="pt-40 pb-16 px-8"
        style={{ borderBottom: '0.5px solid #6b5645' }}
        aria-label="Contact header"
      >
        <div className="max-w-content mx-auto animate-fade-in">
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>Contact</p>
          <h1
            className="font-serif italic text-creme mb-5"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              lineHeight: '1.1',
              letterSpacing: '-0.01em',
              maxWidth: '640px',
            }}
          >
            Start a conversation.
          </h1>
          <p
            className="font-sans text-creme"
            style={{ fontSize: '16px', lineHeight: '1.65', opacity: 0.6, maxWidth: '460px' }}
          >
            We respond within two business days.
          </p>
        </div>
      </section>

      {/* Form + aside */}
      <section className="py-24 lg:py-32 px-8" aria-label="Contact form and details">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr] gap-16 lg:gap-24">

            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-col gap-10 pt-0 md:pt-8">
                <div>
                  <p className="eyebrow mb-3" style={{ color: '#8a7a68' }}>Direct email</p>
                  <a
                    href="mailto:hello@solaestudio.com"
                    className="font-sans text-creme transition-opacity duration-300 hover:opacity-70"
                    style={{ fontSize: '14px' }}
                  >
                    hello@solaestudio.com
                  </a>
                </div>
                <div style={{ borderTop: '0.5px solid #6b5645', paddingTop: '24px' }}>
                  <p className="eyebrow mb-3" style={{ color: '#8a7a68' }}>Response time</p>
                  <p
                    className="font-sans text-creme"
                    style={{ fontSize: '14px', lineHeight: '1.65', opacity: 0.6 }}
                  >
                    We respond within two business days. Engagements are assessed for fit
                    before a call is scheduled.
                  </p>
                </div>
                <div style={{ borderTop: '0.5px solid #6b5645', paddingTop: '24px' }}>
                  <p className="eyebrow mb-3" style={{ color: '#8a7a68' }}>For Academy inquiries</p>
                  <p
                    className="font-sans text-creme"
                    style={{ fontSize: '14px', lineHeight: '1.65', opacity: 0.6 }}
                  >
                    If you are applying as a creator, select &ldquo;Academy / creator
                    training&rdquo; in the form above.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  )
}
