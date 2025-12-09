// src/pages/Services.jsx
import { Link } from "react-router-dom";
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

          {/* Intro card removed per request: 'What is Telemarketing' */}
        </div>
      </section>

      {/* Service Cards */}
      <section className="section alt" id="services">
        <div className="container">
          <div className="sectionHeading center">
            <div className="lead">
              <h2 className="h2">Services We Provide</h2>
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

                {s.bullets && typeof s.bullets === "object" && Object.keys(s.bullets).length > 0 ? (
                  Object.entries(s.bullets).map(([group, items], idx) => (
                    <details key={idx} className="acc">
                      <summary>{group}</summary>
                      <ul className="list dot">
                        {Array.isArray(items) ? items.map((t, i) => <li key={i}>{t}</li>) : null}
                      </ul>
                    </details>
                  ))
                ) : null}

                <div style={{ marginTop: 12 }}>
                  <Link className="btn" to={`/${s.slug}`}>Learn more</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 