import React, { useState } from "react";
import { motion } from "motion/react";
import {
  IconArrow,
  IconCheck,
  IconGlobe,
  IconLayers,
  IconPackage,
} from "../components/Icons";
import { LPageHeader } from "../components/LPageHeader";
import { ScrollReveal } from "../components/ScrollReveal";
import { MagneticButton } from "../components/MagneticButton";

const actualProducts = [
  {
    name: "SS Hose Collar",
    cat: "SS Fittings",
    sizes: [
      '1/2"',
      '5/8"',
      '3/4"',
      '1"',
      '1 1/4"',
      '1 1/2"',
      '2"',
      '2 1/2"',
      '3"',
      '4"',
    ],
  },
  {
    name: "MS Hose Collar",
    cat: "MS Spares",
    sizes: [
      '1/2"',
      '5/8"',
      '3/4"',
      '1"',
      '1 1/4"',
      '1 1/2"',
      '2"',
      '2 1/2"',
      '3"',
      '4"',
    ],
  },
  {
    name: "SS Reducer Hose Collar",
    cat: "SS Fittings",
    sizes: [
      '1 1/4 * 1"',
      '1 1/2 * 1 1/4"',
      '2 * 1 1/2"',
      '2 1/2 * 2"',
      '3 * 2 1/2"',
    ],
  },
  {
    name: "MS Reducer Hose Collar",
    cat: "MS Spares",
    sizes: [
      '1 1/4 * 1"',
      '1 1/2 * 1 1/4"',
      '2 * 1 1/2"',
      '2 1/2 * 2"',
      '3 * 2 1/2"',
    ],
  },
  {
    name: "SS Hose Connector",
    cat: "SS Fittings",
    sizes: [
      '1/2"',
      '5/8"',
      '3/4"',
      '1"',
      '1 1/4"',
      '1 1/2"',
      '2"',
      '2 1/2"',
      '3"',
      '4"',
    ],
  },
  {
    name: "MS Hose Connector",
    cat: "MS Spares",
    sizes: [
      '1/2"',
      '5/8"',
      '3/4"',
      '1"',
      '1 1/4"',
      '1 1/2"',
      '2"',
      '2 1/2"',
      '3"',
      '4"',
    ],
  },
  {
    name: "SS Column Pipe Adapter",
    cat: "SS Fittings",
    sizes: ['1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"', '4"'],
  },
  {
    name: "CI Column Pipe Adapter",
    cat: "CI Spares",
    sizes: ['1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"', '4"'],
  },
  {
    name: "SS Reducer Column Pipe Adapter",
    cat: "SS Fittings",
    sizes: [
      '1 1/4 * 1"',
      '1 1/2 * 1 1/4"',
      '2 * 1 1/2"',
      '2 1/2 * 2"',
      '3 * 2 1/2"',
      '4 * 3"',
    ],
  },
  {
    name: "CI Reducer Column Pipe Adapter",
    cat: "CI Spares",
    sizes: [
      '1 1/4 * 1"',
      '1 1/2 * 1 1/4"',
      '2 * 1 1/2"',
      '2 1/2 * 2"',
      '3 * 2 1/2"',
      '4 * 3"',
    ],
  },
  {
    name: "Bore Well Cap",
    cat: "Caps",
    sizes: ['1"', '1 1/4"', '1 1/2"', '2"', '6.5"'],
    details: "MS: 8mm/2mm thk. SS: 3mm thk.",
  },
  {
    name: "Bore Clamp",
    cat: "Clamps",
    sizes: ['1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"'],
    details: "Available in MS & SS",
  },
  {
    name: "CI NRV Ballwall",
    cat: "Valves",
    sizes: ['1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"'],
  },

  {
    name: "CRI Model NRV",
    cat: "Valves",
    sizes: ['1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"'],
  },

  { name: "Metal NRV", cat: "Valves", sizes: ['1"', '1 1/4"', '1 1/2"', '2"'] },

  {
    name: "GI Bend and Coupling",
    cat: "GI Fittings",
    sizes: ['1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"', '4"'],
  },
  { name: "Wire Cable", cat: "Cables", sizes: ["1.5", "2.5", "4", "6"] },
  {
    name: "Rope",
    cat: "Cables",
    sizes: [
      "6 mm",
      "8 mm",
      "10 mm",
      "12 mm",
      "14 mm",
      "16 mm",
      "18 mm",
      "20 mm",
      "22 mm",
      "24 mm",
    ],
  },
  { name: "MS T Hose Collar", cat: "MS Spares", sizes: ["Custom"] },
  { name: "Openwell Elbow", cat: "Fittings", sizes: ["Custom"] },
  {
    name: "SS Reducer Bush",
    cat: "SS Fittings",
    sizes: [
      '1 1/4 * 1"',
      '1 1/2 * 1 1/4"',
      '2 * 1 1/2"',
      '2 1/2 * 2"',
      '3 * 2 1/2"',
      '4 * 3"',
      '2 * 1"',
      '1 1/2 * 1"',
      '2 1/2 * 1 1/2"',
    ],
  },
  {
    name: "MS Reducer Bush",
    cat: "MS Spares",
    sizes: [
      '1 1/4 * 1"',
      '1 1/2 * 1 1/4"',
      '2 * 1 1/2"',
      '2 1/2 * 2"',
      '3 * 2 1/2"',
      '4 * 3"',
      '2 * 1"',
      '1 1/2 * 1"',
      '2 1/2 * 1 1/2"',
    ],
  },
  {
    name: "SS Reverse Bush",
    cat: "SS Fittings",
    sizes: [
      '1 * 1 1/4"',
      '1 1/4 * 1 1/2"',
      '1 1/2 * 2"',
      '2 * 2 1/2"',
      '2 1/2 * 3"',
      '3 * 4"',
    ],
  },
  {
    name: "MS Reverse Bush",
    cat: "MS Spares",
    sizes: [
      '1 * 1 1/4"',
      '1 1/4 * 1 1/2"',
      '1 1/2 * 2"',
      '2 * 2 1/2"',
      '2 1/2 * 3"',
      '3 * 4"',
    ],
  },
  {
    name: "UPVC Sub Pipe",
    cat: "Pipes",
    sizes: ["KMP", "TRUEBORE", "ASHIRVAD"],
  },
  {
    name: "Open Well Strainer Jali",
    cat: "SS Fittings",
    sizes: ['2"', '2 1/2"', '3"'],
  },
  { name: "SS & MS Elbow", cat: "Fittings", sizes: ['2 1/2"', '3"'] },
  { name: "Panel Board", cat: "Misc", sizes: ["SS B/W/N"] },
];

export const Products: React.FC<{ openQuote?: (id?: string) => void }> = ({
  openQuote,
}) => {
  const [filterKey, setFilterKey] = useState<string>("SS FITTINGS");
  // load product images with Vite's glob (returns URLs at build time)
  const images = (import.meta as any).glob(
    "../assets/images/products/*.{png,jpg,jpeg,svg}",
    { as: "url", eager: true },
  ) as Record<string, string>;
  // slugify helper to match product names to filenames
  // normalize image map: filenames -> url
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const normalizedImages = Object.keys(images).reduce<Record<string, string>>(
    (acc, p) => {
      const parts = p.split("/");
      const file = parts[parts.length - 1];
      const name = file.replace(/\.(png|jpe?g|svg)$/i, "");
      acc[slugify(name)] = images[p];
      return acc;
    },
    {},
  );

  // grouped filters to match previous UI
  const filters = [
    { key: "SS FITTINGS", matches: ["SS Fittings", "Fittings"] },
    { key: "MS SPARES", matches: ["MS Spares"] },
    { key: "VALVES & CAPS", matches: ["Valves", "Caps"] },
    { key: "PIPES & CABLES", matches: ["Pipes", "Cables"] },
    { key: "OTHERS", matches: [] },
  ];

  const cats = Array.from(new Set(actualProducts.map((p) => p.cat))).sort();

  const filtered = actualProducts.filter((p) => {
    const active = filters.find((f) => f.key === filterKey);
    if (!active) return true;
    if (active.matches.length === 0)
      return !filters.flatMap((f) => f.matches).includes(p.cat);
    return active.matches.includes(p.cat);
  });

  return (
    <>
      <LPageHeader
        title="INDUSTRIAL"
        accent="INVENTORY"
        sub="A comprehensive catalogue of precision-engineered spares and components."
      />

      <div
        style={{
          background: "white",
          borderBottom: "1px solid #d0dce8",
          position: "sticky",
          top: 72,
          zIndex: 40,
        }}
      >
        <div
          className="container-max"
          style={{
            padding: "16px var(--section-px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilterKey(f.key)}
                className={`fpill ${filterKey === f.key ? "on" : "off"}`}
              >
                {f.key}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding" style={{ background: "#f3f6f8" }}>
        <div className="container-max products-container">
          <div style={{ display: "grid", gap: 24 }} className="grid-3">
            {filtered.map((p: any, i: number) => (
              <div key={p.name}>
                <ScrollReveal animation="zoom-in" delay={i * 0.02}>
                  <motion.div
                    whileHover={{
                      y: -3,
                      border: "1px solid #d48a10",
                      scale: 1.01,
                      boxShadow: "0 12px 30px rgba(10, 20, 40, 0.08)",
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    style={{
                      maxWidth: 760,
                      margin: "0 auto",
                      background: "white",
                      border: "1px solid #e6eef4",

                      padding: "32px",
                      textAlign: "center",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 2,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="igrid"
                      style={{ position: "absolute", inset: 0, opacity: 0.01 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 16,
                      }}
                    >
                      <h3
                        className="bc"
                        style={{
                          fontWeight: 800,
                          fontSize: 18,
                          color: "#0a1628",
                          textTransform: "uppercase",
                          letterSpacing: "0.03em",
                          lineHeight: 1.2,
                        }}
                      >
                        {p.name}
                      </h3>
                      <span
                        className="bc"
                        style={{
                          background: "#d48a10",
                          color: "white",
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          padding: "3px 10px",
                          flexShrink: 0,
                          marginLeft: 8,
                          borderRadius: 2,
                        }}
                      >
                        {p.cat}
                      </span>
                    </div>
                    {p.details && (
                      <p
                        style={{
                          fontSize: 13,
                          color: "#5a7080",
                          lineHeight: 1.6,

                          marginBottom: 16,
                        }}
                      >
                        {p.details}
                      </p>
                    )}
                    {/* product image (falls back to placeholder SVG created in assets) */}
                    <div style={{ width: "100%", marginBottom: 12 }}>
                      {(() => {
                        const slug = slugify(p.name);
                        const src =
                          normalizedImages[slug] ??
                          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="%23f8fafd"/></svg>';
                        return (
                          <img
                            src={src}
                            alt={p.name}
                            style={{
                              width: "100%",
                              height: 160,
                              objectFit: "contain",
                            }}
                          />
                        );
                      })()}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginTop: "auto",
                      }}
                    >
                      {p.sizes.map((s: string) => (
                        <span
                          key={s}
                          style={{
                            background: "white",
                            border: "1px solid #d0dce8",
                            color: "#3a4a5c",
                            fontSize: 12,
                            padding: "4px 8px",
                            borderRadius: 2,
                            fontWeight: 500,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
