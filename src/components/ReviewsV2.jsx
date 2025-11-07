// ReviewsV2.jsx — cute boxed card, 10 reviews, arrows only (no counter)
import { useState, useRef } from "react";

export default function ReviewsV2() {
  // ---- REAL REVIEWS (from your screenshots) ----
  const reviews = [
    {
      project: "B2B Cold Calling",
      country: "United States",
      text:
        "Working with Arif was great—he did exactly what I expected for the price. Clear, professional communication throughout.",
      stars: 5
    },
    {
      project: "Sales Support",
      country: "United States",
      text:
        "Amazing working with Arif. Smooth process from start to finish and quality delivery across the board.",
      stars: 5
    },
    {
      project: "Outbound Calling",
      country: "United States",
      text:
        "Great working with Arif. Strong communication, on-time updates, and a polished handover.",
      stars: 5
    },
    {
      project: "Lead Generation & Appointments",
      country: "United States",
      text:
        "Affordable and very effective. We got 10+ interested leads and many appointments set. He explained everything clearly on a call—excellent work!",
      stars: 5
    },
    {
      project: "Client Follow-ups",
      country: "United States",
      text:
        "Professionalism at its best. Thank you—my passion is my profession resonates with the way the work was delivered.",
      stars: 5
    },
    {
      project: "Sales Outreach",
      country: "United States",
      text:
        "A delight to work with—attention to detail and professionalism exceeded expectations. Fast replies, polite, and very understanding. Highly recommend!",
      stars: 5
    },
    {
      project: "Quality Assurance Calls",
      country: "United States",
      text:
        "Always on top of communication with fast delivery and the quality we needed. Will recommend!",
      stars: 5
    },
    {
      project: "Cold Call Campaign",
      country: "United States",
      text:
        "Best quality work we’ve received so far. Consistent results and easy collaboration.",
      stars: 5
    },
    {
      project: "Project Feedback & Reporting",
      country: "United States",
      text:
        "Great communication and insightful feedback with detailed notes. Would recommend 100%. We’ve already placed multiple orders.",
      stars: 5
    },
    {
      project: "Customer Outreach",
      country: "Ghana",
      text:
        "Quality of service is good. Proper communication was ensured and everything went as planned.",
      stars: 5
    }
  ];
  // ----------------------------------------------

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState("next");
  const touch = useRef({ x: 0 });

  const prev = () => {
    setDir("prev");
    setIndex(i => (i - 1 + reviews.length) % reviews.length);
  };
  const next = () => {
    setDir("next");
    setIndex(i => (i + 1) % reviews.length);
  };

  const onTouchStart = e => {
    touch.current.x = e.touches[0].clientX;
  };
  const onTouchEnd = e => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
  };

  const r = reviews[index];

  return (
    <section className="reviewsV2 section">
      <div className="container rv-wrap">
        <h2 className="rv-title">Happy &amp; Satisfied Clients</h2>
        <p className="rv-sub">A few short notes from clients who ran campaigns with us.</p>

        <div className="rv-center">
          <article
            className={`rv-card cute large slide-${dir}`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            key={`${index}-${dir}`}
          >
            <span className="rv-halo" aria-hidden></span>

            <div className="rv-toprow">
              <div className="rv-project">
                <strong>Project:</strong> {r.project}
              </div>
              <div className="rv-country">🌍 {r.country}</div>
            </div>

            <div className="rv-stars" aria-label="rating">
              {Array.from({ length: r.stars }).map((_, k) => (
                <span key={k}>⭐</span>
              ))}
            </div>

            <blockquote className="rv-quote">“{r.text}”</blockquote>
          </article>

          {/* arrows only — no numeric counter */}
          <div className="rv-bottomNav only-arrows">
            <button aria-label="previous review" className="navBtn" onClick={prev}>
              ←
            </button>
            <button aria-label="next review" className="navBtn" onClick={next}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}