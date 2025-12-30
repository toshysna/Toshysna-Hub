const layers = [
  { selector: ".layer-1", speed: 0.25, offset: 0 },
  { selector: ".layer-2", speed: 0.20, offset: 1000 },
  { selector: ".layer-3", speed: 0.15, offset: 2000 },
  { selector: ".layer-4", speed: 0.10, offset: 3000 },
  { selector: ".layer-5", speed: 0.05, offset: 4000 }
];

window.addEventListener("scroll", () => {
  const sc = window.scrollY;

  layers.forEach(layer => {
    const el = document.querySelector(layer.selector);
    if (!el) return;

   
    const s = Math.max(0, sc - layer.offset);

    
    el.style.transform = `translateY(${s * layer.speed}px)`;
  });
});
