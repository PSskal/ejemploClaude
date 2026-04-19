"use client";

import Link from "next/link";
import { FiArrowRight, FiDownload, FiCheck } from "react-icons/fi";

interface Spec {
  label: string;
  value: string;
  bar?: number;
}

interface Use {
  label: string;
  icon: string;
}

interface ProductData {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  description: string;
  specs: Spec[];
  uses: Use[];
  certifications: string[];
  bgFrom: string;
  bgTo: string;
  accentColor: string;
  detailHref: string;
  heroStat: string;
  heroStatLabel: string;
}

const products: ProductData[] = [
  {
    id: "harina",
    tag: "Producto Principal",
    tagColor: "bg-blue-600",
    title: "Harina de Pescado",
    subtitle: "Steam Dried · FAQ · Special Grade",
    description:
      "Producida a partir de anchoveta fresca del Pacífico Sur con el más alto contenido proteico del mercado. Trazabilidad completa desde la captura hasta el embarque.",
    specs: [
      { label: "Proteína Cruda", value: "68 – 72%", bar: 70 },
      { label: "Humedad", value: "máx. 10%", bar: 10 },
      { label: "Grasa Cruda", value: "8 – 12%", bar: 10 },
      { label: "TVN", value: "máx. 120 mg/100g", bar: 40 },
    ],
    uses: [
      { label: "Acuicultura", icon: "🐟" },
      { label: "Avicultura", icon: "🐔" },
      { label: "Porcicultura", icon: "🐷" },
      { label: "Pet Food", icon: "🐾" },
    ],
    certifications: ["MSC", "HACCP", "ISO 9001", "IFFO RS"],
    bgFrom: "#003D7A",
    bgTo: "#0066b3",
    accentColor: "#0099CC",
    detailHref: "/productos/harina-de-pescado",
    heroStat: "68-72%",
    heroStatLabel: "Proteína cruda",
  },
  {
    id: "aceite",
    tag: "Producto Estrella",
    tagColor: "bg-orange-500",
    title: "Aceite de Pescado",
    subtitle: "Crude · Refined · Omega-3 Concentrate",
    description:
      "Extraído por prensado físico sin solventes. Rica fuente natural de EPA y DHA, ácidos grasos esenciales para la nutrición humana y animal.",
    specs: [
      { label: "EPA + DHA", value: "mín. 30%", bar: 30 },
      { label: "Omega-3 totales", value: "mín. 26%", bar: 26 },
      { label: "Peróxidos", value: "máx. 5 meq/kg", bar: 15 },
      { label: "Humedad e Imp.", value: "máx. 1%", bar: 5 },
    ],
    uses: [
      { label: "Acuicultura", icon: "🐟" },
      { label: "Farmacéutica", icon: "💊" },
      { label: "Nutracéutica", icon: "🧬" },
      { label: "Suplementos", icon: "💪" },
    ],
    certifications: ["IFFO RS", "GOED", "HACCP", "GMP Pharma"],
    bgFrom: "#1a1a2e",
    bgTo: "#16213e",
    accentColor: "#FF8C42",
    detailHref: "/productos/aceite-de-pescado",
    heroStat: "30%+",
    heroStatLabel: "EPA + DHA",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#FF8C42]/15 text-[#FF8C42] text-sm font-semibold rounded-full mb-4 border border-[#FF8C42]/20">
            Nuestros Productos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Calidad reconocida en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099CC] to-[#FF8C42]">
              30+ países
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Los estándares más exigentes del mercado global de ingredientes marinos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              style={{ background: `linear-gradient(135deg, ${product.bgFrom}dd, ${product.bgTo}dd)` }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 60px ${product.accentColor}15` }}
              />

              {/* Decorative big stat behind */}
              <div
                className="absolute top-4 right-6 text-8xl font-black select-none pointer-events-none leading-none transition-transform duration-500 group-hover:scale-110"
                style={{ color: product.accentColor, opacity: 0.07 }}
              >
                {product.heroStat}
              </div>

              {/* Dot pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative p-8">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <span className={`${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {product.tag}
                  </span>
                  <div className="text-right">
                    <div className="text-3xl font-black text-white">{product.heroStat}</div>
                    <div className="text-white/40 text-xs mt-0.5">{product.heroStatLabel}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1">{product.title}</h3>
                <p className="text-sm font-medium mb-4" style={{ color: product.accentColor }}>
                  {product.subtitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{product.description}</p>

                {/* Specs bars */}
                <div className="space-y-2.5 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/50">{spec.label}</span>
                        <span className="font-bold text-white">{spec.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: `${spec.bar}%`, background: product.accentColor }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Uses */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.uses.map((use) => (
                    <span key={use.label} className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white/70 text-xs font-medium">
                      {use.icon} {use.label}
                    </span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {product.certifications.map((cert) => (
                    <span key={cert} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded border font-semibold"
                      style={{ borderColor: `${product.accentColor}60`, color: product.accentColor }}>
                      <FiCheck className="w-3 h-3" /> {cert}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3">
                  <Link
                    href={product.detailHref}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(135deg, ${product.accentColor}, ${product.bgFrom})` }}
                  >
                    Ver producto completo
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <button
                    className="flex items-center justify-center gap-1 px-4 py-3 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all text-sm"
                    title="Descargar ficha técnica"
                  >
                    <FiDownload className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "30+ países de exportación", icon: "🌍" },
            { label: "Análisis certificado por lote", icon: "📋" },
            { label: "Contenedor, big bag o cisterna ISO", icon: "🚢" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium text-white/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
