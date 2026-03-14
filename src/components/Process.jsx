import { COLORS, FONTS } from "../constants";
import FadeIn from "./FadeIn";

const steps = [
  { num: "01", title: "Take the Free Audit", desc: "Answer a few quick questions about how your business runs. Get an instant Digital Readiness Score showing where your team is wasting time." },
  { num: "02", title: "Book a Discovery Call", desc: "We review your score together, identify the biggest time and money drains, and map out what to automate first." },
  { num: "03", title: "We Build It", desc: "We design, build, and deploy your automation — fast. Using AI-powered development, we deliver in days, not months." },
  { num: "04", title: "You Save", desc: "Go live. Your team gets hours back every week. Costs drop. And we maintain, optimize, and expand." },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "100px 24px", maxWidth: 800, margin: "0 auto" }}>
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
            How It Works
          </span>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: COLORS.white,
              margin: "12px 0",
              letterSpacing: "-0.02em",
            }}
          >
            From Audit to Automation in DAYS, Not Months.
          </h2>
        </div>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              style={{
                display: "flex",
                gap: 24,
                padding: "28px 0",
                borderBottom: i < steps.length - 1 ? `1px solid ${COLORS.border}` : "none",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 14,
                  color: COLORS.accent,
                  fontWeight: 700,
                  minWidth: 36,
                  paddingTop: 2,
                }}
              >
                {step.num}
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: FONTS.display,
                    fontSize: 18,
                    fontWeight: 700,
                    color: COLORS.white,
                    margin: "0 0 6px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 15,
                    color: COLORS.textMuted,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
