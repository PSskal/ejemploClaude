"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Ubicaciones", href: "#ubicaciones" },
  { label: "Sostenibilidad", href: "#sostenibilidad" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003D7A] to-[#0099CC] flex items-center justify-center shadow-md group-hover:shadow-[#0099CC]/30 group-hover:shadow-lg transition-all duration-300">
              <span className="text-white font-black text-sm tracking-tight">PP</span>
            </div>
            <div className="leading-tight">
              <span className="block font-black text-[#003D7A] text-lg leading-none tracking-tight">
                PescaPeru
              </span>
              <span className="block text-[#0099CC] text-xs font-semibold tracking-wide">
                Pesca Sostenible
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-[#003D7A] hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Lang + Hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-gray-600 hover:text-[#003D7A] border border-gray-200 hover:border-[#003D7A]/40 rounded-lg transition-all duration-200"
              aria-label="Cambiar idioma"
            >
              <FiGlobe className="w-3.5 h-3.5" />
              {lang}
            </button>
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#003D7A] transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Abrir menú"
            >
              {isMobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#003D7A] hover:bg-blue-50 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600"
            >
              <FiGlobe className="w-4 h-4" />
              {lang === "ES" ? "Español" : "English"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
