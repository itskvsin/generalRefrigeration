'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const reviews = [
  {
    text: "Gary answered immediately, came within 10 minutes. He correctly predicted the problem when first opening the door. $175 total. Extremely friendly and courteous.",
    author: "Barry G.",
    location: "Oakland, CA",
  },
  {
    text: "I thought our fridge was dead. Gary solved it in literally 5 mins on the phone. Didn't ask for any money. Who does that anymore? Apparently this guy!",
    author: "Jeff B.",
    location: "Oakland, CA",
  },
  {
    text: "He is a Neighborhood Favorite. Gets most of his jobs by word of mouth. He helped me when the freezer was not defrosting. Incredibly reliable.",
    author: "Vivian H.",
    location: "Oakland, CA",
  },
  {
    text: "Incredibly friendly, expert knowledge, quick diagnosis, and patient explanations. If you have choices about repair vs. replace, Gary walks you through everything.",
    author: "Sky F.",
    location: "Berkeley, CA",
  },
  {
    text: "GE couldn't come for 3 days. I called Gary and he said he could come in 2 hours, then suggested I try resetting the breaker first. IT WORKED. No charge. I'm sending him a Starbucks gift card.",
    author: "Woke Up Saturday",
    location: "Danville, CA",
  },
]

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%' }
      }
    )

    cardsRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40, rotateY: -5 },
        {
          opacity: 1, y: 0, rotateY: 0,
          duration: 0.8, ease: 'power3.out', delay: i * 0.1,
          scrollTrigger: { trigger: el, start: 'top 90%' }
        }
      )
    })
  }, [])

  return (
    <section id="reviews" ref={sectionRef} style={{
      padding: '6rem 0 6rem 3rem',
      background: 'var(--ink)',
      overflow: 'hidden',
    }}>
      <h2 ref={titleRef} style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(36px, 5vw, 60px)',
        fontWeight: 300,
        marginBottom: '0.5rem',
        letterSpacing: '-0.02em',
        color: 'var(--cream)',
        paddingRight: '3rem',
      }}>
        What neighbors <em style={{ fontStyle: 'italic', color: 'var(--cold)' }}>say</em>
      </h2>

      <p style={{
        fontSize: '14px', color: 'var(--ink-faint)', marginBottom: '3rem',
        letterSpacing: '0.04em', paddingRight: '3rem',
      }}>
        503 verified reviews · 4.9 average on Yelp
      </p>

      <div ref={trackRef} style={{
        display: 'flex', gap: '1.5rem',
        overflowX: 'auto', paddingRight: '3rem', paddingBottom: '1rem',
        scrollbarWidth: 'none',
      }}>
        {reviews.map((r, i) => (
          <div
            key={i}
            ref={el => { if (el) cardsRef.current[i] = el }}
            style={{
              minWidth: '340px', maxWidth: '340px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px', padding: '2rem',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
              {[...Array(5)].map((_, j) => (
                <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#E8A020">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '18px', fontStyle: 'italic', lineHeight: 1.65,
              color: 'rgba(245, 240, 232, 0.85)', marginBottom: '1.5rem',
            }}>
              "{r.text}"
            </p>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--cream)' }}>{r.author}</div>
              <div style={{ fontSize: '12px', color: 'var(--ink-faint)', marginTop: '2px' }}>{r.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
