import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookingModal, PrimaryCTA } from '@/components/booking-modal'
import { MobileCTA } from '@/components/mobile-cta'
import { HeroSection } from '@/components/sections/hero'
import { ProblemSection, ServicesSection, ProcessSection } from '@/components/sections/core-sections'
import { DemoSection } from '@/components/sections/demo-section'
import { ResultsSection, PackagesSection } from '@/components/sections/proof-sections'
import { FaqSection } from '@/components/sections/faq-section'

export default function HomePage() {
  return <><SiteHeader /><main><HeroSection /><ProblemSection /><ServicesSection /><ProcessSection /><DemoSection /><ResultsSection /><PackagesSection /><FaqSection /><section className="final-cta-section"><div className="final-cta-inner glass-card"><div><span className="eyebrow">A CONVERSATION, NOT A COMMITMENT</span><h2>Let&apos;s find the useful next step.</h2><p className="muted">Bring a challenge. Leave with a few practical ideas to explore.</p></div><div className="final-cta-actions"><PrimaryCTA label="Book a free strategy call" location="final" /></div></div></section></main><SiteFooter /><MobileCTA /><BookingModal /></>
}

