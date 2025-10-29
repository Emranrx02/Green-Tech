import Reveal from "../components/Reveal";

export default function Services() {
  return (
    <main className="section">
      <div className="container">

        {/* ===== Intro Section ===== */}
        <Reveal as="section">
          <span className="badge">Our Services</span>
          <h1 className="h1" style={{marginTop:8}}>
            Helping Businesses Grow with Expert Telemarketing & Lead Generation
          </h1>
          <p className="p">
            At <strong>Green Tech</strong>, we help businesses around the globe grow faster by delivering
            high-impact telemarketing, lead generation, and communication solutions — designed to
            drive real, measurable results.
          </p>
          <p className="p">
            For <strong>5 + years</strong>, we’ve completed hundreds of successful projects on Fiverr and beyond,
            partnering with startups, SMEs, and enterprises to connect them with the right audience
            and achieve their sales goals.
          </p>
          <p className="p">
            We’re not just service providers — we’re your <strong>growth partners</strong>. Our team blends
            professionalism, proven sales techniques, and modern tools to generate qualified leads,
            close more deals, and build lasting customer relationships.
          </p>
        </Reveal>

        {/* ===== What We Do Best ===== */}
        <section className="svcGrid" style={{marginTop:24}}>
          <Reveal className="svcCard s1">
            <div className="svcIcon">📞</div>
            <h3 className="h3">Telemarketing</h3>
            <p className="p">
              Persuasive, professional calls tailored to engage your audience and inspire action.
            </p>
          </Reveal>

          <Reveal className="svcCard s2" delay={120}>
            <div className="svcIcon">📈</div>
            <h3 className="h3">Cold Calling</h3>
            <p className="p">
              Proven scripts & objection-handling techniques that turn prospects into loyal customers.
            </p>
          </Reveal>

          <Reveal className="svcCard s3" delay={200}>
            <div className="svcIcon">🤝</div>
            <h3 className="h3">B2B & B2C Outreach</h3>
            <p className="p">
              Connecting you effectively with decision-makers and customers alike.
            </p>
          </Reveal>

          <Reveal className="svcCard s4" delay={280}>
            <div className="svcIcon">🎯</div>
            <h3 className="h3">Lead Generation</h3>
            <p className="p">
              Filling your sales pipeline with high-quality, targeted leads aligned to your ICP.
            </p>
          </Reveal>

          <Reveal className="svcCard s5" delay={340}>
            <div className="svcIcon">🗣</div>
            <h3 className="h3">Telecommunication Services</h3>
            <p className="p">
              Supporting seamless, professional client interactions and inbound + outbound calls.
            </p>
          </Reveal>

          <Reveal className="svcCard s6" delay={400}>
            <div className="svcIcon">👩‍🏫</div>
            <h3 className="h3">Telemarketing Training</h3>
            <p className="p">
              Coaching individuals & teams to master tone, objection handling, and closing.
            </p>
          </Reveal>

          <Reveal className="svcCard s7" delay={460}>
            <div className="svcIcon">💻</div>
            <h3 className="h3">Virtual Client Meetings</h3>
            <p className="p">
              Smooth, timely communication via Zoom, Google Meet & other collaboration tools.
            </p>
          </Reveal>
        </section>

        {/* ===== Why Choose Us ===== */}
        <section className="section">
          <Reveal as="div">
            <h2 className="h2">Why Choose Green Tech?</h2>
            <p className="p">
              Our experience, results, and professionalism set us apart — we focus on ROI and long-term success.
            </p>
          </Reveal>

          <div className="flow">
            <Reveal className="flowItem"><div className="stepNo">1</div><div><div className="h3" style={{margin:0}}>Proven Experience</div><div className="p">5 + years in the industry with consistent client satisfaction.</div></div></Reveal>
            <Reveal className="flowItem" delay={100}><div className="stepNo">2</div><div><div className="h3" style={{margin:0}}>Hundreds of 5-Star Reviews</div><div className="p">Trusted by global clients across Fiverr & direct contracts.</div></div></Reveal>
            <Reveal className="flowItem" delay={200}><div className="stepNo">3</div><div><div className="h3" style={{margin:0}}>Domestic & International Reach</div><div className="p">Skilled teams for diverse markets & time zones.</div></div></Reveal>
            <Reveal className="flowItem" delay={300}><div className="stepNo">4</div><div><div className="h3" style={{margin:0}}>ROI-Focused Results</div><div className="p">Strategies designed to boost your bottom line.</div></div></Reveal>
            <Reveal className="flowItem" delay={400}><div className="stepNo">5</div><div><div className="h3" style={{margin:0}}>Professional & Reliable</div><div className="p">Client-centric, transparent, and always communication-driven.</div></div></Reveal>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="ctaBubble" style={{marginTop:32,display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          <div>
            <h2 className="h2">Ready to Grow Your Business?</h2>
            <p className="p">Let’s connect — and turn your outreach into measurable results.</p>
          </div>
          <a className="btn" href="/contact">Reach Out →</a>
        </section>

      </div>
    </main>
  );
}