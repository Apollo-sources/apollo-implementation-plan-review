'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/lib/content'
import { PrimaryCTA } from '@/components/booking-modal'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Apollo home">apollo<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={`/${item.href}`}>{item.label}</Link>)}<Link href="/contact">Contact</Link></nav>
        <div className="header-actions"><PrimaryCTA label="Book a call" location="header" /><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {[...navigation, { label: 'Contact Behzad', href: '/contact' }].map((item) => <Link key={item.href} href={item.href.startsWith('#') ? `/${item.href}` : item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>{item.label}</Link>)}
        <PrimaryCTA label="Book a strategy call" location="header" />
      </nav>
    </header>
  )
}
