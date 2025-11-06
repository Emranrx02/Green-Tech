// ReviewsV2.jsx — cute boxed card, 10 reviews, arrows only (no counter)
import { useState, useRef } from "react";

export default function ReviewsV2(){
  const reviews = [
    { project:"Inbound Screening", country:"United States", text:"Affordable and effective. Generated strong leads with clear communication.", stars:5 },
    { project:"Sales Funnel Audit", country:"France", text:"Professional, fast, and exactly what I needed. Highly recommend.", stars:5 },
    { project:"B2B Cold Calling", country:"United Kingdom", text:"Clean scripts, compliant process, great reporting. Booked qualified demos.", stars:5 },
    { project:"Outbound Discovery", country:"Canada", text:"Responsive team, steady volume, respectful outreach. Great experience.", stars:5 },
    { project:"Warm Lead Reactivation", country:"Australia", text:"Brought back inactive leads and turned them into booked calls.", stars:5 },
    { project:"Pipeline Clean-up", country:"Germany", text:"Organized, diligent, and clear QA. Our CRM finally breathes.", stars:5 },
    { project:"Appointment Setting", country:"United Arab Emirates", text:"High quality conversations and reliable follow-ups. Impressive.", stars:5 },
    { project:"Community Outreach", country:"Singapore", text:"Natural chat tone and on-brand engagement. Felt genuinely human.", stars:5 },
    { project:"SaaS Demo Calling", country:"Netherlands", text:"Good conversions from trial to demo. Reporting is super clear.", stars:5 },
    { project:"List Verification", country:"Italy", text:"Accurate verification, compliant handling, and fast turnaround.", stars:5 },
  ];

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState("next");
  const touch = useRef({x:0});

  const prev = () => { setDir("prev"); setIndex(i => (i - 1 + reviews.length) % reviews.length); };
  const next = () => { setDir("next"); setIndex(i => (i + 1) % reviews.length); };

  const onTouchStart = e => { touch.current.x = e.touches[0].clientX; };
  const onTouchEnd = e => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
  };

  const r = reviews[index];

  return (
    <section className="reviewsV2 section">
      <div className="container rv-wrap">
        <h2 className="rv-title">Happy &amp; Satisfied Clients</h2>


        <div className="rv-center">
          <article
            className={`rv-card cute large slide-${dir}`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            key={`${index}-${dir}`}
          >
            <span className="rv-halo" aria-hidden />

            <div className="rv-toprow">
              <div className="rv-project"><strong>Project:</strong> {r.project}</div>
              <div className="rv-country">🌍 {r.country}</div>
            </div>

            <div className="rv-stars" aria-label="rating">
              {Array.from({length:r.stars}).map((_,k)=>(<span key={k}>⭐</span>))}
            </div>

            <blockquote className="rv-quote">“{r.text}”</blockquote>
          </article>

          {/* arrows only — no numeric counter */}
          <div className="rv-bottomNav only-arrows">
            <button aria-label="previous review" className="navBtn" onClick={prev}>←</button>
            <button aria-label="next review" className="navBtn" onClick={next}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}