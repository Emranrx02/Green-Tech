export function Card({ title, text, cta, href="#", icon="⭐" }) {
  return (
    <div className="card">
      <div style={{display:"flex",gap:12,alignItems:"center"}}>
        <div className="iconWrap">{icon}</div>
        <div>
          <div className="h3">{title}</div>
          <p className="p">{text}</p>
        </div>
      </div>
      {cta && <a className="btn ghost" href={href} style={{marginTop:12,display:"inline-flex"}}>{cta}</a>}
    </div>
  );
}