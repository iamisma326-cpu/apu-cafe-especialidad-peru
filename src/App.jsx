import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Origen from './components/Origen';
import Proceso from './components/Proceso';
import Productos from './components/Productos';
import Testimonios from './components/Testimonios';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { productsData } from './data/coffeeData';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [cart, setCart] = useState([
    {
      ...productsData[0],
      grind: 'Grano Entero',
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const handleAddToCart = (product, grind = 'Grano Entero') => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.grind === grind
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { ...product, grind, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, grind, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.grind === grind
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-parchment text-espresso">
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <Navbar
        cartCount={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main id="contenido-principal">
        <Hero reducedMotion={reducedMotion} />
        <Origen reducedMotion={reducedMotion} />
        <Proceso reducedMotion={reducedMotion} />
        <Productos
          onAddToCart={handleAddToCart}
          reducedMotion={reducedMotion}
        />
        <Testimonios reducedMotion={reducedMotion} />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}
