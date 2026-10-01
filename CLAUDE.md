# landing-tapiceria

Maqueta de muestra ("cómo podría quedar") de una landing page para un negocio de **tapicería de
hogar** — retapizado y restauración de sillones, sillas, butacas, cabeceras. Contenido de ejemplo,
negocio INVENTADO. No es un cliente real.

## Qué es
- **Negocio de ejemplo**: *Taller Lombardi — Tapicería artesanal* (Buenos Aires, Villa Crespo, "desde 1992").
- **Objetivo**: mostrarle a Gastón una landing mobile-first de referencia para el rubro.
- **CTA**: WhatsApp a número de EJEMPLO `+54 9 11 5888-9999` (`wa.me/5491158889999`). ⛔ No es real.

## Stack
- HTML/CSS/JS a mano, 3 archivos separados: `index.html` + `styles.css` + `app.js`.
- Sin bundler, sin framework.
- CDNs: Google Fonts (Fraunces + Montserrat), Lucide (iconos), Lenis (smooth scroll), AOS (scroll reveal).
- Imágenes: Unsplash por URL directa (hotlink `images.unsplash.com`, todas verificadas 200).

## Diseño
- Estética **atelier editorial cálido**: crema/bone + espresso + terracota + verde bosque.
- Display serif **Fraunces** + UI **Montserrat** (honra "Montserrat siempre" de reglas-frontend).
- Iconos **Lucide**, cero emojis en UI, grano SVG, marquee, count-up de stats.

## Secciones
Nav sticky · Hero · Marquee · Servicios (6) · Trabajos/galería · Proceso (4 pasos) · Oficio (banda
oscura + stats) · Testimonios (3) · CTA/Contacto · Footer.

## Deploy
- GitHub Pages, repo `landing-tapiceria`, usuario `gammaautomatizaciones-rc`.
- URL: https://gammaautomatizaciones-rc.github.io/landing-tapiceria/
- `git add` nombrando archivos (nunca `add -A`). Token en `~/.claude/credenciales/key_github_gammaautomatizaciones-rc.md`.

## Si Gastón quiere convertirla en una landing REAL para un cliente
Seguir `~/.claude/memory/procedimientos/como_hacer_unalandingpage.md` desde PASO 1 (las 3 preguntas:
nombre real, teléfono real, secciones, si muestra precios), reemplazar nombre/teléfono/imágenes y
re-deployar en un repo propio del cliente.
