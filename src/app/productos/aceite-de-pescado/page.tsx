import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiArrowLeft, FiDownload, FiCheck, FiArrowRight, FiMail, FiPhone } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Aceite de Pescado | PescaPeru",
  description:
    "Aceite de pescado crudo, refinado y concentrado Omega-3 (EPA+DHA mín. 30%). Proceso físico sin solventes. Certificado IFFO RS y GOED. Exportación a más de 30 países.",
};

const keyStats = [
  { value: "30%+", label: "EPA + DHA", color: "#FF8C42" },
  { value: "0%", label: "Solventes usados", color: "#10B981" },
  { value: "3", label: "Grados disponibles", color: "#0099CC" },
  { value: "30+", label: "Países exportación", color: "#8B5CF6" },
];

const specs = [
  { label: "EPA + DHA", value: "mín. 30%", bar: 30 },
  { label: "Omega-3 totales", value: "mín. 26%", bar: 26 },
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
    code: "CR",
    epa_dha: "≥ 28%",
    peroxidos: "≤ 10 meq/kg",
    desc: "Directo del proceso de prensado-centrifugación. Uso industrial en acuicultura y nutrición animal sin refinamiento adicional.",
    tag: "Industrial",
    gradient: "from-gray-700 to-gray-600",
  },
  {
    name: "Aceite Refinado",
    code: "RF",
    epa_dha: "≥ 30%",
    peroxidos: "≤ 5 meq/kg",
    desc: "Desodorizado y blanqueado. Para nutrición animal premium, nutracéutica y formulaciones de suplementos.",
    tag: "Premium",
    gradient: "from-[#FF8C42] to-[#e06d28]",
  },
  {
    name: "Concentrado Ω-3",
    code: "C3",
    epa_dha: "≥ 50%",
    peroxidos: "≤ 3 meq/kg",
    desc: "Concentración máxima EPA+DHA por destilación molecular. Grado farmacéutico para suplementos humanos premium.",
    tag: "Farmacéutico",
    gradient: "from-purple-700 to-purple-500",
  },
];

const uses = [
  { label: "Acuicultura", detail: "Salmón, trucha, camarón", icon: "🐟", color: "#0099CC" },
  { label: "Farmacéutica", detail: "Cápsulas Rx EPA/DHA", icon: "💊", color: "#8B5CF6" },
  { label: "Nutracéutica", detail: "Suplementos OTC", icon: "🧬", color: "#10B981" },
  { label: "Alimentos Func.", detail: "Enriquecimiento Omega-3", icon: "🥗", color: "#F59E0B" },
  { label: "Suplementos Dep.", detail: "Deportivos y bienestar", icon: "💪", color: "#FF8C42" },
  { label: "Cosmética", detail: "Cremas y serums premium", icon: "✨", color: "#EC4899" },
];

const process = [
  { num: "01", title: "Prensado Continuo", desc: "Prensas de tornillo de alta eficiencia. Extracción del licor de prensa sin adición de solventes ni calor excesivo." },
  { num: "02", title: "Centrifugación 3 Fases", desc: "Decanters centrífugos separan aceite, agua y sólidos. Recuperación > 95% del aceite disponible en la materia prima." },
  { num: "03", title: "Pulido Final", desc: "Centrífugas de disco de alta velocidad remueven impurezas residuales. Aceite crudo listo para análisis." },
  { num: "04", title: "Refinación (RF/C3)", desc: "Desgomado, neutralización alcalina, blanqueado con arcillas y desodorización al vacío según grado requerido." },
  { num: "05", title: "Estabilización", desc: "Adición de antioxidantes naturales (tocoferoles mixtos). Control de oxidación garantizado durante toda la vida útil." },
  { num: "06", title: "Envasado y Despacho", desc: "Cisterna ISO, flexitank, tambores metálicos 200L o IBC 1000L. Análisis COA por lote incluido en cada despacho." },
];

const certs = ["IFFO RS", "GOED", "ISO 14001", "HACCP", "GMP Pharma", "Kosher"];

export default function AceiteDePescado() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: "#030712" }}>
          {/* Gradient mesh — orange/amber theme */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15" style={{ background: "#FF8C42" }} />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10" style={{ background: "#e06d28" }} />
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Big watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black leading-none select-none pointer-events-none whitespace-nowrap pr-8" style={{ color: "rgba(255,140,66,0.04)" }}>
            ACEITE
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
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Producto Estrella</span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/40 text-xs font-medium">Grado Farmacéutico Disponible</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight">
                  Aceite de<br />
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FF8C42, #f5a623)" }}>
                    Pescado
                  </span>
                </h1>
                <p className="text-white/40 font-medium mb-6 tracking-widest text-sm uppercase">
                  Crude · Refined · Omega-3 Concentrate
                </p>
                <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
                  Extracción física sin solventes. La más alta concentración natural de EPA y DHA
                  del mercado peruano, con trazabilidad completa desde la captura.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {certs.map((c) => (
                    <span key={c} className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg border"
                      style={{ color: "#FF8C42", borderColor: "rgba(255,140,66,0.3)", background: "rgba(255,140,66,0.05)" }}>
                      <FiCheck className="w-3 h-3" /> {c}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href="/#contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #FF8C42, #e06d28)" }}>
                    Solicitar Cotización <FiArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white/60 border border-white/10 hover:border-white/30 hover:text-white text-sm transition-all">
                    <FiDownload className="w-4 h-4" /> Ficha PDF
                  </button>
                </div>
              </div>

              {/* Right — floating stat cards */}
              <div className="relative h-80 lg:h-[420px] hidden lg:block">
                {/* Center omega symbol */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "rgba(255,140,66,0.2)", boxShadow: "0 0 80px rgba(255,140,66,0.08)" }}>
                  <div className="w-36 h-36 rounded-full border flex items-center justify-center"
                    style={{ borderColor: "rgba(255,140,66,0.3)", background: "rgba(255,140,66,0.05)" }}>
                    <div className="text-center">
                      <div className="text-5xl font-black" style={{ color: "#FF8C42" }}>Ω3</div>
                      <div className="text-xs font-semibold mt-1" style={{ color: "#FF8C42" }}>EPA + DHA</div>
                    </div>
                  </div>
                </div>
                {/* Floating chips */}
                {[
                  { label: "Omega-3 total", value: "≥26%", top: "8%", left: "58%", color: "#FF8C42" },
                  { label: "Peróxidos", value: "≤5 meq/kg", top: "72%", left: "62%", color: "#10B981" },
                  { label: "Anisidina", value: "≤20", top: "12%", left: "2%", color: "#8B5CF6" },
                  { label: "Pureza", value: "≥99%", top: "70%", left: "2%", color: "#0099CC" },
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
              <p className="text-[#FF8C42] text-sm font-semibold uppercase tracking-widest mb-2">Presentaciones</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Tres grados de pureza</h2>
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
                    <div className="flex justify-between text-sm"><span className="text-white/40">EPA + DHA</span><span className="font-bold text-white">{g.epa_dha}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-white/40">Peróxidos</span><span className="font-bold text-white">{g.peroxidos}</span></div>
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
                <p className="text-[#FF8C42] text-sm font-semibold uppercase tracking-widest mb-2">Calidad certificada</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Especificaciones<br />técnicas completas</h2>
                <div className="space-y-4">
                  {specs.map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-semibold text-gray-700">{s.label}</span>
                        <span className="text-sm font-black text-[#FF8C42]">{s.value}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-2 rounded-full transition-all"
                          style={{ width: `${s.bar}%`, background: "linear-gradient(90deg, #FF8C42, #e06d28)" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-6">* Parámetros típicos aceite refinado. COA (Certificate of Analysis) disponible por cada lote embarcado.</p>
              </div>

              {/* Applications */}
              <div>
                <p className="text-[#FF8C42] text-sm font-semibold uppercase tracking-widest mb-2">Industrias destino</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Aplicaciones<br />de alto valor</h2>
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
        <section className="py-20 overflow-hidden" style={{ background: "#030712" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[#FF8C42] text-sm font-semibold uppercase tracking-widest mb-2">Sin solventes. Solo física.</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Proceso de extracción</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              {process.map((p, i) => (
                <div key={p.num}
                  className={`bg-[#030712] p-8 hover:bg-white/[0.03] transition-colors ${i < 3 ? "border-b border-white/5" : ""} ${i % 3 !== 2 ? "border-r border-white/5" : ""}`}
                >
                  <div className="text-5xl font-black leading-none mb-4" style={{ color: "rgba(255,140,66,0.25)" }}>{p.num}</div>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #FF8C42 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-black/20 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/60 font-semibold text-sm uppercase tracking-widest mb-4">¿Listo para cotizar?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Volumen, grado y destino.<br />Respondemos en 24 horas.
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">
              Disponemos de stock permanente de aceite crudo y refinado. El concentrado Omega-3 se produce bajo pedido mínimo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5"
                style={{ color: "#FF8C42" }}>
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
