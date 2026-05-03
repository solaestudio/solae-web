import type { Metadata } from 'next'
import { Playfair_Display, Anton, Allura, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  variable: '--font-allura',
  weight: '400',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s — Solae Studio',
    default: 'Solae Studio',
  },
  description:
    'Canvas UGC marketing for software, services, and the products you can\'t put on a shelf.',
  keywords: [
    'UGC agency',
    'Canvas UGC',
    'microinfluencer marketing',
    'UGC for SaaS',
    'UGC for AI companies',
    'organic creator marketing',
    'owned content marketing',
    'UGC creator training',
    'UGC academy',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${anton.variable} ${allura.variable} ${inter.variable}`}
    >
      <body className="bg-brown text-creme font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
