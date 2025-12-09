import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">

        {/* LEFT – Brand Text */}
        <div className="footerCol footerBrand">
          <h3 className="brandTitle">Green Tech</h3>
          <p className="brandSub">A platform to prove your skill</p>
          <p className="brandDesc">
            Since 2021, Green Tech has been helping brands grow with
            compliant, result-driven outreach. We focus on quality work,
            measurable performance, and a client-first approach.
          </p>
        </div>

        {/* MIDDLE – Useful Links */}
        <div className="footerCol footerCenter">
          <h4 className="footerTitle">Useful Links</h4>
          <ul className="linksList">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT – Location & Contact */}
        <div className="footerCol footerRight">
          <h4 className="footerTitle">Location &amp; Contact</h4>

          <div className="locRow">
            <FaMapMarkerAlt className="locIcon" />
            <span className="locText">Azampur, Uttara</span>
          </div>

          <div className="contactItem">
            <FaEnvelope className="contactIcon" />
            <a className="contactLink" href="mailto:info@grentechit.com">
              info@grentechit.com
            </a>
          </div>

          <div className="contactItem">
            <FaPhone className="contactIcon" />
            <a className="contactLink" href="tel:+8801619012356">
              01619012356
            </a>
          </div>
        </div>

      </div>

      <div className="container footerBottom">
        <div className="footerBottomLeft">
          <span className="copyright">© {new Date().getFullYear()} Green Tech • Developed by <a href="https://emranhaque.com" target="_blank" rel="noopener noreferrer">Emran Haque</a>.</span>
        </div>

        <div className="footerBottomRight">
          <nav className="socials" aria-label="social links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/8801619012356" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </nav>
        </div>
      </div>
    </footer>
  );
}