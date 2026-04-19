import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiArrowLeft, FiDownload, FiCheck, FiArrowRight, FiMail, FiPhone } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Harina de Pescado | PescaPeru",
  description:
    "Harina de pescado Steam Dried y FAQ de alta calidad (68-72% proteína). Anchoveta peruana certificada MSC e IFFO RS. Exportación a más de 30 países.",
};

const keyStats = [
  { value: "68-72%", label: "Proteína cruda", color: "#0099CC" },
  { value: "máx 10%", label: "Humedad", color: "#10B981" },
  { value: "3", label: "Grados disponibles", color: "#FF8C42" },
  { value: "30+", label: "Países exportación", color: "#8B5CF6" },
];

const specs = [
  { label: "Proteína Cruda", value: "68 – 72%", bar: 70 },
  { label: "Humedad", value: "máx. 10%", bar: 10 },
  { label: "Grasa Cruda", value: "8 – 12%", bar: 10 },
  { label: "Ceniza", value: "máx. 16%", bar: 16 },
  { label: "TVN", value: "máx. 120 mg/100g", bar: 40 },
  { label: "Histamina", value: "máx. 500 ppm", bar: 25 },
  { label: "Sal (NaCl)", value: "máx. 3%", bar: 3 },
  { label: "Lisina", value: "mín. 4.5%", bar: 4.5 },
];

const grades = [
  {
    name: "Steam Dried",
    code: "SD",
    protein: "68–72%",
    moisture: "≤ 10%",
    fat: "10–12%",
    desc: "Secado a vapor indirecto. Mayor digestibilidad. Ideal para dietas de alta performance en acuicultura y avicultura.",
    tag: "Premium",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "Fair Average Quality",
    code: "FAQ",
    protein: "65–68%",
    moisture: "≤ 12%",
    fat: "10–14%",
    desc: "Estándar de exportación. Amplio uso en nutrición animal convencional. Relación calidad-precio óptima.",
    tag: "Estándar",
    gradient: "from-[#003D7A] to-[#0099CC]",
  },
  {
    name: "Special Grade",
    code: "SG",
    protein: "≥ 72%",
    moisture: "≤ 8%",
    fat: "8–10%",
    desc: "Especificaciones personalizadas. Para dietas premium, pet food de gama alta y formulaciones especiales.",
    tag: "Custom",
    gradient: "from-purple-700 to-purple-500",
  },
];

const uses = [
  { label: "Acuicultura", detail: "Salmón, trucha, camarón, tilapia", icon: "🐟", color: "#0099CC" },
  { label: "Avicultura", detail: "Broilers, ponedoras, pavos", icon: "🐔", color: "#10B981" },
  { label: "Porcicultura", detail: "Cerdos en todas las etapas", icon: "🐷", color: "#F59E0B" },
  { label: "Bovinos", detail: "Sustituto proteico en raciones", icon: "🐄", color: "#8B5CF6" },
  { label: "Pet Food", detail: "Alimento premium para mascotas", icon: "🐾", color: "#EC4899" },
  { label: "Alimento Humano", detail: "Formulaciones especiales", icon: "🌾", color: "#FF8C42" },
];

const process = [
  { num: "01", title: "Descarga y Control", desc: "Anchoveta fresca descargada directamente de flota propia. Temperatura y frescura monitoreadas en tiempo real." },
  { num: "02", title: "Cocción Continua", desc: "Cocción a vapor indirecto 90–95 °C. Preserva la integridad proteica y elimina patógenos." },
  { num: "03", title: "Prensado Mecánico", desc: "Prensas de tornillo de alta eficiencia separan sólidos del licor de prensa sin aditivos químicos." },
  { num: "04", title: "Secado (SD/Flame)", desc: "Secadores de vapor rotatorios (SD) o llama indirecta (FAQ) con temperatura controlada por sensores automáticos." },
  { num: "05", title: "Molienda y Tamizado", desc: "Molienda hasta granulometría estándar. Tamizado para uniformidad de partícula según especificación del cliente." },
  { num: "06", title: "Análisis y Despacho", desc: "Muestreo y análisis por lote en laboratorio acreditado. Envasado en sacos 50 kg, big bags o a granel." },
];

const certs = ["MSC", "HACCP", "ISO 9001:2015", "GMP+", "IFFO RS", "ISO 14001"];

export default function HarinadePescado() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#030712]">
          {/* Gradient mesh */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20" style={{ background: "#0099CC" }} />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10" style={{ background: "#003D7A" }} />
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Big watermark text */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black leading-none select-none pointer-events-none text-white/[0.03] whitespace-nowrap pr-8">
            HARINA
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <Link href="/#productos" className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm mb-10 transition-colors group">
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver a Productos
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Producto Principal</span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/40 text-xs font-medium">Exportación Internacional</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight">
                  Harina de<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099CC] to-[#38bdf8]">
                    Pescado
                  </span>
                </h1>
                <p className="text-white/40 font-medium mb-6 tracking-widest text-sm uppercase">
                  Steam Dried · FAQ · Special Grade
                </p>
                <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
                  La fuente proteica marina de mayor digestibilidad. Producida a partir de anchoveta
                  fresca del Pacífico Sur, certificada bajo los estándares más exigentes del mercado.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {certs.map((c) => (
                    <span key={c} className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg border text-[#0099CC] border-[#0099CC]/30 bg-[#0099CC]/5">
                      <FiCheck className="w-3 h-3" /> {c}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href="/#contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#003D7A] to-[#0099CC] hover:shadow-lg hover:shadow-[#0099CC]/20 hover:-translate-y-0.5 transition-all duration-300">
                    Solicitar Cotización <FiArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white/60 border border-white/10 hover:border-white/30 hover:text-white text-sm transition-all">
                    <FiDownload className="w-4 h-4" /> Ficha PDF
                  </button>
                </div>
              </div>

              {/* Right — floating stat cards */}
              <div className="relative h-80 lg:h-[420px] hidden lg:block">
                {/* Center piece */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#0099CC]/20 flex items-center justify-center"
                  style={{ boxShadow: "0 0 80px #0099CC15" }}>
                  <div className="w-36 h-36 rounded-full border border-[#0099CC]/30 flex items-center justify-center bg-[#0099CC]/5">
                    <div className="text-center">
                      <div className="text-4xl font-black text-white">70%</div>
                      <div className="text-[#0099CC] text-xs font-semibold mt-1">Proteína</div>
                    </div>
                  </div>
                </div>
                {/* Floating stat chips */}
                {[
                  { label: "Humedad", value: "≤10%", top: "8%", left: "60%", color: "#10B981" },
                  { label: "Grasa", value: "8-12%", top: "70%", left: "65%", color: "#F59E0B" },
                  { label: "TVN", value: "≤120", top: "15%", left: "0%", color: "#8B5CF6" },
                  { label: "Histamina", value: "≤500ppm", top: "72%", left: "5%", color: "#EC4899" },
                ].map((chip) => (
                  <div key={chip.label}
                    className="absolute flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2"
                    style={{ top: chip.top, left: chip.left }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: chip.color }} />
                    <div>
                      <div className="text-white/40 text-xs">{chip.label}</div>
                      <div className="text-white font-bold text-sm">{chip.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key stats strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
              {keyStats.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors">
                  <div className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-white/50 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GRADES ───────────────────────────────────────── */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[#0099CC] text-sm font-semibold uppercase tracking-widest mb-2">Presentaciones</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Tres grados de calidad</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {grades.map((g) => (
                <div key={g.name} className="group relative rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 bg-white/[0.02] hover:-translate-y-1 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${g.gradient}`} />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-black text-white/10">{g.code}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${g.gradient} text-white`}>{g.tag}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{g.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{g.desc}</p>
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="flex justify-between text-sm"><span className="text-white/40">Proteína</span><span className="font-bold text-white">{g.protein}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-white/40">Humedad</span><span className="font-bold text-white">{g.moisture}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-white/40">Grasa</span><span className="font-bold text-white">{g.fat}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPECS ────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-[#003D7A] text-sm font-semibold uppercase tracking-widest mb-2">Calidad garantizada</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Especificaciones<br />técnicas completas</h2>
                <div className="space-y-4">
                  {specs.map((s) => (
                    <div key={s.label} className="group">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-semibold text-gray-700">{s.label}</span>
                        <span className="text-sm font-black text-[#003D7A]">{s.value}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-2 rounded-full bg-gradient-to-r from-[#003D7A] to-[#0099CC] transition-all"
                          style={{ width: `${s.bar}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-6">* Parámetros típicos. Análisis certificado de laboratorio disponible por cada lote de exportación.</p>
              </div>

              {/* Applications */}
              <div>
                <p className="text-[#003D7A] text-sm font-semibold uppercase tracking-widest mb-2">Versatilidad</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Aplicaciones<br />industriales</h2>
                <div className="grid grid-cols-2 gap-3">
                  {uses.map((u) => (
                    <div key={u.label}
                      className="group relative rounded-2xl border border-gray-100 p-4 hover:shadow-md transition-all duration-200 overflow-hidden cursor-default"
                      style={{ borderColor: `${u.color}20` }}
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-10 -translate-y-4 translate-x-4"
                        style={{ background: u.color }} />
                      <div className="text-3xl mb-2">{u.icon}</div>
                      <div className="font-bold text-gray-900 text-sm">{u.label}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{u.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────── */}
        <section className="py-20 bg-[#030712] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[#0099CC] text-sm font-semibold uppercase tracking-widest mb-2">Del mar a tu planta</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Proceso de producción</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              {process.map((p, i) => (
                <div key={p.num}
                  className={`bg-[#030712] p-8 hover:bg-white/[0.03] transition-colors ${i < 3 ? "border-b border-white/5" : ""} ${i % 3 !== 2 ? "border-r border-white/5" : ""}`}
                >
                  <div className="text-[#0099CC]/30 text-5xl font-black leading-none mb-4">{p.num}</div>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-br from-[#003D7A] to-[#0066b3] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-[#0099CC]/20 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#0099CC] font-semibold text-sm uppercase tracking-widest mb-4">¿Listo para cotizar?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Especificaciones personalizadas<br />según tu volumen
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">
              Nuestro equipo comercial te responde en menos de 24 horas hábiles con precios, disponibilidad y análisis técnicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#003D7A] font-bold rounded-full hover:bg-gray-100 shadow-lg transition-all hover:-translate-y-0.5">
                <FiMail className="w-5 h-5" /> Solicitar Cotización
              </Link>
              <a href="tel:+5143321456" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:border-white/60 hover:bg-white/10 transition-all">
                <FiPhone className="w-5 h-5" /> +51 43 321-456
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
