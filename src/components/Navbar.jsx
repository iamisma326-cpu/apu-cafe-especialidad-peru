import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#origen', label: 'El Origen' },
    { href: '#proceso', label: 'El Proceso' },
    { href: '#productos', label: 'Microlotes' },
    { href: '#testimonios', label: 'Bitácora' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-espresso/10 bg-parchment/90 py-3.5 backdrop-blur-md shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="APU Café de Especialidad - Inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso font-serif text-base font-medium text-parchment transition-transform group-hover:scale-105">
            A
          </span>
          <div className="leading-none">
            <span className="block font-serif text-xl font-medium tracking-wider text-espresso">
              APU
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-espresso/60">
              Andean Coffee
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-espresso/80 transition hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-forest/25 bg-forest/10 px-3 py-1 font-mono text-[11px] font-medium text-forest lg:inline-block">
            Tueste semanal: Martes
          </span>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 rounded-full bg-espresso px-4 py-2 text-xs font-medium text-parchment transition hover:bg-terracotta"
            aria-label={`Abrir bolsa de compras con ${cartCount} productos`}
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Bolsa</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-parchment font-mono text-[11px] font-bold text-espresso">
              {cartCount}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border border-espresso/15 p-2 text-espresso md:hidden"
            aria-label="Menú de navegación"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-espresso/15 bg-parchment px-6 py-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl text-espresso hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
