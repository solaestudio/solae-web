import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Work With Us',
  description:
    'Four engagement models for Canvas UGC campaigns. Strategic Consulting, Infrastructure Build, Full Campaign Management, and Ad Translation.',
}

const SECTION_PAD = 'py-24 lg:py-32'

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="min-h-screen flex items-end pb-24 px-8 relative overflow-hidden"
      aria-label="Work with us hero"
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(150deg, #2e231d 0%, #362c2a 55%, #302221 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderBottom: '0.5px solid #6b5645' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-content mx-auto w-full animate-fade-in">
        <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>Engagement models</p>
        <h1
          className="font-serif italic text-creme mb-7"
          style={{
            fontSize: 'clamp(44px, 6vw, 70px)',
            lineHeight: '1.1',
            letterSpacing: '-0.01em',
            maxWidth: '720px',
          }}
        >
          Four engagement models. Calibrated to where you are.
        </h1>
        <p
          className="font-sans text-creme"
          style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.65, maxWidth: '500px' }}
        >
          Strategic Consulting. Infrastructure Build. Full Campaign Management. Ad Translation.
          No pricing on the page — all engagements are assessed on a call.
        </p>
      </div>
    </section>
  )
}

// ─── Tiers ─────────────────────────────────────────────────────────────────────
interface TierProps {
  number: string
  title: string
  tagline: string
  includes: string[]
  rightFor: string
  isAlt?: boolean
}

function Tier({ number, title, tagline, includes, rightFor, isAlt }: TierProps) {
  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{
        backgroundColor: isAlt ? '#302221' : '#2e231d',
        borderTop: '0.5px solid #6b5645',
        borderBottom: '0.5px solid #6b5645',
      }}
      aria-label={`${title} engagement model`}
    >
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">

            {/* Left: tier label */}
            <div>
              <span
                className="font-serif italic text-gold block mb-4"
                style={{ fontSize: '28px' }}
              >
                {number}
              </span>
              <h2
                className="font-sans text-creme"
                style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {title}
              </h2>
            </div>

            {/* Right: content */}
            <div>
              <p
                className="font-serif italic text-creme mb-8"
                style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: '1.4', letterSpacing: '-0.005em' }}
              >
                {tagline}
              </p>

              <div className="mb-8" style={{ borderTop: '0.5px solid #6b5645' }}>
                {includes.map((item) => (
                  <p
                    key={item}
                    className="font-sans text-creme py-3"
                    style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.65, borderBottom: '0.5px solid #6b5645' }}
                  >
                    — {item}
                  </p>
                ))}
              </div>

              <div
                className="p-6 mb-10"
                style={{ backgroundColor: '#251c19', border: '0.5px solid #6b5645', borderRadius: '2px' }}
              >
                <p className="eyebrow mb-3" style={{ color: '#c8b89e' }}>Right for you if</p>
                <p
                  className="font-sans text-creme"
                  style={{ fontSize: '14px', lineHeight: '1.65', opacity: 0.65 }}
                >
                  {rightFor}
                </p>
              </div>

              <Button href="/contact" variant="primary">Book a discovery call</Button>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Add-on: Ad Translation ────────────────────────────────────────────────────
function AdTranslation() {
  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{ backgroundColor: '#362c2a', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="Ad Translation add-on"
    >
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div>
              <p className="eyebrow mb-4" style={{ color: '#c8b89e' }}>Add-on</p>
              <h2
                className="font-sans text-creme"
                style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Ad Translation
              </h2>
            </div>
            <div>
              <p
                className="font-serif italic text-creme mb-8"
                style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: '1.4', letterSpacing: '-0.005em' }}
              >
                The bridge from organic Canvas performance to paid distribution.
              </p>
              <p
                className="font-sans text-creme mb-8"
                style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65, maxWidth: '560px' }}
              >
                Available alongside any tier. Solae identifies the top-performing organic videos
                from a Canvas campaign and re-engineers them for paid: new hooks, sharper CTAs,
                optimized scripting, duplicated across creator avatars to hit every audience segment.
              </p>
              <div className="mb-10" style={{ borderTop: '0.5px solid #6b5645' }}>
                {[
                  'Top-performing organic video identification',
                  'New hook variants (3–5 per video)',
                  'CTA optimization for paid objectives',
                  'Creator avatar duplication for audience segmentation',
                ].map((item) => (
                  <p
                    key={item}
                    className="font-sans text-creme py-3"
                    style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.65, borderBottom: '0.5px solid #6b5645' }}
                  >
                    — {item}
                  </p>
                ))}
              </div>
              <Button href="/contact" variant="primary">Book a discovery call</Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function WorkWithUsPage() {
  return (
    <div className="page-transition">
      <Hero />
      <Tier
        number="01."
        title="Strategic Consulting"
        tagline="Solae advises. Your team executes."
        includes={[
          'Weekly strategy and coaching meetings',
          'Canvas UGC methodology training for your content team',
          'Script frameworks, creative briefs, and SOPs',
          'Creator briefing templates and approval workflow design',
          'Monthly performance review and direction adjustment',
        ]}
        rightFor="You already have a content team and want Solae's methodology, scripts, and oversight applied to their output. You want the system without the staffing."
      />
      <Tier
        number="02."
        title="Infrastructure Build"
        tagline="Solae builds the system. You run it day-to-day."
        includes={[
          'Full Canvas UGC system architecture',
          'Creator account setup across TikTok, Instagram, and YouTube',
          'Tracking platforms and performance dashboards',
          'Complete SOP library and creator briefing infrastructure',
          'Handoff training for in-house team',
        ]}
        rightFor="You want to own execution but need the system built correctly from the start. You have the team to run it — you need the architecture."
        isAlt
      />
      <Tier
        number="03."
        title="Full Campaign Management"
        tagline="Solae runs everything end-to-end."
        includes={[
          'Trained creator sourcing and onboarding',
          'Creative direction, script writing, and brief delivery',
          'Daily posting management across all accounts and platforms',
          'Weekly performance reporting and campaign direction',
          'Single point of contact — you approve, we execute',
        ]}
        rightFor="You want a turnkey operation. You have a product to market and no interest in managing a content operation internally. You want one accountable studio."
      />
      <AdTranslation />
    </div>
  )
}
