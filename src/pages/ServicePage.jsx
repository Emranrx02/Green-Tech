// src/pages/ServicePage.jsx
import { useParams, Navigate, Link } from "react-router-dom";
import { servicePages } from "../content/servicePages";

export default function ServicePage() {
  const { slug } = useParams();
  const data = servicePages[slug];

  if (!data) return <Navigate to="/not-found" replace />;

  return (
    <main>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <h1 className="h1" style={{ marginBottom: 10 }}>{data.title}</h1>
          <p className="p">{data.tagline}</p>
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h3 className="h3" style={{ marginBottom: 8 }}>What we do</h3>
            <ul className="list check">
              {data.whatWeDo.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section alt">
        <div className="container">
          <div className="card">
            <h3 className="h3" style={{ marginBottom: 8 }}>Deliverables</h3>
            <ul className="list dot">
              {data.deliverables.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      {data.packages && data.packages.length > 0 ? (
        <section className="section">
          <div className="container">
            <h3 className="h3" style={{ marginBottom: 12 }}>Packages</h3>
            <div className="pkgGrid">
              {data.packages.map((p, i) => (
                <div key={i} className="card pkgCard">
                  <div className="pkgName">{p.name}</div>
                  <div className="pkgQty">{p.qty}</div>
                  <div className="pkgPrice">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Compliance */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h3 className="h3" style={{ marginBottom: 8 }}>Compliance</h3>
            <ul className="list dot">
              {data.compliance.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>

          <div style={{ marginTop: 18 }}>
            <Link className="btn" to={data.cta.to}>{data.cta.label}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}