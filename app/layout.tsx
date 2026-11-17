import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'Apollo — AI Agents & Digital Experiences', template: '%s | Apollo' },
  description: 'Thoughtful AI agents and digital experiences that help growing teams respond faster, work smarter, and create more meaningful customer experiences.',
  openGraph: {
    title: 'Apollo — AI Agents & Digital Experiences',
    description: 'Thoughtful AI agents and digital experiences for growing teams.',
    type: 'website',
    images: [{ url: '/images/hero-studio.png', width: 1536, height: 1024, alt: 'Apollo creative studio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Apollo — AI Agents & Digital Experiences', description: 'Thoughtful AI agents and digital experiences for growing teams.', images: ['/images/hero-studio.png'] },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0A0A0B' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`}><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
