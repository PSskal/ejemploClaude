"use client";

import { FiArrowRight, FiDroplet, FiPackage, FiCheck } from "react-icons/fi";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  badgeColor: string;
}

const products: Product[] = [
  {
    id: "harina",
    title: "Harina de Pescado",
    subtitle: "Proteína de alta calidad",
    description:
      "Producida a partir de anchoveta fresca capturada en nuestras zonas de pesca certificadas, nuestra harina de pescado es reconocida mundialmente por su alto contenido proteico (68-72%) y excelente perfil de aminoácidos.",
    features: [
      "Proteína cruda: 68-72%",
      "Humedad: máx. 10%",
      "Libre de patógenos",
      "Certificación MSC",
    ],
    icon: <FiPackage className="w-10 h-10" />,
    gradient: "from-[#003D7A] via-[#005da8] to-[#0099CC]",
    badgeColor: "bg-blue-500",
  },
  {
    id: "aceite",
    title: "Aceite de Pescado",
    subtitle: "Rico en Omega-3",
    description:
      "Extraído mediante procesos físicos controlados, nuestro aceite de pescado preserva todos los ácidos grasos esenciales EPA y DHA. Ideal para acuicultura, suplementos nutricionales y la industria farmacéutica.",
    features: [
      "EPA + DHA: mín. 30%",
      "Ácidos grasos Omega-3",
      "Proceso sin solventes",
      "Estándares IFFO RS",
    ],
    icon: <FiDroplet className="w-10 h-10" />,
    gradient: "from-[#1F2937] via-[#374151] to-[#003D7A]",
    badgeColor: "bg-orange-500",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 lg:py-28 bg-white">
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

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100"
            >
              {/* Card image/header area */}
              <div className={`relative h-52 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white blur-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="relative text-white/90 group-hover:scale-110 transition-transform duration-500">
                  {product.icon}
                </div>
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  Exportación
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <div className="mb-1">
                  <span className="text-[#0099CC] text-sm font-medium">{product.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <FiCheck className="w-3 h-3 text-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-[#003D7A] to-[#0099CC] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#003D7A]/20 transition-all duration-300 group/btn">
                  Más información
                  <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-[#003D7A] font-semibold hover:text-[#0099CC] transition-colors group">
            Ver todos los productos
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
