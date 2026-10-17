# APU · Café de Especialidad de Altura (Perú)

Landing page editorial de alto impacto para una marca de café de especialidad de origen único cultivado en los Andes peruanos (Cusco, Cajamarca y Amazonas). Desarrollada con **React + Vite**, **Tailwind CSS**, **GSAP + ScrollTrigger** y **Lenis Smooth Scroll**.

## Características principales

- **Diseño Editorial Andino Contemporáneo**: Tipografías *Fraunces* (serif), *Plus Jakarta Sans* y *Space Mono* para fichas técnicas SCA y altitudes.
- **Smooth Scroll con Lenis**: Integrado directamente con el ticker de GSAP y sincronizado con `ScrollTrigger`.
- **Sección de Proceso Fijada (Pinned)**: Experiencia inmersiva al hacer scroll horizontal/progresivo en escritorio mostrando las 4 etapas del grano (Cosecha Selectiva, Fermentación Controlada, Secado en Camas Africanas y Tueste Artesanal).
- **Catálogo Interactivo de Microlotes**: Filtro por origen, notas de cata, puntaje SCA, altitud y carrito lateral funcional con simulador de pedido.
- **Accesibilidad (`prefers-reduced-motion`)**: Todas las animaciones utilizan `gsap.matchMedia()` y desactivan el smooth scroll y los pines si el usuario prefiere movimiento reducido.

## Tecnologías utilizadas

- **React 18** + **Vite 5**
- **GSAP 3** (`gsap` + `ScrollTrigger`)
- **Lenis** (`lenis` para scroll suave)
- **Lucide React** (iconografía fina)
- **Tailwind CSS 3.4**

## Estructura del proyecto

```text
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── coffeeData.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Origen.jsx
        ├── Proceso.jsx
        ├── Productos.jsx
        ├── Testimonios.jsx
        ├── Footer.jsx
        └── CartDrawer.jsx
```

## Ejecución local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Compilar para producción:
   ```bash
   npm run build
   ```
