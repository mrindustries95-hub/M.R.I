import React from "react";

export const Logo: React.FC<{ dark?: boolean }> = ({ dark = true }) => (
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
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span
        className="nav-brand"
        style={{
          fontSize: 24,
          color: dark ? "white" : "#0a1628",
        }}
      >
        M.R <span style={{ color: "#FF2E2E" }}>INDUSTRIES</span>
      </span>
      <span
        className="bc"
        style={{
          fontSize: 10.5,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,0.4)" : "rgba(10,22,40,0.4)",
          marginTop: 3,
          fontWeight: 700,
        }}
      >
        Est. 1996
      </span>
    </div>
  </div>
);
