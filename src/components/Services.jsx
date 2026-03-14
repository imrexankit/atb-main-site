import { COLORS, FONTS } from "../constants";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: "🔍",
    tag: "SERVICE",
    title: "Business Logic Miner",
    description:
      "A WhatsApp bot that interviews your employees to map every process in your business. Get a complete document of how work actually gets done — no more tribal knowledge locked in people's heads.",
    features: [
      "Automated employee interviews via WhatsApp",
      "Complete process documentation",
      "Identify bottlenecks and redundancies",
      "Onboard new employees 3x faster",
    ],
    cta: "Learn More",
    href: "/business-logic-miner",
  },
  {
    icon: "⚡",
    tag: "SERVICE",
    title: "Report & Data Entry Automation",
    description:
      "Stop your team from wasting hours on manual reports and data entry. We build automated systems that pull, transform, and deliver your data — so your people can focus on decisions, not spreadsheets.",
    features: [
      "Automated report generation",
      "Data entry elimination",
      "Real-time dashboards",
      "Custom integrations with your tools",
    ],
    cta: "Learn More",
    href: "/report-automation",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}>
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
            Services
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
            We find the waste. Then we kill it.
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
            Two focused services that save you time and money.
          </p>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
        {services.map((service, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div
              style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 16,
                padding: 36,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS.accent + "66";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${COLORS.bg}88`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = COLORS.border;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{service.icon}</div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  color: COLORS.accent,
                  letterSpacing: "0.15em",
                  marginBottom: 12,
                  display: "block",
                }}
              >
                {service.tag}
              </span>
              <h3
                style={{
                  fontFamily: FONTS.display,
                  fontSize: 24,
                  fontWeight: 700,
                  color: COLORS.white,
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 15,
                  color: COLORS.textMuted,
                  lineHeight: 1.7,
                  margin: "0 0 24px",
                  flex: 1,
                }}
              >
                {service.description}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {service.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: COLORS.accent, fontSize: 14 }}>✓</span>
                    <span style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.textMuted }}>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={service.href}
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.accent,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {service.cta} <span>→</span>
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
