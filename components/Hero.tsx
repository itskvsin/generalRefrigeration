'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const ratingRef = useRef<HTMLDivElement>(null)
  const tempRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(SplitText)

    const tl = gsap.timeline({ delay: 0.5 })

    // Animate badge
    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )

    // Split and animate heading
    if (headingRef.current) {
      const split = new SplitText(headingRef.current, { type: 'lines' })
      tl.fromTo(split.lines,
        { opacity: 0, yPercent: 80, rotateX: -15 },
        { opacity: 1, yPercent: 0, rotateX: 0, duration: 1, stagger: 0.12, ease: 'power4.out' },
        '-=0.3'
      )
    }

    tl.fromTo(subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )

    tl.fromTo(ctaRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )

    tl.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1.2, ease: 'power3.inOut' },
      '-=0.8'
    )

    tl.fromTo(ratingRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.8'
    )

    // Floating temp badge
    gsap.to(tempRef.current, {
      y: -12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

  }, [])

  return (
    <section ref={sectionRef} style={{
      minHeight: '100vh',
      padding: '9rem 3rem 5rem',
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: '4rem',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background texture lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, var(--warm-line) 80px)',
        opacity: 0.25,
      }} />

      {/* Left — main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        <div ref={badgeRef} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--cold)', padding: '6px 14px', borderRadius: '100px',
          marginBottom: '2rem',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cold-accent)', display: 'inline-block' }} />
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--cold-accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Oakland · Est. 1985
          </span>
        </div>

        <h1 ref={headingRef} style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(52px, 7vw, 88px)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '2rem',
          perspective: '800px',
        }}>
          Your fridge<br />
          fixed <em style={{ fontStyle: 'italic', color: 'var(--cold-accent)' }}>today,</em><br />
          not next week.
        </h1>

        <p ref={subRef} style={{
          fontSize: '16px', lineHeight: 1.75, color: 'var(--ink-muted)',
          maxWidth: '460px', marginBottom: '2.5rem', fontWeight: 300,
        }}>
          Gary Cain has been Oakland's trusted refrigerator specialist for decades.
          Same-day service, 90% of parts already on the truck, and 503 five-star reviews
          from real neighbors.
        </p>

        <div ref={ctaRef} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="tel:5106521302" style={{
            background: 'var(--ink)', color: 'var(--cream)',
            fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 500,
            letterSpacing: '0.04em', padding: '14px 32px', borderRadius: '100px',
            textDecoration: 'none', display: 'inline-block',
            transition: 'background 0.25s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--cold-accent)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Call (510) 652-1302
          </a>
          <a href="#contact" style={{
            fontSize: '14px', color: 'var(--ink-muted)', textDecoration: 'none',
            borderBottom: '1px solid var(--warm-line)', paddingBottom: '2px',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-muted)'}
          >
            Or request a callback →
          </a>
        </div>

        <div ref={lineRef} style={{
          height: '1px', background: 'var(--warm-line)', marginTop: '3.5rem', width: '100%',
        }} />
      </div>

      {/* Right — rating card + floating temp */}
      <div ref={ratingRef} style={{ position: 'relative', zIndex: 1 }}>

        {/* Floating cold temp badge */}
        <div ref={tempRef} style={{
          position: 'absolute', top: '-2rem', right: '-1rem',
          background: 'var(--cold-deep)', color: 'var(--cream)',
          borderRadius: '16px', padding: '12px 20px',
          fontFamily: 'Cormorant Garamond, serif', fontSize: '42px',
          fontWeight: 300, letterSpacing: '-0.02em',
          boxShadow: '0 20px 40px rgba(46, 95, 117, 0.2)',
        }}>
          38°F
        </div>

        {/* Rating card */}
        <div style={{
          background: 'white', borderRadius: '24px',
          padding: '2.5rem', border: '1px solid var(--cream-dark)',
          boxShadow: '0 30px 60px rgba(26, 24, 20, 0.08)',
        }}>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#E8A020">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <div style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '72px',
            fontWeight: 300, lineHeight: 1, marginBottom: '0.25rem',
            color: 'var(--ink)',
          }}>4.9</div>

          <div style={{ fontSize: '13px', color: 'var(--ink-muted)', marginBottom: '2rem', letterSpacing: '0.04em' }}>
            503 reviews on Yelp
          </div>

          {/* Review quote */}
          <div style={{
            borderTop: '1px solid var(--cream-dark)', paddingTop: '1.5rem',
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '17px',
              fontStyle: 'italic', lineHeight: 1.65, color: 'var(--ink-muted)',
              marginBottom: '1rem',
            }}>
              "Gary answered immediately, happened to be in the area, and came within 10 minutes. He correctly predicted the problem before even opening the door."
            </p>
            <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              — Barry G., Oakland CA
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem', marginTop: '2rem', paddingTop: '1.5rem',
            borderTop: '1px solid var(--cream-dark)',
          }}>
            {[
              { num: 'Same day', label: 'service' },
              { num: '90%', label: 'parts on truck' },
              { num: '1-yr', label: 'warranty' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400 }}>{stat.num}</div>
                <div style={{ fontSize: '11px', color: 'var(--ink-faint)', marginTop: '2px', letterSpacing: '0.04em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
