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
      <div className="absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2 rounded-full border border-purple-200/60 bg-gradient-to-br from-purple-100/60 to-transparent blur-[1px] dark:border-white/10 dark:from-white/10" />
      <div className="absolute bottom-10 right-20 h-28 w-28 rounded-full border border-purple-200/60 bg-gradient-to-br from-purple-100/50 to-transparent blur-[1px] dark:border-white/10 dark:from-white/10" />
    </div>
  );
};

export default MotionHero;
