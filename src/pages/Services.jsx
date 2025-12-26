// src/pages/Services.jsx
import { Link } from "react-router-dom";
import { services } from "../content/services";
import { servicePages } from "../content/servicePages";

export default function Services() {
  return (
    <main>
      {/* Services Section */}
      <section className="section alt" id="services">
        <div className="container">
          {/* Center Heading (ONLY ONCE) */}
          <div
            className="sectionHeading"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <h2 className="h2">Service That We Provide</h2>
            <p className="p" style={{ maxWidth: 720, marginTop: 8 }}>
              Outcome-focused calling & lead gen with compliance, QA, and clear reporting.
            </p>
          </div>

          {/* Service Cards */}
          <div className="svcGrid">
            {services.map((s) => (
              <article key={s.id} className="svcCard">
                <div className="svcIcon" aria-hidden>
                  {s.icon}
                </div>

                <h3 className="h3" style={{ marginBottom: 6 }}>
                  {s.title}
                </h3>

                <p className="p">{s.summary}</p>

                {/* Inline packages */}
                {servicePages[s.slug]?.packages ? (
                  <div className="svcPackages">
                    {servicePages[s.slug].packages.slice(0, 3).map((p, i) => (
                      <div key={i} className="pkgInline">
                        <div className="pkgName">{p.name}</div>
                        <div className="pkgPrice">{p.price}</div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Accordion bullets (optional) */}
                {s.bullets &&
                typeof s.bullets === "object" &&
                Object.keys(s.bullets).length > 0 ? (
                  Object.entries(s.bullets).map(([group, items], idx) => (
                    <details key={idx} className="acc">
                      <summary>{group}</summary>
                      <ul className="list dot">
                        {Array.isArray(items)
                          ? items.map((t, i) => <li key={i}>{t}</li>)
                          : null}
                      </ul>
                    </details>
                  ))
                ) : null}

                <div style={{ marginTop: 14 }}>
                  <Link className="btn" to={`/${s.slug}`}>
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
