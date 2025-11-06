// ReviewsV2.jsx — cute boxed card, 10 reviews, arrows only (no counter)
import { useState, useRef } from "react";

export default function ReviewsV2(){
 const reviews = [
  {
    project: "Inbound Screening",
    country: "United States",
    text:
      "The team handled our inbound screening with real care and consistency. Scripts felt natural, compliance was tight, and the handoff notes to sales were crystal clear. We saw faster responses and fewer no-shows within the first week.",
    stars: 5
  },
  {
    project: "Sales Funnel Audit",
    country: "France",
    text:
      "Thorough audit with practical fixes, not theory. They mapped leak points, rewrote a few touchpoints, and tuned our follow-ups. Conversions picked up without increasing ad spend. Professional, fast, and exactly what we needed.",
    stars: 5
  },
  {
    project: "B2B Cold Calling",
    country: "United Kingdom",
    text:
      "Clean, on-brand introductions and respectful discovery. Their call notes were detailed and their QA caught edge cases we usually miss. We booked qualified demos from accounts we’d been chasing for months.",
    stars: 5
  },
  {
    project: "Outbound Discovery",
    country: "Canada",
    text:
      "Steady volume, steady quality. Messaging was tailored by segment and they adapted quickly to feedback. Follow-ups were punctual and the reporting made weekly syncs effortless. Great experience overall.",
    stars: 5
  },
  {
    project: "Warm Lead Reactivation",
    country: "Australia",
    text:
      "They revived a dormant list without sounding pushy. Friendly tone, short value hooks, and thoughtful timing. Several past trials came back to schedule demos — something we hadn’t achieved internally.",
    stars: 5
  },
  {
    project: "Pipeline Clean-up",
    country: "Germany",
    text:
      "Our CRM was a mess. They normalized fields, deduped records, and rebuilt simple stages we could actually manage. QA rules and notes made future campaigns smoother and reduced confusion for the sales team.",
    stars: 5
  },
  {
    project: "Appointment Setting",
    country: "United Arab Emirates",
    text:
      "High-quality conversations with clear summaries after every call. Prospects arrived prepared and expectations matched what our AEs deliver. Reliable calendar hygiene and zero compliance hiccups.",
    stars: 5
  },
  {
    project: "Community Outreach",
    country: "Singapore",
    text:
      "Natural chat tone that felt human, not scripted. Engagement stayed active throughout the campaign and the team handled sensitive questions with care. Brand safety and moderation were top-tier.",
    stars: 5
  },
  {
    project: "SaaS Demo Calling",
    country: "Netherlands",
    text:
      "They understood our product quickly and positioned it clearly. Trial users converted to demos at a higher rate, and the objection handling notes became training material for our new reps.",
    stars: 5
  },
  {
    project: "List Verification",
    country: "Italy",
    text:
      "Accurate verification with transparent reasoning on each disqualification. Bounce rate dropped, domain health improved, and our next email sequence performed far better than baseline.",
    stars: 5
  }
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