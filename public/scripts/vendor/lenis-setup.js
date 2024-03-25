const lenis = new Lenis({ smooth: true, smoothTouch: false });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
