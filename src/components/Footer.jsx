export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerRow">
        <span className="copyright">© {new Date().getFullYear()} Green Tech • Developed by <a href="https://emranhaque.com" target="_blank" rel="noopener noreferrer">Emran Haque</a></span>
        <nav className="socials" aria-label="Green Tech social links">
          <a href="https://www.linkedin.com/in/grentech/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.facebook.com/GreenTech27" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
    </footer>
  );
}