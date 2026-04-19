"use client";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiAnchor,
} from "react-icons/fi";

const footerLinks = {
  empresa: {
    title: "Empresa",
    links: [
      { label: "Quiénes Somos", href: "#nosotros" },
      { label: "Historia", href: "#nosotros" },
      { label: "Certificaciones", href: "#nosotros" },
      { label: "Gobierno Corporativo", href: "#nosotros" },
      { label: "Trabaja con Nosotros", href: "#contacto" },
    ],
  },
  productos: {
    title: "Productos",
    links: [
      { label: "Harina de Pescado", href: "#productos" },
      { label: "Aceite de Pescado", href: "#productos" },
      { label: "Especificaciones Técnicas", href: "#productos" },
      { label: "Control de Calidad", href: "#productos" },
      { label: "Exportaciones", href: "#contacto" },
    ],
  },
  sostenibilidad: {
    title: "Sostenibilidad",
    links: [
      { label: "Reporte Anual", href: "#sostenibilidad" },
      { label: "Medio Ambiente", href: "#sostenibilidad" },
      { label: "Comunidades", href: "#sostenibilidad" },
      { label: "Voluntariado", href: "#sostenibilidad" },
      { label: "Política de Pesca", href: "#sostenibilidad" },
    ],
  },
};

const socialLinks = [
  { icon: <FiFacebook className="w-4 h-4" />, label: "Facebook", href: "#" },
  { icon: <FiInstagram className="w-4 h-4" />, label: "Instagram", href: "#" },
  { icon: <FiLinkedin className="w-4 h-4" />, label: "LinkedIn", href: "#" },
  { icon: <FiYoutube className="w-4 h-4" />, label: "YouTube", href: "#" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111827] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollTo("#inicio"); }}
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003D7A] to-[#0099CC] flex items-center justify-center shadow-lg">
                <FiAnchor className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block font-bold text-white text-xl leading-none">PescaPeru</span>
                <span className="block text-[#0099CC] text-xs font-medium mt-0.5">
                  Pesca Sostenible
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Empresa peruana líder en extracción responsable de anchoveta y
              producción de harina y aceite de pescado. Desde 1999, comprometidos
              con el océano y las comunidades pesqueras.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-[#0099CC] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Miramar 1245, Chimbote, Áncash, Perú
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-[#0099CC] flex-shrink-0" />
                <span className="text-gray-400">+51 43 321-456</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-[#0099CC] flex-shrink-0" />
                <span className="text-gray-400">contacto@pescaperu.com.pe</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0099CC] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-gray-400 hover:text-[#0099CC] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} PescaPeru S.A. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Política de Privacidad
            </a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Términos de Uso
            </a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
