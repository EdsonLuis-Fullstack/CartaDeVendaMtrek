const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');

let currentIndex = 0;
const visibleSlides = 3; // Mantendo 3 imagens visíveis por vez

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const offset = slideWidth * currentIndex;
  track.style.transform = `translateX(-${offset}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex += 1;
  if (currentIndex > slides.length - visibleSlides) {
    currentIndex = 0;
  }
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = slides.length - visibleSlides;
  }
  updateCarousel();
});

// Configuração inicial
window.addEventListener('load', () => {
  slides.forEach(slide => {
    slide.style.flex = '0 0 33.333%';
    slide.style.width = `${100 / 3}%`;
  });
  updateCarousel();
});