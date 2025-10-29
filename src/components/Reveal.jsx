import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = 'div', className = '', children, delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([ent]) => {
      if (ent.isIntersecting) { setShow(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass =
    delay >= 200 ? "delay-3" : delay >= 120 ? "delay-2" : delay > 0 ? "delay-1" : "";

  const Component = Tag;

  return (
    <Component
      ref={ref}
      className={`fade-up ${delayClass} ${show ? "reveal" : ""} ${className}`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </Component>
  );
}