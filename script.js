const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  const links = document.querySelectorAll('.nav-links a, .button');
  links.forEach((link) => {
    link.addEventListener('mousemove', (event) => {
      const rect = link.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      link.style.transform = `translate3d(${x * 0.02}px, ${y * 0.02}px, 0)`;
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
    });
  });
}
