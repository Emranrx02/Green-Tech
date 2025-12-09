import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerCol" style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <FaMapMarkerAlt style={{ color: 'var(--brand2)', minWidth: 20 }} />
            <div>
              <div style={{ fontWeight: 800, color: 'var(--text)' }}>Location</div>
              <div style={{ color: 'var(--muted)' }}>Azampur, Uttara</div>
            </div>
          </div>
        </div>

        <div className="footerCol" style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 800, color: 'var(--text)' }}>Mail</div>
              <a href="mailto:info@grentechit.com" style={{ color: 'var(--brand2)', fontWeight: 700 }}>info@grentechit.com</a>
            </div>
            <FaEnvelope style={{ color: 'var(--brand2)', minWidth: 20 }} />
          </div>
        </div>
      </div>

      <div className="container footerBottom footerCenter" style={{ paddingTop: 14 }}>
        <span className="copyright">© {new Date().getFullYear()} Green Tech • Developed by <a href="https://emranhaque.com" target="_blank" rel="noopener noreferrer">Emran Haque</a>.</span>
      </div>
    </footer>
  );
}