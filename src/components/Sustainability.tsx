"use client";

import { FiArrowRight, FiHeart, FiUsers, FiGlobe } from "react-icons/fi";

interface SustainCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  tag: string;
}

const cards: SustainCard[] = [
  {
    title: "Reporte de Sostenibilidad",
    description:
      "Publicamos anualmente nuestro reporte de sostenibilidad con métricas verificadas de impacto ambiental, social y económico bajo los estándares GRI.",
    icon: <FiGlobe className="w-10 h-10" />,
    gradient: "from-[#003D7A] to-[#0099CC]",
    tag: "Ambiental",
  },
  {
    title: "Voluntariado Corporativo",
    description:
      "Más de 200 colaboradores participan activamente en programas de voluntariado ambiental: limpieza de playas, reforestación y monitoreo de ecosistemas marinos.",
    icon: <FiHeart className="w-10 h-10" />,
    gradient: "from-[#FF8C42] to-[#e06d28]",
    tag: "Social",
  },
  {
    title: "Programas Comunitarios",
    description:
      "Invertimos en educación, salud y desarrollo económico de las comunidades pesqueras donde operamos, generando impacto positivo en más de 3,000 familias.",
    icon: <FiUsers className="w-10 h-10" />,
    gradient: "from-[#1F2937] to-[#374151]",
    tag: "Comunidad",
  },
];

const pillars = [
  { label: "Pesca Responsable", value: "100%", sub: "de cuotas respetadas" },
  { label: "Reducción CO₂", value: "40%", sub: "vs. 2015" },
  { label: "Agua Reciclada", value: "85%", sub: "en plantas" },
  { label: "Residuos Reutilizados", value: "95%", sub: "del proceso" },
];

export default function Sustainability() {
  return (
    <section id="sostenibilidad" className="py-20 lg:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full mb-4">
            Compromiso Ambiental
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sostenibilidad como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099CC] to-[#FF8C42]">
              filosofía de vida
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Creemos que el negocio pesquero responsable y la conservación del océano
            son inseparables. Nuestras operaciones están diseñadas para el largo plazo.
          </p>
        </div>

        {/* Pillar stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl font-bold text-[#FF8C42] mb-1">{p.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{p.label}</div>
              <div className="text-gray-400 text-xs">{p.sub}</div>
            </div>
          ))}
        </div>

        {/* Sustainability cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-80 group-hover:opacity-90 transition-opacity`} />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#111827]/40 group-hover:bg-[#111827]/20 transition-colors" />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-72 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-4">
                    {card.tag}
                  </span>
                  <div className="text-white/80 mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{card.description}</p>
                </div>

                <button className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all mt-4">
                  Saber Más
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-gradient-to-r from-[#003D7A] to-[#0099CC] rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Descarga nuestro Reporte de Sostenibilidad 2024
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Conoce en detalle nuestros avances, compromisos y metas en materia
            ambiental, social y de gobernanza.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#003D7A] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Descargar PDF
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
