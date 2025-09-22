const heroBg = document.querySelector('.hero-bg');
const mainSection = document.querySelector('.main-section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const height = mainSection.offsetHeight;
  const move = Math.min(scrollY / height * 100, 100);
  heroBg.style.transform = `translateY(-${move}%)`;
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}
