/* Taller Lombardi — interacciones de la landing */
(function () {
  "use strict";

  /* --- Iconos Lucide --- */
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* --- Red de seguridad: si AOS no cargó, nada queda invisible --- */
  if (typeof AOS === "undefined") {
    var s = document.createElement("style");
    s.textContent = "[data-aos]{opacity:1 !important;transform:none !important}";
    document.head.appendChild(s);
  } else {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }

  /* --- Año del footer --- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* --- Smooth scroll con Lenis --- */
  var lenis = null;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (window.Lenis && !reduced) {
    lenis = new window.Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* --- Anchors internos: los maneja Lenis (o scroll nativo de fallback) --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -70 });
      } else {
        target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      }
    });
  });

  /* --- Count-up de las estadísticas del taller --- */
  var nums = document.querySelectorAll(".stat__num");
  var fmt = new Intl.NumberFormat("es-AR");

  function countUp(el) {
    var end = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var start = null;
    var dur = 1400;
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt.format(Math.round(end * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window && nums.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            countUp(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach(function (n) { io.observe(n); });
  } else {
    nums.forEach(function (n) {
      n.textContent = fmt.format(parseInt(n.getAttribute("data-count"), 10) || 0) + (n.getAttribute("data-suffix") || "");
    });
  }
})();
