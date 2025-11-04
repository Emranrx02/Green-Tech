import callImg from "../assets/call.jpg";
import Reveal from "../components/Reveal";
import { services } from "../content/services";
// avatars are referenced directly in markup where needed

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="heroSection">
        <div className="container heroContainer">
          <Reveal className="heroText">
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
          </Reveal>

          <Reveal className="heroVisual">
            <div className="heroImage">
              <img src={callImg} alt="Call center" />
              <span className="heroRing r1" />
              <span className="heroRing r2" />
              <span className="heroRing r3" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== COMPANIES (2nd section) ===== */}
      {/* ==== Floating Avatars Section ==== */}

<section className="avatarsSection">
  <Reveal>
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
  </Reveal>
</section>

      {/* ===== CORE SERVICES (cards) ===== */}
   {/* ===== CORE SERVICES ===== */}
<section className="coreSection section">
  <div className="container">
    <div className="coreHead reveal">
      <h2 className="h2 coreTitle">Core services</h2>
      <p className="coreSub">Human-first outreach with compliant scripts, QA, and clear reporting.</p>
    </div>

    <div className="coreGrid">
      {services.slice(0,4).map((s) => (
        <article key={s.id} className="cCard reveal">
          <div>
            <div className="cIcon" aria-hidden>{s.icon}</div>
            <h3 className="cTitle">{s.title}</h3>
            <p className="cText">{s.summary}</p>
          </div>
          <div className="cActions">
            <a className="btn sm ghost" href={`/services#${s.id}`}>Learn more</a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* ===== FEATURES (compact) ===== */}
  <section className="section alt whySection">
        <div className="container">
          <h2 className="h2 slim">Why teams choose us</h2>
          <p className="whyLead p">We combine human-first calling, rigorous QA, and compliance-first processes to deliver predictable leads, clear reporting, and fast rampability — outreach that respects prospects and converts.</p>
          <Reveal className="from-right">
            <div className="grid-why">
              {[
                {t:"Compliance-first", d:"DNC, GDPR and TCPA coverage baked into every campaign so outreach stays safe and scalable."},
                {t:"Human-first reps", d:"Neutral accents, clear scripts, skilled rebuttals — callers trained for empathy and conversions."},
                {t:"Clear reporting", d:"Daily call notes, QA snapshots and concise summaries so you always know what’s happening."},
                {t:"Fast ramp", d:"Pilot to full rollout in weeks — predictable onboarding and quick scaling when you’re ready."}
              ].map((f,i)=>(
                <div className="card" key={i}>
                  <div className="icon">✓</div>
                  <div className="fTitle">{f.t}</div>
                  <p className="fText">{f.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== TEAM (tiny) ===== */}
        {/* ===== TEAM ===== */}
      <section className="section reveal teamSection">
        <div className="container">
          <h2 className="h2 slim">Meet The Core Team</h2>
          <p className="p tiny teamLead">Our leadership and delivery team working across campaigns and QA.</p>

          <div className="teamRow">
            {[
              { name: "Md Ariful Islam", role: "Founder & CEO\nGreen Tech", img: "/src/assets/ceo.jpg", icons: ["telegram","WhatsApp"] },
              { name: "Shahid Azad", role: "Head of Lead Generation & Technical", img: "/src/assets/sahid.jpg", icons: ["telegram"] },
              { name: "Md Tahsinul Hoque Siddiki", role: "Community & Business Developer", img: "/src/assets/wakif.jpeg", icons: ["telegram"] },
              { name: "Nishat Anjum", role: "Junior Custom Relations Executive", img: "/src/assets/female.jpeg", icons: ["telegram"] },
              { name: "Mahfuz Rahman", role: "Junior Social Media Manager", img: "/src/assets/mahafuz.jpeg", icons: ["telegram"] }

            ].map((p, i) => (
              <article className="person" key={i}>
                <img className="avatar" src={p.img} alt={p.name} />
                <div className="name">{p.name}</div>
                <div className="role">{p.role.split('\n').map((l,ii)=>(<div key={ii}>{l}</div>))}</div>

                <div className="contactIcons">
                  {p.icons.includes("telegram") && (
                    <a className="iconBtn" href="#" aria-label="Telegram">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.8 3.2c-.2-.2-.5-.3-.8-.3-.3 0-.6.1-.8.3L3.6 14.7c-.3.2-.5.5-.5.9l.6 4c.1.6.7 1 1.3 1 .2 0 .4 0 .6-.1l3.9-1.5c.3-.1.6-.1.9.1.2.1.6.4 1 .6.6.3 1.3.1 1.8-.3L21 9.6c.3-.4.5-.9.4-1.4l-.6-4c0-.3-.1-.6-.9-1.0zM9.8 15.3l-1.5 1.5-1.2-.8 2.7-3.0 9.1-5.6-8.9 7.9z"/></svg>
                    </a>
                  )}
                  {p.icons.includes("whatsapp") && (
                    <a className="iconBtn" href="#" aria-label="WhatsApp">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.4-2.4 4.9-2.4C22.1 7.8 24 10 24 14.3V24h-5v-8.9c0-2.1-.1-4.8-3-4.8-3 0-3.5 2.2-3.5 4.6V24H8z"/></svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="reviewSection">
        <h2 className="sectionTitle">Happy & Satisfied Faces</h2>
        <p className="sectionSubtitle">Here are a few of our clients (Fiverr review images)</p>

        <div className="reviewGallery">
          <div className="reviewRow">
            {[
              "/src/assets/r2.jpg",
              "/src/assets/r3.jpg",
              "/src/assets/r4.jpg",
              "/src/assets/r5.jpg",
              "/src/assets/r6.jpg",
              "/src/assets/r1.jpg"
            ].map((img, i) => (
              <div className="reviewItem" key={i}>
                <img src={img} alt={`review-${i}`} />
              </div>
            ))}
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