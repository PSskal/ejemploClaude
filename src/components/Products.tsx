"use client";

import Link from "next/link";
import { FiArrowRight, FiDownload, FiCheck, FiBarChart2 } from "react-icons/fi";

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
  longDesc: string;
  specs: Spec[];
  uses: Use[];
  certifications: string[];
  bgFrom: string;
  bgTo: string;
  accentColor: string;
  visualLabel: string;
  visualSub: string;
  reverse: boolean;
  detailHref: string;
}

const products: ProductData[] = [
  {
    id: "harina",
    tag: "Producto Principal",
    tagColor: "bg-blue-600",
    title: "Harina de Pescado",
    subtitle: "Steam Dried · FAQ · Special Grade",
    description:
      "Nuestra harina de pescado es producida a partir de anchoveta fresca (Engraulis ringens) capturada en aguas peruanas bajo estrictas cuotas sostenibles. El proceso de secado a vapor preserva el máximo valor nutricional.",
    longDesc:
      "Con más de 25 años de experiencia, garantizamos consistencia lote a lote, trazabilidad completa desde la captura hasta el embarque, y cumplimiento de los estándares internacionales más exigentes del mercado.",
    specs: [
      { label: "Proteína Cruda", value: "68 – 72%", bar: 70 },
      { label: "Humedad", value: "máx. 10%", bar: 10 },
      { label: "Grasa Cruda", value: "8 – 12%", bar: 10 },
      { label: "Ceniza", value: "máx. 16%", bar: 16 },
      { label: "TVN", value: "máx. 120 mg/100g", bar: 40 },
      { label: "Histamina", value: "máx. 500 ppm", bar: 25 },
    ],
    uses: [
      { label: "Acuicultura", icon: "🐟" },
      { label: "Avicultura", icon: "🐔" },
      { label: "Porcicultura", icon: "🐷" },
      { label: "Bovinos", icon: "🐄" },
      { label: "Mascotas", icon: "🐾" },
      { label: "Alimento Humano", icon: "🌾" },
    ],
    certifications: ["MSC", "HACCP", "ISO 9001", "GMP+", "IFFO RS"],
    bgFrom: "#003D7A",
    bgTo: "#0066b3",
    accentColor: "#0099CC",
    visualLabel: "Harina de Pescado",
    visualSub: "Steam Dried · Anchoveta peruana",
    reverse: false,
    detailHref: "/productos/harina-de-pescado",
  },
  {
    id: "aceite",
    tag: "Producto Estrella",
    tagColor: "bg-orange-500",
    title: "Aceite de Pescado",
    subtitle: "Crude · Refined · Omega-3 Concentrate",
    description:
      "Extraído por prensado físico en frío y separación centrífuga, nuestro aceite de pescado retiene la máxima concentración de ácidos grasos EPA y DHA. Sin uso de solventes químicos en ninguna etapa del proceso.",
    longDesc:
      "Disponible en grados crudo, refinado y concentrado Omega-3. Cumple con las especificaciones IFFO, GOED y farmacopeas internacionales. Envasado en cisternas ISO, tambores y flexitanks según requerimiento del cliente.",
    specs: [
      { label: "EPA + DHA", value: "mín. 30%", bar: 30 },
      { label: "Ácidos Grasos Omega-3", value: "mín. 26%", bar: 26 },
      { label: "Humedad e Impurezas", value: "máx. 1%", bar: 5 },
      { label: "Valor de Anisidina", value: "máx. 20", bar: 20 },
      { label: "Valor de Peróxidos", value: "máx. 5 meq/kg", bar: 15 },
      { label: "Ácidos Grasos Libres", value: "máx. 3%", bar: 10 },
    ],
    uses: [
      { label: "Acuicultura", icon: "🐟" },
      { label: "Farmacéutica", icon: "💊" },
      { label: "Nutracéutica", icon: "🧬" },
      { label: "Alimentos Func.", icon: "🥗" },
      { label: "Suplementos", icon: "💪" },
      { label: "Cosméticos", icon: "✨" },
    ],
    certifications: ["IFFO RS", "GOED", "ISO 14001", "HACCP", "GMP Pharma"],
    bgFrom: "#1a1a2e",
    bgTo: "#16213e",
    accentColor: "#FF8C42",
    visualLabel: "Aceite de Pescado",
    visualSub: "Crude · Refined · Omega-3 Concentrate",
    reverse: true,
    detailHref: "/productos/aceite-de-pescado",
  },
];

function ProductSection({ product }: { product: ProductData }) {
  return (
    <div
      id={`producto-${product.id}`}
      className={`flex flex-col ${product.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[600px]`}
    >
      {/* Visual panel */}
      <div
        className="lg:w-5/12 relative flex flex-col justify-between p-8 lg:p-12 min-h-72"
        style={{
          background: `linear-gradient(135deg, ${product.bgFrom}, ${product.bgTo})`,
        }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
            style={{ background: product.accentColor }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-5"
            style={{ background: product.accentColor }}
          />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Tag */}
        <div>
          <span
            className={`inline-block ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-6`}
          >
            {product.tag}
          </span>

          {/* Big visual placeholder — simulates product image */}
          <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-6 mb-6">
            <div className="flex items-center justify-center h-40">
              <div className="text-center">
                <div
                  className="text-6xl font-black opacity-20 select-none"
                  style={{ color: product.accentColor }}
                >
                  {product.id === "harina" ? "F" : "O"}
                </div>
                <div className="text-white font-bold text-lg mt-2">
                  {product.visualLabel}
                </div>
                <div className="text-white/60 text-sm mt-1">{product.visualSub}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specs preview bars */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
            <FiBarChart2 className="w-3.5 h-3.5" />
            Composición típica
          </div>
          {product.specs.slice(0, 3).map((spec) => (
            <div key={spec.label}>
              <div className="flex justify-between text-white/80 text-xs mb-1">
                <span>{spec.label}</span>
                <span className="font-semibold">{spec.value}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full transition-all duration-1000"
                  style={{
                    width: `${spec.bar}%`,
                    background: product.accentColor,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div className="lg:w-7/12 bg-white p-8 lg:p-12 flex flex-col justify-between">
        <div>
          {/* Title */}
          <p className="text-sm font-semibold mb-2" style={{ color: product.accentColor }}>
            {product.subtitle}
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">{product.description}</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">{product.longDesc}</p>

          {/* Full specs table */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FiBarChart2 className="w-4 h-4" style={{ color: product.accentColor }} />
              Especificaciones Técnicas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-center py-2.5 px-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <span className="text-sm text-gray-600">{spec.label}</span>
                  <span className="text-sm font-bold text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
              Aplicaciones
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.uses.map((use) => (
                <span
                  key={use.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors cursor-default"
                >
                  <span>{use.icon}</span>
                  {use.label}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
              Certificaciones
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-1.5 px-3 py-1.5 border-2 rounded-lg text-xs font-bold"
                  style={{ borderColor: product.accentColor, color: product.accentColor }}
                >
                  <FiCheck className="w-3 h-3" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">
          <Link
            href={product.detailHref}
            className="flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: `linear-gradient(135deg, ${product.bgFrom}, ${product.accentColor})` }}
          >
            Más información
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`${product.detailHref}#contacto`}
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-all duration-200"
          >
            Solicitar Cotización
          </Link>
          <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-all duration-200">
            <FiDownload className="w-4 h-4" />
            Ficha Técnica (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="productos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#FF8C42]/10 text-[#FF8C42] text-sm font-semibold rounded-full mb-4">
            Nuestros Productos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Productos de{" "}
            <span className="text-[#003D7A]">calidad mundial</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Elaborados con los más estrictos controles de calidad, nuestros productos
            llegan a más de 30 países en los cinco continentes.
          </p>
        </div>

        {/* Product sections */}
        <div className="rounded-3xl overflow-hidden shadow-2xl divide-y divide-gray-200">
          {products.map((product) => (
            <ProductSection key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "30+ países de exportación", icon: "🌍" },
            { label: "Análisis por lote certificado", icon: "📋" },
            { label: "Entrega en contenedor o granel", icon: "🚢" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 text-[#003D7A] font-semibold hover:text-[#0099CC] transition-colors group">
            Ver catálogo completo
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
