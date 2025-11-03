import callImg from "../assets/call.jpg";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="heroSection">
        <div className="heroContainer reveal">
          <div className="heroText">
            <span className="heroBadge">B2B & B2C Outreach</span>
            <h1 className="heroTitle">
              Helping businesses grow with expert telemarketing
            </h1>
            <p className="heroLead">
              Human-first calls, compliant scripts, clear reporting.
            </p>
            <div className="heroButtons">
              <a href="/contact" className="btn">Get Started</a>
              <a href="/services" className="btn ghost">View Services</a>
            </div>
            <ul className="heroChips">
              <li>DNC • GDPR • TCPA</li>
              <li>Call Center Agents</li>
            </ul>
          </div>

          <div className="heroVisual">
            <div className="heroImage">
              <img src={callImg} alt="Call center" />
              <span className="heroRing r1" />
              <span className="heroRing r2" />
              <span className="heroRing r3" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPANIES (2nd section) ===== */}
      {/* ==== Floating Avatars Section ==== */}

<section className="avatarsSection">
  <div className="avatarsRow left">
    <img className="avatar" src="/src/assets/avatars/a1.jpg" alt="client" />
    <img className="avatar" src="/src/assets/avatars/a2.jpg" alt="client" />
    <img className="avatar" src="/src/assets/avatars/a3.jpg" alt="client" />
    <img className="avatar" src="/src/assets/avatars/a4.jpg" alt="client" />
    <img className="avatar" src="/src/assets/avatars/a4.jpg" alt="client" />
    <img className="avatar" src="/src/assets/avatars/a4.jpg" alt="client" />
    <img className="avatar" src="/src/assets/avatars/a4.jpg" alt="client" />
    <img className="avatar" src="/src/assets/avatars/a4.jpg" alt="client" />
    <img className="avatar" src="/src/assets/avatars/a4.jpg" alt="client" />
  </div>
</section>

      {/* ===== CORE SERVICES (cards) ===== */}
      <section className="section reveal">
        <div className="container">
          <h2 className="h2 slim">Core services</h2>
          <p className="p tiny">Pick what you need—mix & match easily.</p>

          <div className="svcGrid">
            {[
              {t:"B2B Cold Calling", d:"Qualify, handle objections, book meetings."},
              {t:"B2C Cold Calling", d:"High-volume compliant outreach that converts."},
              {t:"B2B Lead Generation", d:"ICP targeting, research, CRM hygiene."},
              {t:"B2C Lead Generation", d:"Paid + organic funnels with clear ROI."}
            ].map((s,i)=>(
              <article className="svcCard" key={i}>
                <div className="svcIcon">✳︎</div>
                <h3 className="h3">{s.t}</h3>
                <p className="p tiny">{s.d}</p>
                <a className="fPill" href="/services">Learn more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES (compact) ===== */}
      <section className="section reveal alt">
        <div className="container">
          <h2 className="h2 slim">Why teams choose us</h2>
          <div className="grid-4">
            {[
              {t:"Compliant by default", d:"DNC • GDPR • TCPA ready."},
              {t:"Human-first", d:"Neutral accents, strong rebuttals."},
              {t:"Clear reporting", d:"Daily notes, call summaries, QA."},
              {t:"Scale fast", d:"Pilot → ramp with confidence."}
            ].map((f,i)=>(
              <div className="card" key={i}>
                <div className="icon">✓</div>
                <div className="fTitle">{f.t}</div>
                <p className="fText">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM (tiny) ===== */}
      <section className="section reveal">
        <div className="container">
          <h2 className="h2 slim">Team</h2>
          <p className="p tiny">Experienced SDRs, live QA & dependable coverage.</p>
          <div className="teamRow">
            {["Lead SDR","QA Lead","Campaign Manager"].map((r,i)=>(
              <div className="person" key={i}>
                <div className="avatar" />
                <div className="role">{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
     <section className="reviewSection">
  <h2 className="sectionTitle">Happy & Satisfied Faces</h2>
  <p className="sectionSubtitle">Here’s what some of our satisfied clients say</p>

  <div className="reviewCard">
    <img src="/src/assets/avatars/a1.jpg" alt="Client" className="reviewAvatar" />
    <h3 className="reviewName">Denver</h3>
    <p className="reviewRole">
      Business Developer, <span>Undeads Metaverse</span>
    </p>
    <p className="reviewDuration">
      Duration: <strong>Running for 2 Months</strong>
    </p>

    <p className="reviewProject">
      Project: <span>Undeads Metaverse</span>
    </p>

    <div className="reviewStars">⭐⭐⭐⭐⭐</div>

    <blockquote className="reviewQuote">
      “We had a great experience working with Green Tech! Their team delivered
      exactly the kind of organic and active engagement we were hoping for.
      Clean, professional, and on point.”
    </blockquote>

    <div className="reviewNav">
      <button className="navBtn">←</button>
      <button className="navBtn">→</button>
    </div>
  </div>
</section>

      {/* ===== FAQ ===== */}
      <section className="section reveal alt">
        <div className="container">
          <h2 className="h2 slim">FAQ</h2>
          <div className="faq">
            {[
              {q:"Is there a trial?", a:"Yes—1-2 week pilot to align on ICP & script."},
              {q:"Month-to-month?", a:"Flexible seats; pause seasonally."},
              {q:"How billing works?", a:"Fixed seat fee + optional performance bonus."},
              {q:"Compliance?", a:"GDPR • DNC • TCPA—all covered."},
            ].map((f,i)=>(
              <div className="item" key={i} onClick={e=>e.currentTarget.classList.toggle('open')}>
                <div className="q">{f.q}<span>＋</span></div>
                <div className="a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section reveal">
        <div className="container">
          <div className="ctaBubble">
            <h3 className="h3">Need experienced call center services?</h3>
            <p className="p tiny">Launch a compliant, conversion-focused campaign.</p>
            <a className="btn" href="/contact">Talk to us</a>
          </div>
        </div>
      </section>
    </>
  );
}