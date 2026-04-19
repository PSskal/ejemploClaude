import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FiArrowLeft,
  FiDownload,
  FiCheck,
  FiBarChart2,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Harina de Pescado | PescaPeru",
  description:
    "Harina de pescado Steam Dried y FAQ de alta calidad proteica (68-72%). Producida a partir de anchoveta fresca del Pacífico Sur con certificación MSC e IFFO RS.",
};

const specs = [
  { label: "Proteína Cruda", value: "68 – 72%", bar: 70, unit: "%" },
  { label: "Humedad", value: "máx. 10%", bar: 10, unit: "%" },
  { label: "Grasa Cruda", value: "8 – 12%", bar: 10, unit: "%" },
  { label: "Ceniza", value: "máx. 16%", bar: 16, unit: "%" },
  { label: "TVN", value: "máx. 120 mg/100g", bar: 40, unit: "" },
  { label: "Histamina", value: "máx. 500 ppm", bar: 25, unit: "" },
  { label: "Sal (NaCl)", value: "máx. 3%", bar: 3, unit: "%" },
  { label: "Lisina", value: "mín. 4.5%", bar: 4.5, unit: "%" },
];

const grades = [
  {
    name: "Steam Dried (SD)",
    protein: "68 – 72%",
    moisture: "máx. 10%",
    fat: "10 – 12%",
    desc: "Procesado a vapor a baja temperatura. Mayor digestibilidad y valor nutricional.",
    tag: "Premium",
    tagColor: "bg-blue-600",
  },
  {
    name: "FAQ (Fair Average Quality)",
    protein: "65 – 68%",
    moisture: "máx. 12%",
    fat: "10 – 14%",
    desc: "Calidad estándar de exportación. Ampliamente usado en acuicultura y avicultura.",
    tag: "Estándar",
    tagColor: "bg-green-600",
  },
  {
    name: "Special Grade",
    protein: "72%+",
    moisture: "máx. 8%",
    fat: "8 – 10%",
    desc: "Especificaciones personalizadas. Ideal para dietas premium y alimento de mascotas.",
    tag: "Especial",
    tagColor: "bg-purple-600",
  },
];

const process = [
  { step: "01", title: "Captura", desc: "Anchoveta fresca descargada en planta en máximo 6 horas tras la captura." },
  { step: "02", title: "Cocción", desc: "Cocción continua a vapor indirecto entre 90-95°C para preservar proteínas." },
  { step: "03", title: "Prensado", desc: "Separación de sólidos y líquidos mediante prensas de tornillo de alta eficiencia." },
  { step: "04", title: "Secado", desc: "Secado a vapor (SD) o llama indirecta a temperatura controlada para mantener calidad." },
  { step: "05", title: "Molienda", desc: "Molienda hasta granulometría estándar de exportación según especificaciones del cliente." },
  { step: "06", title: "Control & Despacho", desc: "Análisis de laboratorio por lote. Envasado en sacos de 50 kg o big bags a granel." },
];

const uses = [
  { label: "Acuicultura", detail: "Salmón, trucha, camarón, tilapia", icon: "🐟" },
  { label: "Avicultura", detail: "Broilers, ponedoras, pavos", icon: "🐔" },
  { label: "Porcicultura", detail: "Cerdos en todas las etapas", icon: "🐷" },
  { label: "Bovinos", detail: "Sustituto proteico en raciones", icon: "🐄" },
  { label: "Alimento de Mascotas", detail: "Pet food premium", icon: "🐾" },
  { label: "Alimento Humano", detail: "Formulaciones especiales", icon: "🌾" },
];

const certs = ["MSC", "HACCP", "ISO 9001:2015", "GMP+", "IFFO RS", "ISO 14001"];

export default function HarinadePescado() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#003D7A] via-[#00509e] to-[#0099CC] py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0099CC]/20 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#productos"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group"
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver a Productos
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Producto Principal · Exportación
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Harina de Pescado
                </h1>
                <p className="text-white/70 text-lg mb-2 font-medium">
                  Steam Dried · FAQ · Special Grade
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-lg">
                  Producida a partir de anchoveta fresca (Engraulis ringens) del Pacífico Sur.
                  Alta concentración proteica, perfil de aminoácidos completo y máxima digestibilidad.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {certs.map((c) => (
                    <span key={c} className="flex items-center gap-1 text-xs font-semibold text-white/80 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full">
                      <FiCheck className="w-3 h-3" /> {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10">
                <div className="text-center mb-6">
                  <div className="text-8xl font-black text-white/10 select-none leading-none">68-72%</div>
                  <div className="text-white font-bold text-xl -mt-2">Proteína Cruda</div>
                  <div className="text-white/50 text-sm mt-1">Especificación típica Steam Dried</div>
                </div>
                <div className="space-y-3">
                  {specs.slice(0, 4).map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-white/70 text-sm mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 rounded-full bg-gradient-to-r from-[#0099CC] to-[#FF8C42]" style={{ width: `${s.bar}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grades */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Presentaciones disponibles</h2>
            <p className="text-gray-500 mb-10">Seleccionamos el grado óptimo según las necesidades de cada cliente.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {grades.map((g) => (
                <div key={g.name} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">{g.name}</h3>
                    <span className={`${g.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>{g.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{g.desc}</p>
                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Proteína</span>
                      <span className="font-bold text-[#003D7A]">{g.protein}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Humedad</span>
                      <span className="font-bold text-gray-700">{g.moisture}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Grasa</span>
                      <span className="font-bold text-gray-700">{g.fat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full specs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FiBarChart2 className="text-[#003D7A]" />
                  Especificaciones Técnicas
                </h2>
                <p className="text-gray-500 mb-8">Parámetros típicos de calidad. Análisis de certificación por lote disponible.</p>
                <div className="space-y-3">
                  {specs.map((s) => (
                    <div key={s.label} className="flex justify-between items-center py-3 px-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <span className="text-gray-600 text-sm">{s.label}</span>
                      <span className="font-bold text-gray-900 text-sm">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Aplicaciones</h2>
                <p className="text-gray-500 mb-8">Fuente proteica de alta digestibilidad para múltiples industrias.</p>
                <div className="grid grid-cols-2 gap-4">
                  {uses.map((u) => (
                    <div key={u.label} className="bg-white border border-gray-200 rounded-2xl p-4 hover:border-[#003D7A]/30 hover:shadow-md transition-all">
                      <div className="text-2xl mb-2">{u.icon}</div>
                      <div className="font-bold text-gray-900 text-sm">{u.label}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{u.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-[#111827]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Proceso de Producción</h2>
            <p className="text-gray-400 mb-12">De la captura al saco en 6 etapas controladas.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((p) => (
                <div key={p.step} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-black text-[#0099CC]/30 mb-3">{p.step}</div>
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para cotizar?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Nuestro equipo comercial te brindará especificaciones detalladas, precios y disponibilidad según tu volumen de compra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#003D7A] to-[#0099CC] text-white font-bold rounded-full shadow-lg hover:shadow-[#003D7A]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FiMail className="w-5 h-5" />
                Solicitar Cotización
              </Link>
              <a
                href="tel:+5143321456"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-[#003D7A] hover:text-[#003D7A] transition-all duration-200"
              >
                <FiPhone className="w-5 h-5" />
                Llamar Ahora
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-[#003D7A] hover:text-[#003D7A] transition-all duration-200">
                <FiDownload className="w-5 h-5" />
                Ficha Técnica PDF
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
