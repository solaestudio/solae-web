'use client'

import ScrollReveal from '@/components/ScrollReveal'
import Button from '@/components/Button'

const SECTION_PAD = 'py-24 lg:py-32'

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="min-h-screen flex items-end pb-24 px-8 relative overflow-hidden"
      aria-label="Canvas UGC hero"
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(150deg, #2e231d 0%, #302221 50%, #362c2a 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderBottom: '0.5px solid #6b5645' }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-content mx-auto w-full animate-fade-in">
        <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>The Method</p>
        <h1
          className="font-serif italic text-creme mb-7"
          style={{
            fontSize: 'clamp(44px, 6vw, 70px)',
            lineHeight: '1.1',
            letterSpacing: '-0.01em',
            maxWidth: '760px',
          }}
        >
          Canvas UGC — a microinfluencer system built on owned ground.
        </h1>
        <p
          className="font-sans text-creme"
          style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.65, maxWidth: '520px' }}
        >
          Not rented reach. Not a marketplace. An owned content engine that compounds daily.
        </p>
      </div>
    </section>
  )
}

// ─── 01. The shift ─────────────────────────────────────────────────────────────
function TheShift() {
  return (
    <section className={`${SECTION_PAD} px-8`} aria-label="The shift">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>01. The shift</p>
          <div className="max-w-prose">
            <h2
              className="font-serif italic text-creme mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: '1.25', letterSpacing: '-0.01em' }}
            >
              Attention moved. Ad budgets followed. Creative strategy didn&rsquo;t.
            </h2>
            <p
              className="font-sans text-creme mb-5"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              The For You Page is the most powerful discovery engine ever built. It surfaces
              content based on behavior, not follower count. A new account with no audience can
              reach a million people in 48 hours — if the content earns it.
            </p>
            <p
              className="font-sans text-creme"
              style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
            >
              Most brands are still running pre-roll ads and polished brand videos into this
              environment. They are paying a $30–40 CPM for content that the algorithm routes
              around. Canvas UGC is the alternative — native, owned, and built for the feed.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── 02. What Canvas UGC is ────────────────────────────────────────────────────
function WhatItIs() {
  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{ backgroundColor: '#302221', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="What Canvas UGC is"
    >
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>02. What it is</p>
          <h2
            className="font-serif italic text-creme mb-14"
            style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: '1.25', letterSpacing: '-0.01em' }}
          >
            A team of creators. Brand-new accounts. Posting every day. Owned by you.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <div className="flex flex-col gap-0" style={{ borderTop: '0.5px solid #6b5645' }}>
              {[
                ['12+ creators', 'Typical campaign size. Scales to match goals, budget, and reach targets.'],
                ['Brand-new accounts', 'Each creator spins up fresh TikTok, Instagram, and YouTube accounts for the campaign.'],
                ['1–2 posts per day', 'Every creator, every platform, cross-pollinated. Volume is the engine.'],
                ['3-month minimum', 'The compounding effect requires time. Campaigns are built for longevity, not spikes.'],
                ['Brand owns everything', 'Every account. Every video asset. Forever. No marketplace dependencies.'],
              ].map(([title, body]) => (
                <div
                  key={title as string}
                  className="py-5"
                  style={{ borderBottom: '0.5px solid #6b5645' }}
                >
                  <p
                    className="font-sans text-creme mb-1"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    — {title}
                  </p>
                  <p
                    className="font-sans text-creme"
                    style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.55 }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div
              className="p-8"
              style={{
                backgroundColor: '#251c19',
                border: '0.5px solid #6b5645',
                borderRadius: '2px',
              }}
            >
              <p className="eyebrow mb-6" style={{ color: '#c8b89e' }}>The math at default scale</p>
              <div className="flex flex-col gap-4 mb-6">
                {[
                  ['12 creators', ''],
                  ['× 2 posts / day', ''],
                  ['× 3 platforms', ''],
                  ['× 90 days', ''],
                ].map(([line]) => (
                  <p
                    key={line as string}
                    className="font-serif text-creme"
                    style={{ fontSize: '22px' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div style={{ borderTop: '0.5px solid #6b5645', paddingTop: '20px' }}>
                <p
                  className="font-serif italic text-gold"
                  style={{ fontSize: '28px' }}
                >
                  2,160 owned videos.
                </p>
                <p
                  className="font-sans text-muted mt-2"
                  style={{ fontSize: '12px', letterSpacing: '0.05em' }}
                >
                  In 90 days. 8,000+ in a full year.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── 03. Canvas vs. Traditional UGC ───────────────────────────────────────────
function CanvasVsTraditional() {
  const rows = [
    ['Account ownership', 'Brand owns accounts', 'Creator owns accounts'],
    ['Asset ownership', 'Brand owns all video assets', 'Creator retains rights (usage fees)'],
    ['Volume', '2,160+ videos / 90 days', '10–30 videos / month typical'],
    ['Compounding', 'Account authority builds over time', 'Each campaign starts from zero'],
    ['Cost per impression', '$1–3 CPM organic', '$25–40+ CPM paid placement'],
    ['Ad translation', 'Top performers re-cut for paid', 'Not structured for paid integration'],
  ]

  return (
    <section className={`${SECTION_PAD} px-8`} aria-label="Canvas vs traditional UGC">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>03. Canvas vs. traditional</p>
          <h2
            className="font-serif italic text-creme mb-12"
            style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: '1.25', letterSpacing: '-0.01em' }}
          >
            Other agencies rent reach. We build it.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '0.5px solid #6b5645' }}>
                  <th
                    className="eyebrow text-left pb-4 pr-8"
                    style={{ color: '#8a7a68', width: '30%' }}
                  />
                  <th
                    className="eyebrow text-left pb-4 pr-8"
                    style={{ color: '#c8b89e', width: '35%' }}
                  >
                    Canvas UGC
                  </th>
                  <th
                    className="eyebrow text-left pb-4"
                    style={{ color: '#8a7a68', width: '35%' }}
                  >
                    Traditional UGC
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, canvas, trad]) => (
                  <tr key={label} style={{ borderBottom: '0.5px solid #6b5645' }}>
                    <td
                      className="font-sans text-muted py-4 pr-8"
                      style={{ fontSize: '12px', letterSpacing: '0.03em' }}
                    >
                      {label}
                    </td>
                    <td
                      className="font-sans text-creme py-4 pr-8"
                      style={{ fontSize: '14px', lineHeight: '1.5' }}
                    >
                      {canvas}
                    </td>
                    <td
                      className="font-sans text-creme py-4"
                      style={{ fontSize: '14px', lineHeight: '1.5', opacity: 0.45 }}
                    >
                      {trad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── 04–05. Why it works ───────────────────────────────────────────────────────
function WhyItWorks() {
  const pillars = [
    {
      number: '04.',
      title: 'Disguised placement',
      body: 'Viewers do not recognize Canvas content as marketing. No sponsored labels, no ad polish, no brand overlays. The content earns trust before it earns a click.',
    },
    {
      number: '05.',
      title: 'Creator-directed scripts',
      body: 'Talking-head explainers, day-in-the-life walkthroughs, problem/solution framings, trend reframings. Formats native to the platform — not repurposed from TV.',
    },
    {
      number: '06.',
      title: 'Brand control spectrum',
      body: 'Give creative direction, give creative freedom, or use a hybrid approval workflow. The system accommodates tight brand standards and loose experimentation equally.',
    },
  ]

  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{ backgroundColor: '#362c2a', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="Why it works"
    >
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>Why it works</p>
          <h2
            className="font-serif italic text-creme mb-14"
            style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: '1.25', letterSpacing: '-0.01em' }}
          >
            Three reasons Canvas content converts.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-0" style={{ borderTop: '0.5px solid #6b5645' }}>
          {pillars.map((p, i) => (
            <ScrollReveal key={p.number} delay={i * 80}>
              <div className="pt-8 pr-0 md:pr-10 pb-8" style={{ borderBottom: '0.5px solid #6b5645' }}>
                <span className="font-serif italic text-gold block mb-5" style={{ fontSize: '28px' }}>
                  {p.number}
                </span>
                <h3
                  className="font-sans text-creme mb-3"
                  style={{ fontSize: '15px', fontWeight: 500 }}
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
      </div>
    </section>
  )
}

// ─── 07. The numbers ───────────────────────────────────────────────────────────
function TheNumbers() {
  return (
    <section className={`${SECTION_PAD} px-8`} aria-label="The numbers">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>07. The numbers</p>
          <h2
            className="font-serif italic text-creme mb-14"
            style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: '1.25', letterSpacing: '-0.01em' }}
          >
            Reach, trust, and conversion — at native CPM.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-0 mb-10" style={{ borderTop: '0.5px solid #6b5645' }}>
          {[
            { figure: '$1–3', label: 'CPM', sub: 'Cost per thousand impressions on organic Canvas campaigns' },
            { figure: '10.38×', label: null, sub: 'Conversion lift attributed to creator-native, non-ad content' },
            { figure: '92%', label: null, sub: 'Of consumers report trusting peer recommendations over brand ads' },
          ].map((s, i) => (
            <ScrollReveal key={s.sub} delay={i * 80}>
              <div className="pt-8 pr-0 md:pr-12 pb-8" style={{ borderBottom: '0.5px solid #6b5645' }}>
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="font-serif text-creme"
                    style={{ fontSize: 'clamp(36px, 5vw, 52px)', lineHeight: 1 }}
                  >
                    {s.figure}
                  </span>
                  {s.label && (
                    <span className="font-serif italic text-gold" style={{ fontSize: '20px' }}>
                      {s.label}
                    </span>
                  )}
                </div>
                <p
                  className="font-sans text-creme"
                  style={{ fontSize: '13px', lineHeight: '1.55', opacity: 0.55 }}
                >
                  {s.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="font-sans text-muted" style={{ fontSize: '10px', letterSpacing: '0.05em' }}>
            Based on Solae campaign benchmarks and platform attribution data. TBD external citation sources.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── 09. Compounding asset library ────────────────────────────────────────────
function AssetLibrary() {
  return (
    <section
      className={`${SECTION_PAD} px-8`}
      style={{ backgroundColor: '#302221', borderTop: '0.5px solid #6b5645', borderBottom: '0.5px solid #6b5645' }}
      aria-label="Compounding asset library"
    >
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>09. The compounding library</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="font-serif italic text-creme mb-7"
                style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: '1.25', letterSpacing: '-0.01em' }}
              >
                An asset vault that grows every day — long after the campaign ends.
              </h2>
              <p
                className="font-sans text-creme mb-5"
                style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
              >
                Traditional ad campaigns produce 20–30 assets. Canvas UGC produces 2,160 in
                the first 90 days. Each piece of organic content that performs can be
                re-cut as a paid ad — new hooks, sharper CTAs, duplicated across creator
                avatars to reach every audience segment.
              </p>
              <p
                className="font-sans text-creme"
                style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.65 }}
              >
                This is the Ad Translation tier — the bridge between organic Canvas
                performance and paid distribution. Top performers go from For You Page to
                ad account with one decision.
              </p>
            </div>
            <div className="flex flex-col gap-0" style={{ borderTop: '0.5px solid #6b5645' }}>
              {[
                ['Month 1', '720 owned videos across all creators and platforms.'],
                ['Month 2', '1,440 total. Account authority begins building on top performers.'],
                ['Month 3', '2,160 total. Compounding effect measurable. Ad translation begins.'],
                ['Month 12', '8,640+ total. A full content library. A permanent brand asset.'],
              ].map(([period, body]) => (
                <div
                  key={period as string}
                  className="py-5"
                  style={{ borderBottom: '0.5px solid #6b5645' }}
                >
                  <p className="font-sans text-gold mb-1" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>
                    {period}
                  </p>
                  <p className="font-sans text-creme" style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.65 }}>
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

// ─── CTA ───────────────────────────────────────────────────────────────────────
function MethodCta() {
  return (
    <section className={`${SECTION_PAD} px-8`} aria-label="Book a call">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-8" style={{ color: '#c8b89e' }}>10. Next step</p>
          <h2
            className="font-serif italic text-creme mb-5"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
          >
            Available by invitation.
          </h2>
          <p
            className="font-sans text-creme mb-12"
            style={{ fontSize: '16px', lineHeight: '1.65', opacity: 0.6, maxWidth: '460px' }}
          >
            We onboard a small number of new partners each quarter. If Canvas UGC is the right
            model for your product, the conversation starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Button href="/contact" variant="primary">Book a discovery call</Button>
            <Button href="/work-with-us" variant="secondary">See engagement models</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function CanvasUgcPage() {
  return (
    <div className="page-transition">
      <Hero />
      <TheShift />
      <WhatItIs />
      <CanvasVsTraditional />
      <WhyItWorks />
      <TheNumbers />
      <AssetLibrary />
      <MethodCta />
    </div>
  )
}
