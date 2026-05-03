import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Solae Studio',
  description:
    'Canvas UGC marketing for software, services, and the products you can\'t put on a shelf.',
}

// ─── Section spacing constants ────────────────────────────────────────────────
const SECTION_PAD = 'py-24 lg:py-32'

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end pb-20 lg:pb-28 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — placeholder for editorial product photography (TBD) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #302221 0%, #2e231d 55%, #3a2a23 100%)',
        }}
        aria-hidden="true"
      >
        {/* Subtle textile-grain overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 70% 40%, #44312a 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Hairline — bottom edge of hero */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderBottom: '0.5px solid #6b5645' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto px-8 w-full">
        <div className="max-w-prose animate-fade-in">

          {/* Eyebrow */}
          <p
            className="eyebrow mb-8"
            style={{ color: '#c8b89e' }}
          >
            Solae Studio
          </p>

          {/* Headline — Editorial Serif italic */}
          <h1
            className="font-serif italic text-creme mb-7"
            style={{
              fontSize: 'clamp(44px, 6vw, 72px)',
              lineHeight: '1.1',
              letterSpacing: '-0.01em',
            }}
          >
            A new engine for brand attention.
          </h1>

          {/* Subhead */}
          <p
            className="font-sans text-creme mb-12"
            style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.7, maxWidth: '520px' }}
          >
            Canvas UGC for software, services, and the products you can&rsquo;t put on a shelf.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Button href="/work-with-us" variant="primary">
              Work with the Studio
            </Button>
            <Button href="/academy" variant="secondary">
              Train at the Academy
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 02 — Two sides of one studio ─────────────────────────────────────
function WhatWeDo() {
  return (
    <section className={`${SECTION_PAD} max-w-content mx-auto px-8`} aria-label="What we do">
      <ScrollReveal>
        {/* Section headline */}
        <h2
          className="font-serif italic text-creme mb-16"
          style={{ fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
        >
          Two sides of one studio.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-px" style={{ borderTop: '0.5px solid #6b5645' }}>

        {/* Left — The Studio */}
        <ScrollReveal className="pt-10 pr-0 md:pr-16 pb-10" delay={0}>
          <p className="eyebrow mb-5" style={{ color: '#c8b89e' }}>The Studio</p>
          <h3
            className="font-serif text-creme mb-5"
            style={{ fontSize: '22px', lineHeight: '1.35' }}
          >
            The agency.
          </h3>
          <p
            className="font-sans text-creme mb-8"
            style={{ fontSize: '15px', lineHeight: '1.65', opacity: 0.65, maxWidth: '400px' }}
          >
            We build Canvas UGC campaigns for software companies, SaaS platforms, and service-based
            businesses. Calibrated for the products you can&rsquo;t put on a shelf. White-glove,
            by-invitation, and run end-to-end.
          </p>
          <Button href="/studio" variant="secondary">
            See the studio
          </Button>
        </ScrollReveal>

        {/* Right — The Academy */}
        <ScrollReveal
          className="pt-10 pl-0 md:pl-16 pb-10"
          delay={100}
          style={{ borderLeft: '0.5px solid #6b5645' }}
        >
          <p className="eyebrow mb-5" style={{ color: '#c8b89e' }}>The Academy</p>
          <h3
            className="font-serif text-creme mb-5"
            style={{ fontSize: '22px', lineHeight: '1.35' }}
          >
            The training program.
          </h3>
          <p
            className="font-sans text-creme mb-8"
            style={{ fontSize: '15px', lineHeight: '1.65', opacity: 0.65, maxWidth: '400px' }}
          >
            A creator training program for aspiring UGC specialists. Free community, paid
            curriculum, and direct placement opportunities on Solae campaigns. Built to produce
            creators who already know the methodology.
          </p>
          <Button href="/academy" variant="secondary">
            Join the Academy
          </Button>
        </ScrollReveal>

      </div>
    </section>
  )
}

// ─── Section 03 — The Method ───────────────────────────────────────────────────
function TheMethod() {
  const pillars = [
    {
      number: '01.',
      title: 'Owned accounts',
      body:
        'Every creator account and every video asset belongs to the brand — not rented, not shared, not platform-dependent. Built on your ground.',
    },
    {
      number: '02.',
      title: 'Native to the FYP',
      body:
        'No sponsored labels. No polished ad formats. Content that is indistinguishable from organic on TikTok, Instagram, and YouTube.',
    },
    {
      number: '03.',
      title: 'Compounding asset library',
      body:
        '12 creators, two posts daily, 90 days. 2,160 owned videos. A growing asset vault that produces compounding returns long after the campaign ends.',
    },
  ]

  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{ backgroundColor: '#302221', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="The method"
    >
      <div className="max-w-content mx-auto">

        <ScrollReveal>
          <p className="eyebrow mb-6" style={{ color: '#c8b89e' }}>The Method</p>
          <h2
            className="font-serif italic text-creme mb-14"
            style={{ fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
          >
            Canvas UGC — built on owned ground.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px mb-14">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.number} delay={i * 80}>
              <div
                className="pt-8 pr-0 md:pr-10 pb-8"
                style={{ borderTop: '0.5px solid #6b5645' }}
              >
                <span
                  className="font-serif italic text-gold block mb-4"
                  style={{ fontSize: '28px' }}
                >
                  {p.number}
                </span>
                <h3
                  className="font-sans text-creme mb-3"
                  style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.02em' }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-sans text-creme"
                  style={{ fontSize: '14px', lineHeight: '1.65', opacity: 0.6 }}
                >
                  {p.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <Button href="/canvas-ugc" variant="secondary">
            See how it&rsquo;s built
          </Button>
        </ScrollReveal>

      </div>
    </section>
  )
}

// ─── Section 04 — Who we work with ────────────────────────────────────────────
function WhoWeWorkWith() {
  const verticals = [
    ['AI companies and AI infrastructure', 'Where the product is the algorithm.'],
    ['SaaS and B2B software', 'Where value lives inside a dashboard.'],
    ['Tech and developer tools', 'Where the audience is builders.'],
    ['Financial services', 'Where trust is the product.'],
    ['Service-based businesses', 'Where the work is invisible until it is done.'],
  ]

  return (
    <section className={`${SECTION_PAD} max-w-content mx-auto px-8`} aria-label="Who we work with">

      <ScrollReveal>
        <h2
          className="font-serif italic text-creme mb-14"
          style={{ fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
        >
          Built for the products you can&rsquo;t put on a shelf.
        </h2>
      </ScrollReveal>

      <div className="mb-12">
        {verticals.map(([category, note], i) => (
          <ScrollReveal key={category} delay={i * 60}>
            <div
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-5"
              style={{ borderBottom: '0.5px solid #6b5645' }}
            >
              <span
                className="font-sans text-creme"
                style={{ fontSize: '15px', fontWeight: 400 }}
              >
                {category}
              </span>
              <span
                className="font-sans text-muted mt-1 sm:mt-0"
                style={{ fontSize: '13px', fontStyle: 'italic' }}
              >
                {note}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <Button href="/who-we-work-with" variant="secondary">
          See the specialization
        </Button>
      </ScrollReveal>

    </section>
  )
}

// ─── Section 05 — Stats ────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { figure: '$1–3', unit: 'CPM', label: 'Cost per thousand impressions on organic Canvas campaigns' },
    { figure: '10.38×', unit: null, label: 'Conversion lift attributed to creator-native content' },
    { figure: '2,160', unit: null, label: 'Owned videos produced in 90 days at default campaign scale' },
  ]

  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{
        backgroundColor: '#362c2a',
        borderTop: '0.5px solid #6b5645',
        borderBottom: '0.5px solid #6b5645',
      }}
      aria-label="Key statistics"
    >
      <div className="max-w-content mx-auto">

        <div className="grid md:grid-cols-3 gap-px">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80}>
              <div
                className="py-10 pr-0 md:pr-12"
                style={i > 0 ? { borderLeft: 'none', paddingLeft: 0 } : {}}
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="font-serif text-creme"
                    style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1, letterSpacing: '-0.01em' }}
                  >
                    {s.figure}
                  </span>
                  {s.unit && (
                    <span
                      className="font-serif italic text-gold"
                      style={{ fontSize: '22px' }}
                    >
                      {s.unit}
                    </span>
                  )}
                </div>
                <p
                  className="font-sans text-creme"
                  style={{ fontSize: '13px', lineHeight: '1.55', opacity: 0.55, maxWidth: '260px' }}
                >
                  {s.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p
            className="font-sans text-muted mt-8"
            style={{ fontSize: '10px', letterSpacing: '0.05em' }}
          >
            Based on Solae campaign benchmarks and platform attribution data. TBD external sources.
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}

// ─── Section 06 — CTA ──────────────────────────────────────────────────────────
function ClosingCta() {
  return (
    <section className={`${SECTION_PAD} max-w-content mx-auto px-8`} aria-label="Invitation">

      <ScrollReveal>
        <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>By invitation</p>
        <h2
          className="font-serif italic text-creme mb-5"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
        >
          Available by invitation.
        </h2>
        <p
          className="font-sans text-creme mb-12"
          style={{ fontSize: '16px', lineHeight: '1.65', opacity: 0.6, maxWidth: '480px' }}
        >
          We onboard a small number of new partners each quarter. Engagements are assessed for fit
          before a call is scheduled.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <Button href="/contact" variant="primary">
            Book a discovery call
          </Button>
          <Button href="/academy" variant="secondary">
            Join the Academy
          </Button>
        </div>
      </ScrollReveal>

    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="page-transition">
      <Hero />
      <WhatWeDo />
      <TheMethod />
      <WhoWeWorkWith />
      <Stats />
      <ClosingCta />
    </div>
  )
}
