import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productsData } from '../data/coffeeData';
import { ShoppingBag, Sparkles, Check } from 'lucide-react';

const grindOptions = ['Grano Entero', 'V60 / Chemex', 'Prensa Francesa', 'Espresso'];

export default function Productos({ onAddToCart, reducedMotion }) {
  const [selectedRegion, setSelectedRegion] = useState('Todos');
  const [selectedGrinds, setSelectedGrinds] = useState({});
  const [addedId, setAddedId] = useState(null);
  const sectionRef = useRef(null);

  const regions = ['Todos', 'Cusco', 'Cajamarca', 'Amazonas'];

  const filteredProducts = selectedRegion === 'Todos'
    ? productsData
    : productsData.filter((p) => p.region === selectedRegion);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.producto-card', {
          y: 45,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedRegion, reducedMotion]);

  const handleGrindChange = (productId, grind) => {
    setSelectedGrinds((prev) => ({ ...prev, [productId]: grind }));
  };

  const triggerAdd = (product) => {
    const grind = selectedGrinds[product.id] || 'Grano Entero';
    onAddToCart(product, grind);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header & Filter */}
        <div className="flex flex-col justify-between gap-6 border-b border-espresso/15 pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
              03 / Cosecha Seleccionada 2025
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-espresso sm:text-5xl">
              Microlotes de Tueste Semanal
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por región">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                role="tab"
                aria-selected={selectedRegion === region}
                className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition ${
                  selectedRegion === region
                    ? 'bg-espresso text-parchment shadow-sm'
                    : 'border border-espresso/15 bg-sand/50 text-espresso/75 hover:border-espresso'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProducts.map((product) => {
            const currentGrind = selectedGrinds[product.id] || 'Grano Entero';
            const isAdded = addedId === product.id;

            return (
              <article
                key={product.id}
                className="producto-card group flex flex-col justify-between overflow-hidden rounded-3xl border border-espresso/15 bg-sand/40 transition hover:border-espresso/35 hover:bg-sand/70 sm:flex-row"
              >
                {/* Image Column */}
                <div className="relative sm:w-2/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover sm:h-full"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="rounded-full bg-espresso px-3 py-1 font-mono text-[11px] font-bold text-ochre">
                      SCA {product.sca}
                    </span>
                    <span className="rounded-full bg-parchment/90 px-3 py-1 font-mono text-[10px] font-semibold text-espresso backdrop-blur-sm">
                      {product.process}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-terracotta">
                        {product.region} · {product.altitude}
                      </span>
                      <span className="font-mono text-xs text-espresso/60">
                        250g
                      </span>
                    </div>

                    <h3 className="mt-1 font-serif text-2xl font-medium text-espresso">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-espresso/65">
                      Productor: {product.producer} · Variedad {product.variety}
                    </p>

                    {/* Tasting Notes Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.notes.map((note) => (
                        <span
                          key={note}
                          className="inline-flex items-center gap-1 rounded-md border border-espresso/10 bg-parchment px-2.5 py-1 font-mono text-[11px] text-espresso"
                        >
                          <Sparkles className="h-3 w-3 text-terracotta" />
                          {note}
                        </span>
                      ))}
                    </div>

                    {/* Acidity / Sweetness / Body Bars */}
                    <div className="mt-5 space-y-2 border-t border-espresso/10 pt-4 font-mono text-[11px]">
                      <div className="flex items-center justify-between">
                        <span className="text-espresso/70">Acidez Brillante</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <span
                              key={dot}
                              className={`h-2 w-4 rounded-sm ${
                                dot <= product.acidity
                                  ? 'bg-terracotta'
                                  : 'bg-espresso/15'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-espresso/70">Dulzor Residual</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <span
                              key={dot}
                              className={`h-2 w-4 rounded-sm ${
                                dot <= product.sweetness
                                  ? 'bg-forest'
                                  : 'bg-espresso/15'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Grind Selector */}
                    <div className="mt-5">
                      <label
                        htmlFor={`grind-${product.id}`}
                        className="block font-mono text-[10px] uppercase tracking-wider text-espresso/60"
                      >
                        Tipo de molienda
                      </label>
                      <select
                        id={`grind-${product.id}`}
                        value={currentGrind}
                        onChange={(e) => handleGrindChange(product.id, e.target.value)}
                        className="mt-1 w-full rounded-xl border border-espresso/20 bg-parchment px-3 py-2 text-xs font-medium text-espresso focus:border-terracotta focus:outline-none"
                      >
                        {grindOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-6 flex items-center justify-between border-t border-espresso/10 pt-4">
                    <div>
                      <span className="block font-mono text-[10px] uppercase text-espresso/55">
                        Precio por bolsa
                      </span>
                      <span className="font-mono text-xl font-bold text-espresso">
                        S/ {product.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => triggerAdd(product)}
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition ${
                        isAdded
                          ? 'bg-forest text-parchment'
                          : 'bg-espresso text-parchment hover:bg-terracotta'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Agregado</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-4 w-4" />
                          <span>Añadir a Bolsa</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
