'use strict';
(() => {
 const preference = matchMedia('(prefers-reduced-motion: reduce)');
 if (preference.matches || !('IntersectionObserver' in window)) return;
 const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
   if (!entry.isIntersecting) continue;
   observer.unobserve(entry.target);
   if (preference.matches || entry.target.dataset.played) continue;
   entry.target.dataset.played = 'true';
   entry.target.querySelector('.radar-data').classList.add('radar-growing');
  }
 }, {threshold:0.25});
 document.querySelectorAll('.nutrition-radar').forEach(chart=>observer.observe(chart));
 preference.addEventListener('change', event=>{
  if (!event.matches) return;
  observer.disconnect();
  document.querySelectorAll('.radar-growing').forEach(data=>data.classList.remove('radar-growing'));
 });
})();
