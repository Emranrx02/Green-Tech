import { useState } from "react";

export default function FAQ({ items=[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div key={i} className={`item ${open===i ? "open" : ""}`}>
          <div className="q" onClick={() => setOpen(open===i ? null : i)}>
            <strong>{it.q}</strong>
            <span>{open===i ? "–" : "+"}</span>
          </div>
          <div className="a">{it.a}</div>
        </div>
      ))}
    </div>
  );
}