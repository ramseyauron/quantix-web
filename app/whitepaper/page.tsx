import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Whitepaper | Quantix Protocol',
  description: 'Quantix Protocol: A Post-Quantum Sovereign Blockchain for the Age of Artificial Intelligence — v1.0.0, April 2026',
}

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-exo2), sans-serif', background: '#050510', color: '#E0E0FF' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Quantix</Link>
          <span>/</span>
          <span className="text-slate-300">Whitepaper</span>
        </div>

        {/* Header */}
        <div className="border border-cyan-500/20 rounded-2xl p-8 mb-8 bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs text-cyan-400/60 uppercase tracking-widest mb-2">Official Whitepaper</div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Quantix Protocol
              </h1>
              <p className="text-slate-400 mb-4 max-w-xl">
                A Post-Quantum Sovereign Blockchain for the Age of Artificial Intelligence
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">v1.0.0 — April 2026</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">~7,800 words</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">12 sections</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">research@qpqb.org</span>
              </div>
            </div>
            <a
              href="/whitepaper.md"
              download="quantix-whitepaper.md"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{ background: 'linear-gradient(135deg, #00FFFF20, #7B61FF20)', border: '1px solid rgba(0,255,255,0.3)', color: '#00FFFF' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download .md
            </a>
          </div>
        </div>

        {/* Abstract */}
        <div className="border border-white/8 rounded-xl p-6 mb-8 bg-white/2">
          <h2 className="text-sm uppercase tracking-widest text-cyan-400/60 mb-3">Abstract</h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            The next decade will be defined by two converging technological forces: the maturation of quantum computing and the proliferation of artificial intelligence. Together, they pose an existential threat to the cryptographic foundations upon which modern blockchain networks are built. Elliptic curve cryptography—the backbone of Bitcoin, Ethereum, and virtually every major distributed ledger—is provably vulnerable to Shor&apos;s algorithm running on a sufficiently powerful quantum computer.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm mt-3">
            Quantix Protocol is built differently. Every component—signatures, key exchange, hashing, randomness generation, and zero-knowledge proofs—is selected specifically for resistance to quantum attack. This whitepaper presents Quantix in full technical detail, alongside integration with the Universal Sovereign Identity (USI) system, forming a coherent vision: a blockchain that is not merely quantum-resistant, but <strong className="text-white">cryptographically sovereign</strong>.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="border border-white/8 rounded-xl p-6 mb-8">
          <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              ['1.', 'Introduction'],
              ['2.', 'Threat Model'],
              ['3.', 'Cryptographic Foundations'],
              ['4.', 'Consensus Mechanism'],
              ['5.', 'Tokenomics'],
              ['6.', 'Network Architecture'],
              ['7.', 'Universal Sovereign Identity'],
              ['8.', 'Security Analysis'],
              ['9.', 'Roadmap'],
              ['10.', 'Conclusion'],
              ['11.', 'References'],
            ].map(([num, title]) => (
              <div key={num} className="flex gap-3 text-sm py-1.5 border-b border-white/5">
                <span className="text-cyan-400/40 font-mono w-6 shrink-0">{num}</span>
                <span className="text-slate-400">{title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: '🔐', label: 'SPHINCS+', desc: 'NIST FIPS 205 — stateless hash-based signatures, quantum-safe by proof' },
            { icon: '⚖️', label: 'PBFT + PoS', desc: 'Byzantine fault tolerance with correct ⌊2N/3⌋+1 quorum threshold' },
            { icon: '🆔', label: 'USI Integration', desc: 'Addresses map to Kusuma\'s fingerprint system — identity as protocol primitive' },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="border border-white/8 rounded-xl p-5 bg-white/2">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-white font-semibold text-sm mb-1">{label}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>

        {/* Read inline CTA */}
        <div className="text-center py-8 border border-white/8 rounded-xl bg-white/2">
          <p className="text-slate-400 mb-4 text-sm">Read the full whitepaper or view technical documentation</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/whitepaper.md" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #00FFFF, #7B61FF)' }}>
              Read Full Whitepaper
            </a>
            <Link href="/docs"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{ border: '1px solid rgba(0,255,255,0.3)', color: '#00FFFF' }}>
              Technical Docs →
            </Link>
          </div>
          <p className="text-slate-600 text-xs mt-4">Companion paper: USI by C. Kusuma (v0.0.1, March 2026)</p>
        </div>

      </div>
    </div>
  )
}
