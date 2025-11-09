// src/pages/B2CColdCalling.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function B2CColdCalling() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2" style={{ color: "#6cf3c1", marginBottom: 10 }}>
          B2C Cold Calling
        </h1>
        <p className="p" style={{ marginBottom: 20 }}>
          High-touch consumer outreach to spark interest, qualify, and convert through
          respectful, human conversations that protect your brand and compliance.
        </p>

        <div className="card" style={{
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 18,
          padding: 22,
          marginBottom: 28
        }}>
          <h3 className="h3" style={{ color: "#62d0ff", marginBottom: 10 }}>What We Provide</h3>
          <ul className="list dot" style={{ lineHeight: 1.7 }}>
            <li>Tone-matched scripts tailored to your audience</li>
            <li>Consent, opt-in, and privacy guardrails (GDPR/TCPA/DNC)</li>
            <li>Qualified outcomes (warm lead / request info / call back)</li>
            <li>Daily summaries and clear reporting</li>
            <li>Polite rebuttals and escalation rules for sensitive cases</li>
          </ul>
        </div>

        <div className="card" style={{
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 18,
          padding: 22
        }}>
          <h3 className="h3" style={{ color: "#62d0ff", marginBottom: 10 }}>Why Teams Choose Us</h3>
          <ul className="list dot" style={{ lineHeight: 1.7 }}>
            <li>Brand-safe voice and empathy-first conversations</li>
            <li>QA with call spot-checks and coaching notes</li>
            <li>Fast ramp with clear SLAs and daily visibility</li>
            <li>Seamless handoff to your inbox, CRM, or calendar</li>
          </ul>
        </div>

        <div style={{ marginTop: 32 }}>
          <Link to="/" className="btn">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}