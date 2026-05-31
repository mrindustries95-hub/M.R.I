import React from "react";

const LogoWide: React.FC<{ small?: boolean }> = ({ small }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <div className="bb" style={{ fontSize: small ? 22 : 32, color: "#ffffff" }}>
      M.R
    </div>
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <div
        style={{
          fontFamily: "Barlow Condensed, sans-serif",
          letterSpacing: "0.06em",
          color: "#f5a623",
          fontSize: small ? 12 : 14,
        }}
      >
        INDUSTRIES
      </div>
      <div
        style={{ fontSize: small ? 10 : 12, color: "rgba(255,255,255,0.8)" }}
      >
        EST. 1993
      </div>
    </div>
  </div>
);

export default LogoWide;
