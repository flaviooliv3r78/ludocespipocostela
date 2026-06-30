document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const SCROLL_THRESHOLD = 50; // px para ativar o estado "scrolled"

  function handleNavbarScroll() {
    const scrolled = window.scrollY || window.pageYOffset;
    if (!navbar) return;
    if (scrolled > SCROLL_THRESHOLD) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  // checa no carregamento (caso abra já rolado) e ao rolar
  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  const whatsapp = document.querySelector('.whatsapp-float');
  const SHOW_AFTER = 120; // px rolados para mostrar o botão

  function toggleWhatsapp() {
    const y = window.scrollY || window.pageYOffset;
    if (!whatsapp) return;
    if (y > SHOW_AFTER) whatsapp.classList.add('visible');
    else whatsapp.classList.remove('visible');
  }

  toggleWhatsapp();
  window.addEventListener('scroll', toggleWhatsapp, { passive: true });
});