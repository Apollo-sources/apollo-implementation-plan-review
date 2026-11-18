import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookingModal, PrimaryCTA } from '@/components/booking-modal'

export const metadata = {
  title: 'Contact Behzad',
  description: 'Start a conversation with Behzad about practical AI agents and digital experiences for your business.',
}

export default function ContactPage() {
  return <><SiteHeader /><main id="top" className="contact-page"><div className="contact-content"><Link className="back-link" href="/"><ArrowLeft /> Back to Apollo</Link><span className="eyebrow">CONTACT</span><h1>A thoughtful conversation starts here.</h1><p className="contact-lede">Tell Behzad what you&apos;re working on and what you hope to make easier. This prototype does not collect or send personal information.</p><div className="contact-card glass-card"><span className="contact-avatar">M</span><div><span className="eyebrow">YOUR CONTACT</span><h2>Behzad</h2><p className="muted">Founder · Apollo <span className="prototype-tag">Example profile</span></p></div><MessageCircle className="contact-mark" /></div><div className="contact-actions"><PrimaryCTA label="Open the conversation" location="final" /><p className="muted">Booking details will be connected before launch.</p></div><div className="contact-note"><ArrowUpRight /><span>No email capture · No hidden form · Just a prototype contact page</span></div></div></main><SiteFooter /><BookingModal /></>
}
