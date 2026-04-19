"use client";

import { useState, FormEvent } from "react";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const subjects = [
  "Consulta comercial",
  "Proveedores",
  "Recursos Humanos",
  "Sostenibilidad",
  "Prensa y Comunicaciones",
  "Otro",
];

const socialLinks = [
  { icon: <FiFacebook className="w-5 h-5" />, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
  { icon: <FiInstagram className="w-5 h-5" />, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
  { icon: <FiLinkedin className="w-5 h-5" />, label: "LinkedIn", href: "#", color: "hover:bg-blue-700" },
  { icon: <FiYoutube className="w-5 h-5" />, label: "YouTube", href: "#", color: "hover:bg-red-600" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    if (!form.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!form.message.trim()) newErrors.message = "El mensaje es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setIsSuccess(true);
    setForm(initialForm);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#FF8C42]/10 text-[#FF8C42] text-sm font-semibold rounded-full mb-4">
            Trabajemos Juntos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Quieres trabajar{" "}
            <span className="text-[#003D7A]">con nosotros?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Estamos disponibles para atender tus consultas comerciales,
            alianzas estratégicas y oportunidades de colaboración.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-md p-8 border border-gray-100">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <FiCheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-500 max-w-sm">
                  Hemos recibido tu mensaje. Nos pondremos en contacto contigo
                  en un plazo de 24-48 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003D7A]/30 transition-all ${
                        errors.name
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 bg-gray-50 focus:bg-white focus:border-[#003D7A]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003D7A]/30 transition-all ${
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 bg-gray-50 focus:bg-white focus:border-[#003D7A]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+51 999 123 456"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003D7A]/30 focus:bg-white focus:border-[#003D7A] transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Asunto
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003D7A]/30 focus:bg-white focus:border-[#003D7A] transition-all"
                    >
                      <option value="">Seleccionar...</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003D7A]/30 transition-all resize-none ${
                      errors.message
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 bg-gray-50 focus:bg-white focus:border-[#003D7A]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#003D7A] to-[#0099CC] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#003D7A]/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info card */}
            <div className="bg-gradient-to-br from-[#003D7A] to-[#0099CC] rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Sede Principal</p>
                    <p className="text-white/80 text-sm">
                      Av. Miramar 1245, Chimbote,<br />
                      Áncash, Perú
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Email</p>
                    <p className="text-white/80 text-sm">contacto@pescaperu.com.pe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Teléfono</p>
                    <p className="text-white/80 text-sm">+51 43 321-456</p>
                    <p className="text-white/80 text-sm">+51 1 234-5678</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Síguenos en redes sociales
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-gray-50 text-gray-600 font-medium text-sm transition-all duration-200 ${s.color} hover:text-white`}
                    aria-label={s.label}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-4">Horario de Atención</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lunes - Viernes</span>
                  <span className="font-semibold text-gray-900">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sábado</span>
                  <span className="font-semibold text-gray-900">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Domingo</span>
                  <span className="font-semibold text-gray-400">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
