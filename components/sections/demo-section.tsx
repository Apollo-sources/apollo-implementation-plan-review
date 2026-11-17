import { ArrowUpRight } from 'lucide-react'
import { AgentChat } from '@/components/agent-chat'
import { PrimaryCTA } from '@/components/booking-modal'
import { Reveal } from '@/components/reveal'

export function DemoSection() {
  return <section className="section demo-section" id="demo"><div className="section-inner"><Reveal><div className="section-heading section-heading-row"><div><span className="eyebrow">A SMALL PREVIEW</span><h2>See a more helpful first conversation.</h2></div><p className="muted">Choose a scenario to explore a scripted example. Nothing here is connected to a live system.</p></div></Reveal><Reveal><AgentChat /></Reveal><div className="demo-bottom"><p>Curious what this could look like for your team?</p><PrimaryCTA label="Talk through an idea" location="demo" /><a className="text-link" href="/contact">Or contact Marcus <ArrowUpRight /></a></div></div></section>
}
