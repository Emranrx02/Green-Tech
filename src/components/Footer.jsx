import React from "react";
import logo from "../assets/logo.jpg";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerCol footerLeft">
          <div className="locRow">
            <FaMapMarkerAlt className="locIcon" />
            <div>
              <div className="locTitle">Location</div>
              <div className="locText">Azampur, Uttara</div>
            </div>
          </div>
        </div>

        <div className="footerCol footerCenter">
          <div className="linksCol">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="contactCol">
            <div className="contactItem"><FaEnvelope className="contactIcon" /><a href="mailto:info@grentechit.com">info@grentechit.com</a></div>
            <div className="contactItem"><FaPhone className="contactIcon" /><a href="tel:+8801619012356">01619012356</a></div>
          </div>
        </div>

        <div className="footerCol footerRight">
          <div className="brandRow">
            {logo ? <img src={logo} alt="Green Tech" width={56} height={56} style={{ borderRadius: 10, objectFit: 'cover' }} /> : null}
            <div style={{ marginLeft: 12 }}>
              <div className="brandName">Green Tech</div>
              <div className="brandTag">A platform to prove your skill</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footerBottom footerCenter">
        <span className="copyright">© {new Date().getFullYear()} Green Tech • Developed by <a href="https://emranhaque.com" target="_blank" rel="noopener noreferrer">Emran Haque</a>.</span>
      </div>
    </footer>
  );
}