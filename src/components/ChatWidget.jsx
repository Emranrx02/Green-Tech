// src/components/ChatWidget.jsx
import { useState } from "react";

const WA_NUMBER = "8801849873128"; // your WhatsApp number

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const preset = encodeURIComponent(
    "Hi! I’m GreenTechIT Bot. Tell me — our team will help you 🙂"
  );

  const waUrl = (msg = "") =>
    `https://wa.me/${WA_NUMBER}?text=${msg || preset}`;

  return (
    <div className={`waWidget solid ${open ? "open" : ""}`}>
      {/* Floating Button */}
      <button
        className="wa-fab"
        aria-label="Chat on WhatsApp"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M19.11 17.59c-.3-.15-1.73-.86-1.99-.95-.26-.1-.45-.15-.63.14-.18.29-.71.96-.87 1.14-.16.18-.32.2-.6.06-.29-.14-1.22-.46-2.32-1.46-.85-.76-1.44-1.69-1.6-1.98-.17-.29-.02-.44.12-.58.13-.13.29-.34.43-.52.14-.18.19-.3.3-.49.1-.2.05-.37-.02-.51-.07-.14-.63-1.55-.86-2.12-.22-.55-.47-.48-.64-.48-.17 0-.36-.02-.56-.02-.2 0-.52.08-.79.38-.27.29-1.04 1.04-1.04 2.53 0 1.49 1.07 2.95 1.22 3.15.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.67.62.7.22 1.34.19 1.84.12.57-.09 1.72-.71 1.97-1.39.25-.67.25-1.26.17-1.39-.07-.14-.27-.21-.56-.35z" />
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.61 4.43 1.69 6.28L3 29l6.92-1.83A12.9 12.9 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.11 0-4.07-.62-5.71-1.69l-.41-.26-3.55.94.95-3.44-.27-.43A10.47 10.47 0 1 1 26.5 16c0 5.8-4.7 10.5-10.5 10.5z" />
        </svg>
        <span className="wa-fab-badge">GT</span>
      </button>

      {/* Panel */}
      <div
        className="wa-panel"
        role="dialog"
        aria-modal="true"
        aria-label="WhatsApp chat"
      >
        <div className="wa-head">
          <div className="wa-brand">
            <span className="wa-dot">🟢</span>
            <div>
              <div className="wa-title">GreenTechIT Bot</div>
              <div className="wa-sub">Typically replies in minutes</div>
            </div>
          </div>
          <button
            className="wa-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="wa-body">
          <div className="wa-bot">
            Hi! I’m <strong>GreenTechIT Bot</strong>. Tell me — our team will
            help you 🙂
          </div>
          <textarea
            className="wa-input"
            placeholder="Type your question here..."
          />
          <a
            className="wa-send"
            href={waUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
