import React from "react";
import { Logo } from "./Logo";
import { IconPhone, IconMail, IconPin, IconInstagram } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

export const Footer = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => (
  <footer
    style={{
      background: "#030608",
      borderTop: "1px solid rgba(245,166,35,0.07)",
    }}
    className="section-padding"
  >
    <div className="container-max">
      <ScrollReveal animation="fade-up">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 40,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
          className="pgrid"
        >
          <div>
            <Logo dark={true} />
            <p
              style={{
                marginTop: 24,
                fontSize: 14,
                lineHeight: 1.85,
                color: "rgba(200,216,232,0.3)",
                maxWidth: 280,
                fontWeight: 300,
              }}
            >
              Leading manufacturers of high-precision borewell spares and
              industrial MS/SS components since 1996.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
              <a
                href="https://www.instagram.com/_mrindustries_?igsh=dGNtMjljemNlNDNi"
                target="_blank"
                rel="noopener noreferrer"
                className="bc"
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid rgba(245,166,35,0.15)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  borderRadius: 2,
                  color: "rgba(200,216,232,0.35)",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.background = "#F5A623";
                  (e.currentTarget as HTMLElement).style.color = "#1a1005";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#F5A623";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(200,216,232,0.35)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(245,166,35,0.15)";
                }}
              >
                <IconInstagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4
              className="bc"
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#F5A623",
                marginBottom: 28,
              }}
            >
              Quick Links
            </h4>
            {["Customization", "Quality", "Contact"].map((l) => (
              <button
                key={l}
                onClick={() => scrollToSection(l.toLowerCase())}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  color: "rgba(200,216,232,0.35)",
                  fontFamily: "'DM Sans',sans-serif",
                  marginBottom: 14,
                  textAlign: "left",
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
                  (e.currentTarget.style.color = "#F5A623")
                }
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) =>
                  (e.currentTarget.style.color = "rgba(200,216,232,0.35)")
                }
              >
                {l}
              </button>
            ))}
          </div>
          <div>
            <h4
              className="bc"
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#F5A623",
                marginBottom: 28,
              }}
            >
              Contact
            </h4>
            {[
              {
                icon: <IconPhone size={16} />,
                text: "9677844497 / 9443356217",
              },
              { icon: <IconMail size={16} />, text: "info@mrindustries.com" },
              {
                icon: <IconPin size={16} />,
                text: (
                  <a
                    href="https://www.google.com/maps/place/M.R.Industries/@11.0345322,76.9820321,1400m/data=!3m1!1e3!4m9!1m2!2m1!1s7%2F11,+Jaya+Shimman+Street+No.2+Avarampalyam,+Ganapathy+Post,+Coimbatore+-+641006!3m5!1s0x3ba8591789225963:0xdc820dea3ee89709!8m2!3d11.0301385!4d76.9849448!16s%2Fg%2F11yx6rf68w?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    7/11, Jaya Shimman Street No.2 Avarampalyam, Ganapathy Post,
                    Coimbatore - 641006
                  </a>
                ),
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                  color: "rgba(200,216,232,0.35)",
                  fontSize: 14,
                }}
              >
                <span style={{ color: "#F5A623", opacity: 0.65 }}>
                  {c.icon}
                </span>
                {c.text}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <div
        style={{
          paddingTop: 24,
          borderTop: "1px solid rgba(245,166,35,0.05)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span
          className="bc"
          style={{
            fontSize: 11,
            color: "rgba(200,216,232,0.28)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          © 2026 M.R Industries. All Rights Reserved.
        </span>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {["MADE IN INDIA"].map((b, i) => (
            <span
              key={i}
              className="bc"
              style={{
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "rgba(200,216,232,0.45)",
              }}
            >
              {b}
              {i === 0 && (
                <span style={{ marginLeft: 16, color: "rgba(245,166,35,0.3)" }}>
                  |
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
