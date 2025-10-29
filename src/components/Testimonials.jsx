import Reveal from "./Reveal";

// === Testimonial Data ===
const ITEMS = [
  {
    name: "Aisha Rahman",
    title: "Head of Growth @ Fintech",
    quote:
      "Professional callers, strong rebuttals, and clean reporting. Exactly what we needed to scale.",
    badge: "🔥 Top Partner",
    img: "antor.jpg",
  },
  {
    name: "Liam Carter",
    title: "Founder @ DTC",
    quote:
      "They rebuilt our script, tightened ICP, and meetings doubled. Transparent and reliable.",
    badge: "🚀 Growth",
    img: "avatar2.jpg",
  },
  {
    name: "Maya Patel",
    title: "Ops Lead @ Agency",
    quote:
      "Super smooth handoffs to our sales team. Their QA + coaching made a visible difference.",
    badge: "✅ QA-First",
    img: "avatar3.jpg",
  },
  {
    name: "Jonah Smith",
    title: "Sales Director @ B2B",
    quote:
      "Booked meetings with real decision-makers, not tire-kickers. Worth every dollar.",
    badge: "🎯 Qualified",
    img: "avatar4.jpg",
  },
  {
    name: "Kevin Yang",
    title: "Product Manager @ SaaS",
    quote:
      "Green Tech consistently books quality appointments. Show and close rates improved fast.",
    badge: "⭐️⭐️⭐️⭐️⭐️",
    img: "avatar5.jpg",
  },
];

// auto loop effect
const TRACK = [...ITEMS, ...ITEMS];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testiHead">
          <h2 className="h2">What Our Clients Say</h2>
          <p className="p">
            We partner with startups and enterprises to drive pipeline.
          </p>
        </div>

        {/* auto-scrolling testimonial line */}
        <div className="tmLine marqueeHoverPause">
          <div className="tmScroller">
            {TRACK.map((t, idx) => (
              <Reveal as="div" className="tmBubble" key={idx} delay={idx * 60}>
                <div className="tmAvatar">
                  <img
                    src={`/src/assets/${t.img}`}
                    alt={t.name}
                    loading="lazy"
                  />
                </div>
                <p>{t.quote}</p>
                <h4>{t.name}</h4>
                <span>{t.title}</span>
                <div className="tmTag">{t.badge}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}