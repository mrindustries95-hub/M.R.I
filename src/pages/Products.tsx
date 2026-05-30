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
  const [filter, setFilter] = useState<string>("SS Fittings");
  // load product images with Vite's glob (returns URLs at build time)
  const images = (import.meta as any).glob(
    "../assets/images/products/*.{png,jpg,jpeg,svg}",
    { as: "url", eager: true },
  ) as Record<string, string>;
  // slugify helper to match product names to filenames
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // normalize filenames to base slugs (handles spaces/caps in actual filenames)
  const normalizedImages = Object.keys(images).reduce(
    (acc, k) => {
      const fn = k.split("/").pop() || "";
      const base = slugify(fn);
      // prefer png/jpg over svg when multiple variants exist
      if (!acc[base]) acc[base] = (images as Record<string, string>)[k];
      else {
        const extOrder = ["png", "jpg", "jpeg", "svg"];
        const existing = Object.keys(images).find(
          (x) => (images as Record<string, string>)[x] === acc[base],
        );
        const existingExt = existing ? existing.split(".").pop() : "";
        const newExt = fn.split(".").pop() || "";
        if (extOrder.indexOf(newExt) < extOrder.indexOf(existingExt || "svg")) {
          acc[base] = (images as Record<string, string>)[k];
        }
      }
      return acc;
    },
    {} as Record<string, string>,
  );

  // Create simpler grouping to fit on screen cleanly:
  const groupedCats = {
    "SS Fittings": actualProducts.filter((p) => p.cat === "SS Fittings"),
    "MS Spares": actualProducts.filter((p) => p.cat === "MS Spares"),
    "Valves & Caps": actualProducts.filter(
      (p) => p.cat === "Valves" || p.cat === "Caps",
    ),
    "Pipes & Cables": actualProducts.filter(
      (p) => p.cat === "Pipes" || p.cat === "Cables",
    ),
    Others: actualProducts.filter(
      (p) =>
        ![
          "SS Fittings",
          "MS Spares",
          "Valves",
          "Caps",
          "Pipes",
          "Cables",
        ].includes(p.cat),
    ),
  };

  const cats = Object.keys(groupedCats);
  const filtered =
    (groupedCats as Record<string, typeof actualProducts>)[filter] ||
    actualProducts;

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
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`fpill ${filter === c ? "on" : "off"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container-max">
          <div style={{ display: "grid", gap: 24 }} className="grid-3">
            {filtered.map((p: any, i: number) => (
              <div key={p.name}>
                <ScrollReveal animation="zoom-in" delay={i * 0.02}>
                  <div
                    className="lpcard"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "clamp(16px, 5vw, 28px)",
                        flexGrow: 1,
                        background: "#f8fafd",
                      }}
                    >
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
                            background: "#0099cc",
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
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
