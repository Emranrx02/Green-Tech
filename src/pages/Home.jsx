import Reveal from "../components/Reveal";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import heroImg from "../assets/Male call center operator in headset working on laptop.jpg";


function Home() {
  return (
    <>
      {/* ========= HERO ========= */}
      <div className="container section">
        <div className="hero">
          <div className="hero__inner">
            <Reveal as="div">
              <span className="badge">B2B & B2C Outreach</span>
              <h1 className="h1" style={{ marginTop: 8 }}>
                Good For Our Customer <br /> Experience
              </h1>
              <p className="p">
                We book qualified meetings via human-first cold calling,
                omni-channel follow-ups, and clear reporting.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
                <Reveal as="a" delay={120} className="btn" href="/contact">More About Us</Reveal>
                <Reveal as="a" delay={200} className="btn ghost" href="/services">Explore Services</Reveal>
              </div>
            </Reveal>

            <Reveal as="div" delay={120} className="hero__img">
              <img className="float" src={heroImg} alt="Call agent"
                   style={{ borderRadius: 18, width: "100%", height: "auto" }} />
            </Reveal>
          </div>
        </div>
      </div>

      {/* ========= FEATURES ========= */}
      <section id="features" className="section alt">
        <div className="container">
          {/* centered heading */}
          <div className="sectionHeading center">
            <div className="lead">
              <h2 className="h2">Seamless Bond of Better Customer Satisfaction</h2>
              <p className="p">Use our best experts to elevate your business to the next level.</p>
            </div>
            <a className="pill" href="/services">Explore Features</a>
          </div>

          <div className="featuresWrap">
            <Reveal className="fCard f1">
              <div className="iRing">🚀</div>
              <div className="fTitle">We Deliver Excellence</div>
              <div className="fDivider"></div>
              <p className="fText">Quality-driven outreach, strict QA, and clarity on every call.</p>
              <a className="fPill" href="/services">Learn More →</a>
            </Reveal>

            <Reveal className="fCard f2" delay={120}>
              <div className="iRing">🛡️</div>
              <div className="fTitle">Policy & Compliance</div>
              <div className="fDivider"></div>
              <p className="fText">DNC, GDPR, TCPA-aligned processes with audit-ready trails.</p>
              <a className="fPill" href="/services">Learn More →</a>
            </Reveal>

            <Reveal className="fCard f3" delay={200}>
              <div className="iRing">👥</div>
              <div className="fTitle">Awesome Team</div>
              <div className="fDivider"></div>
              <p className="fText">Experienced SDRs with neutral accents & strong rebuttals.</p>
              <a className="fPill" href="/services">Learn More →</a>
            </Reveal>

            <Reveal className="fCard f4" delay={280}>
              <div className="iRing">⏰</div>
              <div className="fTitle">24/7 We Work</div>
              <div className="fDivider"></div>
              <p className="fText">Follow-the-sun coverage and weekend shifts when needed.</p>
              <a className="fPill" href="/services">Learn More →</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========= HOME SERVICES PREVIEW ========= */}
      <section id="services" className="section">
        <div className="container">
          {/* centered heading */}
          <div className="sectionHeading center">
            <div className="lead">
              <h2 className="h2">Services Built To Book Meetings</h2>
              <p className="p">Human-first outreach with compliant scripts, QA, and clear reporting.</p>
            </div>
            <a className="pill" href="/services">View All Services</a>
          </div>

          <section className="svcGrid" style={{ marginTop: 22 }}>
            <Reveal className="svcCard s1">
              <div className="svcIcon">🎧</div>
              <h3 className="h3">B2B/B2C Cold Calling</h3>
              <p className="p">ICP-targeted lists, multi-touch cadence, live objection handling.</p>
            </Reveal>

            <Reveal className="svcCard s2" delay={120}>
              <div className="svcIcon">🧭</div>
              <h3 className="h3">Lead Generation</h3>
              <p className="p">Research + enrichment to build clean, targeted accounts.</p>
            </Reveal>

            <Reveal className="svcCard s3" delay={200}>
              <div className="svcIcon">📅</div>
              <h3 className="h3">Appointment Setting</h3>
              <p className="p">We book qualified meetings straight on your calendar.</p>
            </Reveal>

            <Reveal className="svcCard s4" delay={280}>
              <div className="svcIcon">💬</div>
              <h3 className="h3">Customer Support</h3>
              <p className="p">Inbound voice, chat & email with SLAs and CSAT tracking.</p>
            </Reveal>
          </section>
        </div>
      </section>

      {/* ========= TESTIMONIALS ========= */}
      <Testimonials />

      {/* ========= FAQ ========= */}
      <section className="section alt" id="help">
        <div className="container">
          <h2 className="h2">FAQs</h2>
          <FAQ
            items={[
              { q: "Is there a free trial available?", a: "We can run a 1–2 week pilot on 50–100 dials to align on ICP & script." },
              { q: "Can I change my plan later?", a: "Yes. Scale seats up/down monthly; pause seasonally." },
              { q: "What’s your cancellation policy?", a: "Month-to-month with 14-day notice, or quarterly discounts." },
              { q: "How does billing work?", a: "Fixed seat fee + optional performance bonus." },
            ]}
          />
        </div>
      </section>

      {/* ========= CTA ========= */}
      <section className="section">
        <div
          className="container ctaBubble"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}
        >
          <div>
            <h2 className="h2">Need Experienced Call Center Services?</h2>
            <p className="p">Let’s launch a compliant, conversion-focused campaign.</p>
          </div>
          <a className="btn" href="/contact">Get Started →</a>
        </div>
      </section>
    </>
  );
}

export default Home;
