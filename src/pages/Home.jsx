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
import { FaPhoneAlt, FaUsers, FaBullseye, FaRegChartBar } from "react-icons/fa";

const CEO_LINKEDIN = "https://www.linkedin.com/in/md-ariful-islam/";
const CEO_WHATSAPP_LINK = "https://wa.me/8801849873128";
const waLink = (n) => `https://wa.me/${String(n).replace(/\D/g, "")}`; // digits only


export default function Home() {
  // debug: show what was actually imported
  console.log("services:", services);


  // Create a rotated version of the sequence for the cloned track so
  // identical logos don't appear side-by-side when one track meets the other.
  // Shift by at least 1; using half the unique logos gives a good visual offset.
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
              <a href="/contact" className="btn">Discover GT — Book a meeting</a>
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

      {/* ===== CLIENT LOGO BELT ===== */}
      <section className="clientsBelt">
        <div className="beltTrack">
          {[pro1, pro2, pro3, pro4, pro5, pro1, pro2, pro3, pro4, pro5].map((img, i) => (
            <div key={i} className="logoBox"><img src={img} alt="client" /></div>
          ))}
        </div>
      </section>

      {/* 🌿 CORE SERVICES — fresh, visible */}
<section className="section coreSection" id="core-services">
  <div className="container">
    <div className="coreHead">
      <h2 className="h2 coreTitle">Core Services</h2>
      <p className="p coreSub">Focused calling &amp; lead gen with QA and compliance.</p>
    </div>

    <div className="coreGrid">
      <div className="cCard">
        <div className="cIcon"><FaPhoneAlt /></div>
        <h3 className="cTitle">B2B Cold Calling</h3>
        <p className="cText">Professional outreach to decision-makers with compliant scripts and clear dispositions.</p>
        <ul className="cList">
          <li>ICP-aligned scripts & rebuttals</li>
          <li>Daily call notes & QA snapshots</li>
          <li>Lead qualification + meeting handoff</li>
          <li>DNC • GDPR • TCPA compliant</li>
        </ul>
        <div className="cActions"><a className="btn sm" href="/b2b-cold-calling">Learn more</a></div>
      </div>

      <div className="cCard">
        <div className="cIcon"><FaUsers /></div>
        <h3 className="cTitle">B2C Cold Calling</h3>
        <p className="cText">High-touch consumer outreach to spark interest and convert with respectful conversations.</p>
        <ul className="cList">
          <li>Tone-matched scripts for consumers</li>
          <li>Opt-in, consent, and compliance guardrails</li>
          <li>Outcome tracking & daily summaries</li>
        </ul>
        <div className="cActions"><a className="btn sm" href="/b2c-cold-calling">Learn more</a></div>
      </div>

      <div className="cCard">
        <div className="cIcon"><FaRegChartBar /></div>
        <h3 className="cTitle">B2B Lead Generation</h3>
        <p className="cText">Identify and qualify companies likely to benefit from your solution — then pass ready leads to sales.</p>
        <ul className="cList">
          <li>Account & contact sourcing</li>
          <li>Multi-touch outreach (calls first)</li>
          <li>Qualification framework & reporting</li>
        </ul>
        <div className="cActions"><a className="btn sm" href="/b2b-lead-generation">Learn more</a></div>
      </div>

      <div className="cCard">
        <div className="cIcon"><FaBullseye /></div>
        <h3 className="cTitle">B2C Lead Generation</h3>
        <p className="cText">Engage and qualify potential customers through targeted outreach and personalized follow-ups.</p>
        <ul className="cList">
          <li>Consumer profiling & segmentation</li>
          <li>Multi-channel outreach (calls, SMS, email)</li>
          <li>Conversion reporting dashboard</li>
        </ul>
        <div className="cActions"><a className="btn sm" href="/b2c-lead-generation">Learn more</a></div>
      </div>
    </div>
  </div>
</section>

      {/* ===== WHY US ===== */}
      <section className="section alt whySection">
        <div className="container">
          <h2 className="h2 slim">Why teams choose us</h2>
          <p className="whyLead p">
            We combine human-first calling, rigorous QA, and compliance-first processes to
            deliver predictable leads, clear reporting, and fast rampability —
            outreach that respects prospects and converts.
          </p>
          <Reveal className="from-right">
            <div className="grid-why">
              {[
                { t: "Compliance-first", d: "DNC, GDPR and TCPA coverage baked into every campaign so outreach stays safe and scalable." },
                { t: "Human-first reps", d: "Neutral accents, clear scripts, skilled rebuttals — callers trained for empathy and conversions." },
                { t: "Clear reporting", d: "Daily call notes, QA snapshots and concise summaries so you always know what’s happening." },
                { t: "Fast ramp", d: "Pilot to full rollout in weeks — predictable onboarding and quick scaling when you’re ready." }
              ].map((f, i) => (
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
          <p className="p tiny teamLead">
            Our leadership and delivery team working across campaigns and QA.
          </p>

          <div className="teamRow">
            {[
              { name: "Md Ariful Islam", role: "Founder & CEO\nGreen Tech", img: ceo, linkedin: CEO_LINKEDIN, whatsapp: CEO_WHATSAPP_LINK },
              { name: "Shahid Azad", role: "Head of Lead Generation & Technical", img: sahid },
              { name: "Emran Haque", role: "Chief Marketing Officer", img: Emran },
              { name: "Md Tahsinul Hoque Siddiki", role: "Community & Business Developer", img: wakif },
              { name: "Hasibur Rahman", role: "Senior custom relations Executive & trainer", img: Hasibur }
            ].map((p, i) => (
              <Reveal className="personReveal" key={i} once rootMargin="0px 0px -10% 0px">
                <article className="person">
                  <img className="avatar" src={p.img} alt={p.name} />
                  <div className="name">{p.name}</div>
                  <div className="role">
                    {p.role.split("\n").map((l, ii) => (
                      <div key={ii}>{l}</div>
                    ))}
                  </div>

                  <div className="contactIcons">
                    {p.linkedin && (
                      <a className="iconBtn" href={p.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M4.98 3.5A2.5 2.5 0 002.5 1 2.5 2.5 0 000 3.5 2.5 2.5 0 002.5 6 2.5 2.5 0 004.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.4-2.4 4.9-2.4C22.1 7.8 24 10 24 14.3V24h-5v-8.9c0-2.1-.1-4.8-3-4.8-3 0-3.5 2.2-3.5 4.6V24H8z" />
                        </svg>
                      </a>
                    )}
                    {p.whatsapp && (
                      <a className="iconBtn" href={waLink(p.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.12 1.6 5.9L0 24l6.24-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a10 10 0 01-5.72-1.74l-.41-.26-3.46.91.93-3.37-.27-.43A10 10 0 1122 12c0 5.52-4.48 10-10 10zm5.16-7.07c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.19.28-.72.9-.88 1.08-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.41-.83-.73-1.4-1.63-1.56-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.3-.47.1-.19.05-.36-.02-.5-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.46-.16 0-.35-.02-.54-.02s-.5.07-.76.36c-.26.28-1 1-1 2.44s1.02 2.83 1.16 3.03c.14.19 2 3.05 4.86 4.27.68.29 1.2.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.88-1.32.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI FEATURES ===== */}
      <section className="section aiSection">
        <div className="container">
          <div className="sectionHeading center">
            <div className="lead">
              <h2 className="h2">AI-powered Assistants</h2>
              <p className="p">Smarter outreach: faster qualification, cleaner handoffs, and actionable insights powered by lightweight ML and human oversight.</p>
            </div>
          </div>

          <div className="aiGrid">
            {[
              { t: "Smart Routing", d: "Automatically route leads to the right agent based on intent and past outcomes.", i: "🤖" },
              { t: "Call Summaries", d: "Short, accurate summaries and suggested next steps attached to each call log.", i: "📝" },
              { t: "Sentiment", d: "Detect positive, neutral, and negative sentiment to prioritize follow-ups and coaching.", i: "💬" },
              { t: "Lead Scoring", d: "Predictive scoring to focus your team on the highest-probability opportunities.", i: "📈" }
            ].map((f, i) => (
              <article key={i} className="aiCard">
                <div className="aiIcon" aria-hidden>{f.i}</div>
                <h3 className="h3">{f.t}</h3>
                <p className="p small">{f.d}</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 18 }}>
            <a className="btn" href="/contact">Ask about AI-enabled pilots</a>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <ReviewsV2 />

      {/* ===== FAQ ===== */}
      <section className="section reveal alt">
        <div className="container">
          <h2 className="h2 slim">FAQ</h2>
          <div className="faq">
            {[
              { q: "Is there a trial?", a: "Yes—1-2 week pilot to align on ICP & script." },
              { q: "Month-to-month?", a: "Flexible seats; pause seasonally." },
              { q: "How billing works?", a: "Fixed seat fee + optional performance bonus." },
              { q: "Compliance?", a: "GDPR • DNC • TCPA—all covered." }
            ].map((f, i) => (
              <div
                className="item"
                key={i}
                onClick={(e) => e.currentTarget.classList.toggle("open")}
              >
                <div className="q">
                  {f.q}
                  <span>＋</span>
                </div>
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
              We build compliant, human-first outreach campaigns that convert. Fast ramp, measurable results, and 24/7 support when you need it.
            </p>
          </div>
          <a href="/contact" className="btn ctaBtn">Launch with Us</a>
        </div>
      </section>
    </>
  );
}
// sendEmail utilities moved to ../utils/sendEmail.js