import heroImg from "../assets/call.jpg";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="heroCard heroGrid reveal">
          {/* left */}
          <div className="heroCol">
            <span className="eyebrow">B2B & B2C Outreach</span>
            <h1 className="display withGlow">
              Helping Businesses Grow with Expert
              <span className="accentBreak"> Telemarketing & Lead Generation</span>
            </h1>
            <p className="lead">
              Human-first cold calling, compliant scripts, and clear reporting — built to
              book qualified meetings and elevate your growth.
            </p>

            <div className="row gap">
              <a href="/contact" className="btn">Get Started</a>
              <a href="/services" className="btn ghost">View Services</a>
            </div>

            <ul className="chips">
              <li>DNC • GDPR • TCPA Compliant</li>
              <li>Call Center Agent</li>
            </ul>
          </div>

          {/* right */}
          <div className="heroVisual">
            <div className="imgFrame floatY">
              <img src={heroImg} alt="Call center agent at work" loading="eager" />
              <div className="ring r1" />
              <div className="ring r2" />
              <div className="ring r3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}