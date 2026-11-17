'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/content'
import { PrimaryCTA } from '@/components/booking-modal'
import { Reveal } from '@/components/reveal'

const categories = ['All', ...Array.from(new Set(faqs.map((faq) => faq.category)))]

export function FaqSection() {
  const [category, setCategory] = useState('All')
  const [open, setOpen] = useState(0)
  const visibleFaqs = faqs.filter((faq) => category === 'All' || faq.category === category)
  return <section className="section faq-section" id="faq"><div className="section-inner faq-layout"><Reveal><div className="faq-intro"><span className="eyebrow">GOOD QUESTIONS</span><h2>Things worth knowing before we start.</h2><p className="muted">A few straight answers to help you decide if this is the right next step.</p><div className="faq-human glass-card"><span className="avatar-placeholder">M</span><span className="eyebrow">MARCUS · CONTACT DETAILS TO COME</span><p>Want to talk through a specific challenge?</p><PrimaryCTA label="Start a conversation" location="faq" /></div></div></Reveal><div className="faq-content"><div className="faq-filters" aria-label="Filter FAQs">{categories.map((item) => <button key={item} className={category === item ? 'filter-active' : ''} aria-pressed={category === item} onClick={() => { setCategory(item); setOpen(0) }}>{item}</button>)}</div><div className="faq-list">{visibleFaqs.map((faq, index) => <article className="faq-item" key={faq.question}><button className="faq-question" aria-expanded={open === index} onClick={() => { if (open !== index) track('faq_open', { question_id: faq.id }); setOpen(open === index ? -1 : index) }}><span>{faq.question}<small>{faq.category}</small></span><ChevronDown className={open === index ? 'chevron-open' : ''} /></button><div className={`faq-answer ${open === index ? 'faq-answer-open' : ''}`}><p>{faq.answer}</p></div></article>)}</div><p className="faq-end muted">Have a different question? <button className="text-link" onClick={() => { track('cta_click', { location: 'faq' }); window.dispatchEvent(new Event('apollo:booking')) }}>Let&apos;s talk <span aria-hidden="true">↗</span></button></p></div></div></section>
}
