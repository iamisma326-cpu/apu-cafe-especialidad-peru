import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { originsData } from '../data/coffeeData';
import { MapPin, CloudRain, ThermometerSun } from 'lucide-react';

export default function Origen({ reducedMotion }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.origen-header-reveal', {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        });

        gsap.from('.origen-card', {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.origen-grid',
            start: 'top 80%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="origen"
      ref={sectionRef}
      className="relative border-t border-espresso/10 bg-sand/50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="origen-header-reveal font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
              01 / Terroir & Geografía Sagrada
            </p>
            <h2 className="origen-header-reveal mt-3 font-serif text-3xl font-light leading-tight text-espresso sm:text-5xl">
              Tres cordilleras, tres microclimas irrepetibles en el mundo.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="origen-header-reveal text-base leading-relaxed text-espresso/75">
              La vertiente oriental de los Andes peruanos reúne suelos francos volcánicos, días de radiación solar limpia y noches frías que ralentizan la maduración de la cereza, concentrando azúcares complejos y acidez brillante.
            </p>
          </div>
        </div>

        {/* Regions Grid */}
        <div className="origen-grid mt-16 grid gap-8 lg:grid-cols-3">
          {originsData.map((item, idx) => (
            <article
              key={item.id}
              className="origen-card group flex flex-col justify-between overflow-hidden rounded-3xl border border-espresso/10 bg-parchment shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.region} - ${item.valley}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/20 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-parchment/90 px-3 py-1 font-mono text-[11px] font-bold text-espresso backdrop-blur-sm">
                    0{idx + 1} · {item.region.toUpperCase()}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-parchment">
                    <span className="flex items-center gap-1.5 font-mono text-xs">
                      <MapPin className="h-3.5 w-3.5 text-ochre" />
                      {item.coordinates}
                    </span>
                    <span className="rounded bg-forest/90 px-2 py-0.5 font-mono text-xs">
                      {item.altitude}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <p className="font-mono text-xs uppercase tracking-wider text-terracotta">
                    {item.valley}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-medium text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-espresso/75">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-espresso/10 bg-sand/35 px-7 py-4">
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-espresso/75">
                    <ThermometerSun className="h-4 w-4 text-terracotta" />
                    <span>Variedad: {item.varieties}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-espresso/75">
                    <CloudRain className="h-4 w-4 text-forest" />
                    <span>Cosecha: {item.harvest}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
