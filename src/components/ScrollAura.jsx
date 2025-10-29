import { useEffect, useRef, useState } from "react";

export default function ScrollAura() {
  const rafRef = useRef(0);
  const [showSpark, setShowSpark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty("--scrollY", `${y}px`);

        // bottom ~8% এ ঢুকলে spark
        const nearBottom = h > 0 ? y / h > 0.92 : false;
        setShowSpark(nearBottom);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* floating gradient aura */}
      <div className="aura" aria-hidden="true" />

      {/* bottom spark */}
      <div className={`spark ${showSpark ? "show" : ""}`} aria-hidden="true">
        <i/><i/><i/><i/><i/>
      </div>
    </>
  );
}