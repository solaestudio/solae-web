'use client'

import ScrollReveal from '@/components/ScrollReveal'
import Button from '@/components/Button'

const SECTION_PAD = 'py-24 lg:py-32'

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="min-h-screen flex items-end pb-24 px-8 relative overflow-hidden"
      aria-label="Who we work with hero"
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(145deg, #2e231d 0%, #3a2a23 60%, #362c2a 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderBottom: '0.5px solid #6b5645' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-content mx-auto w-full animate-fade-in">
        <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>Specialization</p>
        <h1
          className="font-serif italic text-creme mb-7"
          style={{
            fontSize: 'clamp(44px, 6vw, 70px)',
            lineHeight: '1.1',
            letterSpacing: '-0.01em',
            maxWidth: '760px',
          }}
        >
          Built for the products you can&rsquo;t put on a shelf.
        </h1>
        <p
          className="font-sans text-creme"
          style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.65, maxWidth: '520px' }}
        >
          Solae is not a generic UGC agency. We specialize in intangible goods — the categories
          where traditional advertising struggles because there is no physical product to show.
        </p>
      </div>
    </section>
  )
}

// ─── The intangibles thesis ────────────────────────────────────────────────────
function IntangibleThesis() {
  return (
    <section className={`${SECTION_PAD} px-8`} aria-label="The intangibles thesis">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <div className="max-w-prose">
            <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>Why Canvas UGC works for intangibles</p>
            <p
              className="font-sans text-creme mb-5"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              Traditional UGC was built for consumer products. You hand a creator a face wash or a
              protein powder and they show it in use. The product is its own advertisement. You can
              film it.
            </p>
            <p
              className="font-sans text-creme mb-5"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              Software, AI, financial services, and agencies cannot be filmed. What do you put on
              screen when the product is an algorithm? A dashboard? A contract? Most brands in these
              categories resort to polished explainer videos or abstract brand advertising — neither
              of which performs on the For You Page.
            </p>
            <p
              className="font-sans text-creme"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              Canvas UGC is built for this problem. Creators talk about value, outcomes, and
              transformation — not products. They script the experience of using something you
              can&rsquo;t hold. That is a skill Solae teaches, selects for, and runs at scale.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── The five verticals ────────────────────────────────────────────────────────
const verticals = [
  {
    number: '01.',
    title: 'AI companies and AI infrastructure',
    body:
      'The product is an algorithm — something a viewer has never touched and may not fully understand. Canvas creators translate AI capabilities into human outcomes: what it does, who it helps, what changes when you use it. No demo required.',
  },
  {
    number: '02.',
    title: 'SaaS and B2B software',
    body:
      'Software requires adoption, not just awareness. Canvas content shows the transformation — the before state, the friction removed, the result delivered. Day-in-the-life walkthroughs and problem/solution framings are the native formats for this category.',
  },
  {
    number: '03.',
    title: 'Tech and developer tools',
    body:
      'Developer tools have a specific, skeptical audience. They respond to peer-to-peer credibility, not brand polish. Canvas creators who speak the language of the audience — authentically, in a native format — convert where brand advertising fails.',
  },
  {
    number: '04.',
    title: 'Financial services',
    body:
      'Financial products require trust before consideration. Canvas content builds that trust over time through consistent, educational, non-salesy creator voices. Compound interest — in content and in brand authority.',
  },
  {
    number: '05.',
    title: 'Service-based businesses',
    body:
      'Agencies, consultancies, and professional services sell a relationship, not a deliverable. Canvas content humanizes the offering: who is behind it, what they believe, what working with them actually looks like. The product is the people.',
  },
]

function Verticals() {
  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{ backgroundColor: '#302221', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="Five verticals"
    >
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-12" style={{ color: '#c8b89e' }}>The five verticals</p>
        </ScrollReveal>
        <div className="flex flex-col gap-0">
          {verticals.map((v, i) => (
            <ScrollReveal key={v.number} delay={i * 60}>
              <div
                className="py-10"
                style={{ borderBottom: '0.5px solid #6b5645' }}
              >
                <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
                  <span
                    className="font-serif italic text-gold"
                    style={{ fontSize: '28px', lineHeight: 1 }}
                  >
                    {v.number}
                  </span>
                  <div>
                    <h2
                      className="font-sans text-creme mb-4"
                      style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.3' }}
                    >
                      {v.title}
                    </h2>
                    <p
                      className="font-sans text-creme"
                      style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.6, maxWidth: '600px' }}
                    >
                      {v.body}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Closing kicker + CTA ──────────────────────────────────────────────────────
function ClosingKicker() {
  return (
    <section className={`${SECTION_PAD} px-8`} aria-label="Closing kicker">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p
            className="font-serif italic text-creme mb-12"
            style={{
              fontSize: 'clamp(24px, 3.5vw, 38px)',
              lineHeight: '1.3',
              letterSpacing: '-0.01em',
              maxWidth: '680px',
            }}
          >
            Other agencies film products. We script the value of products you can&rsquo;t see.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Button href="/contact" variant="primary">Apply to work with Solae</Button>
            <Button href="/canvas-ugc" variant="secondary">Read the methodology</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function WhoWeWorkWithPage() {
  return (
    <div className="page-transition">
      <Hero />
      <IntangibleThesis />
      <Verticals />
      <ClosingKicker />
    </div>
  )
}
