import { COLORS, FONTS } from "../constants";
import FadeIn from "./FadeIn";
import Counter from "./Counter";

const stats = [
  { value: 40, suffix: "%+", label: "of workers spend a quarter of their week on manual, repetitive tasks", source: "Smartsheet" },
  { value: 60, suffix: "%", label: "of workers say they could save 6+ hours/week if repetitive tasks were automated", source: "Smartsheet" },
  { value: 50, suffix: "%", label: "of work time is spent creating or updating documents like PDFs and spreadsheets", source: "ProcessMaker" },
  { value: 10, suffix: "%", label: "of an employee's day is spent on manual data entry alone", source: "ProcessMaker" },
];

export default function Stats() {
  return (
    <section
      style={{
        padding: "0 24px",
        marginTop: -40,
        position: "relative",
        zIndex: 2,
      }}
    >
      <FadeIn>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            background: COLORS.border,
            borderRadius: 16,
            overflow: "hidden",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: COLORS.bgCard,
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 32,
                  fontWeight: 700,
                  color: COLORS.accent,
                  letterSpacing: "-0.02em",
                }}
              >
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 13,
                  color: COLORS.textMuted,
                  marginTop: 8,
                  lineHeight: 1.5,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: COLORS.textDim,
                  marginTop: 8,
                  letterSpacing: "0.05em",
                }}
              >
                — {stat.source}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
