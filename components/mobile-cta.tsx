'use client'

import { useEffect, useState } from 'react'
import { PrimaryCTA } from '@/components/booking-modal'

export function MobileCTA() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const hero = document.querySelector('#top')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.05 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])
  return <div className={`mobile-sticky-cta ${visible ? 'sticky-cta-visible' : ''}`} aria-hidden={!visible}><PrimaryCTA label="Book a strategy call" location="mobile_bar" /></div>
}
