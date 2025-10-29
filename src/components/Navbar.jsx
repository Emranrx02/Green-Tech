// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  // Lock body scroll while menu open
  useEffect(() => {
    if (open) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // Auto close when resizing to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkCls = ({ isActive }) => "pill" + (isActive ? " active" : "");

  return (
    <nav className="nav">
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16}}>
        <Link to="/" className="small" style={{fontWeight:800}}>Green Tech</Link>

        <div className="hideOnMobile" style={{display:"flex",alignItems:"center",gap:6}}>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/services" className={linkCls}>Services</NavLink>
          <NavLink to="/help" className={linkCls}>Help Center</NavLink>
          <Link to="/contact" className="btn" style={{padding:"10px 14px"}}>Discover GT</Link>
        </div>

        <button className="menuBtn" onClick={() => setOpen(v=>!v)} aria-label="Open menu">☰</button>
      </div>

      {/* Mobile overlay + drawer */}
      <div className={`navMenu ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="navScrim" onClick={() => setOpen(false)} />
        <div className="navDrawer">
          <button className="navCloseBtn" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
          <NavLink onClick={()=>setOpen(false)} to="/about">About</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/services">Services</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/help">Help Center</NavLink>
          <Link onClick={()=>setOpen(false)} to="/contact" className="btn" style={{marginTop:8}}>Discover GT</Link>
        </div>
      </div>
    </nav>
  );
}