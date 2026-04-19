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
  title: "Aceite de Pescado | PescaPeru",
  description:
    "Aceite de pescado crudo, refinado y concentrado Omega-3 (EPA+DHA mín. 30%). Proceso sin solventes, certificado IFFO RS y GOED. Exportación a más de 30 países.",
};

const specs = [
  { label: "EPA + DHA", value: "mín. 30%", bar: 30 },
  { label: "Ácidos Grasos Omega-3 totales", value: "mín. 26%", bar: 26 },
  { label: "Humedad e Impurezas", value: "máx. 1%", bar: 5 },
  { label: "Valor de Anisidina", value: "máx. 20", bar: 20 },
  { label: "Valor de Peróxidos", value: "máx. 5 meq/kg", bar: 15 },
  { label: "Ácidos Grasos Libres", value: "máx. 3%", bar: 10 },
  { label: "Color (Lovibond 5¼\")", value: "máx. 20R", bar: 20 },
  { label: "Contaminantes PCB", value: "N.D.", bar: 2 },
];

const grades = [
  {
    name: "Aceite Crudo",
    epa_dha: "mín. 28%",
    peroxidos: "máx. 10 meq/kg",
    desc: "Directo del proceso de prensado. Para acuicultura y uso industrial sin refinamiento adicional.",
    tag: "Industrial",
    tagColor: "bg-gray-700",
  },
  {
    name: "Aceite Refinado",
    epa_dha: "mín. 30%",
    peroxidos: "máx. 5 meq/kg",
    desc: "Desodorizado y blanqueado. Apto para nutrición animal premium y productos nutraceúticos.",
    tag: "Premium",
    tagColor: "bg-orange-500",
  },
  {
    name: "Concentrado Omega-3",
    epa_dha: "mín. 50%",
    peroxidos: "máx. 3 meq/kg",
    desc: "Alta concentración EPA+DHA mediante destilación molecular. Para farmacéutica y suplementos humanos.",
    tag: "Farmacéutico",
    tagColor: "bg-purple-600",
  },
];

const process = [
  { step: "01", title: "Prensado", desc: "Separación de líquidos en prensas de tornillo. Se obtiene licor de prensa con aceite crudo." },
  { step: "02", title: "Centrifugación", desc: "Centrifugación en tres fases para separar aceite, agua y sólidos con alta eficiencia." },
  { step: "03", title: "Pulido", desc: "Remoción de impurezas residuales mediante centrífugas de disco de alta velocidad." },
  { step: "04", title: "Refinación", desc: "Desgomado, neutralización, blanqueado y desodorización según grado requerido." },
  { step: "05", title: "Estabilización", desc: "Adición de antioxidantes naturales (tocoferoles) para garantizar la estabilidad oxidativa." },
  { step: "06", title: "Envasado", desc: "Cisterna ISO, flexitank, tambores metálicos de 200L o IBC de 1000L según especificación." },
];

const uses = [
  { label: "Acuicultura", detail: "Salmón, trucha, camarón", icon: "🐟" },
  { label: "Farmacéutica", detail: "Cápsulas EPA/DHA, Rx", icon: "💊" },
  { label: "Nutracéutica", detail: "Suplementos OTC", icon: "🧬" },
  { label: "Alimentos Func.", detail: "Enriquecimiento Omega-3", icon: "🥗" },
  { label: "Suplementos", detail: "Deportivos y bienestar", icon: "💪" },
  { label: "Cosméticos", detail: "Cremas, serums premium", icon: "✨" },
];

const certs = ["IFFO RS", "GOED", "ISO 14001", "HACCP", "GMP Pharma", "Kosher"];

export default function AceiteDePescado() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #003D7A 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "#FF8C42", opacity: 0.05 }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl" style={{ background: "#FF8C42", opacity: 0.08 }} />
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
                <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Producto Estrella · Exportación
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Aceite de Pescado
                </h1>
                <p className="text-[#FF8C42] text-lg mb-2 font-medium">
                  Crude · Refined · Omega-3 Concentrate
                </p>
                <p className="text-white/60 text-base leading-relaxed max-w-lg">
                  Extraído por prensado físico y separación centrífuga sin solventes químicos.
                  Rica fuente de EPA y DHA, ácidos grasos esenciales para la salud humana y animal.
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
              <div className="relative rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10">
                <div className="text-center mb-6">
                  <div className="text-7xl font-black text-white/10 select-none leading-none">Ω-3</div>
                  <div className="text-white font-bold text-xl -mt-2">EPA + DHA mín. 30%</div>
                  <div className="text-white/50 text-sm mt-1">Especificación aceite refinado</div>
                </div>
                <div className="space-y-3">
                  {specs.slice(0, 4).map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-white/70 text-sm mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${s.bar}%`,
                            background: "linear-gradient(90deg, #FF8C42, #e06d28)",
                          }}
                        />
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
            <p className="text-gray-500 mb-10">Tres grados de calidad para cada industria y aplicación.</p>
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
                      <span className="text-gray-500">EPA + DHA</span>
                      <span className="font-bold text-[#FF8C42]">{g.epa_dha}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Peróxidos</span>
                      <span className="font-bold text-gray-700">{g.peroxidos}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full specs + Applications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FiBarChart2 className="text-[#FF8C42]" />
                  Especificaciones Técnicas
                </h2>
                <p className="text-gray-500 mb-8">Parámetros típicos aceite refinado. Análisis de certificación por lote disponible.</p>
                <div className="space-y-3">
                  {specs.map((s) => (
                    <div key={s.label} className="flex justify-between items-center py-3 px-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <span className="text-gray-600 text-sm">{s.label}</span>
                      <span className="font-bold text-gray-900 text-sm">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Aplicaciones</h2>
                <p className="text-gray-500 mb-8">Fuente natural de Omega-3 para nutrición humana, animal y cosmética.</p>
                <div className="grid grid-cols-2 gap-4">
                  {uses.map((u) => (
                    <div key={u.label} className="bg-white border border-gray-200 rounded-2xl p-4 hover:border-[#FF8C42]/50 hover:shadow-md transition-all">
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
        <section className="py-16" style={{ background: "#1a1a2e" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Proceso de Extracción</h2>
            <p className="text-gray-400 mb-12">Sin solventes. Sólo procesos físicos de alta eficiencia.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((p) => (
                <div key={p.step} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-black mb-3" style={{ color: "#FF8C42", opacity: 0.4 }}>{p.step}</div>
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
              Cuéntanos tu volumen, grado requerido y destino de embarque. Nuestro equipo te responde en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #1a1a2e, #FF8C42)" }}
              >
                <FiMail className="w-5 h-5" />
                Solicitar Cotización
              </Link>
              <a
                href="tel:+5143321456"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-[#FF8C42] hover:text-[#FF8C42] transition-all duration-200"
              >
                <FiPhone className="w-5 h-5" />
                Llamar Ahora
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-[#FF8C42] hover:text-[#FF8C42] transition-all duration-200">
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
