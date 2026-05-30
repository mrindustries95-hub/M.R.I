import React from "react";
import { IconMail, IconPhone, IconPin } from "../components/Icons";
import { LPageHeader } from "../components/LPageHeader";
import { ScrollReveal } from "../components/ScrollReveal";

export const Contact = () => (
  <>
    <LPageHeader
      title="GET IN"
      accent="TOUCH"
      sub="We respond within 24 hours. Serious inquiries only."
    />
    <div className="section-padding">
      <div className="container-max">
        <div style={{ display: "grid" }} className="grid-2">
          <ScrollReveal animation="fade-right">
            <div>
              <h3
                className="bb"
                style={{
                  fontSize: "clamp(32px,6vw,44px)",
                  color: "#0a1628",
                  marginBottom: 48,
                }}
              >
                CONTACT INFO
              </h3>
              {[
                {
                  icon: <IconPin size={22} />,
                  label: "Location",
                  val: "7/11, Jaya Shimman Street No.2 Avarampalyam, Ganapathy Post, Coimbatore - 641006",
                  url: "https://www.google.com/maps/place/M.R.Industries/@11.0301385,76.9849448,700m/data=!3m1!1e3!4m6!3m5!1s0x3ba8591789225963:0xdc820dea3ee89709!8m2!3d11.0301385!4d76.9849448!16s%2Fg%2F11yx6rf68w!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
                },
                {
                  icon: <IconPhone size={22} />,
                  label: "Phone & WhatsApp",
                  val: "9677844497 / 9443356217",
                },
                {
                  icon: <IconMail size={22} />,
                  label: "Email Support",
                  val: "mrindustries95@gmail.com",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 20, marginBottom: 44 }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: "#e4ecf4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0099cc",
                      flexShrink: 0,
                      borderRadius: 2,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      className="bc"
                      style={{
                        fontWeight: 700,
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#7a8a9a",
                        marginBottom: 6,
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        color: "#0a1628",
                        fontWeight: 500,
                      }}
                    >
                      {c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {c.val}
                        </a>
                      ) : (
                        c.val
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Integration */}
              <ScrollReveal animation="zoom-in" delay={0.3}>
                <div
                  style={{
                    marginTop: 20,
                    borderRadius: 4,
                    overflow: "hidden",
                    border: "1px solid #d0dce8",
                    height: 300,
                  }}
                >
                  <iframe
                    title="M.R. Industries Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1420786938927!2d76.98275614271815!3d11.030138499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591789225963%3A0xdc820dea3ee89709!2sM.R.Industries!5e0!3m2!1sen!2sin!4v1717012345678!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={0.2}>
            <div
              style={{
                background: "white",
                border: "1px solid #d0dce8",
                position: "relative",
              }}
              className="banner-padding"
            >
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const text = `*New Contact Request*\n\n*Name:* ${fd.get("name") || "Not provided"}\n*Mobile:* ${fd.get("mobile") || "Not provided"}\n*Email:* ${fd.get("email") || "Not provided"}\n*Type:* ${fd.get("type") || "Not provided"}\n*Company:* ${fd.get("company") || "Not provided"}\n*Message:* ${fd.get("message") || "None"}`;
                  window.open(
                    `https://wa.me/919677844497?text=${encodeURIComponent(text)}`,
                    "_blank",
                  );
                }}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  <label
                    className="bc"
                    style={{
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#7a8a9a",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    className="input-l"
                    placeholder="Your Name"
                    style={{ width: "100%" }}
                  />
                </div>
                <div>
                  <label
                    className="bc"
                    style={{
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#7a8a9a",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Mobile Number
                  </label>
                  <input
                    name="mobile"
                    type="tel"
                    required
                    className="input-l"
                    placeholder="Mobile Number"
                    style={{ width: "100%" }}
                  />
                </div>
                <div>
                  <label
                    className="bc"
                    style={{
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#7a8a9a",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="input-l"
                    placeholder="Email Address"
                    style={{ width: "100%" }}
                  />
                </div>
                <div>
                  <label
                    className="bc"
                    style={{
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#7a8a9a",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Requirement Type
                  </label>
                  <select
                    name="type"
                    required
                    className="input-l"
                    style={{
                      width: "100%",
                      appearance: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled selected>
                      Select an option
                    </option>
                    <option value="Fixed">Fixed Components</option>
                    <option value="Customized">Customized Solutions</option>
                  </select>
                </div>
                <div>
                  <label
                    className="bc"
                    style={{
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#7a8a9a",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Company (Optional)
                  </label>
                  <input
                    name="company"
                    className="input-l"
                    placeholder="Company (Optional)"
                    style={{ width: "100%" }}
                  />
                </div>
                <div>
                  <label
                    className="bc"
                    style={{
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#7a8a9a",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="input-l"
                    rows={5}
                    placeholder="How can we help?"
                    style={{ width: "100%", resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  className="lbtn-p"
                  style={{ marginTop: 8 }}
                >
                  Send via WhatsApp →
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </>
);
