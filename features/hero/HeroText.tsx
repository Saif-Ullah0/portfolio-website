"use client";

import { profile } from "@/data/profile";
import { useEffect, useState } from "react";

const roles = [
  "ML Engineer",
  "Full Stack Developer",
  "AI Agent Builder",
  "CS Student @ ITU",
  "PyTorch Developer",
];

export default function HeroText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    if (!deleting && charIndex < role.length) {
      const timeout = setTimeout(() => {
        setDisplayed(role.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
    if (!deleting && charIndex === role.length) {
      const timeout = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }
    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(role.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, deleting, currentRole]);

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "820px",
        width: "100%",
        position: "relative",
        zIndex: 1,
        padding: isMobile ? "0 1rem" : "0",
      }}
    >
      <style>{`
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }
        .hero-social-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
          letter-spacing: 0.03em;
        }
        .hero-social-btn:hover {
          border-color: var(--color-violet);
          color: var(--color-violet-light);
          background: rgba(124,58,237,0.08);
          transform: translateY(-2px);
        }
        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-body);
          font-weight: 600;
          padding: 0.8rem 1.75rem;
          border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #6d28d9);
          color: white;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1px solid rgba(124,58,237,0.5);
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(124,58,237,0.3);
        }
        .hero-cta-primary:hover {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(124,58,237,0.5);
        }
        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-body);
          font-weight: 600;
          padding: 0.8rem 1.75rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          color: var(--color-text-primary);
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1px solid rgba(255,255,255,0.12);
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }
        .hero-cta-secondary:hover {
          background: rgba(255,255,255,0.08);
          border-color: var(--color-cyan);
          color: var(--color-cyan);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(6,182,212,0.2);
        }
        [data-theme="light"] .hero-cta-secondary {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.15);
          color: var(--color-text-primary);
        }
        [data-theme="light"] .hero-cta-secondary:hover {
          background: rgba(6,182,212,0.08);
          border-color: var(--color-cyan);
          color: var(--color-cyan-dark);
        }
        [data-theme="light"] .hero-social-btn:hover {
          background: rgba(124,58,237,0.06);
        }
      `}</style>

      {/* Available badge */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "rgba(16,185,129,0.1)",
        border: "1px solid rgba(16,185,129,0.3)",
        borderRadius: "100px",
        padding: "0.35rem 1rem",
        marginBottom: "1.5rem",
      }}>
        <div style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: "#10b981",
          animation: "badgePulse 2s ease-in-out infinite",
        }} />
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "#10b981",
          letterSpacing: "0.08em",
        }}>
          Open to opportunities · ML Intern @ FlyRank AI
        </span>
      </div>

      {/* Mono label */}
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.82rem",
        color: "var(--color-cyan)",
        marginBottom: "1rem",
        letterSpacing: "0.1em",
      }}>
        {"// Hello, world. I'm"}
      </p>

      {/* Name */}
      <h1 style={{
        fontFamily: "var(--font-heading)",
        fontSize: isMobile ? "2.8rem" : "clamp(3rem, 7vw, 5.5rem)",
        fontWeight: 700,
        color: "var(--color-text-primary)",
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        marginBottom: "1rem",
      }}>
        {profile.name}
      </h1>

      {/* Typing tagline */}
      <h2 style={{
        fontFamily: "var(--font-heading)",
        fontSize: isMobile ? "1.1rem" : "clamp(1.1rem, 2.5vw, 1.75rem)",
        fontWeight: 500,
        letterSpacing: "-0.01em",
        marginBottom: "1.25rem",
        height: isMobile ? "2rem" : "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
      }}>
        <span style={{ color: "var(--color-violet-light)" }}>
          {displayed}
        </span>
        <span style={{
          display: "inline-block",
          width: "2px",
          height: "1.1em",
          backgroundColor: "var(--color-cyan)",
          borderRadius: "2px",
          animation: "cursorBlink 1s ease-in-out infinite",
          flexShrink: 0,
        }} />
      </h2>

      {/* Bio */}
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: isMobile ? "0.9rem" : "1rem",
        color: "var(--color-text-secondary)",
        lineHeight: 1.8,
        maxWidth: "580px",
        margin: "0 auto 2rem auto",
        padding: isMobile ? "0 0.5rem" : "0",
      }}>
        {profile.bio}
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: "flex",
        gap: "0.75rem",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "2rem",
        padding: isMobile ? "0 0.5rem" : "0",
      }}>
        <a href="#projects" className="hero-cta-primary"
          style={{ fontSize: isMobile ? "0.875rem" : "0.95rem" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
          </svg>
          View Projects
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="hero-cta-secondary"
          style={{ fontSize: isMobile ? "0.875rem" : "0.95rem" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>
      </div>

      {/* Divider */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        maxWidth: "400px",
        margin: "0 auto 1.5rem auto",
      }}>
        <div style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }} />
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          color: "var(--color-text-muted)",
          letterSpacing: "0.1em",
        }}>
          FIND ME ON
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }} />
      </div>

      {/* Social Links */}
      <div style={{
        display: "flex",
        gap: "0.6rem",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: isMobile ? "0 0.5rem" : "0",
      }}>
        <a href="https://github.com/Saif-Ullah0"
          target="_blank" rel="noopener noreferrer"
          className="hero-social-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a href="https://linkedin.com/in/saif-ullah-arshad-40797a265"
          target="_blank" rel="noopener noreferrer"
          className="hero-social-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>

        <a href="mailto:saifullaharshad110@gmail.com"
          className="hero-social-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Email
        </a>

        <a href="https://saif-ullah0.github.io/flyrank-ml-internship/work/paper/"
          target="_blank" rel="noopener noreferrer"
          className="hero-social-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          Case Study
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: isMobile ? "-80px" : "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.4rem",
        pointerEvents: "none",
      }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          color: "var(--color-text-muted)",
          letterSpacing: "0.12em",
        }}>
          scroll
        </span>
        <div style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, var(--color-violet), transparent)",
        }} />
      </div>
    </div>
  );
}