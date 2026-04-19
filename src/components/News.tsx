"use client";

import { FiArrowRight, FiCalendar, FiTag } from "react-icons/fi";
import { useReveal } from "@/hooks/useReveal";

interface NewsItem {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "Sostenibilidad",
    categoryColor: "bg-green-500",
    title: "PescaPeru obtiene recertificación MSC por quinto año consecutivo",
    excerpt:
      "La certificación del Marine Stewardship Council reafirma nuestro compromiso con la pesca sostenible y la conservación de los recursos marinos del Pacífico Sur.",
    date: "12 de Marzo, 2025",
    readTime: "3 min lectura",
    gradient: "from-[#003D7A] to-[#0099CC]",
  },
  {
    id: 2,
    category: "Empresa",
    categoryColor: "bg-[#FF8C42]",
    title: "Nueva planta de procesamiento en Chimbote aumentará capacidad al 40%",
    excerpt:
      "La inversión de S/. 85 millones en infraestructura permitirá duplicar nuestra producción de harina de pescado con tecnología de vanguardia.",
    date: "28 de Febrero, 2025",
    readTime: "5 min lectura",
    gradient: "from-[#FF8C42] to-[#e06d28]",
  },
  {
    id: 3,
    category: "Comunidad",
    categoryColor: "bg-[#0099CC]",
    title: "Programa educativo beneficia a 500 estudiantes en zonas pesqueras",
    excerpt:
      "Nuestra iniciativa de becas y talleres técnicos llega este año a tres regiones costeras, formando a la próxima generación de profesionales del sector.",
    date: "15 de Febrero, 2025",
    readTime: "4 min lectura",
    gradient: "from-[#1F2937] to-[#003D7A]",
  },
];

export default function News() {
  const revealRef = useReveal();
  return (
    <section id="noticias" className="py-20 lg:py-28 bg-white" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4" data-reveal>
              <div className="h-px w-10 bg-[#003D7A]" />
              <span className="text-[#003D7A] text-sm font-bold uppercase tracking-widest">Sala de Prensa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" data-reveal data-delay="100">
              Últimas <span className="text-[#003D7A]">Noticias</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#003D7A] font-semibold hover:text-[#0099CC] transition-colors group whitespace-nowrap" data-reveal data-delay="200">
            Ver todas las noticias
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
              data-reveal
              data-delay={`${index * 150 + 300}`}
            >
              {/* Image placeholder */}
              <div
                className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white blur-2xl" />
                </div>
                <div className="relative text-white/20 text-8xl font-black select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${item.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                    <FiTag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span>·</span>
                  <span>{item.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#003D7A] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read more */}
                <button className="flex items-center gap-2 text-[#003D7A] font-semibold text-sm hover:text-[#0099CC] transition-colors group/btn mt-auto">
                  Leer más
                  <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5">
            <div>
              <p className="text-gray-900 font-semibold">¿Eres periodista o comunicador?</p>
              <p className="text-gray-500 text-sm">Contáctate con nuestra Gerencia de Comunicaciones</p>
            </div>
            <button className="flex-shrink-0 px-5 py-2 bg-[#003D7A] text-white text-sm font-semibold rounded-xl hover:bg-[#002d5a] transition-colors">
              Prensa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
