import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Browns — primary backgrounds and surfaces
        brown: {
          DEFAULT: '#2e231d',
          warm: '#3a2a23',
          deep: '#302221',
          slate: '#362c2a',
          chestnut: '#43302d',
          saddle: '#44312a',
          cocoa: '#4f3c31',
        },
        // Cremes — typography and breathing space
        creme: {
          DEFAULT: '#e5e0d4',
          butter: '#f6f0db',
          paper: '#f2f1ef',
          warm: '#fff7ec',
        },
        // Accents
        gold: '#c8b89e',
        hairline: '#6b5645',
        muted: '#8a7a68',
        // Supporting — use sparingly
        maroon: '#4f0a09',
        taupe: '#936f58',
        'baby-blue': '#b8d4ea',
        'baby-blue-slate': '#a5bfd7',
        'butter-yellow': '#ffecaa',
        'butter-yellow-pale': '#f4edc5',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Bodoni 72', 'Didot', 'Georgia', 'serif'],
        display: ['var(--font-anton)', 'Bebas Neue', 'Impact', 'sans-serif'],
        script: ['var(--font-allura)', 'Snell Roundhand', 'Bickham Script', 'cursive'],
        sans: ['var(--font-inter)', 'Helvetica Neue', 'Söhne', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
        button: '0.15em',
        wide: '0.4em',
        widest2: '0.5em',
      },
      maxWidth: {
        content: '1200px',
        prose: '680px',
      },
      borderWidth: {
        hairline: '0.5px',
      },
      lineHeight: {
        editorial: '1.15',
        reading: '1.65',
      },
      animation: {
        'fade-in': 'fadeIn 500ms ease-in-out forwards',
        'fade-up': 'fadeUp 700ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
