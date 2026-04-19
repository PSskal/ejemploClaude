"use client";

import { FiChevronDown, FiPlay } from "react-icons/fi";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#003D7A] to-[#1F2937]" />

      {/* Animated wave overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0099CC]/30 to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0099CC]/40 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C42]/20 to-transparent" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#0099CC]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#003D7A]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0099CC]/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF8C42] animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Empresa Certificada ISO 14001
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Líderes en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099CC] to-[#FF8C42]">
            Pesca Sostenible
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
          Nutriendo al mundo con responsabilidad
        </p>
        <p className="text-base sm:text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          Producimos harina y aceite de pescado de la más alta calidad,
          comprometidos con el océano y las comunidades pesqueras del Perú.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() =>
              document
                .querySelector("#productos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF8C42] to-[#e67a2e] text-white font-semibold rounded-full shadow-lg hover:shadow-[#FF8C42]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            Conocer Productos
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#nosotros")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-base"
          >
            <FiPlay className="w-4 h-4" />
            Sobre Nosotros
          </button>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { value: "25+", label: "Años de experiencia" },
            { value: "15+", label: "Embarcaciones" },
            { value: "500+", label: "Empleados" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#FF8C42]">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-float"
        aria-label="Ir a siguiente sección"
      >
        <FiChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
