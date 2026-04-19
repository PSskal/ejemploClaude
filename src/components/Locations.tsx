"use client";

import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

interface Location {
  city: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  color: string;
}

const locations: Location[] = [
  {
    city: "Chimbote",
    type: "Sede Principal",
    address: "Av. Miramar 1245, Chimbote, Áncash, Perú",
    phone: "+51 43 321-456",
    email: "chimbote@pescaperu.com.pe",
    hours: "Lun - Vie: 8:00 - 18:00",
    color: "from-[#003D7A] to-[#0099CC]",
  },
  {
    city: "Huacho",
    type: "Planta de Producción",
    address: "Zona Industrial Los Médanos s/n, Huacho, Lima, Perú",
    phone: "+51 1 234-5678",
    email: "huacho@pescaperu.com.pe",
    hours: "Lun - Vie: 7:00 - 17:00",
    color: "from-[#0099CC] to-[#003D7A]",
  },
  {
    city: "Coishco",
    type: "Puerto Pesquero",
    address: "Desembarcadero Pesquero Coishco, Áncash, Perú",
    phone: "+51 43 456-789",
    email: "coishco@pescaperu.com.pe",
    hours: "Operaciones: 24/7",
    color: "from-[#1F2937] to-[#003D7A]",
  },
];

export default function Locations() {
  return (
    <section id="ubicaciones" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#0099CC]/10 text-[#0099CC] text-sm font-semibold rounded-full mb-4">
            Presencia Nacional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-[#003D7A]">Sedes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Estratégicamente ubicados en las principales zonas pesqueras del litoral peruano
            para garantizar la máxima frescura de nuestras materias primas.
          </p>
        </div>

        {/* Map placeholder */}
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 mb-12 bg-gradient-to-br from-[#003D7A] to-[#1F2937] shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/70">
              <FiMapPin className="w-12 h-12 mx-auto mb-3 text-[#FF8C42]" />
              <p className="text-lg font-semibold text-white">Mapa de Operaciones — Litoral Peruano</p>
              <p className="text-sm mt-1">Chimbote · Huacho · Coishco</p>
            </div>
          </div>

          {/* Decorative dots representing locations */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Chimbote */}
            <div className="absolute top-[35%] left-[38%] flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-[#FF8C42] shadow-lg shadow-[#FF8C42]/50 animate-pulse" />
              <div className="mt-1 bg-white/90 text-gray-800 text-xs font-bold px-2 py-0.5 rounded whitespace-nowrap">
                Chimbote
              </div>
            </div>
            {/* Coishco */}
            <div className="absolute top-[32%] left-[37%] flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#0099CC] shadow-lg shadow-[#0099CC]/50 animate-pulse" />
              <div className="mt-1 bg-white/90 text-gray-800 text-xs font-bold px-2 py-0.5 rounded whitespace-nowrap">
                Coishco
              </div>
            </div>
            {/* Huacho */}
            <div className="absolute top-[55%] left-[34%] flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#0099CC] shadow-lg shadow-[#0099CC]/50 animate-pulse" />
              <div className="mt-1 bg-white/90 text-gray-800 text-xs font-bold px-2 py-0.5 rounded whitespace-nowrap">
                Huacho
              </div>
            </div>
          </div>

          {/* Coastal line decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              {/* Card header */}
              <div className={`h-3 bg-gradient-to-r ${loc.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{loc.city}</h3>
                    <span className="inline-block mt-1 text-xs font-semibold text-[#0099CC] bg-[#0099CC]/10 px-2 py-0.5 rounded-full">
                      {loc.type}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${loc.color} flex items-center justify-center flex-shrink-0`}>
                    <FiMapPin className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <FiMapPin className="w-4 h-4 text-[#003D7A] mt-0.5 flex-shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FiPhone className="w-4 h-4 text-[#003D7A] flex-shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FiMail className="w-4 h-4 text-[#003D7A] flex-shrink-0" />
                    <span className="truncate">{loc.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FiClock className="w-4 h-4 text-[#003D7A] flex-shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>

                <button className="mt-5 w-full py-2.5 text-sm font-semibold text-[#003D7A] border border-[#003D7A] rounded-xl hover:bg-[#003D7A] hover:text-white transition-all duration-200">
                  Ver en mapa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
