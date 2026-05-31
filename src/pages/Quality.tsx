import React from "react";
import { LPageHeader } from "../components/LPageHeader";
import { ScrollReveal } from "../components/ScrollReveal";
import { color } from "motion";

const BadgeIcon = () => (
  <svg
    width="68"
    height="68"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.85 }}
  >
    {/* Ribbon Left */}
    <path
      d="M24 35 L18 51 L28 46 L32 40"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ribbon Right */}
    <path
      d="M40 35 L46 51 L36 46 L32 40"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Scalloped Badge Border */}
    <path
      d="M32 7 C34.2 7 35.2 8.4 37.1 9.2 C39 10 40.7 9.6 42.2 11 C43.7 12.4 43.7 14.1 44.8 15.8 C45.9 17.5 47.5 17.9 48.1 19.8 C48.7 21.7 48.1 23.4 48.1 25.5 C48.1 27.6 48.7 29.3 48.1 31.2 C47.5 33.1 45.9 33.5 44.8 35.2 C43.7 36.9 43.7 38.6 42.2 40 C40.7 41.4 39 41 37.1 41.8 C35.2 42.6 34.2 44 32 44 C29.8 44 28.8 42.6 26.9 41.8 C25 41 23.3 41.4 21.8 40 C20.3 38.6 20.3 36.9 19.2 35.2 C18.1 33.5 16.5 33.1 15.9 31.2 C15.3 29.3 15.9 27.6 15.9 25.5 C15.9 23.4 15.3 21.7 15.9 19.8 C16.5 17.9 18.1 17.5 19.2 15.8 C20.3 14.1 20.3 12.4 21.8 11 C23.3 9.6 25 10 26.9 9.2 C28.8 8.4 29.8 7 32 7 Z"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Inner Circle */}
    <circle cx="32" cy="25.5" r="12" stroke="#C9921A" strokeWidth="1.25" />
    {/* Star in Center */}
    <polygon
      points="32,18 34.5,23 40,23.5 36,27.5 37.5,33 32,30 26.5,33 28,27.5 24,23.5 29.5,23"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const TrophyIcon = () => (
  <svg
    width="68"
    height="68"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.85 }}
  >
    {/* Trophy Cup Body */}
    <path
      d="M21 15 C21 28, 43 28, 43 15 Z"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="21" y1="15" x2="43" y2="15" stroke="#C9921A" strokeWidth="1.25" />
    {/* Cup Handles */}
    <path
      d="M21 18 C16 18 16 26 21 26"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M43 18 C48 18 48 26 43 26"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    {/* "1" */}
    <path
      d="M30.5 19 L32.5 18 L32.5 24.5 M30.5 24.5 L34.5 24.5"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Stem */}
    <line
      x1="32"
      y1="28"
      x2="32"
      y2="35"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="35"
      x2="36"
      y2="35"
      stroke="#C9921A"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    {/* Pedestal base */}
    <rect
      x="25"
      y="38"
      width="14"
      height="7"
      rx="1"
      stroke="#C9921A"
      strokeWidth="1.25"
      fill="none"
    />
  </svg>
);

export const Quality = () => {
  const awards = [
    {
      year: "1993 - 2003",
      isBadge: true,
      title: "Foundation & Company Registration",
      desc: "Established in 1993 and officially registered in 2003, laying a strong foundation for manufacturing and supplying borewell spares and industrial components.",
    },
    {
      year: "2007",
      isBadge: false,
      title: "TIN Registration Obtained",
      desc: "Successfully obtained Taxpayer Identification Number (TIN), marking a significant milestone in the company's legal and business operations.",
    },
    {
      year: "2018",
      isBadge: true,
      title: "GST Registration",
      desc: "Registered under the Goods and Services Tax (GST) system, enhancing compliance and expanding business opportunities across India.",
    },

    {
      year: "2021",
      isBadge: true,
      title: "Ashirvad Pipes Best Seller Award",
      desc: "Awarded Best Seller by Ashirvad Pipes for exceptional sales performance, customer satisfaction, and commitment to quality service.",
    },
    {
      year: "2023",
      isBadge: false,
      title: "Trubore Pipes Best Seller Recognition",
      desc: "Recognized as a Best Seller by Trubore Pipes for excellence in product distribution, market leadership, and consistent business growth.",
    },
    // removed later two awards per request
  ];

  return (
    <>
      <LPageHeader
        title="QUALITY"
        accent="ASSURANCE"
        sub="Uncompromising standards at every stage of production."
      />
      <div className="section-padding container-max">
        <div style={{ display: "grid", gap: 24 }} className="grid-3">
          {[
            {
              title: "Material Testing",
              num: "01",
              desc: "Every batch of raw MS and SS tested for chemical composition and tensile strength before production starts.",
            },
            {
              title: "M.R Industries Gauging",
              num: "02",
              desc: "Micron-level accuracy checks using calibrated digital instruments and gauges for full dimensional verification.",
            },
            {
              title: "Stress Analysis",
              num: "03",
              desc: "Simulated pressure and load testing to ensure zero-failure performance under extreme field conditions.",
            },
          ].map((q, i) => (
            <div key={i}>
              <ScrollReveal animation="fade-up" delay={i * 0.1}>
                <div
                  className="lpcard"
                  style={{
                    padding: "44px 36px",
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
                      background: "#d48a10",
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
                      color: "#1a1005",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 16,
                    }}
                  >
                    {q.title}
                  </h3>
                  <p
                    style={{ color: "#7a8a9a", lineHeight: 1.8, fontSize: 15 }}
                  >
                    {q.desc}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Milestone Awards Section */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div
            style={{
              background: "#ffffff",

              padding: "80px 40px",
              marginTop: "80px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.02)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <div
              className="sec-label"
              style={{
                color: "#C9921A",
                letterSpacing: "0.3em",
                fontSize: "12px",
              }}
            >
              RECOGNITIONS & MILESTONES
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8  w-full"
              style={{ textAlign: "center" }}
            >
              {awards.map((award, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "76px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      padding: 12,
                      border: i < 3 ? "1px solid #d0dce8" : "none",
                      borderRadius: 6,
                    }}
                  >
                    {award.isBadge ? <BadgeIcon /> : <TrophyIcon />}
                  </div>
                  <div
                    className="bc"
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#7a8a9a",
                      letterSpacing: "0.05em",
                      lineHeight: "1.2",
                      marginBottom: "10px",
                    }}
                  >
                    {award.year}
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#2c3e50",
                      lineHeight: "1.45",
                      marginBottom: award.desc ? "6px" : "0px",
                      maxWidth: "220px",
                    }}
                  >
                    {award.title}
                  </div>
                  {award.desc && (
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#64748b",
                        lineHeight: "1.4",
                        maxWidth: "200px",
                      }}
                    >
                      {award.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
};
