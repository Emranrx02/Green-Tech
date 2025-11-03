import React from "react";

export default function HeroUpcall({
  eyebrow = "B2B & B2C Outreach",
  title = "Incoming Call Center Solution For Your Needs",
  description = "We book qualified meetings via human-first cold calling, omni-channel follow-ups, and clear reporting.",
  primaryCta = "Get Started",
  secondaryCta = "Explore Services",
} = {}) {
  return (
    <section className="section">
      <div className="container">
        <div className="hero">
          <div className="hero__inner">
            <div>
              <span className="badge">{eyebrow}</span>
              <h1 className="h1">{title}</h1>
              <p className="p">{description}</p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
                <a className="btn" href="/contact">
                  {primaryCta}
                </a>
                <a className="btn ghost" href="/services">
                  {secondaryCta}
                </a>
              </div>
            </div>

            <div className="hero__img">
              <div className="imgPlaceholder">IMG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
