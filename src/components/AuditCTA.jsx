import { COLORS, FONTS } from "../constants";
import FadeIn from "./FadeIn";

export default function AuditCTA() {
  return (
    <section
      id="audit"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentGlow}, transparent 70%)`,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <FadeIn>
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: COLORS.white,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            How much time is your team actually wasting?
          </h2>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 17,
              color: COLORS.textMuted,
              lineHeight: 1.6,
              margin: "0 0 16px",
            }}
          >
            Take our free Digital Readiness Audit. Answer a few questions about how your
            business runs today. Get an instant score showing where manual work is costing
            you the most — and where automation can make the biggest impact.
          </p>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 17,
              color: COLORS.textMuted,
              lineHeight: 1.6,
              margin: "0 0 36px",
            }}
          >
            Then book a free discovery call. No pressure. No pitch deck.
            Just a conversation about what&apos;s possible.
          </p>
          <a
            href="https://audit.letsautomate.today" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: COLORS.accent,
              color: COLORS.bg,
              padding: "18px 40px",
              borderRadius: 12,
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: 17,
              fontWeight: 700,
              transition: "all 0.2s",
              boxShadow: `0 0 40px ${COLORS.accentDim}`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = `0 0 60px ${COLORS.accentDim}`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = `0 0 40px ${COLORS.accentDim}`;
            }}
          >
            Take the Free Audit →
          </a>
          <p
            style={{
              fontFamily: FONTS.mono,
              fontSize: 12,
              color: COLORS.textDim,
              marginTop: 16,
            }}
          >
            Takes 3 minutes · No email required to start
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
