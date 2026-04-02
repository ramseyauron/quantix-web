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
      <Hero />
      <StatsBar />
      <TechStack />
      <Tokenomics />
      <Network />
      <Footer />
    </main>
  )
}
