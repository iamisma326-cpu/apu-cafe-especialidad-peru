import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonialsData } from '../data/coffeeData';
import { Quote, Star } from 'lucide-react';

export default function Testimonios({ reducedMotion }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.testimonio-card', {
          y: 40,
          opacity: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="border-t border-espresso/10 bg-sand/60 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            04 / Bitácora de Catadores & Baristas
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-espresso sm:text-5xl">
            En las barras de especialidad más exigentes del país.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonialsData.map((item) => (
            <blockquote
              key={item.id}
              className="testimonio-card flex flex-col justify-between rounded-3xl border border-espresso/10 bg-parchment p-8 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-terracotta">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-espresso/15" />
                </div>

                <p className="mt-6 font-serif text-lg leading-relaxed text-espresso">
                  “{item.quote}”
                </p>
              </div>

              <footer className="mt-8 flex items-center gap-4 border-t border-espresso/10 pt-5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <cite className="not-italic font-semibold text-espresso">
                    {item.author}
                  </cite>
                  <p className="font-mono text-xs text-espresso/65">
                    {item.role}
                  </p>
                  <p className="font-mono text-[11px] text-terracotta">
                    Lote favorito: {item.favoriteLot}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
