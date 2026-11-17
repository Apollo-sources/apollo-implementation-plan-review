import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react'
import { PrimaryCTA, SecondaryCTA } from '@/components/booking-modal'
import { Reveal } from '@/components/reveal'

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal><span className="eyebrow"><span className="eyebrow-line" /> AI AGENTS · AI WEBSITES</span></Reveal>
          <Reveal delay={70}><h1>Make room for <span>better work.</span></h1></Reveal>
          <Reveal delay={140}><p className="hero-subhead">We design thoughtful AI agents and websites that help growing teams respond faster, work smarter, and create more meaningful customer experiences.</p></Reveal>
          <Reveal delay={210}><div className="hero-actions"><PrimaryCTA location="hero" /><SecondaryCTA /></div></Reveal>
          <Reveal delay={280}><div className="hero-proof"><span><Check /> Free 30-minute conversation</span><span><Check /> Practical ideas, no pressure</span></div></Reveal>
        </div>
        <Reveal className="hero-visual-wrap" delay={120}>
          <div className="hero-visual glass-card">
            <Image src="/images/hero-studio.png" alt="A calm, modern creative studio with a thoughtfully arranged workspace" fill priority sizes="(max-width: 900px) 100vw, 48vw" className="hero-image" />
            <div className="image-shade" />
            <div className="hero-image-label"><span className="eyebrow">A BETTER KIND OF AUTOMATION</span><p>Human in the loop.<br />Momentum in the work.</p></div>
            <div className="floating-note glass-card"><span className="note-icon"><Check /></span><span><strong>Every lead gets a reply</strong><small>Thoughtful, timely, on-brand</small></span><ArrowUpRight className="note-arrow" /></div>
            <span className="visual-index">01 / 04</span>
          </div>
        </Reveal>
      </div>
      <div className="trusted-row"><span className="eyebrow">BUILT FOR THE NEXT CHAPTER</span><div className="trusted-logos"><span>Northline</span><span>Forma</span><span>goodwell</span><span>STUDIO / 04</span><span>Fieldwork</span></div></div>
      <a className="scroll-cue" href="#problem" aria-label="Scroll to the next section"><ArrowDown /></a>
    </section>
  )
}
