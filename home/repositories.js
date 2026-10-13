
// Repository carousel: cyclic navigation, touch, keyboard and reduced motion.
document.querySelectorAll('.repo-carousel').forEach((carousel) => {
  const slides = [...carousel.querySelectorAll('.repo-slide')];
  const dots = carousel.parentElement.querySelector('.repo-dots');
  if (!slides.length) return;
  let current = 0, timer, touchX = null;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const dotButtons = slides.map((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button'; dot.setAttribute('aria-label', `Show ${slide.dataset.repo}`);
    dot.addEventListener('click', () => { render(i); restart(); });
    dots.appendChild(dot); return dot;
  });
  function render(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      let offset = (i - current + slides.length) % slides.length;
      if (offset > slides.length / 2) offset -= slides.length;
      slide.dataset.offset = Math.abs(offset) <= 2 ? String(offset) : 'hidden';
      slide.tabIndex = offset === 0 ? 0 : -1;
      slide.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
    });
    dotButtons.forEach((dot,i) => dot.setAttribute('aria-current', String(i === current)));
  }
  function stop() { clearInterval(timer); }
  function start() { if (!reduced.matches && !document.hidden) timer = setInterval(() => render(current + 1), 4000); }
  function restart() { stop(); if (!carousel.matches(':hover') && !carousel.contains(document.activeElement)) start(); }
  carousel.querySelector('.repo-prev').addEventListener('click', () => { render(current - 1); restart(); });
  carousel.querySelector('.repo-next').addEventListener('click', () => { render(current + 1); restart(); });
  slides.forEach((slide,i) => slide.addEventListener('click', e => { if (i !== current) { e.preventDefault(); render(i); restart(); } }));
  carousel.addEventListener('keydown', e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); render(current + (e.key === 'ArrowRight' ? 1 : -1)); restart(); } });
  carousel.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, {passive:true});
  carousel.addEventListener('touchend', e => { if (touchX === null) return; const delta = e.changedTouches[0].clientX - touchX; touchX = null; if (Math.abs(delta) > 35) { render(current + (delta < 0 ? 1 : -1)); restart(); } }, {passive:true});
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', restart);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', () => setTimeout(restart, 0));
  document.addEventListener('visibilitychange', restart);
  reduced.addEventListener?.('change', restart);
  render(0); start();
});
