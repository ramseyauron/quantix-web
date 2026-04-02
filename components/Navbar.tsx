'use client'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(5,5,16,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0,255,255,0.1)',
    }}>
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <polygon points="16,2 30,26 2,26" stroke="#00FFFF" strokeWidth="2" fill="none"/>
          <polygon points="16,8 25,24 7,24" fill="rgba(0,255,255,0.15)" stroke="#7B61FF" strokeWidth="1"/>
          <circle cx="16" cy="16" r="3" fill="#00FFFF"/>
        </svg>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)', textShadow: '0 0 10px rgba(0,255,255,0.3)' }}>
          QUANTIX
        </span>
      </a>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
        {['Technology', 'Tokenomics', 'Network', 'Docs'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: 'rgba(224,224,255,0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'color 0.2s',
            fontFamily: 'var(--font-body)',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00FFFF')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(224,224,255,0.7)')}
          >{item}</a>
        ))}
        <a href="https://github.com/ramseyauron/quantix" target="_blank" rel="noopener noreferrer"
          style={{
            padding: '0.5rem 1.25rem',
            border: '1px solid #00FFFF',
            borderRadius: '6px',
            color: '#00FFFF',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            transition: 'all 0.2s',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(0,255,255,0.1)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >GitHub</a>
      </div>
    </nav>
  )
}
