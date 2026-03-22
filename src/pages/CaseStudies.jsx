import { useState } from "react";
import { COLORS, FONTS } from "../constants";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AuditCTA from "../components/AuditCTA";
import FadeIn from "../components/FadeIn";

const LABEL_COLORS = {
  problem: "#FF4D4D",
  whatWasDone: "#F5C518",
  result: "#00E599",
};

const categories = [
  {
    label: "Revenue Growth",
    tag: "CATEGORY 01",
    cases: [
      {
        title: "Grew Marketing-Driven Sales by 38% and Halved ACOS from 18% to 9%",
        industry: "eCommerce",
        tools: "Amazon Ads, Google Analytics, Google Search Console, Power BI, SQL",
        problem:
          "Campaigns ran on gut instinct with no reliable data. ACOS sat at 18%, eating deep into margins.",
        whatWasDone:
          "Built a full analytics infrastructure and automated Amazon Ads optimization dashboard. Category-wise analysis improved targeting, and Power BI dashboards replaced manual reporting with live KPI visibility.",
        results: [
          "38% growth in marketing-driven sales",
          "ACOS dropped from 18% to 9% — ad spend efficiency doubled",
          "15% improvement in campaign targeting accuracy",
          "50%+ overall business sales growth during the same period",
        ],
        quote:
          "Every rupee spent on ads started working twice as hard — not by spending more, but by knowing exactly where to spend it.",
      },
      {
        title: "Unlocked Bulk WhatsApp Marketing for a B2B Business",
        industry: "B2B Distribution / Services",
        tools: "WhatsApp Business API, Automation Workflows",
        problem:
          "No scalable channel to reach customers — marketing was word-of-mouth or slow manual outreach.",
        whatWasDone:
          "Implemented Bulk WhatsApp Marketing automation — list management to message dispatch, fully automated.",
        results: [
          "A brand new marketing channel unlocked — previously non-existent",
          "Ability to reach the entire customer base instantly",
          "Scalable foundation for promotions, upsells, and re-engagement campaigns",
        ],
        quote:
          "The business went from zero broadcast capability to a fully operational marketing channel — overnight.",
      },
    ],
  },
  {
    label: "Cost & Time Savings",
    tag: "CATEGORY 02",
    cases: [
      {
        title: "Saved $5,500 Every Month by Eliminating Fabric Wastage",
        industry: "Textile Manufacturing",
        tools: "KPI Tracking, Process Automation, Reporting Systems",
        problem:
          "Thousands of dollars lost monthly to fabric wastage with no way to track consumption or hold departments accountable.",
        whatWasDone:
          "Audited the full production process and introduced unit-level KPI tracking. Automated fabric requirement calculations per product and built real-time reporting for management.",
        results: [
          "$5,500 saved every month — recurring, compounding impact",
          "3% reduction in fabric wastage across production units",
          "Full visibility into a process that had previously been a black box",
        ],
        quote:
          "What was once written off as unavoidable became a controlled, measurable, and solved problem.",
      },
      {
        title: "Replaced a $6,000/Year Software Subscription with a Custom Automation",
        industry: "Operations / Distribution",
        tools: "Custom UI Automation (Python)",
        problem:
          "Paying $6,000/year for a UiPath licence to handle invoice generation, with no API access making it permanently expensive.",
        whatWasDone:
          "Built a custom Python UI automation that replicated the UiPath workflow exactly — no API or database access required, zero licence cost.",
        results: [
          "$6,000 annual subscription eliminated entirely",
          "Full ROI achieved from day one of deployment",
          "Zero drop in process performance or reliability",
        ],
        quote: "Same output. Zero licence fee. The expensive tool was never needed in the first place.",
      },
      {
        title: "Eliminated 13+ Hours of Manual Work Per Week Across Reporting and Data Entry",
        industry: "Services / ERP Operations",
        tools: "Python, Power BI, ERP Automation, Document Processing",
        problem:
          "13+ hours a week spent on manual reporting and data entry — management reports alone took 6–7 hours to compile.",
        whatWasDone:
          "Automated every manual process: live dashboards replaced compiled reports, scanned documents auto-processed into ERP entries, bank reconciliation automated.",
        results: [
          "13+ hours of manual work eliminated per week",
          "Reporting became real-time instead of retrospective",
          "Data entry errors reduced to near-zero",
          "Team freed to focus on analysis and decision-making — not data wrangling",
        ],
        quote: "The team didn't get faster at manual work. The manual work stopped existing.",
      },
      {
        title: "Automated Shopify–Razorpay Sales Reconciliation",
        industry: "eCommerce",
        tools: "Python, Shopify API, Razorpay API",
        problem:
          "Sales reconciliation between Shopify and Razorpay was fully manual — error-prone and undetectable until it caused accounting problems.",
        whatWasDone:
          "Built a custom app that auto-matched transactions across both platforms, flagged discrepancies, and produced clean reconciliation outputs.",
        results: [
          "Reconciliation time reduced to near-zero",
          "Discrepancies flagged automatically — nothing slipping through",
          "Finance team freed from one of their most repetitive weekly tasks",
        ],
        quote: null,
      },
      {
        title: "Reduced Material Request Time by 1.5 Hours Per Day Across All Branches",
        industry: "Services / Multi-Branch Operations",
        tools: "Odoo ERP, Process Automation",
        problem:
          "Branch material requests were informal and paper-based — no system, no data, no coordination.",
        whatWasDone:
          "Replaced paper-based requests with an Odoo ERP workflow — every request logged, tracked, and processed with full management visibility.",
        results: [
          "1.5 hours saved per day across all branches",
          "Data being captured for the first time — enabling planning and analysis",
          "Eliminated informal, untracked request processes entirely",
        ],
        quote: null,
      },
    ],
  },
  {
    label: "Operational Excellence & Visibility",
    tag: "CATEGORY 03",
    cases: [
      {
        title: "Replaced Operational Chaos with a Unified Planning Dashboard",
        industry: "Services / Distribution",
        tools: "Custom Dashboard, ERP Integration, Python",
        problem:
          "No planning module in the legacy ERP. Dispatch, purchasing, and inventory managed entirely via phone calls and emails.",
        whatWasDone:
          "Built a custom Dispatch, Purchase and Inventory Planning tool integrated with the existing ERP — Sales and Operations on one live dashboard.",
        results: [
          "Single source of truth across Sales, Operations, and Dispatch",
          "Manual coordination calls and emails largely eliminated",
          "Customer communications became accurate and timely",
          "Last-minute planning changes reduced dramatically",
          "Resource allocation became data-driven and optimized",
          "1.5 hours saved per day across branches on material requests alone",
          "Business gained visibility into operational data it had never had before",
        ],
        quote: "The business didn't just save time. It gained control — for the first time.",
      },
      {
        title: "Automated Real-Time Order Notifications via WhatsApp for a B2B Business",
        industry: "B2B Distribution / Services",
        tools: "WhatsApp Business API, ERP Integration, Automation Workflows",
        problem:
          "Customers had no visibility into their orders and had to call in to check status — creating back-and-forth and eroding trust.",
        whatWasDone:
          "Built a WhatsApp automation that sends an instant, personalized notification to the customer every time an order is created — integrated directly with order management.",
        results: [
          "Customers informed instantly the moment an order is created",
          "Inbound \"where's my order?\" queries eliminated",
          "Professional, consistent customer communication at zero marginal effort",
          "Stronger customer trust and satisfaction",
        ],
        quote: "A simple automation turned order creation into a customer experience moment.",
      },
    ],
  },
];

function AccordionRow({ cs, index, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <div
        style={{
          borderBottom: isLast ? "none" : `1px solid ${COLORS.border}`,
        }}
      >
        {/* Collapsed header — always visible */}
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            width: "100%",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "20px 0",
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            textAlign: "left",
          }}
        >
          {/* Left: tag + title stacked */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Industry tag */}
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: 10,
                color: COLORS.accent,
                background: COLORS.accentDim,
                padding: "3px 8px",
                borderRadius: 4,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
              }}
            >
              {cs.industry}
            </span>

            {/* Title */}
            <span
              style={{
                fontFamily: FONTS.display,
                fontWeight: 600,
                fontSize: "clamp(14px, 1.8vw, 17px)",
                color: open ? COLORS.white : COLORS.text,
                lineHeight: 1.35,
                transition: "color 0.2s",
              }}
            >
              {cs.title}
            </span>
          </div>

          {/* Chevron */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? COLORS.accent : COLORS.textDim}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              flexShrink: 0,
              marginTop: 2,
              transition: "transform 0.25s ease, stroke 0.2s",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Expanded detail */}
        {open && (
          <div style={{ paddingBottom: 28, paddingLeft: 4 }}>
            {/* Tools */}
            <p
              style={{
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: COLORS.textDim,
                margin: "0 0 24px",
                letterSpacing: "0.05em",
              }}
            >
              {cs.tools}
            </p>

            {/* Problem */}
            <div style={{ marginBottom: 20 }}>
              <p
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: LABEL_COLORS.problem,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                  fontWeight: 600,
                }}
              >
                The Problem
              </p>
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 15,
                  color: COLORS.textMuted,
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {cs.problem}
              </p>
            </div>

            {/* What Was Done */}
            <div style={{ marginBottom: 20 }}>
              <p
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: LABEL_COLORS.whatWasDone,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                  fontWeight: 600,
                }}
              >
                What Was Done
              </p>
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 15,
                  color: COLORS.textMuted,
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {cs.whatWasDone}
              </p>
            </div>

            {/* The Result */}
            <div style={{ marginBottom: cs.quote ? 20 : 0 }}>
              <p
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: LABEL_COLORS.result,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                  fontWeight: 600,
                }}
              >
                The Result
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {cs.results.map((r, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: 15,
                      color: COLORS.text,
                      display: "flex",
                      gap: 10,
                      marginBottom: 8,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: LABEL_COLORS.result,
                        flexShrink: 0,
                        marginTop: 3,
                        fontSize: 13,
                      }}
                    >
                      ✓
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            {cs.quote && (
              <blockquote
                style={{
                  borderLeft: `3px solid ${COLORS.accent}`,
                  margin: "20px 0 0",
                  paddingLeft: 16,
                  fontFamily: FONTS.body,
                  fontSize: 14,
                  color: COLORS.textMuted,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                {cs.quote}
              </blockquote>
            )}
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default function CaseStudies() {
  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <Nav />

      {/* Page header */}
      <div
        style={{
          padding: "140px 24px 80px",
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <p
            style={{
              fontFamily: FONTS.mono,
              fontSize: 12,
              color: COLORS.accent,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              margin: "0 0 20px",
            }}
          >
            Case Studies
          </p>
          <h1
            style={{
              fontFamily: FONTS.display,
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 52px)",
              color: COLORS.white,
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Real results.{" "}
            <span style={{ color: COLORS.accent }}>Real businesses.</span>
            <br />
            No fluff.
          </h1>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 18,
              color: COLORS.textMuted,
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Every project below solved a real problem — measured in dollars saved, hours reclaimed, or revenue unlocked.
          </p>
        </FadeIn>
      </div>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section
          key={ci}
          style={{
            padding: "40px 24px 72px",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <FadeIn>
            <div style={{ marginBottom: 32 }}>
              <p
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: COLORS.accent,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                }}
              >
                {cat.tag}
              </p>
              <h2
                style={{
                  fontFamily: FONTS.display,
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 32px)",
                  color: COLORS.white,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {cat.label}
              </h2>
            </div>
          </FadeIn>

          {/* Accordion list */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              background: COLORS.bgCard,
              padding: "0 24px",
            }}
          >
            {cat.cases.map((cs, i) => (
              <AccordionRow
                key={i}
                cs={cs}
                index={i}
                isLast={i === cat.cases.length - 1}
              />
            ))}
          </div>

          {ci < categories.length - 1 && (
            <div
              style={{
                borderBottom: `1px solid ${COLORS.border}`,
                marginTop: 72,
              }}
            />
          )}
        </section>
      ))}

      <AuditCTA />
      <Footer />
    </div>
  );
}
