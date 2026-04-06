'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(leftRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
    gsap.fromTo(rightRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [])

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'transparent',
    border: 'none', borderBottom: '1px solid var(--warm-line)',
    padding: '12px 0', fontSize: '15px', fontFamily: 'Syne, sans-serif',
    fontWeight: 300, color: 'var(--ink)', outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" ref={sectionRef} className="contact-section" style={{
      padding: '6rem 3rem',
      borderTop: '1px solid var(--warm-line)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '5rem',
      alignItems: 'start',
    }}>
      {/* Left */}
      <div ref={leftRef} className="contact-left">
        <div style={{
          fontSize: '11px', fontWeight: 500, letterSpacing: '1.5px',
          textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '1.5rem',
        }}>
          Get in touch
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 4vw, 54px)',
          fontWeight: 300, letterSpacing: '-0.02em',
          lineHeight: 1.1, marginBottom: '2rem',
        }}>
          Same-day service,<br />
          <em style={{ fontStyle: 'italic', color: 'var(--cold-accent)' }}>guaranteed.</em>
        </h2>

        <p style={{
          fontSize: '15px', color: 'var(--ink-muted)', lineHeight: 1.75,
          fontWeight: 300, marginBottom: '3rem',
        }}>
          No call centers. No hold music. You call Gary, Gary answers, Gary shows up.
          Bring your fridge model number if you have it — helps him stock the right parts.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { label: 'Phone', value: '(510) 652-1302', href: 'tel:5106521302' },
            { label: 'Service Area', value: 'Oakland & East Bay, CA', href: null },
            { label: 'Hours', value: 'Mon – Sat, 9am – 6pm', href: null },
          ].map(item => (
            <div key={item.label} className="contact-detail-row" style={{ display: 'flex', gap: '2rem', alignItems: 'baseline', borderBottom: '1px solid var(--cream-dark)', paddingBottom: '1.25rem' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)', minWidth: '80px' }}>
                {item.label}
              </span>
              {item.href ? (
                <a href={item.href} style={{ fontSize: '18px', fontFamily: 'Cormorant Garamond, serif', color: 'var(--cold-accent)', textDecoration: 'none' }}>
                  {item.value}
                </a>
              ) : (
                <span style={{ fontSize: '16px', fontFamily: 'Cormorant Garamond, serif' }}>{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div ref={rightRef} className="contact-form-card" style={{
        background: 'white', borderRadius: '24px', padding: '3rem',
        border: '1px solid var(--cream-dark)',
        boxShadow: '0 20px 50px rgba(26,24,20,0.06)',
      }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '48px',
              marginBottom: '1rem', color: 'var(--cold-accent)',
            }}>✓</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 400, marginBottom: '0.75rem' }}>
              Message sent!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-muted)', lineHeight: 1.7 }}>
              Gary will get back to you within the hour. For urgent repairs, call directly at (510) 652-1302.
            </p>
          </div>
        ) : (
          <>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '26px',
              fontWeight: 400, marginBottom: '2rem',
            }}>Request a callback</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {[
                { id: 'name', label: 'Your name', type: 'text', placeholder: 'First Last' },
                { id: 'phone', label: 'Phone number', type: 'tel', placeholder: '(510) 000-0000' },
                { id: 'appliance', label: 'Appliance & issue', type: 'text', placeholder: 'e.g. Samsung fridge, not cooling' },
              ].map(field => (
                <div key={field.id}>
                  <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)', display: 'block', marginBottom: '6px' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderBottomColor = 'var(--cold-accent)'}
                    onBlur={e => e.currentTarget.style.borderBottomColor = 'var(--warm-line)'}
                  />
                </div>
              ))}

              <button
                onClick={() => setSubmitted(true)}
                style={{
                  background: 'var(--ink)', color: 'var(--cream)',
                  border: 'none', borderRadius: '100px', padding: '14px',
                  fontSize: '14px', fontFamily: 'Syne, sans-serif', fontWeight: 500,
                  letterSpacing: '0.04em', cursor: 'pointer',
                  transition: 'background 0.25s, transform 0.2s', marginTop: '0.5rem',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--cold-accent)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Send request
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
