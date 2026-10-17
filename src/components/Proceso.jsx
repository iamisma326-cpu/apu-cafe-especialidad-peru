import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processSteps } from '../data/coffeeData';
import { Clock, Thermometer, Droplets, Flame } from 'lucide-react';

const stepIcons = [Droplets, Thermometer, Clock, Flame];

export default function Proceso({ reducedMotion }) {
  const sectionRef = useRef(null);
  const pinContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions;

          if (!isDesktop || reduceMotion) {
            return;
          }

          const cards = gsap.utils.toArray('.proceso-slide');
          const totalSlides = cards.length;

          gsap.set(cards.slice(1), { yPercent: 100, opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: pinContainerRef.current,
              start: 'top top',
              end: () => `+=${window.innerHeight * 2.8}`,
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
              onUpdate: (self) => {
                const idx = Math.min(
                  totalSlides - 1,
                  Math.floor(self.progress * totalSlides)
                );
                setActiveIndex(idx);
              },
            },
          });

          cards.forEach((card, index) => {
            if (index === 0) return;
            tl.to(
              cards[index - 1],
              {
                scale: 0.94,
                opacity: 0.25,
                duration: 1,
                ease: 'power2.inOut',
              },
              index - 1
            ).to(
              card,
              {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
              },
              index - 1
            );
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="bg-espresso text-parchment"
    >
      {/* Pinned Desktop / Stacked Mobile Container */}
      <div
        ref={pinContainerRef}
        className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-10 lg:py-12"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Narrative + Progress */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ochre">
              02 / Beneficio & Maestría Técnica
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light leading-tight sm:text-5xl">
              Del árbol a la taza: cuatro rituales de precisión.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-parchment/75 sm:text-base">
              Cada cereza pasa por más de 25 días de cuidados manuales antes de llegar a nuestro tambor de tueste en Lima. Desliza para recorrer cada etapa.
            </p>

            {/* Step Indicators */}
            <div className="mt-8 hidden space-y-3 lg:block">
              {processSteps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={step.number}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? 'border-ochre bg-parchment/10 text-parchment'
                        : 'border-parchment/10 bg-transparent text-parchment/45'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-ochre">
                        {step.number}
                      </span>
                      <span className="font-serif text-base">{step.title}</span>
                    </div>
                    <span className="font-mono text-[11px] uppercase">
                      {step.metric}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Cards Stack on Desktop / Vertical List on Mobile */}
          <div className="relative lg:col-span-7 lg:h-[520px]">
            {processSteps.map((step, index) => {
              const IconComponent = stepIcons[index % stepIcons.length];
              return (
                <article
                  key={step.number}
                  className="proceso-slide mb-8 overflow-hidden rounded-3xl border border-parchment/15 bg-[#261B15] shadow-2xl lg: absolute lg:inset-0 lg:mb-0 flex flex-col justify-between"
                >
                  <div className="relative h-56 sm:h-64 lg:h-64 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#261B15] via-transparent to-black/30" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-espresso/85 px-3.5 py-1.5 backdrop-blur-md">
                      <IconComponent className="h-4 w-4 text-ochre" />
                      <span className="font-mono text-xs text-parchment">
                        ETAPA {step.number}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 rounded-full bg-terracotta px-3 py-1 font-mono text-xs font-bold text-parchment">
                      {step.metric}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-ochre">
                        {step.subtitle}
                      </p>
                      <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-parchment">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-parchment/80 sm:text-base">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-parchment/10 pt-4 font-mono text-xs text-parchment/60">
                      <span>PROTOCOLO: {step.protocol}</span>
                      <span>CONTROL DE CALIDAD: LOTE A LOTE</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
