import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity }) {
  const [checkoutDone, setCheckoutDone] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 140 || subtotal === 0 ? 0 : 15;
  const total = subtotal + shipping;

  const handleSimulateOrder = (e) => {
    e.preventDefault();
    setCheckoutDone(true);
    setTimeout(() => {
      setCheckoutDone(false);
      onClose();
    }, 2600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-espresso/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Carrito de compras"
    >
      <div className="relative flex h-full w-full max-w-md flex-col justify-between bg-parchment p-6 text-espresso shadow-2xl sm:p-8">
        <div>
          <div className="flex items-center justify-between border-b border-espresso/15 pb-5">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="h-5 w-5 text-terracotta" />
              <h2 className="font-serif text-xl font-medium tracking-tight">
                Tu Bolsa de Tueste
              </h2>
              <span className="rounded-full bg-espresso/10 px-2.5 py-0.5 font-mono text-xs">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-espresso/60 transition hover:bg-espresso/10 hover:text-espresso"
              aria-label="Cerrar carrito"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Free shipping bar */}
          <div className="mt-4 rounded-lg bg-sand/70 p-3 text-xs">
            {subtotal >= 140 ? (
              <p className="flex items-center gap-1.5 font-medium text-forest">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                ¡Tienes envío express gratuito a todo el Perú!
              </p>
            ) : (
              <p className="text-espresso/80">
                Te faltan{' '}
                <span className="font-mono font-bold text-terracotta">
                  S/ {(140 - subtotal).toFixed(2)}
                </span>{' '}
                para envío gratuito (pedidos desde S/ 140).
              </p>
            )}
          </div>
        </div>

        {/* Items list */}
        <div className="my-6 flex-1 space-y-4 overflow-y-auto pr-1">
          {checkoutDone ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest/15 text-forest">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h3 className="font-serif text-2xl">¡Orden de tueste registrada!</h3>
              <p className="mt-2 max-w-xs text-sm text-espresso/70">
                Tostaremos tu lote este martes en Barranco y lo enviaremos recién desgasificado.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-espresso/60">
              <ShoppingBag className="mb-3 h-10 w-10 stroke-1" />
              <p className="font-serif text-lg">Tu bolsa está vacía</p>
              <p className="mt-1 text-xs">
                Explora nuestros microlotes de Cusco, Cajamarca y Amazonas.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.grind}`}
                className="flex gap-4 rounded-xl border border-espresso/10 bg-white/60 p-3.5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-base font-medium leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm font-semibold">
                        S/ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-espresso/60">
                      {item.region} · {item.grind}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-espresso/60">
                      Bolsa 250g · SCA {item.sca}
                    </span>
                    <div className="flex items-center gap-2 rounded-full border border-espresso/15 bg-parchment px-2 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.grind, -1)}
                        className="p-1 text-espresso/70 hover:text-espresso"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-mono text-xs font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.grind, 1)}
                        className="p-1 text-espresso/70 hover:text-espresso"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary footer */}
        {items.length > 0 && !checkoutDone && (
          <div className="border-t border-espresso/15 pt-5">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-espresso/70">
                <span>Subtotal</span>
                <span className="font-mono">S/ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-espresso/70">
                <span>Envío nacional</span>
                <span className="font-mono">
                  {shipping === 0 ? 'GRATIS' : `S/ ${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between border-t border-espresso/10 pt-2 text-base font-semibold">
                <span>Total</span>
                <span className="font-mono">S/ {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleSimulateOrder}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-parchment transition hover:bg-espresso"
            >
              <span>Confirmar Pedido de Tueste</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-2.5 text-center font-mono text-[11px] text-espresso/55">
              Tostado bajo demanda en Lima · Trazabilidad directa al caficultor
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
