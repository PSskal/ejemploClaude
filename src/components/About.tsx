"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { FiAnchor, FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";

const STATS = [
  { value: 25, suffix: "+", label: "Años de experiencia", icon: <FiAward className="w-5 h-5" />, color: "#003D7A" },
  { value: 15, suffix: "+", label: "Embarcaciones propias", icon: <FiAnchor className="w-5 h-5" />, color: "#0099CC" },
  { value: 30, suffix: "%", label: "Cuota de mercado", icon: <FiTrendingUp className="w-5 h-5" />, color: "#FF8C42" },
  { value: 500, suffix: "+", label: "Empleados directos", icon: <FiUsers className="w-5 h-5" />, color: "#10B981" },
];

function Counter({ value, suffix, color, isVisible, delay }: {
  value: number; suffix: string; color: string; isVisible: boolean; delay: number;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    const t = setTimeout(() => {
      let n = 0;
      const step = Math.ceil(value / 55);
      const iv = setInterval(() => {
        n = Math.min(n + step, value);
        setCount(n);
        if (n >= value) clearInterval(iv);
      }, 18);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [isVisible, value, delay]);

  return (
    <span className="text-4xl font-black" style={{ color }}>
      {count}<span className="text-3xl">{suffix}</span>
    </span>
  );
}

const CERTS = ["ISO 14001", "Marine Stewardship Council", "HACCP", "ISO 9001", "GMP+", "IFFO RS"];

export default function About() {
  const [visible, setVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const revealRef = useReveal();

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white overflow-hidden" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4" data-reveal data-delay="100">
          <div className="h-px w-12 bg-[#003D7A]" />
          <span className="text-[#003D7A] text-sm font-bold uppercase tracking-widest">Quiénes Somos</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6" data-reveal data-delay="200">
              Más de 25 años<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003D7A] to-[#0099CC]">
                navegando con propósito
              </span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-5" data-reveal data-delay="300">
              PescaPeru S.A. es una empresa peruana dedicada a la extracción responsable de anchoveta
              y la producción de harina y aceite de pescado de alta calidad. Desde 1999, hemos crecido
              hasta convertirnos en uno de los referentes del sector pesquero nacional.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8" data-reveal data-delay="400">
              Operamos con una flota moderna y tecnológicamente avanzada en las principales zonas
              pesqueras del litoral peruano. Nuestro compromiso con la sostenibilidad guía cada
              decisión operativa y empresarial, exportando a más de 30 países en Europa, Asia y América.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-8" data-reveal data-delay="500">
              {CERTS.map((c) => (
                <span key={c} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:border-[#003D7A]/30 hover:text-[#003D7A] transition-colors cursor-default">
                  {c}
                </span>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#003D7A] text-white font-bold text-sm hover:bg-[#002d5a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#003D7A]/20"
              data-reveal data-delay="600"
            >
              Contáctanos
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>

          {/* Right */}
          <div>
            {/* Visual placeholder */}
            <div className="relative rounded-3xl overflow-hidden h-72 mb-8 bg-gradient-to-br from-[#003D7A] to-[#0099CC]" data-reveal="right" data-delay="200">
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <FiAnchor className="w-14 h-14 text-white/30 mb-4" />
                <span className="font-bold text-lg">Flota Pesquera PescaPeru</span>
                <span className="text-white/50 text-sm mt-1">Mar de Perú — Desde 1999</span>
                {/* Floating badges */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 text-sm">
                  <span className="font-black text-[#FF8C42]">15+</span>
                  <span className="text-white/70 ml-1.5">Embarcaciones</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 text-sm">
                  <span className="font-black text-white">3</span>
                  <span className="text-white/70 ml-1.5">Puertos</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4" ref={statsRef}>
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  data-reveal data-delay={`${300 + i * 100}`}
                >
                  <div className="flex items-center gap-2 mb-2" style={{ color: s.color }}>
                    {s.icon}
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-60">{s.label}</span>
                  </div>
                  <Counter value={s.value} suffix={s.suffix} color={s.color} isVisible={visible} delay={i * 150} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
