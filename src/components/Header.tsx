"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#003D7A] to-[#0099CC] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-sm">PP</span>
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-[#003D7A] text-lg leading-none">
                PescaPeru
              </span>
              <span className="block text-[#0099CC] text-xs font-medium">
                Pesca Sostenible
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#003D7A] hover:bg-blue-50 rounded-md transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Lang + Hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#003D7A] border border-gray-200 hover:border-[#003D7A] rounded-md transition-all duration-200"
              aria-label="Cambiar idioma"
            >
              <FiGlobe className="w-4 h-4" />
              {lang}
            </button>
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#003D7A] transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Abrir menú"
            >
              {isMobileOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#003D7A] hover:bg-blue-50 rounded-md transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600"
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
