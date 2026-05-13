import { useState, useEffect } from "react";
import { COLORS, FONTS } from "../constants";
import FadeIn from "./FadeIn";

const rotatingItems = [
  "Lead capture & follow-ups",
  "Sales funnels",
  "Report generation",
  "Customer messaging",
  "Data entry & syncing",
  "Process documentation",
  "Order tracking",
  "Marketing workflows",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % rotatingItems.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "96px 24px 64px",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${COLORS.border}33 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.border}33 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentGlow}, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 800, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        <FadeIn delay={0.1}>
          <h1
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: COLORS.white,
              margin: "0 0 24px",
            }}
          >
            Your business should RUN
            <br />
            <span style={{ color: COLORS.accent }}>while you sleep.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.6,
              color: COLORS.textMuted,
              maxWidth: 580,
              margin: "0 auto 32px",
            }}
          >
            Your leads should nurture themselves. Your reports should build themselves.
            Your processes should run themselves.
            That&apos;s not a dream — that&apos;s what we build.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 24px",
              borderRadius: 10,
              border: `1px solid ${COLORS.border}`,
              background: COLORS.bgCard,
              marginBottom: 40,
              fontFamily: FONTS.mono,
              fontSize: "clamp(13px, 1.5vw, 15px)",
              color: COLORS.textMuted,
              maxWidth: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span>We automate your...</span>
            <span
              style={{
                color: COLORS.accent,
                fontWeight: 600,
                transition: "opacity 0.3s ease",
                opacity: visible ? 1 : 0,
              }}
            >
              → {rotatingItems[currentIndex]}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://audit.letsautomate.today" target="_blank" rel="noopener noreferrer"
              style={{
                background: COLORS.accent,
                color: COLORS.bg,
                padding: "16px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontFamily: FONTS.body,
                fontSize: 16,
                fontWeight: 700,
                transition: "all 0.2s",
                boxShadow: `0 0 30px ${COLORS.accentDim}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 0 50px ${COLORS.accentDim}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = `0 0 30px ${COLORS.accentDim}`;
              }}
            >
              Take the Free Audit
            </a>
            <a
              href="#automate"
              style={{
                border: `1px solid ${COLORS.border}`,
                color: COLORS.text,
                padding: "16px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontFamily: FONTS.body,
                fontSize: 16,
                fontWeight: 600,
                transition: "all 0.2s",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = COLORS.accent;
                e.target.style.color = COLORS.accent;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = COLORS.border;
                e.target.style.color = COLORS.text;
              }}
            >
              See What We Automate
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
