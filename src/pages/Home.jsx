import callImg from "../assets/call.jpg";
import Reveal from "../components/Reveal";
import { services } from "../content/services";
import ReviewsV2 from "../components/ReviewsV2";

// Import assets so Vite bundles them for production (avoid absolute /src/... paths)
import pro1 from "../assets/avatars/pro1.jpeg";
import pro2 from "../assets/avatars/pro2.jpeg";

import pro3 from "../assets/avatars/pro3.jpeg";
import pro4 from "../assets/avatars/pro4.jpeg";
import pro5 from "../assets/avatars/pro5.jpeg";
// pro6 was removed from assets; do not import
import ceo from "../assets/CEO.jpg";
import sahid from "../assets/sahid.jpg";
import wakif from "../assets/wakif.jpeg";
import Hasibur from "../assets/Hasibur.jpeg";
import Emran from "../assets/Emran.jpg";

// Replace the placeholder values below with the real CEO LinkedIn URL and WhatsApp wa.me link.
// Example WhatsApp wa.me link format: "https://wa.me/8801XXXXXXXXX" (country code + number, no plus signs or spaces)
const CEO_LINKEDIN = "https://www.linkedin.com/in/md-ariful-islam/"; // <-- replace with real profile
const CEO_WHATSAPP_LINK = "https://wa.me/8801849873128"; // <-- replace with real wa.me link


export default function Home() {

  // Create a rotated version of the sequence for the cloned track so
  // identical logos don't appear side-by-side when one track meets the other.
  // Shift by at least 1; using half the unique logos gives a good visual offset.
  return (
    <>
      {/* ===== HERO =====++ */}
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
<section className="clientsBelt">
  <div className="beltTrack">
    <div className="logoBox"><img src={pro1} alt="client" /></div>
    <div className="logoBox"><img src={pro2} alt="client" /></div>
    <div className="logoBox"><img src={pro3} alt="client" /></div>
    <div className="logoBox"><img src={pro4} alt="client" /></div>
    <div className="logoBox"><img src={pro5} alt="client" /></div>
  <div className="logoBox"><img src={pro1} alt="client" /></div>

    {/* duplicated for seamless loop */}
    <div className="logoBox"><img src={pro1} alt="client" /></div>
    <div className="logoBox"><img src={pro2} alt="client" /></div>
    <div className="logoBox"><img src={pro3} alt="client" /></div>
    <div className="logoBox"><img src={pro4} alt="client" /></div>
    <div className="logoBox"><img src={pro5} alt="client" /></div>
  <div className="logoBox"><img src={pro1} alt="client" /></div>
  </div>
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

        {/* ===== TEAM ===== */}
      <section className="section reveal teamSection">
        <div className="container">
          <h2 className="h2 slim">Meet The Core Team</h2>
          <p className="p tiny teamLead">Our leadership and delivery team working across campaigns and QA.</p>

          <div className="teamRow">
{[
  { name: "Md Ariful Islam", role: "Founder & CEO\nGreen Tech", img: ceo, linkedin: CEO_LINKEDIN, whatsapp: CEO_WHATSAPP_LINK },
  { name: "Shahid Azad", role: "Head of Lead Generation & Technical", img: sahid },
  { name: "Emran Haque", role: "Chief Marketing Officer", img: Emran },
  { name: "Md Tahsinul Hoque Siddiki", role: "Community & Business Developer", img: wakif },
{ name: "Hasibur Rahman", role: "Senior custom relations Executive & trainer", img: Hasibur }
 



].map((p, i) => (
              <Reveal className="personReveal" key={i} once={true} rootMargin="0px 0px -10% 0px">
                <article className="person">
                  <img className="avatar" src={p.img} alt={p.name} />
                  <div className="name">{p.name}</div>
                  <div className="role">{p.role.split('\n').map((l,ii)=>(<div key={ii}>{l}</div>))}</div>

                  <div className="contactIcons">
                    {p.linkedin && (
                      <a className="iconBtn" href={p.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.786-1.75-1.752s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.752-1.75 1.752zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.866-3.064-1.867 0-2.154 1.459-2.154 2.97v5.698h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.592v5.604z"/></svg>
                      </a>
                    )}
                    {p.whatsapp && (
                      <a className="iconBtn" href={p.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.4-2.4 4.9-2.4C22.1 7.8 24 10 24 14.3V24h-5v-8.9c0-2.1-.1-4.8-3-4.8-3 0-3.5 2.2-3.5 4.6V24H8z"/></svg>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
   

  {/* ===== REVIEWS V2 ===== */}
  <ReviewsV2 />

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
     <section className="ctaCenter">
  <div className="ctaCard">
    <div className="ctaText">
      <h3 className="ctaTitle">🚀 Ready to Launch?</h3>
      <p className="ctaSub">
        We build compliant, human-first outreach campaigns that convert.
        Fast ramp, measurable results, and 24/7 support when you need it.
      </p>
    </div>
    <a href="/contact" className="btn ctaBtn">Launch with Us</a>
  </div>
</section>
    </>
  );
}

// sendEmail utilities moved to ../utils/sendEmail.js