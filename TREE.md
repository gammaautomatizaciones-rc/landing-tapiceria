# TREE — landing-tapiceria

Maqueta de muestra de landing page para un negocio de tapicería de hogar (retapizado y restauración).
Negocio inventado: *Taller Lombardi*. Ver `CLAUDE.md` para el detalle.

```
landing-tapiceria/
├── index.html      # estructura + cabeza SEO/OG + secciones
├── styles.css      # sistema de diseño (atelier cálido: Fraunces + Montserrat, terracota/verde/crema)
├── app.js          # Lenis (smooth scroll) + AOS (reveal) + Lucide + count-up de stats + año footer
├── 404.html        # página de error con marca (self-contained)
├── CLAUDE.md       # contexto del proyecto
└── TREE.md         # este archivo
```

## Relaciones
- Proyecto NUEVO e independiente. No consume ni expone nada de otros proyectos GAMMA.
- Procedimiento de origen: `~/.claude/memory/procedimientos/como_hacer_unalandingpage.md`.
- Deploy: GitHub Pages — `gammaautomatizaciones-rc/landing-tapiceria` →
  https://gammaautomatizaciones-rc.github.io/landing-tapiceria/

## Dependencias externas (CDN, en runtime)
- Google Fonts: Fraunces, Montserrat
- unpkg: lucide, @studio-freight/lenis, aos
- Imágenes: images.unsplash.com (hotlink directo)
