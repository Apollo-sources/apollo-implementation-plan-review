import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div><Link href="/" className="wordmark">apollo<span>.</span></Link><p className="muted footer-tagline">Custom AI agents and digital experiences for ambitious teams.</p></div>
        <nav aria-label="Footer navigation"><Link href="/#services">Services</Link><Link href="/#process">Process</Link><Link href="/#results">Results</Link><Link href="/#faq">FAQ</Link><Link href="/contact">Contact Marcus</Link></nav>
        <div className="footer-contact"><span className="eyebrow">LET&apos;S MAKE SOMETHING USEFUL</span><Link href="/contact">Talk to Marcus <span aria-hidden="true">↗</span></Link><span className="muted">Prototype contact details to be added</span></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Apollo · Example content for prototype</span><a className="back-to-top" href="#top">Back to top <ArrowUp /></a></div>
    </footer>
  )
}
