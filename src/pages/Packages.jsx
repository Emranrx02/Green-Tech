export default function Packages() {
  const packages = [
    {
      title: "B2B Lead Generation",
      plans: [
        { name: "Basic", qty: "100 leads", price: "$20" },
        { name: "Medium", qty: "250 leads", price: "$40" },
        { name: "Premium", qty: "500 leads", price: "$80" },
      ],
    },
    {
      title: "B2C Lead Generation",
      plans: [
        { name: "Basic", qty: "100 leads", price: "$20" },
        { name: "Medium", qty: "250 leads", price: "$40" },
        { name: "Premium", qty: "500 leads", price: "$80" },
      ],
    },
    {
      title: "B2B Cold Calling",
      plans: [
        { name: "Basic", qty: "100 cold calls", price: "$20" },
        { name: "Medium", qty: "250 cold calls", price: "$40" },
        { name: "Premium", qty: "500 cold calls", price: "$80" },
      ],
    },
    {
      title: "B2C Cold Calling",
      plans: [
        { name: "Basic", qty: "100 cold calls", price: "$20" },
        { name: "Medium", qty: "250 cold calls", price: "$40" },
        { name: "Premium", qty: "500 cold calls", price: "$80" },
      ],
    },
  ];

  return (
    <main>
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          {/* ===== HEADER ===== */}
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h1 className="h1">Packages</h1>
            <p className="p" style={{ maxWidth: 820, margin: "10px auto", opacity: 0.9 }}>
              Pick a ready package or request a custom mix. Transparent pricing, fast delivery.
            </p>
          </div>

          {/* ===== GRID ===== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {packages.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 20,
                  padding: 22,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                }}
              >
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 16 }}>
                  {cat.title}
                </h3>

                {cat.plans.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 14px",
                      marginBottom: 10,
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 800 }}>{p.name}</div>
                      <div style={{ fontSize: 13, opacity: 0.85 }}>{p.qty}</div>
                    </div>
                    <div style={{ fontWeight: 900, fontSize: 16 }}>{p.price}</div>
                  </div>
                ))}

                {/* ✅ ONLY MEETING BUTTON */}
                <div style={{ marginTop: 18, textAlign: "center" }}>
                  <a href="/contact" className="btn sm">
                    Book a meeting
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ FOOTNOTE REMOVED COMPLETELY */}
        </div>
      </section>
    </main>
  );
}
