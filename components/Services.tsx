'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    num: '01',
    name: 'Refrigerators',
    desc: 'All makes and models repaired in your home. No need to move anything.',
    detail: 'GE · Whirlpool · Samsung · LG · Maytag',
  },
  {
    num: '02',
    name: 'Freezers',
    desc: 'Frost buildup, not cooling, leaking — diagnosed and fixed same visit.',
    detail: 'Upright · Chest · Built-in',
  },
  {
    num: '03',
    name: 'Sub-Zero',
    desc: 'One of the few specialists in the Bay Area for high-end Sub-Zero units.',
    detail: 'Built-in · Side-by-side · Column',
  },
  {
    num: '04',
    name: 'Wine Fridges',
    desc: 'Temperature control, compressor, cooling coils — all serviced.',
    detail: 'Dual-zone · Single-zone · Built-in',
  },
  {
    num: '05',
    name: 'Ice Makers',
    desc: 'Built-in and standalone ice machines repaired efficiently.',
    detail: 'Under-counter · Freestanding',
  },
  {
    num: '06',
    name: 'Commercial',
    desc: 'Restaurant and commercial refrigeration units serviced in the East Bay.',
    detail: 'Walk-in · Reach-in · Bar fridges',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%' }
      }
    )

    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 85%' }
        }
      )
    })
  }, [])

  return (
    <section id="services" ref={sectionRef} style={{
      padding: '6rem 3rem',
      borderTop: '1px solid var(--warm-line)',
    }}>
      <h2 ref={titleRef} style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(36px, 5vw, 60px)',
        fontWeight: 300,
        marginBottom: '4rem',
        letterSpacing: '-0.02em',
      }}>
        What we <em style={{ fontStyle: 'italic', color: 'var(--cold-accent)' }}>fix</em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0',
        border: '1px solid var(--warm-line)',
      }}>
        {services.map((s, i) => (
          <div
            key={s.num}
            ref={el => { if (el) itemsRef.current[i] = el }}
            style={{
              padding: '2.5rem',
              borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--warm-line)' : 'none',
              borderBottom: i < 3 ? '1px solid var(--warm-line)' : 'none',
              cursor: 'default',
              transition: 'background 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--cream-dark)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '13px',
              color: 'var(--cold-deep)', marginBottom: '1rem', letterSpacing: '0.04em',
            }}>{s.num}</div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '26px',
              fontWeight: 400, marginBottom: '0.75rem',
            }}>{s.name}</h3>
            <p style={{
              fontSize: '14px', color: 'var(--ink-muted)', lineHeight: 1.7,
              marginBottom: '1.25rem', fontWeight: 300,
            }}>{s.desc}</p>
            <p style={{
              fontSize: '11px', color: 'var(--ink-faint)', letterSpacing: '0.08em',
              textTransform: 'uppercase', fontWeight: 400,
            }}>{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
