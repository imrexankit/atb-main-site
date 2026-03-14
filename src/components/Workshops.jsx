import { COLORS, FONTS } from "../constants";
import FadeIn from "./FadeIn";

const workshops = [
  {
    emoji: "⚡",
    title: "Your Business on Autopilot",
    desc: "A live walkthrough of 5-6 real automations across industries — lead follow-ups, report generation, WhatsApp messaging, inventory updates, and more. See exactly what's possible, identify what applies to your business, and leave with a clear picture of what to automate first.",
    audience: "Business owners, ops managers & working professionals",
    format: "Live · 90 mins · Weekly",
    price: "Free (first few sessions) · Then $5 to register",
  },
  {
    emoji: "🎯",
    title: "Build Your First Automated Sales Funnel",
    desc: "Tired of leads going cold? In this hands-on session, you'll set up a working lead capture → auto-reply → follow-up sequence from scratch. You'll leave with a live funnel — and a clear understanding of how much further automation can take your sales.",
    audience: "Business owners, freelancers & service professionals",
    format: "Live · 90 mins · Bi-weekly",
    price: "Free (first few sessions) · Then $5 to register",
  },
];

export default function Workshops() {
  return (
    <section
      id="workshops"
      style={{
        padding: "100px 24px",
        background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.bgLight} 50%, ${COLORS.bg} 100%)`,
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                color: COLORS.accent,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Workshops
            </span>
            <h2
              style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: COLORS.white,
                margin: "12px 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              Learn to build. Ship something real.
            </h2>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: 17,
                color: COLORS.textMuted,
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Weekly live workshops where you build real tools — not watch slides.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {workshops.map((w, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                style={{
                  background: COLORS.bgCard,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 16,
                  padding: 36,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s",
                  height: "100%",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.accent + "66";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${COLORS.accentGlow}, transparent)`,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ fontSize: 32, marginBottom: 16 }}>{w.emoji}</div>
                <h3
                  style={{
                    fontFamily: FONTS.display,
                    fontSize: 22,
                    fontWeight: 700,
                    color: COLORS.white,
                    margin: "0 0 12px",
                  }}
                >
                  {w.title}
                </h3>
                <p
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 15,
                    color: COLORS.textMuted,
                    lineHeight: 1.7,
                    margin: "0 0 24px",
                  }}
                >
                  {w.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                  {[
                    { label: "For", value: w.audience },
                    { label: "Format", value: w.format },
                    { label: "Price", value: w.price },
                  ].map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, fontSize: 13, fontFamily: FONTS.body }}>
                      <span style={{ color: COLORS.textDim, minWidth: 55 }}>{item.label}</span>
                      <span style={{ color: COLORS.textMuted }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  style={{
                    display: "inline-block",
                    background: "transparent",
                    border: `1px solid ${COLORS.accent}`,
                    color: COLORS.accent,
                    padding: "10px 24px",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontFamily: FONTS.body,
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = COLORS.accent;
                    e.target.style.color = COLORS.bg;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = COLORS.accent;
                  }}
                >
                  Register →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
