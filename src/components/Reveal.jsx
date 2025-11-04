import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  once = true,
  rootMargin = "0px 0px -10% 0px"
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // mark that JS is enabled (so CSS can hide initially)
    document.documentElement.classList.add("js");

    // accessibility: if user prefers reduced motion, just show
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setInView(true); return; }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin]);

  return (
    <div
      ref={ref}
      data-reveal
      className={`reveal ${inView ? "in is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}