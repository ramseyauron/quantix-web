"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Technology", href: "/#technology" },
    { label: "Tokenomics", href: "/#tokenomics" },
    { label: "Network", href: "/#network" },
    { label: "Whitepaper", href: "/whitepaper" },
    { label: "Docs", href: "/docs" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(5,5,16,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,255,255,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.25rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <Image
            src="/logo.png"
            alt="Quantix Logo"
            width={32}
            height={32}
            style={{ borderRadius: "100px" }}
          />

          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-heading)",
              textShadow: "0 0 10px rgba(0,255,255,0.3)",
            }}
          >
            QUANTIX
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                color: "rgba(224,224,255,0.7)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "color 0.2s",
                fontFamily: "var(--font-body)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00FFFF")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(224,224,255,0.7)")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/quantix-org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.4rem 1rem",
              border: "1px solid #00FFFF",
              borderRadius: "6px",
              color: "#00FFFF",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              transition: "all 0.2s",
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,255,255,0.1)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(0,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "#00FFFF",
            display: "none",
          }}
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            background: "rgba(5,5,16,0.98)",
            borderTop: "1px solid rgba(0,255,255,0.08)",
            padding: "1rem 1.25rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(224,224,255,0.8)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "0.6rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                fontFamily: "var(--font-body)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00FFFF")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(224,224,255,0.8)")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/quantix-org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "0.75rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.25rem",
              border: "1px solid #00FFFF",
              borderRadius: "8px",
              color: "#00FFFF",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              fontFamily: "var(--font-heading)",
              alignSelf: "flex-start",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
