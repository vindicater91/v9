document.addEventListener('DOMContentLoaded', () => {
  const filterWrap = document.getElementById('filters');
  const buttons = filterWrap ? Array.from(filterWrap.querySelectorAll('[data-filter]')) : [];
  const grid = document.getElementById('galleryGrid');
  const cards = grid ? Array.from(grid.querySelectorAll('[data-species]')) : [];

  const applyFilter = (key) => {
    cards.forEach((card) => {
      const show = key === 'all' || card.getAttribute('data-species') === key;
      card.style.display = show ? '' : 'none';
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-filter') || 'all';
      applyFilter(key);
    });
  });

  const initial = buttons.find((b) => b.classList.contains('active'));
  applyFilter(initial ? initial.getAttribute('data-filter') : 'all');
  // Process slideshow (2s interval)
  const slide = document.querySelector('.process-slideshow');
  if (slide) {
    const imgs = Array.from(slide.querySelectorAll('img'));
    if (imgs.length) {
      let idx = 0;
      imgs.forEach((img, i) => img.classList.toggle('active', i === 0));
      setInterval(() => {
        imgs[idx].classList.remove('active');
        idx = (idx + 1) % imgs.length;
        imgs[idx].classList.add('active');
      }, 2000);
    }
  }
});
