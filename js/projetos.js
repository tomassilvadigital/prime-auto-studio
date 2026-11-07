// Galeria de projetos — filtros + lightbox acessível.
(() => {
  const cards = [...document.querySelectorAll('.showcase-card')];
  const filters = [...document.querySelectorAll('.filter-chip')];
  const counter = document.getElementById('gallery-count');
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let visible = 0;
    cards.forEach(card => {
      const matched = category === 'todos' || card.dataset.category === category;
      card.hidden = !matched;
      if (matched) visible++;
    });
    counter.textContent = `${String(visible).padStart(2, '0')} ${visible === 1 ? 'REGISTO' : 'REGISTOS'}`;
  }));
  const dialog = document.getElementById('project-lightbox');
  if (!dialog) return;
  const stage = dialog.querySelector('.lightbox-stage');
  const image = dialog.querySelector('.lightbox-image');
  const title = document.getElementById('lightbox-title');
  const description = document.getElementById('lightbox-description');
  const close = dialog.querySelector('.lightbox-close');
  const zoomIn = dialog.querySelector('.zoom-in');
  const zoomOut = dialog.querySelector('.zoom-out');
  const zoomReset = dialog.querySelector('.zoom-reset');
  const zoomLevel = dialog.querySelector('.zoom-level');
  const collections = {
    mclaren: [
      {src:'assets/images/carros/mclaren-frente.webp',alt:'McLaren 600LT azul e preto visto de frente na oficina',caption:'Vista frontal · TwoFace Satin Blue & Satin Black'},
      {src:'assets/images/carros/mclaren-portas.webp',alt:'McLaren 600LT azul e preto com as portas levantadas',caption:'Vista com portas abertas'},
      {src:'assets/images/carros/mclaren-exterior.webp',alt:'McLaren 600LT azul fotografado no exterior',caption:'Vista exterior'}
    ],
    porsche: [
      {src:'assets/images/carros/porsche-oficina.webp',alt:'Porsche 911 com livery amarela e preta dentro da oficina',caption:'Decoração final · vista na oficina'},
      {src:'assets/images/carros/porsche-exterior.webp',alt:'Porsche 911 com decoração de competição fotografado no exterior',caption:'Decoração final · vista exterior'},
      {src:'assets/images/carros/porsche-design.webp',alt:'Fotografia de um ecrã com proposta gráfica para Porsche 911',caption:'Registo do desenho gráfico'}
    ],
    urus: [{src:'assets/images/carros/urus-exterior.webp',alt:'Lamborghini Urus vermelho fotografado no exterior',caption:'Registo fotográfico · trabalho por confirmar'}]
  };
  const prev = dialog.querySelector('.lightbox-prev');
  const next = dialog.querySelector('.lightbox-next');
  const photoCounter = dialog.querySelector('.lightbox-counter');
  let currentPhotos = [], photoIndex = 0;
  let previousFocus = null;
  let scale = 1, x = 0, y = 0;
  const pointers = new Map();
  let gesture = null;

  function updateImage() {
    // Impede que a fotografia desapareça completamente fora da área visível.
    const limitX = (stage.clientWidth * (scale - 1)) / 2;
    const limitY = (stage.clientHeight * (scale - 1)) / 2;
    x = Math.max(-limitX, Math.min(limitX, x));
    y = Math.max(-limitY, Math.min(limitY, y));
    image.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    zoomLevel.textContent = `${Math.round(scale * 100)}%`;
    stage.classList.toggle('is-zoomed', scale > 1);
  }
  function setZoom(next) {
    scale = Math.max(1, Math.min(5, next));
    if (scale === 1) { x = 0; y = 0; }
    updateImage();
  }
  function resetZoom() { setZoom(1); }

  function showPhoto(nextIndex) {
    if (!currentPhotos.length) return;
    photoIndex = (nextIndex + currentPhotos.length) % currentPhotos.length;
    const photo = currentPhotos[photoIndex];
    image.src = photo.src;
    image.alt = photo.alt;
    description.textContent = photo.caption;
    photoCounter.textContent = `${photoIndex + 1} / ${currentPhotos.length}`;
    const multiple = currentPhotos.length > 1;
    prev.disabled = !multiple;
    next.disabled = !multiple;
    pointers.clear(); gesture = null;
    stage.classList.remove('is-dragging');
    resetZoom();
  }
  document.querySelectorAll('.showcase-open').forEach(button => button.addEventListener('click', () => {
    previousFocus = button;
    title.textContent = button.dataset.title;
    const img = button.querySelector('img');
    currentPhotos = collections[button.dataset.project] || [{
      src:button.dataset.image, alt:img?.alt || button.dataset.title,
      caption:button.dataset.description || ''
    }];
    dialog.hidden = false;
    document.body.classList.add('lightbox-open');
    showPhoto(0);
    close.focus();
  }));
  prev.addEventListener('click', () => showPhoto(photoIndex - 1));
  next.addEventListener('click', () => showPhoto(photoIndex + 1));
  function closeDialog() {
    dialog.hidden = true;
    image.removeAttribute('src');
    document.body.classList.remove('lightbox-open');
    pointers.clear(); gesture = null;
    currentPhotos = [];
    stage.classList.remove('is-dragging');
    resetZoom();
    if (previousFocus) previousFocus.focus();
  }
  close.addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
  zoomIn.addEventListener('click', () => setZoom(scale + .5));
  zoomOut.addEventListener('click', () => setZoom(scale - .5));
  zoomReset.addEventListener('click', resetZoom);
  stage.addEventListener('dblclick', () => setZoom(scale > 1 ? 1 : 2));
  stage.addEventListener('wheel', event => {
    event.preventDefault();
    setZoom(scale + (event.deltaY < 0 ? .25 : -.25));
  }, { passive:false });

  function distance(a,b) { return Math.hypot(a.x-b.x,a.y-b.y); }
  stage.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    stage.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, {x:event.clientX,y:event.clientY});
    if (pointers.size === 2) {
      const [a,b] = [...pointers.values()];
      gesture = {distance:distance(a,b),scale};
    }
    if (scale > 1) stage.classList.add('is-dragging');
  });
  stage.addEventListener('pointermove', event => {
    if (!pointers.has(event.pointerId)) return;
    const prior = pointers.get(event.pointerId);
    pointers.set(event.pointerId, {x:event.clientX,y:event.clientY});
    if (pointers.size === 2 && gesture) {
      const [a,b] = [...pointers.values()];
      setZoom(gesture.scale * distance(a,b) / Math.max(1,gesture.distance));
    } else if (scale > 1 && pointers.size === 1) {
      x += event.clientX - prior.x;
      y += event.clientY - prior.y;
      updateImage();
    }
  });
  function finishPointer(event) {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) gesture = null;
    if (!pointers.size) stage.classList.remove('is-dragging');
  }
  stage.addEventListener('pointerup', finishPointer);
  stage.addEventListener('pointercancel', finishPointer);
  window.addEventListener('resize', () => { if (!dialog.hidden) updateImage(); });
  document.addEventListener('keydown', event => {
    if (dialog.hidden) return;
    if (event.key === 'Escape') { closeDialog(); return; }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(photoIndex - 1); return; }
    if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(photoIndex + 1); return; }
    if (event.key === '+' || event.key === '=') { setZoom(scale + .5); return; }
    if (event.key === '-') { setZoom(scale - .5); return; }
    if (event.key === '0') { resetZoom(); return; }
    if (event.key === 'Tab') {
      const controls = [close, prev, next, zoomOut, zoomIn, zoomReset].filter(item => !item.disabled);
      const current = controls.indexOf(document.activeElement);
      if (event.shiftKey && current <= 0) { event.preventDefault(); controls[controls.length-1].focus(); }
      else if (!event.shiftKey && current === controls.length-1) { event.preventDefault(); controls[0].focus(); }
    }
  });
})();
