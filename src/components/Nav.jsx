import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COLORS, FONTS } from "../constants";

const navLinks = [
  { label: "What We Automate", href: "#automate" },
  { label: "How It Works", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "/case-studies", isRoute: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled || menuOpen ? `${COLORS.bg}EE` : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled || menuOpen ? `1px solid ${COLORS.border}` : "1px solid transparent",
          transition: "all 0.3s ease",
          fontFamily: FONTS.body,
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: `linear-gradient(135deg, ${COLORS.accent}, #00B377)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONTS.mono,
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.bg,
            }}
          >
            AT
          </div>
          <span
            style={{
              fontFamily: FONTS.display,
              fontWeight: 700,
              fontSize: 18,
              color: COLORS.white,
              letterSpacing: "-0.02em",
            }}
          >
            Automate<span style={{ color: COLORS.accent }}>The</span>Boring
          </span>
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map((link) => {
              const linkStyle = {
                color: COLORS.textMuted,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              };
              return link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                  onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                  onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="https://audit.automatetheboring.agency/" target="_blank" rel="noopener noreferrer"
              style={{
                background: COLORS.accent,
                color: COLORS.bg,
                padding: "10px 20px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                transition: "all 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Free Audit →
            </a>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: COLORS.text,
              cursor: "pointer",
              padding: 8,
              zIndex: 210,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        )}
      </nav>

      {/* Mobile sidebar — only rendered on mobile */}
      {isMobile && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 190,
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? "auto" : "none",
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Sidebar panel */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "75vw",
              maxWidth: 300,
              height: "100vh",
              background: COLORS.bgCard,
              borderLeft: `1px solid ${COLORS.border}`,
              zIndex: 200,
              transform: menuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              display: "flex",
              flexDirection: "column",
              padding: "96px 32px 40px",
            }}
          >
            {/* Close button inside sidebar */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "none",
                border: "none",
                color: COLORS.text,
                cursor: "pointer",
                zIndex: 210,
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {navLinks.map((link, i) => {
              const mobileLinkStyle = {
                color: COLORS.textMuted,
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 500,
                padding: "14px 0",
                borderBottom: i < navLinks.length - 1 ? `1px solid ${COLORS.border}` : "none",
                fontFamily: FONTS.body,
                transition: "color 0.2s",
              };
              return link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={mobileLinkStyle}
                  onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                  onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={mobileLinkStyle}
                  onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                  onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="https://audit.automatetheboring.agency/" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                background: COLORS.accent,
                color: COLORS.bg,
                padding: "14px 20px",
                borderRadius: 8,
                textDecoration: "none",
                fontFamily: FONTS.body,
                fontSize: 15,
                fontWeight: 700,
                textAlign: "center",
                marginTop: 32,
              }}
            >
              Free Audit →
            </a>
          </div>
        </>
      )}
    </>
  );
}
