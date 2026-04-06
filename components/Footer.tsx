export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ink)', color: 'var(--cream)',
      padding: '3rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', marginBottom: '0.5rem' }}>
          General <em style={{ fontStyle: 'italic', color: 'var(--cold)' }}>Refrigeration</em> Service Co.
        </div>
        <div style={{ fontSize: '12px', color: 'var(--ink-faint)' }}>
          Oakland & East Bay, California
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <a href="tel:5106521302" style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: '22px',
          color: 'var(--cream)', textDecoration: 'none',
          display: 'block', marginBottom: '0.5rem',
        }}>
          (510) 652-1302
        </a>
        <div style={{ fontSize: '11px', color: 'var(--ink-faint)', letterSpacing: '0.06em' }}>
          © 2026 · All rights reserved
        </div>
      </div>
    </footer>
  )
}
