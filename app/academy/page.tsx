import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Solae Academy',
  description:
    'A creator training program built inside a working studio. Free community, paid curriculum, and real placement opportunities.',
}

const SECTION_PAD = 'py-24 lg:py-32'

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="min-h-screen flex items-end pb-24 px-8 relative overflow-hidden"
      aria-label="Academy hero"
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(155deg, #2e231d 0%, #44312a 55%, #302221 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderBottom: '0.5px solid #6b5645' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-content mx-auto w-full animate-fade-in">
        <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>Solae Academy</p>
        <h1
          className="font-serif italic text-creme mb-7"
          style={{
            fontSize: 'clamp(44px, 6vw, 70px)',
            lineHeight: '1.1',
            letterSpacing: '-0.01em',
            maxWidth: '760px',
          }}
        >
          A creator&rsquo;s training, built on a working studio.
        </h1>
        <p
          className="font-sans text-creme mb-12"
          style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.65, maxWidth: '520px' }}
        >
          Solae Academy trains aspiring UGC creators in the Canvas method. Free community,
          structured curriculum, and direct placement on Solae campaigns.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <Button href="/contact" variant="primary">Apply for the next cohort</Button>
          <Button href="#community" variant="secondary">Explore the community</Button>
        </div>
      </div>
    </section>
  )
}

// ─── Free community ────────────────────────────────────────────────────────────
function FreeCommunity() {
  return (
    <section
      id="community"
      className={`${SECTION_PAD} px-8`}
      style={{ borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="Free community"
    >
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <ScrollReveal>
            <p className="eyebrow mb-4" style={{ color: '#c8b89e' }}>Free</p>
            <h2
              className="font-sans text-creme uppercase"
              style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em' }}
            >
              The Community
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p
              className="font-serif italic text-creme mb-6"
              style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: '1.4', letterSpacing: '-0.005em' }}
            >
              An open community for aspiring UGC creators. No cost to join.
            </p>
            <p
              className="font-sans text-creme mb-8"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65, maxWidth: '560px' }}
            >
              The Discord is where creators talk, share work, ask questions, and engage with
              Solae content before committing to the course. It is the first step — not a upsell
              waiting room.
            </p>
            <div className="mb-10" style={{ borderTop: '0.5px solid #6b5645' }}>
              {[
                'Portfolio feedback channel',
                'Questions and methodology discussion',
                'Masterclass announcements',
                'Goal-setting and start-here modules',
                'Job board application access for graduates',
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
            {/* TBD: Discord invite link */}
            <Button href="#" variant="secondary" external>
              Join the Discord
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── Free value library ────────────────────────────────────────────────────────
function FreeLibrary() {
  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{ backgroundColor: '#302221', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="Free value library"
    >
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <ScrollReveal>
            <p className="eyebrow mb-4" style={{ color: '#c8b89e' }}>Free</p>
            <h2
              className="font-sans text-creme uppercase"
              style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em' }}
            >
              Free Value Library
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p
              className="font-serif italic text-creme mb-6"
              style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: '1.4', letterSpacing: '-0.005em' }}
            >
              Long-form modules. Structured library. No paywall.
            </p>
            <p
              className="font-sans text-creme mb-8"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65, maxWidth: '560px' }}
            >
              {/* TBD: Platform finalized — Skool or Whop */}
              The free library lives on a dedicated platform (TBD — Skool or Whop). Intro
              courses, script templates, real examples from Canvas campaigns, and a structured
              framework for understanding the methodology. It is a genuine introduction to
              the system — not a teaser.
            </p>
            {/* TBD: Platform link */}
            <Button href="#" variant="secondary" external>
              Access the library
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── The course ────────────────────────────────────────────────────────────────
function TheCourse() {
  return (
    <section
      id="course"
      className={`${SECTION_PAD} px-8`}
      style={{ borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="The paid course"
    >
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <ScrollReveal>
            {/* TBD: Pricing $297–$450 */}
            <p className="eyebrow mb-4" style={{ color: '#c8b89e' }}>Paid — pricing TBD</p>
            <h2
              className="font-sans text-creme uppercase"
              style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em' }}
            >
              The Course
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p
              className="font-serif italic text-creme mb-6"
              style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: '1.4', letterSpacing: '-0.005em' }}
            >
              The full curriculum. From first gig to five-figure months.
            </p>
            <p
              className="font-sans text-creme mb-8"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65, maxWidth: '560px' }}
            >
              {/* TBD: Final curriculum modules */}
              The complete Canvas UGC creator program. Built for aspiring creators who want to
              build a professional UGC practice — and for those who want direct access to Solae
              campaign placements.
            </p>
            <div className="mb-10" style={{ borderTop: '0.5px solid #6b5645' }}>
              {[
                'All training modules — starting out, getting gigs, scaling',
                'Bi-weekly portfolio review meetings',
                'Coaching calls with Solae team',
                'All scripts, templates, contracts, and creator-business infrastructure',
                'Access to the Solae Job Board',
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
            <Button href="/contact" variant="primary">Apply for the next cohort</Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── The job board ─────────────────────────────────────────────────────────────
function JobBoard() {
  return (
    <section
      id="job-board"
      className={`${SECTION_PAD} px-8`}
      style={{ backgroundColor: '#362c2a', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="The job board"
    >
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>The job board</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="font-serif italic text-creme mb-6"
                style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: '1.25', letterSpacing: '-0.01em' }}
              >
                The studio&rsquo;s clients. Your portfolio.
              </h2>
              <p
                className="font-sans text-creme"
                style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
              >
                Course graduates can apply to staff Solae&rsquo;s own client campaigns or be
                referred to external placement opportunities. This is the structural payoff —
                training that leads directly to professional work.
              </p>
            </div>
            <div className="flex flex-col gap-0" style={{ borderTop: '0.5px solid #6b5645' }}>
              {[
                ['Course graduates', 'Priority access to all job board placements and Solae campaign staffing.'],
                ['Experienced creators', 'Creators with 5+ verified gigs may apply directly, without the course. Reviewed on a case-by-case basis.'],
                ['Placement types', 'Solae agency campaigns, external brand referrals, and partner network opportunities.'],
              ].map(([title, body]) => (
                <div
                  key={title as string}
                  className="py-5"
                  style={{ borderBottom: '0.5px solid #6b5645' }}
                >
                  <p
                    className="font-sans text-creme mb-1"
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Waitlist CTA ──────────────────────────────────────────────────────────────
function WaitlistCta() {
  return (
    <section className={`${SECTION_PAD} px-8`} aria-label="Application CTA">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>Applications</p>
          <h2
            className="font-serif italic text-creme mb-5"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Train with the Studio.
          </h2>
          <p
            className="font-sans text-creme mb-12"
            style={{ fontSize: '16px', lineHeight: '1.65', opacity: 0.6, maxWidth: '460px' }}
          >
            Cohorts are small and assessed for commitment. Applications open before each
            enrollment period.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Button href="/contact" variant="primary">Apply for the next cohort</Button>
            {/* TBD: Discord invite link */}
            <Button href="#" variant="secondary" external>Join the free community</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function AcademyPage() {
  return (
    <div className="page-transition">
      <Hero />
      <FreeCommunity />
      <FreeLibrary />
      <TheCourse />
      <JobBoard />
      <WaitlistCta />
    </div>
  )
}
