import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, Mountain, Award, Sparkles } from 'lucide-react';

export default function Hero({ reducedMotion }) {
  const heroRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.hero-kicker', {
          y: 24,
          opacity: 0,
          duration: 0.8,
          delay: 0.15,
        })
          .from(
            '.hero-title-line',
            {
              yPercent: 105,
              opacity: 0,
              duration: 1.05,
              stagger: 0.12,
            },
            '-=0.5'
          )
          .from(
            '.hero-copy',
            {
              y: 24,
              opacity: 0,
              duration: 0.85,
              stagger: 0.1,
            },
            '-=0.6'
          )
          .from(
            imageWrapperRef.current,
            {
              clipPath: 'inset(12% 12% 12% 12% round 24px)',
              opacity: 0,
              duration: 1.25,
              ease: 'power4.out',
            },
            '-=0.9'
          );

        gsap.to(imageRef.current, {
          yPercent: 14,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(badgeRef.current, {
          rotation: 360,
          duration: 28,
          repeat: -1,
          ease: 'none',
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Subtle topographic background lines */}
      <svg
        className="pointer-events-none absolute -right-32 -top-24 h-[680px] w-[680px] text-espresso/[0.04]"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M300 40C420 40 540 130 540 290C540 450 430 550 290 550C150 550 50 440 50 290C50 140 180 40 300 40Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M300 95C395 95 485 165 485 290C485 415 400 495 290 495C180 495 105 410 105 290C105 170 205 95 300 95Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M300 155C365 155 430 205 430 290C430 375 370 435 290 435C210 435 160 375 160 290C160 205 235 155 300 155Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Editorial Column */}
          <div className="lg:col-span-7">
            <div className="hero-kicker inline-flex items-center gap-2.5 rounded-full border border-espresso/15 bg-sand/70 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-espresso/80">
                Cosecha 2025 · Andes Orientales del Perú
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-light leading-[1.04] tracking-tight text-espresso sm:text-6xl lg:text-[4.35rem]">
              <span className="block overflow-hidden pb-1">
                <span className="hero-title-line block">
                  Donde la niebla
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-title-line block italic text-terracotta">
                  besa el cafetal
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-title-line block">
                  a 2,100 metros.
                </span>
              </span>
            </h1>

            <p className="hero-copy mt-6 max-w-xl text-base leading-relaxed text-espresso/80 sm:text-lg">
              Seleccionamos microlotes de variedades Geisha, Bourbon y Typica cultivados bajo sombra de bosque nuboso en Cusco, Cajamarca y Amazonas. Tostado artesanalmente cada semana para honrar su terroir.
            </p>

            <div className="hero-copy mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#productos"
                className="group inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-sm font-medium text-parchment transition hover:bg-terracotta"
              >
                <span>Explorar Microlotes</span>
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-6 py-4 text-sm font-medium text-espresso transition hover:border-espresso hover:bg-sand/50"
              >
                <span>Conocer el Beneficio</span>
              </a>
            </div>

            {/* Technical Specs Bar */}
            <div className="hero-copy mt-12 grid grid-cols-3 gap-4 border-t border-espresso/15 pt-8 sm:gap-8">
              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-terracotta">
                  <Mountain className="h-3.5 w-3.5" />
                  <span>Altitud</span>
                </div>
                <p className="mt-1 font-mono text-lg font-bold sm:text-2xl">
                  1,750–2,200m
                </p>
                <p className="text-xs text-espresso/60">Crecimiento lento</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-terracotta">
                  <Award className="h-3.5 w-3.5" />
                  <span>Puntaje SCA</span>
                </div>
                <p className="mt-1 font-mono text-lg font-bold sm:text-2xl">
                  87.5 – 90.5
                </p>
                <p className="text-xs text-espresso/60">Grado Especialidad</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-terracotta">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Trato Directo</span>
                </div>
                <p className="mt-1 font-mono text-lg font-bold sm:text-2xl">
                  100% Trazable
                </p>
                <p className="text-xs text-espresso/60">18 Fincas familiares</p>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative lg:col-span-5">
            <div
              ref={imageWrapperRef}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-sand shadow-2xl"
            >
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
                alt="Extracción de café de especialidad peruano y cerezas maduras"
                className="h-[115%] w-full -translate-y-[8%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

              {/* Caption inside hero image */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-parchment/20 bg-espresso/75 p-4 text-parchment backdrop-blur-md">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ochre">
                    Lote Destacado · #04-CUS
                  </span>
                  <p className="font-serif text-lg">Finca Huayopata · Geisha Lavado</p>
                  <p className="font-mono text-xs text-parchment/70">
                    Jazmín, bergamota, miel de chancaca
                  </p>
                </div>
                <span className="rounded-lg bg-terracotta px-2.5 py-1 font-mono text-xs font-bold">
                  90.2 SCA
                </span>
              </div>
            </div>

            {/* Rotating seal */}
            <div
               -aria-hidden="true"
              className="absolute -left-6 -top-6 hidden h-28 w-28 items-center justify-center rounded-full border border-espresso/15 bg-parchment p-2 shadow-lg sm:flex"
            >
              <svg
                ref={badgeRef}
                viewBox="0 0 100 100"
                className="h-full w-full fill-espresso"
              >
                <path
                  id="circlePath"
                  fill="none"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
                <text className="font-mono text-[8.5px] uppercase tracking-[0.22em]">
                  <textPath href="#circlePath">
                    • CAFÉ DE ALTURA • ORIGEN PERÚ •
                  </textPath>
                </text>
              </svg>
              <span className="absolute font-serif text-xs italic text-terracotta">
                APU
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
