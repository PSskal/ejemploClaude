"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const MARQUEE_ITEMS = [
  "MSC Certified", "HACCP", "ISO 9001:2015", "ISO 14001", "IFFO RS",
  "GMP+", "GOED Standard", "BRC Food Safety", "GMP Pharma", "Kosher",
  "MSC Certified", "HACCP", "ISO 9001:2015", "ISO 14001", "IFFO RS",
  "GMP+", "GOED Standard", "BRC Food Safety", "GMP Pharma", "Kosher",
];

const STATS = [
  { value: 25, suffix: "+", label: "Años operando" },
  { value: 15, suffix: "+", label: "Embarcaciones" },
  { value: 30, suffix: "%", label: "Cuota mercado" },
  { value: 500, suffix: "+", label: "Empleados" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(value / 60);
          const iv = setInterval(() => {
            start = Math.min(start + step, value);
            setCount(start);
            if (start >= value) clearInterval(iv);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#030712]">

      {/* ── Animated gradient blobs ─── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full animate-blob"
          style={{ background: "radial-gradient(circle, rgba(0,61,122,0.6) 0%, transparent 70%)", animationDuration: "12s" }} />
        <div className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full animate-blob"
          style={{ background: "radial-gradient(circle, rgba(0,153,204,0.4) 0%, transparent 70%)", animationDuration: "15s", animationDelay: "3s" }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full animate-blob"
          style={{ background: "radial-gradient(circle, rgba(255,140,66,0.25) 0%, transparent 70%)", animationDuration: "10s", animationDelay: "6s" }} />
      </div>

      {/* ── Grid overlay ─── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Scanline effect ─── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#0099CC]/30 to-transparent"
          style={{ animation: "scanline 8s linear infinite" }} />
      </div>

      {/* ── Main content ─── */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 group hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8C42] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8C42]" />
                </span>
                <span className="text-white/70 text-sm font-medium">25 años · Perú · 30+ países</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6">
                Líderes en<br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text animate-gradient-x"
                    style={{ backgroundImage: "linear-gradient(90deg, #0099CC, #38bdf8, #FF8C42, #0099CC)", backgroundSize: "200% 100%" }}>
                    Pesca
                  </span>
                </span>
                {" "}
                <span className="text-white">Sostenible</span>
              </h1>

              <p className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-lg mb-10">
                Nutriendo al mundo con responsabilidad. Producimos harina y aceite de
                pescado de la más alta calidad desde el Pacífico Sur.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollTo("#productos")}
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #003D7A, #0099CC)" }}
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                  Conocer productos
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo("#nosotros")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white/70 border border-white/15 hover:border-white/30 hover:text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5"
                >
                  Sobre Nosotros
                </button>
              </div>
            </div>

            {/* Right — Visual card cluster */}
            <div className="hidden lg:block relative h-[460px]">
              {/* Central card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm flex flex-col items-center justify-center animate-float-slow"
                style={{ boxShadow: "0 0 80px rgba(0,153,204,0.15), inset 0 0 40px rgba(0,153,204,0.05)" }}>
                <div className="text-4xl font-black text-white mb-1">68-72%</div>
                <div className="text-[#0099CC] text-sm font-semibold">Proteína cruda</div>
                <div className="text-white/30 text-xs mt-1">Harina de pescado</div>
                <div className="mt-3 w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-1.5 rounded-full bg-gradient-to-r from-[#0099CC] to-[#38bdf8]" style={{ width: "70%" }} />
                </div>
              </div>

              {/* Orbiting chips */}
              {[
                { label: "EPA+DHA", value: "≥30%", color: "#FF8C42", top: "4%",  left: "54%" },
                { label: "Omega-3", value: "≥26%", color: "#10B981", top: "78%", left: "58%" },
                { label: "MSC",     value: "Cert.", color: "#0099CC", top: "10%", left: "4%"  },
                { label: "Humedad", value: "≤10%",  color: "#8B5CF6", top: "76%", left: "2%"  },
                { label: "Embarq.", value: "30+",   color: "#F59E0B", top: "45%", left: "78%" },
              ].map((chip, i) => (
                <div key={chip.label}
                  className="absolute flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2.5 animate-float"
                  style={{ top: chip.top, left: chip.left, animationDelay: `${i * 0.7}s`, animationDuration: `${4 + i * 0.5}s` }}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: chip.color }} />
                  <div>
                    <div className="text-white/40 text-[10px] leading-none">{chip.label}</div>
                    <div className="text-white font-bold text-sm">{chip.value}</div>
                  </div>
                </div>
              ))}

              {/* Ambient rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/[0.04] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-white/[0.03] pointer-events-none" />
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#030712] px-6 py-5 hover:bg-white/[0.03] transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/40 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee certifications ─── */}
      <div className="relative border-t border-white/10 overflow-hidden py-4 bg-white/[0.02]">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-white/30 text-xs font-semibold uppercase tracking-widest flex-shrink-0">
              <span className="w-1 h-1 rounded-full bg-[#0099CC]/50" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll cue ─── */}
      <button
        onClick={() => scrollTo("#nosotros")}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors group"
        aria-label="Ir a siguiente sección"
      >
        <FiChevronDown className="w-5 h-5 animate-float" />
      </button>
    </section>
  );
}
