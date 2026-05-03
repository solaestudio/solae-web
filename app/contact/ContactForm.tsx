'use client'

import { useState } from 'react'

const VERTICALS = [
  'AI / AI infrastructure',
  'SaaS / B2B software',
  'Tech / developer tools',
  'Financial services',
  'Service-based business',
  'Other',
]

const INTERESTS = [
  'Full campaign management',
  'Infrastructure build',
  'Strategic consulting',
  'Ad translation',
  'Academy / creator training',
  'Something else',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TBD: wire to form handler (Resend, Formspree, or serverless endpoint)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 max-w-prose">
        <p
          className="font-serif italic text-creme"
          style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: '1.5', letterSpacing: '-0.005em' }}
        >
          Received. We will be in touch within two business days.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-prose"
      aria-label="Contact form"
      noValidate
    >
      <div className="flex flex-col gap-10">

        <div>
          <label htmlFor="name" className="eyebrow block mb-2" style={{ color: '#8a7a68' }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="field"
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="company" className="eyebrow block mb-2" style={{ color: '#8a7a68' }}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="field"
            required
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="vertical" className="eyebrow block mb-2" style={{ color: '#8a7a68' }}>
            Vertical
          </label>
          <select
            id="vertical"
            name="vertical"
            className="field appearance-none cursor-pointer"
            required
            defaultValue=""
          >
            <option value="" disabled />
            {VERTICALS.map((v) => (
              <option key={v} value={v} style={{ backgroundColor: '#2e231d' }}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="interest" className="eyebrow block mb-2" style={{ color: '#8a7a68' }}>
            What you are looking for
          </label>
          <select
            id="interest"
            name="interest"
            className="field appearance-none cursor-pointer"
            required
            defaultValue=""
          >
            <option value="" disabled />
            {INTERESTS.map((v) => (
              <option key={v} value={v} style={{ backgroundColor: '#2e231d' }}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="eyebrow block mb-2" style={{ color: '#8a7a68' }}>
            Anything else
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="field resize-none"
            style={{
              borderBottom: 'none',
              border: '0.5px solid #6b5645',
              padding: '12px',
              borderRadius: '2px',
            }}
          />
        </div>

        <div>
          <button type="submit" className="btn-primary">
            Send
          </button>
        </div>

      </div>
    </form>
  )
}
