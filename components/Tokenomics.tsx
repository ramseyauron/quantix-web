"use client";
const allocations = [
  {
    label: "Public Sale",
    pct: 69.22,
    color: "#00d4ff",
    amount: "3,461,081,600 QTX",
  },
  {
    label: "Ecosystem Fund",
    pct: 5,
    color: "#00b4d8",
    amount: "250,000,000 QTX",
  },
  {
    label: "Team & Advisors",
    pct: 5,
    color: "#9d4edd",
    amount: "250,000,000 QTX",
  },
  { label: "Reserve", pct: 5, color: "#4361ee", amount: "250,000,000 QTX" },
  {
    label: "Future Block Rewards",
    pct: 15.78,
    color: "#3a0ca3",
    amount: "788,918,400 QTX",
  },
];

export default function Tokenomics() {
  // Build SVG donut
  const r = 70,
    cx = 90,
    cy = 90,
    stroke = 40;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <section
      id="tokenomics"
      style={{
        padding: "6rem 2rem",
        background:
          "linear-gradient(180deg, transparent, rgba(0,212,255,0.02) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              color: "#00d4ff",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              padding: "0.3rem 1rem",
              border: "1px solid rgba(0,212,255,0.3)",
              borderRadius: "100px",
            }}
          >
            Tokenomics
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            QTX Supply Distribution
          </h2>
          <p
            style={{
              color: "rgba(226,232,240,0.55)",
              fontSize: "1.05rem",
              marginTop: "0.75rem",
            }}
          >
            5,000,000,000 QTX total supply — fixed forever
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Donut chart */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg width="180" height="180" viewBox="0 0 180 180">
              {allocations.map((a) => {
                const dash = (a.pct / 100) * circumference;
                const gap = circumference - dash;
                const el = (
                  <circle
                    key={a.label}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke={a.color}
                    strokeWidth={stroke}
                    strokeDasharray={`${dash} ${gap}`}
                    strokeDashoffset={-offset}
                    style={{ transition: "all 0.3s" }}
                  />
                );
                offset += dash;
                return el;
              })}
              <text
                x={cx}
                y={cy - 8}
                textAnchor="middle"
                fill="#fff"
                fontSize="18"
                fontWeight="800"
              >
                5B
              </text>
              <text
                x={cx}
                y={cy + 12}
                textAnchor="middle"
                fill="rgba(226,232,240,0.5)"
                fontSize="10"
              >
                QTX
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {allocations.map((a) => (
              <div
                key={a.label}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    background: a.color,
                    flexShrink: 0,
                    boxShadow: `0 0 8px ${a.color}66`,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(226,232,240,0.8)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {a.label}
                    </span>
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {a.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "4px",
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: "100px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${a.pct}%`,
                        background: a.color,
                        borderRadius: "100px",
                        boxShadow: `0 0 8px ${a.color}88`,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(226,232,240,0.4)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {a.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
