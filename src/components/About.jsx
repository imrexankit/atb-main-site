import { COLORS, FONTS } from "../constants";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        background: COLORS.bgLight,
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <FadeIn>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: 12,
              color: COLORS.accent,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            About
          </span>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 800,
              color: COLORS.white,
              margin: "12px 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            The team behind Let's Automate
          </h2>
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: 16,
              color: COLORS.textMuted,
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p style={{ margin: 0 }}>
              We&apos;re a team of business analysts, data scientists, process specialists, and automation builders
              with over two decades of combined experience across manufacturing, eCommerce,
              trading, and operations.
            </p>
            <p style={{ margin: 0 }}>
              We&apos;ve worked inside the businesses we now help — sitting in production floors,
              managing ERP implementations, running eCommerce operations, and building
              dashboards for leadership teams. We&apos;ve seen the same pattern everywhere:
              smart people wasting hours on work that shouldn&apos;t be done by hand.
            </p>
            <p style={{ margin: 0 }}>
              That&apos;s why we started Let's Automate. We identify the inefficiencies,
              the manual work, the processes held together by memory and spreadsheets —
              and we get rid of them. Permanently.
            </p>
            <p style={{ margin: 0 }}>
              We don&apos;t sell software licenses. We don&apos;t do generic consulting.
              We find what&apos;s broken and we fix it — saving your business time and money
              from day one.
            </p>
          </div>

          {/* <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                color: COLORS.accent,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              LinkedIn →
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                color: COLORS.accent,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              YouTube →
            </a>
          </div> */}
        </FadeIn>
      </div>
    </section>
  );
}
