import React, { useState } from 'react';
import { Compass, MapPin, Mail, Phone, ArrowUpRight, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="contacto" className="bg-espresso text-parchment">
      {/* Top CTA Banner */}
      <div className="border-b border-parchment/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ochre">
                Club de Cosechas Frescas · Lima & Provincias
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-5xl">
                Recibe cada mes un microlote inédito recién tostado en tu puerta.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <label htmlFor="newsletter-email" className="block font-mono text-xs text-parchment/70">
                  BITÁCORA DE TUESTE Y ACCESO ANTICIPADO A LOTES GEISHA
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.pe"
                    className="flex-1 rounded-full border border-parchment/20 bg-parchment/5 px-5 py-3.5 text-sm text-parchment placeholder:text-parchment/40 focus:border-ochre focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-parchment transition hover:bg-ochre hover:text-espresso"
                  >
                    {subscribed ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Suscrito</span>
                      </>
                    ) : (
                      <>
                        <span>Unirme</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
                {subscribed && (
                  <p className="font-mono text-xs text-ochre">
                    ¡Gracias! Te enviaremos la ficha de cata de la próxima semana.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer info */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-parchment/25 font-serif text-lg text-ochre">
                A
              </span>
              <div>
                <span className="font-serif text-2xl tracking-wider">APU ROASTERS</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/50">
                  Andean Specialty Coffee · Perú
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-parchment/70">
              Trabajamos en comercio directo con 18 familias caficultoras de Cusco, Cajamarca y Amazonas, pagando hasta 3.2 veces el precio de bolsa para preservar variedades ancestrales de montaña.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-xs text-ochre">
              <Compass className="h-4 w-4" />
              <span>12°08&apos;30&quot;S 77°01&apos;18&quot;W · Tostaduría Barranco, Lima</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/50">
              Explorar
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-parchment/80">
              <li><a href="#origen" className="hover:text-ochre">Regiones & Terroir</a></li>
              <li><a href="#proceso" className="hover:text-ochre">Beneficio Húmedo</a></li>
              <li><a href="#productos" className="hover:text-ochre">Microlotes 2025</a></li>
              <li><a href="#testimonios" className="hover:text-ochre">Voces de Baristas</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/50">
              Orígenes
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-parchment/80">
              <li>Quillabamba, Cusco</li>
              <li>Jaén, Cajamarca</li>
              <li>Rodríguez de Mendoza</li>
              <li>Villa Rica, Pasco</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/50">
              Sala de Cata & Laboratorio
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-parchment/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                <span>Jr. Domeyer 248, Barranco, Lima — Perú</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-terracotta" />
                <span className="font-mono text-xs">+51 (01) 642-8910</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-terracotta" />
                <span className="font-mono text-xs">hola@apucafe.pe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-parchment/10 pt-8 text-xs text-parchment/50 sm:flex-row">
          <p>© {new Date().getFullYear()} APU Café de Especialidad S.A.C. Todos los derechos reservados.</p>
          <p className="font-mono">
            CERTIFICACIÓN ORGÁNICA · COMERCIO DIRECTO · LOTE TRAZABLE
          </p>
        </div>
      </div>
    </footer>
  );
}
