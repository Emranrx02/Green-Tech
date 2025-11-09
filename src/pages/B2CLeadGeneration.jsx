// src/pages/B2CLeadGeneration.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function B2CLeadGeneration() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2" style={{ color: "#6cf3c1", marginBottom: 10 }}>
          B2C Lead Generation
        </h1>
        <p className="p" style={{ marginBottom: 20 }}>
          Attract and capture individual consumers with incentive-aware content and follow-ups
          designed to convert.
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
            <li>Audience research and offer positioning</li>
            <li>Lead magnets & landing inputs that convert</li>
            <li>Consent-aware capture + warm call follow-up</li>
            <li>Outcome tracking and performance snapshots</li>
            <li>Handoff to nurture or direct sales</li>
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
            <li>Consent & privacy best-practices baked in</li>
            <li>Friendly, brand-safe conversations</li>
            <li>Clear dashboards for daily visibility</li>
            <li>Fast experiments to find winners quickly</li>
          </ul>
        </div>

        <div style={{ marginTop: 32 }}>
          <Link to="/" className="btn">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}