export default function StatsBar() {
  const stats = [
    { label: 'Block Time', value: '10s', icon: '⚡' },
    { label: 'Max Supply', value: '5B QTX', icon: '◈' },
    { label: 'Min Stake', value: '32 QTX', icon: '🔒' },
    { label: 'Consensus', value: 'PBFT', icon: '⬡' },
    { label: 'Block Reward', value: '5 QTX', icon: '◆' },
  ]

  return (
    <section style={{
      borderTop: '1px solid rgba(0,255,255,0.12)',
      borderBottom: '1px solid rgba(0,255,255,0.12)',
      background: 'rgba(0,255,255,0.03)',
      padding: '2rem 2rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        {stats.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{s.icon}</div>
            <div className="stat-number" style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              fontWeight: 800,
              color: '#00FFFF',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)',
            }}>{s.value}</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(224,224,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem', fontFamily: 'var(--font-body)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
