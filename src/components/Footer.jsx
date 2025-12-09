import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">

        {/* LEFT – Location */}
        <div className="footerCol footerLeft">
          <h4 className="footerTitle">Location</h4>
          <div className="locRow">
            <FaMapMarkerAlt className="locIcon" />
            <div className="locText">Azampur, Uttara</div>
          </div>
        </div>

        {/* CENTER – Useful Links */}
        <div className="footerCol footerCenter">
          <h4 className="footerTitle">Useful Links</h4>
          <ul className="linksList">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT – Contact (replacing logo) */}
        <div className="footerCol footerRight">
          <h4 className="footerTitle">Contact</h4>
          <div className="contactItem">
            <FaEnvelope className="contactIcon" />
            <a href="mailto:info@grentechit.com">info@grentechit.com</a>
          </div>
          <div className="contactItem">
            <FaPhone className="contactIcon" />
            <a href="tel:+8801619012356">01619012356</a>
          </div>
        </div>

      </div>

      {/* Bottom: left copyright, right small AI badge (keeps chat/widget area clear) */}
      <div className="container footerBottom">
        <div className="footerBottomLeft">
          <span className="copyright">© {new Date().getFullYear()} Green Tech • Developed by <a href="https://emranhaque.com" target="_blank" rel="noopener noreferrer">Emran Haque</a>.</span>
        </div>

        
      </div>
    </footer>
  );
}