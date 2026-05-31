import React from "react";

export const Logo = ({ dark = true, isNavbar = false }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: 64,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.15) rotate(5deg)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
      }
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{ display: "block" }}
      >
        <filter id="star-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#FF2E2E"
            floodOpacity={dark ? "0.5" : "0.25"}
          />
        </filter>
        <polygon
          points="50,5 64,36 95,36 71,58 79,91 50,72 21,91 29,58 5,36 36,36"
          fill="#FF2E2E"
          filter="url(#star-glow)"
        />
        <text
          x="50"
          y="52.5"
          fill="#FFD700"
          fontSize="14.5"
          fontWeight="900"
          fontFamily="'Barlow Condensed', sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.03em"
        >
          M.R.I.
        </text>
      </svg>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: isNavbar ? 1 : 2,
      }}
    >
      <span
        style={{
          fontFamily: isNavbar
            ? "'Montserrat', sans-serif"
            : "'Bebas Neue', sans-serif",

          fontSize: isNavbar ? 21 : 20,
          letterSpacing: isNavbar ? "0.07em" : "0.09em",
          color: dark ? "white" : "#1a1005",
          lineHeight: 1,
        }}
      >
        M.R{"  "}
        <span
          style={{
            fontFamily: isNavbar
              ? "'Montserrat', sans-serif"
              : "'Bebas Neue', sans-serif",

            fontSize: isNavbar ? 21 : 20,
            letterSpacing: isNavbar ? "0.07em" : "0.09em",
            color: "#F5A623",
            lineHeight: 1,
          }}
        >
          INDUSTRIES
        </span>
      </span>
      <span
        className="bc"
        style={{
          fontSize: 9.5,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,0.4)" : "rgba(26,16,5,0.4)",
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        EST. 1993
      </span>
    </div>
  </div>
);
