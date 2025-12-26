import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gtFooter">
      <div className="gtFooterInner container">
        {/* LEFT */}
        <div className="gtFooterLeft">
          <h3 className="gtBrand">Green Tech</h3>
          <p className="gtTag">A platform to prove your skill</p>
          <p className="gtDesc">
            Since 2021, Green Tech has been delivering dynamic solutions and
            helping brands grow globally. We focus on quality, results, and
            client satisfaction is our first priority.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="gtFooterMid">
          <h4>Quick Links</h4>
          <Link to="/about">About</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Help Center</Link>
        </div>

        {/* RIGHT */}
        <div className="gtFooterRight">
          <h4>Contact</h4>
          <p>📍 Azampur, Uttara</p>
          <p>✉️ info@grentechit.com</p>
          <p>📞 01619012356</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="gtFooterBottom container">
        <div className="gtCopy">
          © {year} Green Tech •{" "}
          <span className="gtDev">
            Developed by{" "}
            <a
              href="https://emranhaque.com"
              target="_blank"
              rel="noreferrer"
            >
              Emran Haque
            </a>
          </span>
        </div>

        <div className="gtSocial">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v6.2h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.6H9z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/8801619012356" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.12 1.6 5.9L0 24l6.24-1.64A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a10 10 0 0 1-5.72-1.74l-.41-.26-3.46.91.93-3.37-.27-.43A10 10 0 1 1 22 12c0 5.52-4.48 10-10 10z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
