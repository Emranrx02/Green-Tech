// src/pages/B2BColdCalling.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function B2BColdCalling() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2" style={{ color: "#6cf3c1", marginBottom: 10 }}>
          B2B Cold Calling Service
        </h1>
        <p className="p" style={{ marginBottom: 20 }}>
          Our B2B Cold Calling campaigns are built to connect you directly with decision-makers in your target market using
          compliant, human-first communication strategies.
        </p>

        <div className="card" style={{
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: "18px",
          padding: "22px",
          marginBottom: "28px"
        }}>
          <h3 className="h3" style={{ color: "#62d0ff", marginBottom: "10px" }}>What We Provide</h3>
          <ul className="list dot" style={{ lineHeight: 1.7 }}>
            <li>ICP-aligned scripts crafted for your exact target audience</li>
            <li>Experienced B2B reps trained for polite persistence and objection handling</li>
            <li>Comprehensive QA and compliance with DNC, GDPR, and TCPA</li>
            <li>Real-time CRM updates and daily performance summaries</li>
            <li>Lead qualification and direct meeting scheduling</li>
          </ul>
        </div>

        <div className="card" style={{
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: "18px",
          padding: "22px",
        }}>
          <h3 className="h3" style={{ color: "#62d0ff", marginBottom: "10px" }}>Why Businesses Choose Us</h3>
          <ul className="list dot" style={{ lineHeight: 1.7 }}>
            <li>Data-driven targeting ensures high-value calls only</li>
            <li>Trained agents with neutral accents for global reach</li>
            <li>Custom QA framework for accuracy and compliance</li>
            <li>Fast onboarding — campaigns ready within 5-7 days</li>
          </ul>
        </div>

        <div style={{ marginTop: "32px" }}>
          <Link to="/" className="btn">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}