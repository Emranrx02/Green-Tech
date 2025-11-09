// src/pages/B2BLeadGeneration.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function B2BLeadGeneration() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2" style={{ color: "#6cf3c1", marginBottom: 10 }}>
          B2B Lead Generation
        </h1>
        <p className="p" style={{ marginBottom: 20 }}>
          Identify, attract, and qualify the right companies, then pass ready leads to sales
          with crystal-clear notes and scheduling.
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
            <li>ICP design with firmographic & technographic filters</li>
            <li>Account & contact sourcing with verification</li>
            <li>Multi-touch outreach (calls first, supported by email/DM)</li>
            <li>Qualification framework (authority, need, timing, budget)</li>
            <li>Meeting booking + structured handoff notes</li>
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
            <li>High-accuracy lists with bounce-safe standards</li>
            <li>Human-first calling that opens doors politely</li>
            <li>QA snapshots and weekly pipeline summaries</li>
            <li>Clean CRM hygiene and deduplication rules</li>
          </ul>
        </div>

        <div style={{ marginTop: 32 }}>
          <Link to="/" className="btn">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}