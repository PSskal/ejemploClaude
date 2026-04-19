"use client";

import { useEffect, useRef, useState } from "react";
import { FiAward, FiUsers, FiTrendingUp, FiAnchor } from "react-icons/fi";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
}

function StatCard({ value, suffix, label, icon, isVisible, delay }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const step = Math.ceil(value / (duration / 16));
      const interval = setInterval(() => {
        start = Math.min(start + step, value);
        setCount(start);
        if (start >= value) clearInterval(interval);
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003D7A] to-[#0099CC] flex items-center justify-center mx-auto mb-4 text-white">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-[#003D7A] mb-1">
        {isVisible ? count : 0}
        <span className="text-[#FF8C42]">{suffix}</span>
      </div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
    </div>
  );
}

const stats = [
  { value: 25, suffix: "+", label: "Años de Experiencia", icon: <FiAward className="w-6 h-6" />, delay: 0 },
  { value: 15, suffix: "+", label: "Embarcaciones Propias", icon: <FiAnchor className="w-6 h-6" />, delay: 200 },
  { value: 30, suffix: "%", label: "Cuota de Mercado", icon: <FiTrendingUp className="w-6 h-6" />, delay: 400 },
  { value: 500, suffix: "+", label: "Empleados Directos", icon: <FiUsers className="w-6 h-6" />, delay: 600 },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#003D7A]/10 text-[#003D7A] text-sm font-semibold rounded-full mb-4">
            Quiénes Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Más de 25 años navegando{" "}
            <span className="text-[#003D7A]">con propósito</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              PescaPeru S.A. es una empresa peruana dedicada a la extracción responsable
              de anchoveta y la producción de harina y aceite de pescado de alta calidad.
              Desde 1999, hemos crecido hasta convertirnos en uno de los referentes del
              sector pesquero nacional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Operamos con una flota moderna y tecnológicamente avanzada en las principales
              zonas pesqueras del Perú, incluyendo Chimbote, Huacho y Coishco. Nuestro
              compromiso con la sostenibilidad guía cada decisión operativa y empresarial.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Contamos con certificaciones internacionales que avalan la calidad de nuestros
              procesos y productos, exportando a mercados en Europa, Asia y América del Norte.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["ISO 14001", "Marine Stewardship Council", "HACCP", "BRC Food Safety"].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 bg-white border border-[#003D7A]/20 text-[#003D7A] text-xs font-semibold rounded-full shadow-sm"
                >
                  {cert}
                </span>
              ))}
            </div>

            <button
              onClick={() =>
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#003D7A] text-white font-semibold rounded-full hover:bg-[#002d5a] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Contáctanos
            </button>
          </div>

          {/* Right: Image placeholder + stats */}
          <div className="space-y-6">
            {/* Image placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 bg-gradient-to-br from-[#003D7A] via-[#0099CC] to-[#1F2937] shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                <FiAnchor className="w-16 h-16 mb-4 text-white/50" />
                <span className="text-lg font-semibold">Flota Pesquera PescaPeru</span>
                <span className="text-sm text-white/60 mt-1">Mar de Perú — Desde 1999</span>
              </div>
              {/* Decorative lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
