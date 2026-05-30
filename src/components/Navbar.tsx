import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { IconMenu, IconX } from "./Icons";

type NavbarProps = {
  activeSection?: string;
  scrollToSection: (id: string) => void;
  openQuote?: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  scrollToSection,
  openQuote,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  const isHome = activeSection === "home";

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
          background: isHome
            ? scrolled
              ? "rgba(6,8,15,0.95)"
              : "rgba(6,8,15,0.6)"
            : "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${isHome ? (scrolled ? "rgba(0,136,255,0.15)" : "transparent") : "#d0dce8"}`,
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
            <Logo dark={isHome} />
          </div>

          <div className="dn-mob" style={{ gap: 36, alignItems: "center" }}>
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
                  color: isHome
                    ? activeSection === l.id
                      ? "#0088ff"
                      : "rgba(200,216,232,0.65)"
                    : activeSection === l.id
                      ? "#0099cc"
                      : "#0a1628",
                  position: "relative",
                  paddingBottom: 4,
                  transition: "color 0.25s",
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
                      background: isHome ? "#0088ff" : "#0099cc",
                      borderRadius: 1,
                    }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => openQuote?.()}
              className="bc"
              style={{
                background: isHome ? "transparent" : "#0a1628",
                border: isHome ? "1.5px solid rgba(255,255,255,0.25)" : "none",
                color: "white",
                padding: "8px 22px",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                borderRadius: 2,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#0088ff";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#0088ff";
                (e.currentTarget as HTMLButtonElement).style.color = "#06080f";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                (e.currentTarget as HTMLButtonElement).style.background = isHome
                  ? "transparent"
                  : "#0a1628";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  isHome ? "rgba(255,255,255,0.25)" : "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
            >
              Get a Quote
            </button>
          </div>

          <button
            className="show-mob"
            onClick={() => setMob(!mob)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isHome ? "white" : "#0a1628",
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
                background: isHome ? "#0b0f1c" : "white",
                borderTop: `1px solid ${isHome ? "rgba(0,136,255,0.1)" : "#d0dce8"}`,
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
                          ? "#0088ff"
                          : isHome
                            ? "white"
                            : "#0a1628",
                    }}
                  >
                    {l.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMob(false);
                    openQuote?.();
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
