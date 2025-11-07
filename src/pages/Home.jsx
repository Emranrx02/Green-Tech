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
import female from "../assets/female.jpeg";
import mahafuz from "../assets/mahafuz.jpeg";
import nurnanbi from "../assets/nurnabi.jpeg";
import samiul from "../assets/samiul.jpeg";
import female2 from "../assets/female2.jpeg";
import miah from "../assets/miah.jpeg";
import Hasibur from "../assets/Hasibur.jpeg";
import Emran from "../assets/Emran.jpg";


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

      {/* ===== TEAM (tiny) ===== */}
        {/* ===== TEAM ===== */}
      <section className="section reveal teamSection">
        <div className="container">
          <h2 className="h2 slim">Meet The Core Team</h2>
          <p className="p tiny teamLead">Our leadership and delivery team working across campaigns and QA.</p>

          <div className="teamRow">
{[
  { name: "Md Ariful Islam", role: "Founder & CEO\nGreen Tech", img: ceo, icons: ["telegram","whatsapp"] },
  { name: "Md Nurnabi Shohan", role: "Operation Manager", img: nurnanbi, icons: ["telegram"] },
  { name: "Shahid Azad", role: "Head of Lead Generation & Technical", img: sahid, icons: ["telegram"] },
  { name: "Hasibur Rahman", role: "Senior custom relations Executive & trainer", img: Hasibur, icons: ["telegram"] },
  { name: "Raisa Riaz", role: "Senior custom relations Executive & trainer", img: female2, icons: ["telegram"] },
  { name: "Miah Mohammad Tamjid", role: "Web Developer", img: miah, icons: ["telegram"] },
  { name: "Emran Haque", role: "Full Stack Blockchain and Web Developer", img: Emran, icons: ["telegram"] },
  { name: "Md Tahsinul Hoque Siddiki", role: "Community & Business Developer", img: wakif, icons: ["telegram"] },
  { name: "Mahfuz Rahman", role: "Junior Social Media Manager", img: mahafuz, icons: ["telegram"] },
  { name: "Nishat Anjum", role: "Junior Custom Relations Executive", img: female, icons: ["telegram"] },
  { name: "Md.Samiul Alam", role: "Junior custom relations executive\nSenior Marketing Executive", img: samiul, icons: ["telegram"] },
  
  
  
].map((p, i) => (
              <Reveal className="personReveal" key={i} once={true} rootMargin="0px 0px -10% 0px">
                <article className="person">
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