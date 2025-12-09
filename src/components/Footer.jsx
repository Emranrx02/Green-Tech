import React from "react";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerRow">
        <div className="footerCol">
          <div className="brandRow">
            {logo ? <img src={logo} alt="Green Tech" width={36} height={36} style={{ borderRadius: 8, objectFit: 'cover' }} /> : null}
            <div style={{ marginLeft: 10 }}>
              <div className="brandName">Green Tech</div>
              <div className="tagline">A platform to prove your skill</div>
            </div>
          </div>

          <p className="about">
            Since 2021, Green Tech has been delivering dynamic solutions and helping brands grow globally. We focus on quality, results, and client satisfaction is our first priority.
          </p>
        </div>

        <div className="footerCol">
          <h4>Contact</h4>
          <ul className="list plain">
            <li>Location: Azampur, Uttara</li>
            <li>Email: <a href="mailto:info@grentechit.com">info@grentechit.com</a></li>
            <li>Phone: <a href="tel:+8801619012356">01619012356</a></li>
          </ul>

          <div className="socialRow">
            <a href="#" aria-label="Facebook" className="social">Facebook</a>
            <a href="#" aria-label="YouTube" className="social">YouTube</a>
            <a href="#" aria-label="Instagram" className="social">Instagram</a>
            <a href="#" aria-label="WhatsApp" className="social">WhatsApp</a>
          </div>
        </div>

        <div className="footerCol">
          <h4>Quick Links</h4>
          <ul className="list plain">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="container footerBottom footerCenter">
        <span className="copyright">© {new Date().getFullYear()} Green Tech • Developed by <a href="https://emranhaque.com" target="_blank" rel="noopener noreferrer">Emran Haque</a>.</span>
      </div>
    </footer>
  );
}