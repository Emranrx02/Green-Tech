// src/pages/Services.jsx
import { telemarketingIntro, services } from "../content/services";

export default function Services() {
  return (
    <main>
      {/* Intro */}
      <section className="section">
        <div className="container">
          <h1 className="h1" style={{ marginBottom: 10 }}>
            {telemarketingIntro.title}
          </h1>
          <p className="p">{telemarketingIntro.tagline}</p>

          <div className="card" style={{ marginTop: 18 }}>
            <h3 className="h3" style={{ marginBottom: 6 }}>
              What is Telemarketing?
            </h3>
            <p className="p">{telemarketingIntro.whatIs}</p>
            <ul className="list check">
              <li>Outbound calls to targeted prospects</li>
              <li>Inbound calls from ads or promotions</li>
              <li>Live agents first; automation only where fully compliant</li>
              <li>Used across B2B and B2C campaigns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section alt" id="services">
        <div className="container">
          <div className="sectionHeading center">
            <div className="lead">
              <h2 className="h2">Service That We Provide</h2>
              <p className="p">
                Outcome-focused calling & lead gen with compliance, QA, and clear reporting.
              </p>
            </div>
          </div>

          <div className="svcGrid">
            {services.map((s) => (
              <article key={s.id} className="svcCard">
                <div className="svcIcon" aria-hidden>{s.icon}</div>
                <h3 className="h3" style={{ marginBottom: 6 }}>{s.title}</h3>
                <p className="p">{s.summary}</p>

                {/* details/accordions */}
                {Object.entries(s.bullets).map(([group, items], idx) => (
                  <details key={idx} className="acc">
                    <summary>{group}</summary>
                    <ul className="list dot">
                      {items.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </details>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Logos / Companies Worked With — removed per request (kept in content if needed later) */}
    </main>
  );
}