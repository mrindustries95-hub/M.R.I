import React from "react";
import { LPageHeader } from "../components/LPageHeader";
import { ScrollReveal } from "../components/ScrollReveal";

export const Quality = () => (
  <>
    <LPageHeader
      title="QUALITY"
      accent="ASSURANCE"
      sub="Uncompromising standards at every stage of production."
    />
    <div className="section-padding">
      <div className="container-max">
        <div
          style={{ display: "grid", gap: 24, marginBottom: 80 }}
          className="grid-3"
        >
          {[
            {
              title: "Material Testing",
              num: "01",
              desc: "Every batch of raw MS and SS tested for chemical composition and tensile strength before production starts.",
            },
            {
              title: "MR INDUSTRIES Gauging",
              num: "02",
              desc: "Micron-level accuracy checks using calibrated digital instruments and gauges for full dimensional verification.",
            },
            {
              title: "Stress Analysis",
              num: "03",
              desc: "Simulated pressure and load testing to ensure zero-failure performance under extreme field conditions.",
            },
          ].map((q, i) => (
            <ScrollReveal animation="fade-up" delay={i * 0.1}>
              <div
                key={i}
                className="lpcard"
                style={{
                  padding: "clamp(24px, 6vw, 44px) clamp(20px, 5vw, 36px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "#0099cc",
                  }}
                />
                <div
                  className="bb"
                  style={{
                    fontSize: 72,
                    color: "#f0f4f8",
                    lineHeight: 1,
                    marginBottom: 24,
                  }}
                >
                  {q.num}
                </div>
                <h3
                  className="bc"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    title: "M.R INDUSTRIES Gauging",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 16,
                  }}
                >
                  {q.title}
                </h3>
                <p style={{ color: "#7a8a9a", lineHeight: 1.8, fontSize: 15 }}>
                  {q.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal animation="zoom-in">
          <div
            style={{
              background: "#0a1628",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 32,
              position: "relative",
              overflow: "hidden",
            }}
            className="banner-padding quality-banner"
          >
            <div
              className="igrid"
              style={{ position: "absolute", inset: 0, opacity: 0.1 }}
            />
            <div style={{ position: "relative" }}>
              <div
                className="bc"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#0088ff",
                  marginBottom: 12,
                  fontWeight: 700,
                }}
              >
                International Standard
              </div>
              <h2
                className="bb"
                style={{
                  fontSize: "clamp(36px,8vw,56px)",
                  color: "white",
                  lineHeight: 0.9,
                }}
              >
                ISO 9001:2015
                <br />
                CERTIFIED
              </h2>
            </div>
            <a
              href="src\assets\Company_certificate.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="btn-p">
                <span>View Certifications →</span>
              </button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </>
);
