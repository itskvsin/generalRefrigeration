'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <nav ref={navRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.25rem 3rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'rgba(245, 240, 232, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--warm-line)',
    }}>
      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 400, letterSpacing: '0.02em' }}>
        General <span style={{ fontStyle: 'italic', color: 'var(--ink-muted)' }}>Refrigeration</span>
      </div>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {['Services', 'Reviews', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontSize: '13px', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--ink-muted)', textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-muted)')}
          >{item}</a>
        ))}
        <a href="tel:5106521302" style={{
          fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em',
          background: 'var(--ink)', color: 'var(--cream)',
          padding: '10px 22px', borderRadius: '100px', textDecoration: 'none',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--cold-accent)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
        >(510) 652-1302</a>
      </div>
    </nav>
  )
}
