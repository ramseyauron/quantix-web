'use client'
import Link from 'next/link'
import { useState } from 'react'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'consensus', label: 'Consensus' },
  { id: 'cryptography', label: 'Cryptography' },
  { id: 'tokenomics', label: 'Tokenomics' },
  { id: 'network', label: 'Network' },
  { id: 'node', label: 'Run a Node' },
  { id: 'api', label: 'API Reference' },
  { id: 'security', label: 'Security' },
  { id: 'roadmap', label: 'Roadmap' },
]

export default function DocsPage() {
  const [active, setActive] = useState('overview')

  return (
    <div className="min-h-screen flex" style={{ fontFamily: 'var(--font-exo2), sans-serif', background: '#050510', color: '#E0E0FF' }}>
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-cyan-500/10 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-cyan-400/60 mb-3">Documentation</p>
          <p className="text-xs text-slate-500">Quantix Protocol v1.0</p>
        </div>
        <nav className="flex flex-col gap-1">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                active === s.id
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-white/5">
          <a href="https://github.com/ramseyauron/quantix" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-400 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Repository
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 overflow-y-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-xs text-cyan-400/60 uppercase tracking-widest">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Quantix</Link>
            <span>/</span>
            <span>Documentation</span>
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-orbitron)', background: 'linear-gradient(135deg, #00FFFF, #7B61FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Quantix Protocol
          </h1>
          <p className="text-slate-400 text-lg">Complete technical documentation for the post-quantum Layer 1 blockchain.</p>
        </div>

        {/* OVERVIEW */}
        <section id="overview" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">01</span>
            Overview
          </h2>
          <div className="prose prose-invert max-w-none space-y-4 text-slate-300 leading-relaxed">
            <p>
              Quantix is an open-source, post-quantum secure blockchain Layer 1 protocol written in Go. It is designed to provide cryptographic security that remains robust against both classical and quantum computing threats — including attacks from sufficiently powerful quantum computers running Shor&apos;s or Grover&apos;s algorithms.
            </p>
            <p>
              Traditional blockchains rely on ECDSA (Elliptic Curve Digital Signature Algorithm) for transaction signing. ECDSA is vulnerable to Shor&apos;s algorithm, which a quantum computer could use to derive private keys from public keys. Quantix eliminates this attack surface by replacing ECDSA with <strong className="text-cyan-400">SPHINCS+</strong>, a stateless hash-based signature scheme standardized by NIST as a post-quantum standard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              {[
                { label: 'Language', value: 'Go 1.24', icon: '🐹' },
                { label: 'Consensus', value: 'PBFT + PoS', icon: '⚖️' },
                { label: 'Signature', value: 'SPHINCS+', icon: '🔐' },
                { label: 'Symbol', value: 'QTX', icon: '◈' },
                { label: 'Max Supply', value: '5 Billion QTX', icon: '💎' },
                { label: 'Chain ID', value: 'Devnet: 73310', icon: '🌐' },
              ].map(({ label, value, icon }) => (
                <div key={label} className="bg-white/3 border border-white/8 rounded-xl p-4">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-xs text-slate-500 mb-1">{label}</div>
                  <div className="text-sm text-white font-medium">{value}</div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Core Beliefs</h3>
            <ul className="space-y-2">
              <li className="flex gap-3"><span className="text-cyan-400 mt-0.5">◆</span><span><strong className="text-white">Privacy</strong> is a fundamental human right, not a luxury — enforced by mathematics, not trust.</span></li>
              <li className="flex gap-3"><span className="text-cyan-400 mt-0.5">◆</span><span><strong className="text-white">Sovereignty</strong> means individuals should have complete control over their digital assets and identity.</span></li>
              <li className="flex gap-3"><span className="text-cyan-400 mt-0.5">◆</span><span><strong className="text-white">Humanity</strong> must be preserved through technology that serves people, not surveillance systems.</span></li>
            </ul>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm">02</span>
            Architecture
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>Quantix is structured as a modular Go codebase with clear separation between layers:</p>

            <div className="bg-black/40 rounded-xl border border-white/8 overflow-hidden my-6">
              <div className="bg-white/5 px-4 py-2 text-xs text-slate-400 border-b border-white/5">Architecture Stack</div>
              <div className="p-4 font-mono text-sm space-y-1">
                {[
                  ['Application Layer', 'CLI, HTTP API, WebSocket, RPC', '#00FFFF'],
                  ['Consensus Layer', 'PBFT + PoS + RANDAO/VDF', '#7B61FF'],
                  ['Execution Layer', 'SVM (Sphinx VM), State Execution', '#FF00FF'],
                  ['State Layer', 'Account balances, Nonces, State root', '#00FFFF'],
                  ['Transaction Layer', 'Mempool, Validation, UTXO', '#7B61FF'],
                  ['Cryptography Layer', 'SPHINCS+, Kyber768, SWIFFTX, STARK', '#FF00FF'],
                  ['Network Layer', 'P2P, DHT, TCP/UDP, WebSocket', '#00FFFF'],
                  ['Storage Layer', 'LevelDB (blocks, state, keys)', '#7B61FF'],
                ].map(([name, desc, color]) => (
                  <div key={name} className="flex gap-4 items-baseline">
                    <span className="w-44 shrink-0 text-xs" style={{ color }}>{name}</span>
                    <span className="text-slate-500 text-xs">→</span>
                    <span className="text-slate-400 text-xs">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white">Key Modules</h3>
            <div className="space-y-3">
              {[
                { path: 'src/consensus/', desc: 'PBFT engine, RANDAO beacon, VDF computation, validator set management, slashing' },
                { path: 'src/core/', desc: 'Blockchain state, block execution, genesis, transaction types, wallet, SVM opcodes' },
                { path: 'src/crypto/', desc: 'SPHINCS+ implementation, SWIFFTX hash, STARK proofs, WOTS+ signatures' },
                { path: 'src/handshake/', desc: 'X25519 + Kyber768 hybrid key exchange for node-to-node encryption' },
                { path: 'src/p2p/', desc: 'Peer discovery, connection management, message routing' },
                { path: 'src/dht/', desc: 'Distributed Hash Table for peer discovery using 32-byte crypto secrets' },
                { path: 'src/pool/', desc: 'Mempool with nonce replay protection, balance checks, gas enforcement' },
                { path: 'src/state/', desc: 'Storage abstraction, account state, LevelDB interface' },
              ].map(({ path, desc }) => (
                <div key={path} className="flex gap-4 p-3 bg-white/3 rounded-lg border border-white/5">
                  <code className="text-cyan-400 text-xs font-mono shrink-0 w-36">{path}</code>
                  <span className="text-slate-400 text-sm">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSENSUS */}
        <section id="consensus" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">03</span>
            Consensus
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>Quantix uses a hybrid consensus mechanism combining <strong className="text-white">PBFT (Practical Byzantine Fault Tolerance)</strong> with <strong className="text-white">Proof-of-Stake</strong> and <strong className="text-white">VDF-based RANDAO</strong> for unpredictable, manipulation-resistant randomness.</p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">PBFT + PoS</h3>
              <p>PBFT provides immediate finality — once a block is committed, it cannot be reversed. The protocol requires <code className="text-cyan-400 bg-black/40 px-1 rounded">⌊2N/3⌋ + 1</code> votes (strictly more than two-thirds) for both prepare and commit phases. This ensures safety even if up to <code className="text-cyan-400 bg-black/40 px-1 rounded">⌊(N-1)/3⌋</code> validators are Byzantine.</p>

              <div className="bg-black/40 rounded-xl border border-white/8 p-4 font-mono text-sm">
                <div className="text-slate-500 mb-2">{'// Correct quorum threshold'}</div>
                <div className="text-slate-300">required = <span className="text-cyan-400">floor(2 × totalStake / 3)</span> + <span className="text-green-400">1</span></div>
              </div>

              <h3 className="text-lg font-semibold text-white mt-4">RANDAO + VDF</h3>
              <p>Leader election uses a Verifiable Delay Function (VDF) over a class group to produce unbiasable randomness. The VDF requires sequential computation (~1,048,576 squarings) that cannot be parallelized, preventing last-revealer grinding attacks.</p>

              <ul className="space-y-2 mt-2">
                <li className="flex gap-3"><span className="text-purple-400">→</span><span><strong className="text-white">No commit/reveal phases</strong> — VDF input is public at slot 0</span></li>
                <li className="flex gap-3"><span className="text-purple-400">→</span><span><strong className="text-white">1022-bit discriminant</strong> — canonical derivation from genesis</span></li>
                <li className="flex gap-3"><span className="text-purple-400">→</span><span><strong className="text-white">VDF proofs verified</strong> — all sync messages require valid Wesolowski proof</span></li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-4">Staking Parameters</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Min Stake', value: '32 QTX' },
                  { label: 'Block Time', value: '10 seconds' },
                  { label: 'Epoch Length', value: '100 slots' },
                  { label: 'Max Validators', value: '100' },
                  { label: 'Active Set', value: '21' },
                  { label: 'Unbonding', value: '7 days' },
                  { label: 'Double-sign Slash', value: '0.5 QTX' },
                  { label: 'Block Reward', value: '5 QTX' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/3 border border-white/8 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-500 mb-1">{label}</div>
                    <div className="text-sm text-white font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CRYPTOGRAPHY */}
        <section id="cryptography" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-sm">04</span>
            Cryptography
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>Every cryptographic primitive in Quantix is chosen to resist quantum attacks. This is not a future upgrade — it is the current implementation.</p>

            {[
              {
                name: 'SPHINCS+', role: 'Transaction Signatures', color: '#00FFFF',
                desc: 'A stateless hash-based signature scheme standardized by NIST as FIPS 205. Unlike ECDSA, SPHINCS+ security is based entirely on the collision resistance of hash functions — which quantum computers cannot efficiently attack. Key sizes are larger than ECDSA but the security guarantees are provably post-quantum.',
                params: ['Security: 256-bit post-quantum', 'Based on: SHA-256 hash functions', 'NIST Standard: FIPS 205', 'Stateless: no state to manage'],
              },
              {
                name: 'Kyber768', role: 'Node Key Exchange', color: '#7B61FF',
                desc: 'CRYSTALS-Kyber (now ML-KEM, NIST FIPS 203) is a lattice-based key encapsulation mechanism. Quantix uses a hybrid X25519 + Kyber768 handshake: the X25519 component provides classical security while Kyber768 provides post-quantum security. Both must be broken for the handshake to be compromised.',
                params: ['NIST Standard: FIPS 203 (ML-KEM)', 'Hybrid: X25519 + Kyber768', 'Security level: 3 (AES-192 equivalent)', 'Based on: Module Learning With Errors'],
              },
              {
                name: 'SWIFFTX', role: 'State Hashing', color: '#FF00FF',
                desc: 'A lattice-based hash function candidate with provable security under worst-case lattice hardness assumptions. Used for block hashing and state root computation. Its security reduces to the hardness of SIVP (Shortest Independent Vectors Problem) on certain lattices.',
                params: ['Provable security under lattice assumptions', 'SIVP hardness reduction', 'Fast: SWIFFT base + HAIFA mode', 'Multiple output sizes: 224/256/384/512'],
              },
              {
                name: 'libSTARK', role: 'Zero-Knowledge Proofs', color: '#00FFFF',
                desc: 'Scalable Transparent ARguments of Knowledge. STARKs require no trusted setup (transparent), use only hash functions (post-quantum secure), and produce succinct proofs that can be verified quickly. Used for proving computational integrity without revealing the computation itself.',
                params: ['No trusted setup required', 'Transparent: public randomness only', 'Post-quantum: hash functions only', 'Scalable: O(log² n) verification'],
              },
            ].map(({ name, role, color, desc, params }) => (
              <div key={name} className="border border-white/8 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-white/5 flex items-center gap-3" style={{ background: `${color}08` }}>
                  <div className="w-2 h-8 rounded-full" style={{ background: color }} />
                  <div>
                    <div className="font-semibold text-white">{name}</div>
                    <div className="text-xs" style={{ color }}>{role}</div>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm text-slate-400">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {params.map(p => (
                      <span key={p} className="px-2 py-1 rounded text-xs bg-white/5 text-slate-400 border border-white/8">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TOKENOMICS */}
        <section id="tokenomics" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm">05</span>
            Tokenomics
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/3 border border-white/8 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">Token Details</h3>
                <div className="space-y-2 text-sm">
                  {[
                    ['Name', 'Quantix'],
                    ['Symbol', 'QTX'],
                    ['Base Unit', 'nQTX (nano-QTX)'],
                    ['Precision', '1 QTX = 10¹⁸ nQTX'],
                    ['Max Supply', '5,000,000,000 QTX'],
                    ['Block Reward', '5 QTX'],
                    ['BIP44 Coin Type', '7331'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-slate-500">{k}</span>
                      <span className="text-white font-mono text-xs">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/3 border border-white/8 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">Supply Distribution</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Public Sale', pct: 30, color: '#00FFFF' },
                    { label: 'Staking Rewards', pct: 25, color: '#7B61FF' },
                    { label: 'Ecosystem Fund', pct: 20, color: '#00b4d8' },
                    { label: 'Team & Advisors', pct: 15, color: '#9d4edd' },
                    { label: 'Reserve', pct: 10, color: '#4361ee' },
                  ].map(({ label, pct, color }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">{label}</span>
                        <span className="text-white">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white">Fee Structure</h3>
            <p>Transaction fees in Quantix use a gas model similar to Ethereum but with post-quantum signature overhead accounted for in gas calculations. Gas limit and gas price are set by the transaction sender. Block gas limit is 10,000,000 units per block.</p>

            <div className="bg-black/40 rounded-xl border border-white/8 p-4 font-mono text-sm">
              <div className="text-slate-500 mb-2">{'// Fee calculation'}</div>
              <div className="text-slate-300">fee = gas_used × gas_price (in nQTX)</div>
              <div className="text-slate-500 mt-2 mb-1">{'// SPHINCS+ signature overhead'}</div>
              <div className="text-slate-300">sig_gas = 21000 base + 10000 sphincs_overhead</div>
            </div>
          </div>
        </section>

        {/* NETWORK */}
        <section id="network" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">06</span>
            Network
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: 'Mainnet', id: '7331', port: '32307', color: '#00FFFF', status: 'Planned' },
                { name: 'Testnet', id: '17331', port: '32308', color: '#7B61FF', status: 'Planned' },
                { name: 'Devnet', id: '73310', port: '32309', color: '#4361ee', status: 'Active' },
              ].map(({ name, id, port, color, status }) => (
                <div key={name} className="border rounded-xl p-4 bg-white/3" style={{ borderColor: `${color}30` }}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-semibold text-white">{name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color, borderColor: `${color}40`, background: `${color}10` }}>{status}</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between"><span className="text-slate-500">Chain ID</span><span style={{ color }} className="font-mono">{id}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">P2P Port</span><span className="text-slate-300 font-mono">{port}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">HTTP Port</span><span className="text-slate-300 font-mono">8560</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">WS Port</span><span className="text-slate-300 font-mono">8700</span></div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-4">P2P Protocol</h3>
            <p>Nodes communicate via TCP for block propagation and consensus messages, and UDP for peer discovery via DHT. All node-to-node communication is encrypted using the hybrid X25519 + Kyber768 handshake. DHT authentication uses 32-byte cryptographic secrets generated via <code className="text-cyan-400">crypto/rand</code>.</p>
          </div>
        </section>

        {/* RUN A NODE */}
        <section id="node" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-sm">07</span>
            Run a Node
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <h3 className="text-lg font-semibold text-white">Prerequisites</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2"><span className="text-green-400">✓</span>Go 1.24 or higher</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span>Linux or macOS (Windows experimental)</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span>4GB RAM minimum (8GB recommended)</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span>50GB disk space</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span>Stable internet connection</li>
            </ul>

            <h3 className="text-lg font-semibold text-white">Build from Source</h3>
            <div className="bg-black/60 rounded-xl border border-white/8 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 text-xs text-slate-400 border-b border-white/5 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2">terminal</span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-x-auto text-slate-300">{`# Clone the repository
git clone https://github.com/ramseyauron/quantix.git
cd quantix

# Build the binary
go build -o bin/quantix ./src/cli/main.go

# Run a devnet validator node
./bin/quantix \\
  -nodes 1 \\
  -node-index 0 \\
  -roles validator \\
  -datadir ./data \\
  -http-port 0.0.0.0:8560 \\
  -udp-port 32421 \\
  -tcp-addr 0.0.0.0:32421`}</pre>
            </div>

            <h3 className="text-lg font-semibold text-white mt-4">CLI Flags</h3>
            <div className="space-y-2 text-sm">
              {[
                ['-nodes', 'Number of nodes to initialize', '1'],
                ['-node-index', 'Index of the node to run (0 to N-1)', '0'],
                ['-roles', 'Comma-separated roles: validator, sender, receiver, none', 'none'],
                ['-datadir', 'Directory for LevelDB storage', './data'],
                ['-http-port', 'HTTP port for JSON API', '127.0.0.1:8560'],
                ['-tcp-addr', 'TCP address for P2P communication', '0.0.0.0:32307'],
                ['-udp-port', 'UDP port for peer discovery', '32308'],
                ['-ws-port', 'WebSocket port', '127.0.0.1:8600'],
                ['-seeds', 'Comma-separated seed node UDP addresses', ''],
              ].map(([flag, desc, def]) => (
                <div key={flag} className="grid grid-cols-3 gap-4 p-2 rounded bg-white/3 border border-white/5">
                  <code className="text-cyan-400 text-xs font-mono">{flag}</code>
                  <span className="text-slate-400 text-xs col-span-2">{desc} {def && <span className="text-slate-600">(default: {def})</span>}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API REFERENCE */}
        <section id="api" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">08</span>
            API Reference
          </h2>
          <div className="space-y-4 text-slate-300">
            <p>The Quantix node exposes a JSON HTTP API on port <code className="text-cyan-400">8560</code> by default.</p>

            <div className="space-y-3">
              {[
                { method: 'GET', path: '/', desc: 'Node status, blockchain info, available endpoints' },
                { method: 'GET', path: '/blockcount', desc: 'Returns current block count' },
                { method: 'GET', path: '/bestblockhash', desc: 'Returns the hash of the latest block' },
                { method: 'GET', path: '/block/:id', desc: 'Returns full block data by height (0-indexed)' },
                { method: 'GET', path: '/address/:addr', desc: 'Returns balance, total sent/received, tx count for an address' },
                { method: 'GET', path: '/address/:addr/txs', desc: 'Returns all transactions for an address with direction (IN/OUT)' },
                { method: 'GET', path: '/latest-transaction', desc: 'Returns the most recently submitted transaction' },
                { method: 'GET', path: '/metrics', desc: 'Prometheus metrics endpoint' },
                { method: 'POST', path: '/transaction', desc: 'Submit a new transaction' },
                { method: 'POST', path: '/mine', desc: 'Trigger devnet block mining (requires DEVNET_MINE_SECRET header)' },
              ].map(({ method, path, desc }) => (
                <div key={path} className="flex gap-4 p-3 bg-white/3 rounded-lg border border-white/5 items-start">
                  <span className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded font-mono ${method === 'GET' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'}`}>{method}</span>
                  <code className="text-cyan-400 text-xs font-mono shrink-0 w-48">{path}</code>
                  <span className="text-slate-400 text-sm">{desc}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-6">Transaction Format</h3>
            <div className="bg-black/60 rounded-xl border border-white/8 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 text-xs text-slate-400 border-b border-white/5">POST /transaction</div>
              <pre className="p-4 text-sm font-mono text-slate-300 overflow-x-auto">{`{
  "id": "tx-unique-identifier",
  "sender": "0xSenderAddress",
  "receiver": "0xReceiverAddress", 
  "amount": 1000000000000000000,  {/* in nQTX (1 QTX = 10^18) */}
  "gas_limit": 21000,
  "gas_price": 1000000000,       {/* in nQTX */}
  "nonce": 1,                    {/* must be > last nonce */}
  "timestamp": 1712000000,
  "signature": ""                {/* SPHINCS+ signature (devnet: empty) */}
}`}</pre>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section id="security" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-sm">09</span>
            Security
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>Quantix underwent a comprehensive internal security audit in April 2026 covering cryptographic correctness, consensus safety, transaction validation, network security, and code quality. All 27 findings were resolved before devnet launch.</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
              {[
                { label: 'Critical', count: 4, color: '#FF4444', fixed: 4 },
                { label: 'High', count: 7, color: '#FF8800', fixed: 7 },
                { label: 'Medium', count: 8, color: '#FFCC00', fixed: 8 },
                { label: 'Low + Info', count: 8, color: '#00FF88', fixed: 8 },
              ].map(({ label, count, color, fixed }) => (
                <div key={label} className="bg-white/3 border border-white/8 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1" style={{ color }}>{count}</div>
                  <div className="text-xs text-slate-500 mb-2">{label}</div>
                  <div className="text-xs text-green-400">✓ {fixed} fixed</div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white">Key Security Properties</h3>
            <ul className="space-y-2 text-sm">
              {[
                'PBFT quorum uses ⌊2N/3⌋ + 1 (correct BFT threshold)',
                'RANDAO sync requires VDF proof verification — no unauthenticated state overwrites',
                'DHT uses 32-byte crypto/rand secrets — not brute-forceable',
                'All node key material is never logged (removed from all code paths)',
                'HTTP rate limiting: 100 req/s per IP with burst cap of 20',
                'CORS restricted to configured origins (via CORS_ALLOWED_ORIGINS env var)',
                'Transaction nonce replay protection in mempool',
                '/mine endpoint requires DEVNET_MINE_SECRET header',
                'VDF parameters unified to single strong code path (1022-bit discriminant)',
              ].map(s => (
                <li key={s} className="flex gap-3"><span className="text-green-400 mt-0.5 shrink-0">✓</span><span className="text-slate-400">{s}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">10</span>
            Roadmap
          </h2>
          <div className="space-y-4">
            {[
              {
                phase: 'Phase 1', title: 'Foundation', date: 'Apr–May 2026', status: 'In Progress',
                items: ['Real state execution (ExecuteBlock)', 'Persistent account state (LevelDB)', 'Balance validation in mempool', 'CI/CD pipeline', 'Unit test coverage ≥70%'],
                color: '#00FFFF',
              },
              {
                phase: 'Phase 2', title: 'Multi-Node Testnet', date: 'May–Jun 2026', status: 'Planned',
                items: ['4-validator PBFT consensus', 'Node sync protocol', 'Network partition handling', 'Docker multi-node setup', 'Prometheus + Grafana monitoring'],
                color: '#7B61FF',
              },
              {
                phase: 'Phase 3', title: 'Hardening', date: 'Jun–Jul 2026', status: 'Planned',
                items: ['Production DHT peer discovery', 'Validator join/leave protocol', 'Load testing (1000 tx/s)', 'External security audit', 'Complete documentation'],
                color: '#FF00FF',
              },
              {
                phase: 'Phase 4', title: 'Public Testnet', date: 'Jul 2026+', status: 'Planned',
                items: ['Public validator onboarding', 'Bug bounty program', 'Faucet for test QTX', 'Block explorer public launch', 'Community governance proposal'],
                color: '#00FF88',
              },
            ].map(({ phase, title, date, status, items, color }) => (
              <div key={phase} className="border rounded-xl overflow-hidden" style={{ borderColor: `${color}20` }}>
                <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: `${color}10`, background: `${color}05` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <span className="text-xs font-mono" style={{ color }}>{phase}</span>
                    <span className="font-semibold text-white">{title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{date}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color, borderColor: `${color}30`, background: `${color}10` }}>{status}</span>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {items.map(item => (
                      <li key={item} className="flex gap-2 text-sm text-slate-400">
                        <span style={{ color }} className="mt-0.5 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="border-t border-white/8 pt-8 flex justify-between items-center">
          <Link href="/" className="text-sm text-cyan-400 hover:underline">← Back to Home</Link>
          <a href="https://github.com/ramseyauron/quantix" target="_blank" rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
            Edit on GitHub →
          </a>
        </div>
      </main>
    </div>
  )
}
