import { COLORS, FONTS } from "../constants";
import FadeIn from "./FadeIn";

const rows = [
  {
    label: "GROW REVENUE",
    cards: [
      { emoji: "🎯", title: "Lead Capture & Follow-ups", desc: "Capture leads from ads, forms, and social — then follow up automatically so no opportunity goes cold." },
      { emoji: "🔄", title: "Sales Funnels & Nurture Sequences", desc: "Build automated funnels that move prospects from interest to purchase — without manual chasing." },
      { emoji: "💬", title: "WhatsApp & Customer Communication", desc: "Order updates, reminders, promotions, and follow-ups — sent automatically via WhatsApp at the right time." },
      { emoji: "📣", title: "Marketing Automation", desc: "Automate your campaigns, audience segmentation, and outreach — so your marketing runs even when your team doesn't." },
    ],
  },
  {
    label: "SAVE TIME & MONEY",
    cards: [
      { emoji: "📊", title: "Report Generation", desc: "Stop spending hours compiling reports. We build systems that pull data, format it, and deliver it automatically." },
      { emoji: "⌨️", title: "Data Entry & Syncing", desc: "Your team shouldn't be copying data between systems. We connect your tools so data flows on its own." },
      { emoji: "🔍", title: "Process Mapping & Tribal Knowledge", desc: "Business processes that live only in people's heads are a risk. We extract, document, and systematize them." },
      { emoji: "🛠", title: "Internal Business Tools", desc: "Planning tools, trackers, dashboards, mobile apps — lightweight custom tools built for your exact workflow." },
    ],
  },
];

export default function WhatWeAutomate() {
  return (
    <section id="automate" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
              What We Automate
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
              If your team is doing it by hand,
              <br />
              we can probably automate it.
            </h2>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: 17,
                color: COLORS.textMuted,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              We don&apos;t sell tools. We solve problems — whether that&apos;s plugging revenue leaks or eliminating busywork.
            </p>
          </div>
        </FadeIn>

        {rows.map((row, ri) => (
          <div key={ri} style={{ marginBottom: ri < rows.length - 1 ? 48 : 0, marginTop: ri > 0 ? 80 : 0 }}>
            <FadeIn delay={ri * 0.1}>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: COLORS.textDim,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                  paddingLeft: 4,
                }}
              >
                {row.label}
              </div>
            </FadeIn>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {row.cards.map((card, ci) => (
                <FadeIn key={ci} delay={ri * 0.1 + ci * 0.08}>
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        background: COLORS.bgCard,
                        border: `1px solid ${COLORS.border}`,
                        borderRadius: 12,
                        padding: "24px 20px",
                        height: "100%",
                        transition: "all 0.25s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = COLORS.accent + "66";
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = `0 8px 30px ${COLORS.accentGlow}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = COLORS.border;
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ fontSize: 28, marginBottom: 12 }}>{card.emoji}</div>
                      <h4
                        style={{
                          fontFamily: FONTS.display,
                          fontSize: 16,
                          fontWeight: 700,
                          color: COLORS.white,
                          margin: "0 0 8px",
                          lineHeight: 1.3,
                        }}
                      >
                        {card.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: FONTS.body,
                          fontSize: 13,
                          color: COLORS.textMuted,
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
