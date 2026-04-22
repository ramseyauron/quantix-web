"use client";

export default function Hero() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${8 + Math.random() * 12}s`,
    size: Math.random() > 0.5 ? "2px" : "3px",
    color: Math.random() > 0.5 ? "#00FFFF" : "#7B61FF",
  }));

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "6rem 2rem 4rem",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(0,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.04) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dot pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(0,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.3,
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(0,255,255,0.1) 0%, rgba(123,97,255,0.07) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: "50%",
            animation: `particle-drift ${p.duration} ${p.delay} linear infinite`,
            opacity: 0,
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          className="fade-in-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 1rem",
            border: "1px solid rgba(0,255,255,0.3)",
            borderRadius: "100px",
            background: "rgba(0,255,255,0.05)",
            marginBottom: "2rem",
            fontSize: "0.8rem",
            color: "#00FFFF",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "var(--font-heading)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#00FFFF",
              display: "inline-block",
              boxShadow: "0 0 8px #00FFFF",
            }}
          />
          Layer 1 · Post-Quantum · Go
        </div>

        {/* Headline */}
        <h1
          className="glitch-text fade-in-up-delay-1"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            background:
              "linear-gradient(135deg, #ffffff 0%, #00FFFF 50%, #7B61FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-heading)",
          }}
        >
          The Quantum-Resistant
          <br />
          Blockchain
        </h1>

        {/* Subtext */}
        <p
          className="fade-in-up-delay-2"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "rgba(224,224,255,0.65)",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto 3rem",
            fontFamily: "var(--font-body)",
          }}
        >
          Post-quantum cryptography. Mathematically enforced privacy.
          <br />
          Built for the AI era.
        </p>

        {/* CTA Buttons */}
        <div
          className="fade-in-up-delay-3"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/quantix-org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.875rem 2.25rem",
              background: "linear-gradient(135deg, #FF00FF, #7B61FF)",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.05em",
              transition: "all 0.25s",
              boxShadow:
                "0 0 30px rgba(255,0,255,0.4), 0 0 60px rgba(255,0,255,0.15)",
              fontFamily: "var(--font-heading)",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 0 50px rgba(255,0,255,0.6), 0 0 100px rgba(255,0,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(255,0,255,0.4), 0 0 60px rgba(255,0,255,0.15)";
            }}
          >
            Explore on GitHub
          </a>
          <a
            href="#technology"
            style={{
              padding: "0.875rem 2.25rem",
              background: "transparent",
              border: "1px solid rgba(0,255,255,0.3)",
              borderRadius: "8px",
              color: "rgba(224,224,255,0.85)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              transition: "all 0.25s",
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#00FFFF";
              e.currentTarget.style.color = "#00FFFF";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,255,255,0.3)";
              e.currentTarget.style.color = "rgba(224,224,255,0.85)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Learn the Tech
          </a>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "rgba(224,224,255,0.3)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "var(--font-heading)",
            }}
          >
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{ animation: "float 2s ease-in-out infinite" }}
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="rgba(0,255,255,0.3)"
              strokeWidth="1.5"
            />
            <circle cx="8" cy="7" r="2.5" fill="#00FFFF" />
          </svg>
        </div>
      </div>
    </section>
  );
}
