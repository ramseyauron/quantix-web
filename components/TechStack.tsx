'use client'
const techs = [
  {
    name: 'SPHINCS+',
    tag: 'Signatures',
    desc: 'Hash-based stateless digital signatures selected by NIST as a post-quantum standard. Immune to Shor\'s algorithm and quantum attacks.',
    color: '#00FFFF',
    rgbValues: '0,255,255',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <polygon points="20,4 36,32 4,32" stroke="#00FFFF" strokeWidth="2" fill="none"/>
        <polygon points="20,10 30,28 10,28" fill="rgba(0,255,255,0.1)" stroke="#00FFFF" strokeWidth="1"/>
        <circle cx="20" cy="22" r="3" fill="#00FFFF"/>
      </svg>
    ),
  },
  {
    name: 'STARK Proofs',
    tag: 'Zero-Knowledge',
    desc: 'Scalable Transparent ARguments of Knowledge. No trusted setup, transparent verifiability, and quantum-safe proof system.',
    color: '#7B61FF',
    rgbValues: '123,97,255',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="#7B61FF" strokeWidth="2" fill="none"/>
        <rect x="10" y="10" width="20" height="20" rx="2" fill="rgba(123,97,255,0.1)" stroke="#7B61FF" strokeWidth="1"/>
        <line x1="10" y1="20" x2="30" y2="20" stroke="#7B61FF" strokeWidth="1.5"/>
        <line x1="20" y1="10" x2="20" y2="30" stroke="#7B61FF" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'RANDAO / VDF',
    tag: 'Randomness',
    desc: 'Verifiable Delay Functions combined with RANDAO provide unbiasable, verifiable on-chain randomness resistant to manipulation.',
    color: '#00FFFF',
    rgbValues: '0,255,255',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="15" stroke="#00FFFF" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="8" stroke="#00FFFF" strokeWidth="1" strokeDasharray="4 2" fill="none"/>
        <circle cx="20" cy="20" r="3" fill="#00FFFF"/>
        <line x1="20" y1="5" x2="20" y2="12" stroke="#00FFFF" strokeWidth="1.5"/>
        <line x1="35" y1="20" x2="28" y2="20" stroke="#00FFFF" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'SWIFFTX',
    tag: 'Hashing',
    desc: 'Lattice-based hash function with provable security under worst-case lattice hardness assumptions. Fast and quantum-resistant.',
    color: '#7B61FF',
    rgbValues: '123,97,255',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 12 L20 6 L34 12 L34 28 L20 34 L6 28 Z" stroke="#7B61FF" strokeWidth="2" fill="none"/>
        <path d="M6 12 L20 18 L34 12" stroke="#7B61FF" strokeWidth="1" fill="none"/>
        <path d="M20 18 L20 34" stroke="#7B61FF" strokeWidth="1"/>
      </svg>
    ),
  },
]

export default function TechStack() {
  return (
    <section id="technology" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            color: '#7B61FF',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            padding: '0.3rem 1rem',
            border: '1px solid rgba(123,97,255,0.3)',
            borderRadius: '100px',
            fontFamily: 'var(--font-heading)',
          }}>Core Technology</div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            margin: '0 auto 1rem',
            fontFamily: 'var(--font-heading)',
          }}>Quantum-Safe by Design</h2>
          <p style={{ color: 'rgba(224,224,255,0.55)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', fontFamily: 'var(--font-body)' }}>
            Every layer of Quantix is built on cryptographic primitives that withstand quantum adversaries.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {techs.map(t => (
            <div key={t.name}
              style={{
                padding: '2rem',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(${t.rgbValues},0.2)`,
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = t.color
                el.style.boxShadow = `0 0 30px rgba(${t.rgbValues},0.3), 0 0 60px rgba(${t.rgbValues},0.1)`
                el.style.background = `rgba(${t.rgbValues},0.05)`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.borderColor = `rgba(${t.rgbValues},0.2)`
                el.style.boxShadow = 'none'
                el.style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>{t.icon}</div>
              <div style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: t.color,
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-heading)',
              }}>{t.tag}</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>{t.name}</h3>
              <p style={{ color: 'rgba(224,224,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
