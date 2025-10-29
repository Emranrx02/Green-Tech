export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
          fontSize: "14px",
          color: "var(--muted)",
        }}
      >
        {/* Left Side */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span>© 2025 Green Tech</span>
          <span>•</span>
          <span>
            Developed by{" "}
            <a
              href="https://emranhaque.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--brand)", fontWeight: "600" }}
            >
              Emran Haque
            </a>
          </span>
        </div>

        {/* Right Side */}
        <div className="socials" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="#">LinkedIn</a>
          <a href="#">X</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}