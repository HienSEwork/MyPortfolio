import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

function useHeroParallax() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const layersRef = useRef([]);

  const registerLayer = useCallback((strength) => {
    return (el) => {
      if (!el) return;
      const setX = gsap.quickTo(el, "x", { duration: 1.1, ease: "power3.out" });
      const setY = gsap.quickTo(el, "y", { duration: 1.1, ease: "power3.out" });
      layersRef.current.push({ strength, setX, setY });
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let setRotX = null;
    let setRotY = null;
    if (stageRef.current) {
      setRotX = gsap.quickTo(stageRef.current, "rotateX", { duration: 1.2, ease: "power3.out" });
      setRotY = gsap.quickTo(stageRef.current, "rotateY", { duration: 1.2, ease: "power3.out" });
    }

    if (reduced) return undefined;

    const apply = (nx, ny) => {
      const dist = Math.min(1, Math.hypot(nx, ny));
      const amp = 0.55 + dist * 0.45;
      layersRef.current.forEach(({ strength, setX, setY }) => {
        setX(nx * strength * amp);
        setY(ny * strength * amp);
      });
      setRotX?.(-ny * 3.2 * amp);
      setRotY?.(nx * 4.2 * amp);
    };

    const reset = () => {
      layersRef.current.forEach(({ setX, setY }) => {
        setX(0);
        setY(0);
      });
      setRotX?.(0);
      setRotY?.(0);
    };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      apply(nx, ny);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      const rect = container.getBoundingClientRect();
      const nx = ((touch.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((touch.clientY - rect.top) / rect.height - 0.5) * 2;
      apply(nx * 0.6, ny * 0.6);
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", reset);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", reset);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", reset);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", reset);
    };
  }, []);

  return { containerRef, stageRef, registerLayer };
}

function useMagneticHover(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const setX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const setY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      setX(x * strength);
      setY(y * strength);
    };
    const reset = () => {
      setX(0);
      setY(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);

  return ref;
}

function MagneticButton({ children, href, className = "" }) {
  const ref = useMagneticHover(0.35);
  return (
    <span className="relative inline-block p-3 -m-3">
      <a
        ref={ref}
        href={href}
        className={`group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8b74ff] to-[#6f5fd4] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_0_0_rgba(139,116,255,0.5)] transition-shadow duration-500 hover:shadow-[0_0_40px_10px_rgba(139,116,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b74ff] ${className}`}
      >
        <span className="relative z-10">{children}</span>
        <span aria-hidden className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </a>
    </span>
  );
}

export default function HeroMotion() {
  const { containerRef, stageRef, registerLayer } = useHeroParallax();

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const metaRef = useRef(null);
  const ctaRef = useRef(null);
  const bgRef = useRef(null);
  const atmosphereRef = useRef(null);
  const artworkRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets = [
      bgRef.current,
      atmosphereRef.current,
      artworkRef.current,
      line1Ref.current,
      line2Ref.current,
      metaRef.current,
      ctaRef.current,
    ];

    if (reduced) {
      gsap.set(targets, { opacity: 1, clearProps: "transform" });
      return undefined;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.1 });

    tl.fromTo(bgRef.current, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.6 }, 0)
      .fromTo(atmosphereRef.current, { opacity: 0 }, { opacity: 1, duration: 1.4 }, 0.2)
      .fromTo(artworkRef.current, { opacity: 0, scale: 0.92, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1.3 }, 0.4)
      .fromTo(line1Ref.current, { yPercent: 115 }, { yPercent: 0, duration: 1.1 }, 0.7)
      .fromTo(line2Ref.current, { yPercent: 115 }, { yPercent: 0, duration: 1.1 }, 0.82)
      .fromTo(metaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, 0.95)
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, 1.1);

    return () => tl.kill();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="hero-cinematic relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      aria-label="Hien Nguyen Ngoc hero"
    >
      {/* Layer 0 — deep background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #1a1330 0%, #0b0818 45%, #050409 100%)",
        }}
      />

      {/* Layer 1 — starfield parallax */}
      <div ref={registerLayer(4)} className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, rgba(245,242,255,0.35) 0, transparent 60%), radial-gradient(1px 1px at 70% 60%, rgba(245,242,255,0.25) 0, transparent 60%), radial-gradient(1px 1px at 40% 80%, rgba(245,242,255,0.3) 0, transparent 60%), radial-gradient(1.5px 1.5px at 85% 20%, rgba(245,242,255,0.4) 0, transparent 60%), radial-gradient(1px 1px at 92% 75%, rgba(245,242,255,0.25) 0, transparent 60%)",
          }}
        />
      </div>

      {/* Layer 2 — atmosphere glow blobs */}
      <div ref={registerLayer(8)} className="absolute inset-0">
        <div className="absolute inset-0" ref={atmosphereRef}>
          <div className="anim-breathe absolute -left-24 top-[8%] h-[38vw] w-[38vw] rounded-full bg-[#7e68d4]/30 blur-[100px]" />
          <div
            className="anim-breathe absolute -right-16 bottom-[6%] h-[34vw] w-[34vw] rounded-full bg-[#7dd3fc]/20 blur-[110px]"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="anim-breathe absolute left-1/2 top-1/3 h-[22vw] w-[22vw] -translate-x-1/2 rounded-full bg-[#f4c76a]/15 blur-[90px]"
            style={{ animationDelay: "3s" }}
          />
        </div>
      </div>

      {/* Layer 3 — drifting rings */}
      <div ref={registerLayer(14)} className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg className="anim-drift absolute h-[70vmin] w-[70vmin] opacity-25" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="196" stroke="#bfa8ff" strokeWidth="0.5" strokeDasharray="2 10" />
          <circle cx="200" cy="200" r="150" stroke="#7dd3fc" strokeWidth="0.5" strokeDasharray="1 6" />
        </svg>
        <svg className="anim-drift-rev absolute h-[46vmin] w-[46vmin] opacity-20" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="198" stroke="#f4c76a" strokeWidth="0.6" strokeDasharray="0.5 8" />
        </svg>
      </div>

      {/* Layer 4/5 — giant outline word + title, tilts with cursor */}
      <div ref={stageRef} className="absolute inset-0" style={{ perspective: "1400px", transformStyle: "preserve-3d" }}>
        <div ref={registerLayer(18)} className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div ref={artworkRef} className="anim-float-a select-none">
            <span
              className="font-display block whitespace-nowrap text-center leading-[0.8] text-transparent"
              style={{ fontSize: "clamp(6rem, 32vw, 26rem)", WebkitTextStroke: "1.5px rgba(245,242,255,0.1)" }}
              aria-hidden
            >
              HIEN
            </span>
          </div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <div ref={registerLayer(5)} className="flex flex-col items-center">
            <h1 className="font-display leading-[0.85] text-white text-balance">
              <span className="block overflow-hidden">
                <span ref={line1Ref} className="block text-[clamp(2.6rem,8vw,6rem)]">
                  FULLSTACK
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  ref={line2Ref}
                  className="block bg-gradient-to-r from-[#8b74ff] via-[#f4c76a] to-[#7dd3fc] bg-clip-text text-[clamp(2.6rem,8vw,6rem)] text-transparent"
                >
                  WEB DEVELOPER
                </span>
              </span>
            </h1>

            <div ref={metaRef} className="mt-6 flex flex-wrap items-center justify-center gap-4 font-mono text-xs uppercase tracking-[0.35em] text-white/60 sm:text-sm">
              <span>Landing Pages · Motion · Performance</span>
              <span className="h-3 w-px bg-white/25" aria-hidden />
              <span>Remote — Worldwide</span>
            </div>

            <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <MagneticButton href="#contact">Book a Free Call</MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
              >
                View Projects
                <span
                  aria-hidden
                  className="inline-block h-px w-6 bg-white/50 transition-all duration-300 group-hover:w-9 group-hover:bg-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Foreground sparkles, strongest parallax */}
      <div ref={registerLayer(25)} className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="anim-float-b absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#bfa8ff]/80 shadow-[0_0_16px_4px_rgba(191,168,255,0.5)]" />
        <span className="anim-float-c absolute right-[12%] top-[30%] h-3 w-3 rotate-45 bg-[#7dd3fc]/70" />
        <span className="anim-float-b absolute right-[18%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-[#f4c76a]/90 shadow-[0_0_14px_4px_rgba(244,199,106,0.5)]" />
        <span className="anim-float-c absolute left-[16%] bottom-[20%] h-2 w-2 rotate-45 bg-white/60" />
      </div>

      {/* Grain */}
      <div className="grain" />

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50">
        <div className="anim-bob flex flex-col items-center gap-2">
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px bg-current opacity-60" />
        </div>
      </div>
    </section>
  );
}
