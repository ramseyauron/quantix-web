import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import TechStack from '@/components/TechStack'
import Tokenomics from '@/components/Tokenomics'
import Network from '@/components/Network'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#050510', minHeight: '100vh' }}>
      <Navbar />
      {/* Phase 2 Banner */}
      <div style={{
        background: 'linear-gradient(90deg, rgba(123,97,255,0.15), rgba(0,255,255,0.1), rgba(123,97,255,0.15))',
        borderBottom: '1px solid rgba(0,255,255,0.2)',
        padding: '0.6rem 1.5rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#00FFFF',
        fontFamily: 'var(--font-heading)',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
      }}>
        <span>🚀</span>
        <span style={{ color: '#E0E0FF', fontWeight: 600 }}>Phase 2 — Multi-Node Testnet in Progress</span>
        <span style={{
          fontSize: '0.7rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '999px',
          border: '1px solid rgba(0,255,255,0.3)',
          background: 'rgba(0,255,255,0.08)',
          color: '#00FFFF',
          letterSpacing: '0.08em',
        }}>LIVE</span>
      </div>
      <Hero />
      <StatsBar />
      <TechStack />
      <Tokenomics />
      <Network />
      <Footer />
    </main>
  )
}
