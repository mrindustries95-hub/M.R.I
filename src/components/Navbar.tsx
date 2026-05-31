import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { IconMenu, IconX } from "./Icons";

export const Navbar = ({ activeSection, scrollToSection, openQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  const isHome = activeSection === "home";
  const isDark = isHome;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { id: "products", label: "Products" },
    { id: "customization", label: "Customization" },
    { id: "quality", label: "Quality" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          background: isDark
            ? scrolled
              ? "#0f1114"
              : "rgba(24, 20, 16, 0.6)"
            : "rgba(255, 255, 255, 0.97)",
          borderBottom: isDark
            ? scrolled
              ? "2px solid #F5A623"
              : "1px solid transparent"
            : "1px solid #d0dce8",
          transition: "all 0.4s",
        }}
      >
        <div
          className="container-max"
          style={{
            padding: "0 var(--section-px)",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => scrollToSection("home")}
            style={{ cursor: "pointer" }}
          >
            <Logo dark={isDark} isNavbar={true} />
          </div>

          <div
            className="dn-mob"
            style={{ display: "flex", gap: 36, alignItems: "center" }}
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: isDark
                    ? activeSection === l.id
                      ? "#F5A623"
                      : "rgba(255,255,255,0.7)"
                    : activeSection === l.id
                      ? "#d48a10"
                      : "#1a1005",
                  position: "relative",
                  paddingBottom: 4,
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== l.id) {
                    e.currentTarget.style.color = isDark ? "white" : "#d48a10";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== l.id) {
                    e.currentTarget.style.color = isDark
                      ? "rgba(255,255,255,0.7)"
                      : "#1a1005";
                  }
                }}
              >
                {l.label}
                {activeSection === l.id && (
                  <motion.div
                    layoutId="ul"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: isDark ? "#F5A623" : "#d48a10",
                      borderRadius: 1,
                    }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={openQuote}
              className="bc"
              style={{
                background: isDark ? "#F5A623" : "#1a1005",
                border: "none",
                color: isDark ? "#0f1114" : "white",
                padding: "10px 24px",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transform: "skewX(-12deg)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark
                  ? "#d48a10"
                  : "#F5A623";
                e.currentTarget.style.color = isDark ? "#0f1114" : "#0f1114";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDark
                  ? "#F5A623"
                  : "#1a1005";
                e.currentTarget.style.color = isDark ? "#0f1114" : "white";
              }}
            >
              <span
                style={{ display: "inline-block", transform: "skewX(12deg)" }}
              >
                Get a Quote
              </span>
            </button>
          </div>

          <button
            className="show-mob"
            onClick={() => setMob(!mob)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isDark ? "white" : "#1a1005",
            }}
          >
            {mob ? <IconX /> : <IconMenu />}
          </button>
        </div>

        <AnimatePresence>
          {mob && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{
                overflow: "hidden",
                background: isDark ? "#0f1114" : "white",
                borderTop: `1px solid ${isDark ? "rgba(245,166,35,0.15)" : "#d0dce8"}`,
              }}
            >
              <div
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      scrollToSection(l.id);
                      setMob(false);
                    }}
                    className="bc"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontWeight: 700,
                      fontSize: 22,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color:
                        activeSection === l.id
                          ? "#F5A623"
                          : isDark
                            ? "white"
                            : "#1a1005",
                    }}
                  >
                    {l.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMob(false);
                    openQuote();
                  }}
                  className="btn-p"
                  style={{ marginTop: 8 }}
                >
                  <span>Get a Quote</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
