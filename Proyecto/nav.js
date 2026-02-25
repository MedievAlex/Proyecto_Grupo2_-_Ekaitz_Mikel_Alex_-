/* =============================================
   PROYECTO FINAL DE GRADO — DAM
   Script compartido (nav, menú móvil)
   ============================================= */

function toggleMenu() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

// Cierra menú móvil al hacer clic fuera
document.addEventListener('click', e => {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger');
  if (nav && nav.classList.contains('open') &&
      !nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// Marca enlace activo según la página actual
(function markActive() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav#main-nav a, #mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '#' && page.includes(href.replace('.html', ''))) {
      a.classList.add('active');
    }
  });
})();
