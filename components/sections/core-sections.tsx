'use client'

import { track } from '@vercel/analytics'
import { ArrowUpRight, Check, Clock3, MessageCircle, MonitorSmartphone } from 'lucide-react'
import { services } from '@/lib/content'
import { PrimaryCTA } from '@/components/booking-modal'
import { Reveal } from '@/components/reveal'

const painPoints = [
  { icon: Clock3, title: 'The first reply comes too late', text: 'Great opportunities can disappear while your team is busy doing great work.' },
  { icon: MessageCircle, title: 'The same questions repeat', text: 'Simple requests take time away from conversations that need a human touch.' },
  { icon: MonitorSmartphone, title: 'Your website is only a starting point', text: 'Visitors need a clearer path from finding you to taking the next step.' },
]

export function ProblemSection() {
  return <section className="section problem-section" id="problem"><div className="section-inner"><Reveal><div className="section-heading"><span className="eyebrow">THE OPPORTUNITY</span><h2>Good people shouldn&apos;t spend their day on repeat work.</h2><p className="muted">Make everyday interactions feel easier for your team and your customers.</p></div></Reveal><div className="problem-grid">{painPoints.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 90}><article className="problem-card glass-card"><span className="icon-frame"><Icon /></span><h3>{title}</h3><p className="muted">{text}</p></article></Reveal>)}</div></div></section>
}

export function ServicesSection() {
  return <section className="section services-section" id="services"><div className="section-inner"><Reveal><div className="section-heading section-heading-row"><div><span className="eyebrow">WHAT WE BUILD</span><h2>Two ways to make work flow better.</h2></div><p className="muted">Technology should fit the way your business works — not the other way around.</p></div></Reveal><div className="services-grid">{services.map((service, index) => <Reveal key={service.title} delay={index * 100}><article className="service-card glass-card"><div className="service-top"><span className="eyebrow">{service.number} / SERVICE</span><ArrowUpRight /></div><h3>{service.title}</h3><p className="muted">{service.description}</p><ul>{service.bullets.map((bullet) => <li key={bullet}><Check />{bullet}</li>)}</ul><button className="text-link" onClick={() => { track('cta_click', { location: 'services' }); window.dispatchEvent(new Event('apollo:booking')) }}>Explore this service <ArrowUpRight /></button></article></Reveal>)}</div><div className="center-cta"><PrimaryCTA label="Find your starting point" location="services" /></div></div></section>
}

export function ProcessSection() {
  const steps = [{ n: '01', title: 'Listen & map', text: 'We start with your goals, your team and the work that gets in the way.' }, { n: '02', title: 'Design & build', text: 'We shape a practical solution and share progress as it comes together.' }, { n: '03', title: 'Launch & learn', text: 'We put it to work, learn from real use and keep improving.' }]
  return <section className="section process-section" id="process"><div className="section-inner"><Reveal><div className="section-heading"><span className="eyebrow">A CLEAR PATH FORWARD</span><h2>From first conversation to real momentum.</h2></div></Reveal><div className="process-grid">{steps.map((step, index) => <Reveal key={step.n} delay={index * 100}><article className="process-step"><span className="step-number">{step.n}</span><div className="step-rule" /><h3>{step.title}</h3><p className="muted">{step.text}</p></article></Reveal>)}</div><div className="center-cta"><PrimaryCTA label="Start with a conversation" location="services" /></div></div></section>
}
