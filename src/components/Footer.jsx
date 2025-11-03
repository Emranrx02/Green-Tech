export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerRow">
        <span>© {new Date().getFullYear()} Green Tech • Developed by <a href="https://emranhaque.com" target="_blank">Emran Haque</a></span>
        <span className="socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </span>
      </div>
    </footer>
  );
}