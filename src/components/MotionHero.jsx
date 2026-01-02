import { useEffect, useRef } from "react";

const MotionHero = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    let frame = null;
    const handleMove = (event) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (event.clientX / innerWidth - 0.5) * 12;
        const y = (event.clientY / innerHeight - 0.5) * 12;
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        frame = null;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0 hidden md:block"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-8 h-44 w-44 -translate-x-1/2 rounded-full border border-slate-300/30 bg-[radial-gradient(circle_at_30%_30%,rgba(125,211,252,0.45),transparent_60%)] blur-[2px] dark:border-white/10" />
      <div className="absolute bottom-8 right-16 h-32 w-32 rounded-full border border-slate-300/30 bg-[radial-gradient(circle_at_30%_30%,rgba(249,168,212,0.4),transparent_60%)] blur-[2px] dark:border-white/10" />
      <div className="absolute left-20 bottom-24 h-24 w-24 rounded-full border border-slate-300/30 bg-[radial-gradient(circle_at_30%_30%,rgba(253,186,116,0.35),transparent_60%)] blur-[2px] dark:border-white/10" />
    </div>
  );
};

export default MotionHero;
