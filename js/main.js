// Navegação responsiva e pequenos comportamentos globais.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!opened));
    toggle.setAttribute('aria-label', opened ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('is-open', !opened);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();


/* ===================================
   MENU COM EFEITO AO FAZER SCROLL
=================================== */

const header = document.querySelector(
  ".home-page .site-header"
);

if (header) {
  function atualizarHeader() {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", atualizarHeader, {
    passive: true
  });

  // Verifica também quando a página é carregada
  atualizarHeader();
}