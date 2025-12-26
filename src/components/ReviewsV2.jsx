import { useMemo } from "react";

export default function ReviewsV2() {
  const reviews = useMemo(
    () => [
      {
        stars: 5,
        text:
          "Fast delivery and clean reporting. The lead list quality was solid and saved our team a ton of time.",
        name: "Startup Founder",
        role: "B2B Lead Generation",
        tag: "Lead Gen",
      },
      {
        stars: 5,
        text:
          "They handled outreach professionally and kept everything compliant. Great tone, good follow-ups.",
        name: "Sales Manager",
        role: "B2C Cold Calling",
        tag: "Calling",
      },
      {
        stars: 5,
        text:
          "Simple process, quick ramp-up, and transparent updates. We’ll continue scaling with them.",
        name: "Agency Partner",
        role: "B2C Lead Generation",
        tag: "Growth",
      },
      {
        stars: 5,
        text:
          "Clear communication, consistent updates, and strong results. The workflow was smooth from day one.",
        name: "Operations Lead",
        role: "B2B Cold Calling",
        tag: "Calling",
      },
      {
        stars: 5,
        text:
          "Reporting was easy to follow and the team stayed aligned with our ICP. Really happy with quality.",
        name: "Founder",
        role: "B2B Lead Generation",
        tag: "Lead Gen",
      },
    ],
    []
  );

  const Stars = ({ n }) => (
    <div className="rvStars" aria-label={`${n} stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );

  // Duplicate list for infinite marquee effect
  const loop = [...reviews, ...reviews];

  return (
    <section className="section rvSection" id="reviews">
      <div className="container">
        <div className="rvHead">
          <h2 className="h2 rvTitle">Happy &amp; Satisfied Clients</h2>
          <p className="p rvSub">
            A few short notes from clients who ran campaigns with us.
          </p>
        </div>

        <div className="rvMarquee" aria-label="Client reviews carousel">
          <div className="rvRail">
            {loop.map((r, idx) => (
              <article className="rvCard" key={idx}>
                <div className="rvTop">
                  <div className="rvPill">{r.role}</div>
                  <div className="rvTag">{r.tag}</div>
                </div>

                <Stars n={r.stars} />

                <p className="rvText">“{r.text}”</p>

                <div className="rvPerson">
                  <div className="rvAvatar" aria-hidden="true">
                    {r.name?.slice(0, 1) || "C"}
                  </div>
                  <div className="rvMeta">
                    <div className="rvName">{r.name}</div>
                    <div className="rvRole">{r.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
