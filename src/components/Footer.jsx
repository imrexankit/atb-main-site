import { COLORS, FONTS } from "../constants";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 24px",
        borderTop: `1px solid ${COLORS.border}`,
        fontFamily: FONTS.body,
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: `linear-gradient(135deg, ${COLORS.accent}, #00B377)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONTS.mono,
              fontSize: 10,
              fontWeight: 700,
              color: COLORS.bg,
            }}
          >
            AT
          </div>
          <span style={{ fontSize: 14, color: COLORS.textMuted }}>
            automatetheboring.agency
          </span>
        </div>
        <div style={{ fontSize: 13, color: COLORS.textDim }}>
          © 2026 Automate The Boring. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
