'use client'

import ScrollReveal from '@/components/ScrollReveal'
import Button from '@/components/Button'

// ─── Page hero ─────────────────────────────────────────────────────────────────
function StudioHero() {
  return (
    <section
      className="min-h-screen flex items-end pb-24 px-8 overflow-hidden relative"
      aria-label="Studio hero"
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #2e231d 0%, #3a2a23 60%, #302221 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 80% 30%, #44312a 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderBottom: '0.5px solid #6b5645' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-content mx-auto w-full">
        <div className="animate-fade-in">
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>The Studio</p>
          <h1
            className="font-serif italic text-creme mb-7"
            style={{
              fontSize: 'clamp(44px, 6vw, 70px)',
              lineHeight: '1.1',
              letterSpacing: '-0.01em',
              maxWidth: '720px',
            }}
          >
            Built for the products people can&rsquo;t put on a shelf.
          </h1>
          <p
            className="font-sans text-creme"
            style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.65, maxWidth: '500px' }}
          >
            Solae Studio builds modern marketing engines for software companies, SaaS platforms,
            and service-based businesses. We script value where others film products.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── The studio manifesto ──────────────────────────────────────────────────────
function Manifesto() {
  return (
    <section className="py-24 lg:py-32 px-8" aria-label="Studio manifesto">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <div className="max-w-prose">
            <p className="eyebrow mb-10" style={{ color: '#c8b89e' }}>What we believe</p>
            <p
              className="font-serif italic text-creme mb-8"
              style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: '1.5', letterSpacing: '-0.005em' }}
            >
              Most agencies optimize for what&rsquo;s in the frame. We optimize for what&rsquo;s
              in the script.
            </p>
            <p
              className="font-sans text-creme mb-6"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              Attention moved to social platforms years ago. Ad budgets followed — but most
              creative strategy didn&rsquo;t. Brands that sell software, services, or AI have no
              product to hold up to a camera. They need creators who can explain value, build
              trust, and convert — without looking like an ad.
            </p>
            <p
              className="font-sans text-creme mb-6"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              That is what Canvas UGC is built to do. And it is what Solae is built to run.
            </p>
            <p
              className="font-sans text-creme"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              We are not a marketplace. We are not a talent agency. We are a studio — with a
              methodology, a trained creator pool, and a direct line between organic performance
              and paid amplification.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── The founders ──────────────────────────────────────────────────────────────
function Founders() {
  return (
    <section
      className="py-24 lg:py-32 px-8"
      style={{ backgroundColor: '#302221', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="The founders"
    >
      <div className="max-w-content mx-auto">

        <ScrollReveal>
          <p className="eyebrow mb-14" style={{ color: '#c8b89e' }}>The founders</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          <ScrollReveal delay={0}>
            {/* TBD: Replace with editorial portrait photograph */}
            <div
              className="w-full mb-8 bg-brown-saddle"
              style={{ aspectRatio: '3/4', maxWidth: '340px' }}
              aria-label="Portrait placeholder — Julia Mata (TBD)"
            />
            <h3
              className="font-serif italic text-creme mb-2"
              style={{ fontSize: '22px' }}
            >
              Julia Mata
            </h3>
            <p
              className="font-sans text-creme mb-5"
              style={{ fontSize: '13px', lineHeight: '1.65', opacity: 0.55 }}
            >
              Co-founder
            </p>
            <p
              className="font-sans text-creme"
              style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.65, maxWidth: '380px' }}
            >
              Julia Mata co-founded Solae Studio in MMXXVI. Her background spans six years of
              marketing strategy and creator-led campaign architecture. She holds a degree in
              Business Administration from the University of Southern California, with
              concentrations in marketing and entrepreneurship.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {/* TBD: Replace with editorial portrait photograph */}
            <div
              className="w-full mb-8 bg-brown-chestnut"
              style={{ aspectRatio: '3/4', maxWidth: '340px' }}
              aria-label="Portrait placeholder — Keli (TBD)"
            />
            <h3
              className="font-serif italic text-creme mb-2"
              style={{ fontSize: '22px' }}
            >
              Keli
            </h3>
            <p
              className="font-sans text-creme mb-5"
              style={{ fontSize: '13px', lineHeight: '1.65', opacity: 0.55 }}
            >
              Co-founder
            </p>
            <p
              className="font-sans text-creme"
              style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.65, maxWidth: '380px' }}
            >
              {/* TBD: Full bio pending */}
              Keli co-founded Solae Studio in MMXXVI. Her background spans six years of
              marketing strategy and campaign execution. She holds a degree in Business
              Administration from the University of Southern California, with concentrations in
              marketing and entrepreneurship.
            </p>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

// ─── Methodology overview ──────────────────────────────────────────────────────
function MethodologyOverview() {
  return (
    <section className="py-24 lg:py-32 px-8" aria-label="Methodology overview">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <ScrollReveal>
            <p className="eyebrow mb-6" style={{ color: '#c8b89e' }}>The methodology</p>
            <h2
              className="font-serif italic text-creme mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', lineHeight: '1.25', letterSpacing: '-0.01em' }}
            >
              An owned audience. An asset vault. A signal that compounds.
            </h2>
            <p
              className="font-sans text-creme mb-8"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              Canvas UGC is Solae&rsquo;s proprietary marketing model — a microinfluencer system
              built on owned ground. Every creator account, every video, every post: brand-owned.
              No platform dependency. No rented reach. A library that grows every day.
            </p>
            <Button href="/canvas-ugc" variant="secondary">
              Read the methodology
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-0" style={{ borderTop: '0.5px solid #6b5645' }}>
              {[
                ['Two arms', 'An agency for brands and an academy for creators — one flywheel, no competing operator.'],
                ['Four engagement models', 'Strategic Consulting, Infrastructure Build, Full Campaign Management, and Ad Translation. Calibrated to where you are.'],
                ['Trained creator pool', 'Academy graduates staff agency campaigns. Every creator already knows the system.'],
              ].map(([title, body]) => (
                <div
                  key={title as string}
                  className="py-6"
                  style={{ borderBottom: '0.5px solid #6b5645' }}
                >
                  <p
                    className="font-sans text-creme mb-2"
                    style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.02em' }}
                  >
                    — {title}
                  </p>
                  <p
                    className="font-sans text-creme"
                    style={{ fontSize: '13px', lineHeight: '1.65', opacity: 0.55 }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function StudioPage() {
  return (
    <div className="page-transition">
      <StudioHero />
      <Manifesto />
      <Founders />
      <MethodologyOverview />
    </div>
  )
}
