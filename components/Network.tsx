"use client";
const networks = [
  {
    name: "Mainnet",
    port: 7331,
    status: "Draft",
    statusColor: "#00d4ff",
    desc: "Production network. Full SPHINCS+ validation, STARK proofs, and VDF randomness.",
    features: [
      "SPHINCS+ Signatures",
      "STARK Proofs",
      "PBFT Consensus",
      "Block Rewards: 5 QTX",
    ],
    borderColor: "#00d4ff",
  },
  {
    name: "Testnet",
    port: 17331,
    status: "Draft",
    statusColor: "#7b2fff",
    desc: "Staging environment for developers. Mirror of mainnet with test QTX.",
    features: [
      "Full Feature Parity",
      "Test QTX Faucet",
      "Developer Tools",
      "Fast Sync",
    ],
    borderColor: "#7b2fff",
  },
  {
    name: "Devnet",
    port: 73310,
    status: "On Progress",
    statusColor: "#4361ee",
    desc: "Local development network. Instant finality for rapid prototyping.",
    features: ["Instant Finality", "Debug Mode", "Local RPC", "Reset Anytime"],
    borderColor: "#4361ee",
  },
];

export default function Network() {
  return (
    <section id="network" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              color: "#7b2fff",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              padding: "0.3rem 1rem",
              border: "1px solid rgba(123,47,255,0.3)",
              borderRadius: "100px",
            }}
          >
            Network
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Connect to Quantix
          </h2>
          <p
            style={{
              color: "rgba(226,232,240,0.55)",
              fontSize: "1.05rem",
              marginTop: "0.75rem",
            }}
          >
            Three environments for every stage of development
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {networks.map((n) => (
            <div
              key={n.name}
              style={{
                padding: "2rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${n.borderColor}33`,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = n.borderColor;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 0 40px ${n.borderColor}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${n.borderColor}33`;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}
                >
                  {n.name}
                </h3>
                <span
                  style={{
                    padding: "0.2rem 0.75rem",
                    borderRadius: "100px",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: n.statusColor,
                    background: `${n.statusColor}18`,
                    border: `1px solid ${n.statusColor}44`,
                  }}
                >
                  ● {n.status}
                </span>
              </div>

              {/* Port */}
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  color: n.borderColor,
                  marginBottom: "1rem",
                  padding: "0.4rem 0.75rem",
                  background: `${n.borderColor}10`,
                  borderRadius: "6px",
                  display: "inline-block",
                }}
              >
                :{n.port}
              </div>

              <p
                style={{
                  color: "rgba(226,232,240,0.55)",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                {n.desc}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {n.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.85rem",
                      color: "rgba(226,232,240,0.65)",
                    }}
                  >
                    <span style={{ color: n.borderColor, fontSize: "0.7rem" }}>
                      ◆
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
