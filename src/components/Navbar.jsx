import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg"; // optional

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
    document.body.classList.remove("menu-open");
  }, [location.pathname]);

  // Escape to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // keep <body> from scrolling when menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className="nav">
      <div className="container navBar">
        <Link to="/" className="brand" aria-label="Green Tech">
          {logo ? (
            <img
              src={logo}
              alt="Green Tech"
              width="28"
              height="28"
              style={{ borderRadius: 8, objectFit: "cover" }}
            />
          ) : null}
          <span>Green Tech</span>
        </Link>

        <nav className="links hideOnMobile" aria-label="Primary">
          <NavLink to="/about">About</NavLink>
          <a href="/#packages">Packages</a>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Help Center</NavLink>
        </nav>

        <Link className="btn sm hideOnMobile" to="/contact">
          Book a meeting
        </Link>

        <button
          className="menuBtn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`navMenu ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div className="navScrim" />
        <div
          id="mobile-drawer"
          className="navDrawer"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="navCloseBtn"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <NavLink to="/about">About</NavLink>
          <a href="/#packages">Packages</a>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Help Center</NavLink>

          <Link className="btn primary" to="/contact">
            Book a meeting
          </Link>
        </div>
      </div>
    </header>
  );
}