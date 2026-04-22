"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,255,255,0.1)",
        padding: "4rem 2rem 2rem",
        background: "rgba(0,0,0,0.3)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <polygon
                  points="16,2 30,26 2,26"
                  stroke="#00FFFF"
                  strokeWidth="2"
                  fill="none"
                />
                <polygon
                  points="16,8 25,24 7,24"
                  fill="rgba(0,255,255,0.15)"
                  stroke="#7B61FF"
                  strokeWidth="1"
                />
                <circle cx="16" cy="16" r="3" fill="#00FFFF" />
              </svg>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-heading)",
                  textShadow: "0 0 10px rgba(0,255,255,0.4)",
                }}
              >
                QUANTIX
              </span>
            </div>
            <p
              style={{
                color: "rgba(224,224,255,0.45)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                maxWidth: "220px",
              }}
            >
              The post-quantum blockchain. Built for a world where quantum
              computers are real.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                color: "#E0E0FF",
                fontWeight: 600,
                fontSize: "0.9rem",
                marginBottom: "1rem",
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.05em",
              }}
            >
              Protocol
            </div>
            {[
              { label: "Technology", href: "#technology" },
              { label: "Tokenomics", href: "#tokenomics" },
              { label: "Network", href: "#network" },
              { label: "Whitepaper", href: "/whitepaper" },
            ].map(({ label, href }) => (
              <div key={label} style={{ marginBottom: "0.6rem" }}>
                <Link
                  href={href}
                  style={{
                    color:
                      label === "Whitepaper"
                        ? "rgba(123,97,255,0.7)"
                        : "rgba(224,224,255,0.5)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00FFFF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      label === "Whitepaper"
                        ? "rgba(123,97,255,0.7)"
                        : "rgba(224,224,255,0.5)")
                  }
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <div
              style={{
                color: "#E0E0FF",
                fontWeight: 600,
                fontSize: "0.9rem",
                marginBottom: "1rem",
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.05em",
              }}
            >
              Developers
            </div>
            {["GitHub", "Documentation", "Testnet Faucet", "RPC Endpoints"].map(
              (l) => (
                <div key={l} style={{ marginBottom: "0.6rem" }}>
                  <a
                    href={
                      l === "GitHub"
                        ? "https://github.com/ramseyauron/quantix"
                        : "#"
                    }
                    style={{
                      color: "rgba(224,224,255,0.5)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#7B61FF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(224,224,255,0.5)")
                    }
                  >
                    {l}
                  </a>
                </div>
              ),
            )}
          </div>

          {/* CTA */}
          <div>
            <div
              style={{
                color: "#E0E0FF",
                fontWeight: 600,
                fontSize: "0.9rem",
                marginBottom: "1rem",
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.05em",
              }}
            >
              Build on Quantix
            </div>
            <p
              style={{
                color: "rgba(224,224,255,0.5)",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              Star the repo and follow development progress.
            </p>
            <a
              href="https://github.com/quantix-org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.25rem",
                background: "linear-gradient(135deg, #FF00FF, #7B61FF)",
                borderRadius: "8px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 600,
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.05em",
                boxShadow: "0 0 15px rgba(255,0,255,0.3)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(255,0,255,0.5)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 15px rgba(255,0,255,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ color: "rgba(224,224,255,0.3)", fontSize: "0.8rem" }}>
            © 2026 Quantix Protocol. Open source.
          </span>
          <span
            style={{
              color: "rgba(224,224,255,0.3)",
              fontSize: "0.8rem",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            QTX · SPHINCS+ · STARK · VDF · SWIFFTX
          </span>
        </div>
      </div>
    </footer>
  );
}
