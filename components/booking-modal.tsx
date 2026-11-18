'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import { ArrowUpRight, X } from 'lucide-react'

export function BookingModal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener('apollo:booking', show)
    return () => window.removeEventListener('apollo:booking', show)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog ref={dialogRef} className="booking-dialog" aria-labelledby="booking-title" onClose={() => setOpen(false)} onClick={(event) => { if (event.target === dialogRef.current) setOpen(false) }}>
      <div className="dialog-inner">
        <button className="dialog-close" onClick={() => setOpen(false)} aria-label="Close dialog"><X /></button>
        <span className="eyebrow">A GOOD PLACE TO START</span>
        <h2 id="booking-title">Let&apos;s talk about what&apos;s possible.</h2>
        <p className="muted">This prototype booking flow is not connected to a calendar yet. Reach out to Behzad to plan a conversation.</p>
        <Link className="button-secondary" href="/contact" onClick={() => setOpen(false)}>Contact Behzad <ArrowUpRight aria-hidden="true" /></Link>
        <p className="dialog-note">No email capture · No commitment</p>
      </div>
    </dialog>
  )
}

export function PrimaryCTA({ label = 'Book a strategy call', className = '', location = 'header' }: { label?: string; className?: string; location?: string }) {
  return <button className={`button-primary ${className}`} onClick={() => { track('cta_click', { location }); window.dispatchEvent(new Event('apollo:booking')) }}>{label}<span aria-hidden="true">↗</span></button>
}

export function SecondaryCTA({ href = '#demo', children = 'See how it works' }: { href?: string; children?: React.ReactNode }) {
  return <a className="button-secondary" href={href}>{children}<span aria-hidden="true">↘</span></a>
}
