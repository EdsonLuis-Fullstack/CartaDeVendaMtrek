const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');

let currentIndex = 0;
const visibleSlides = 3; // Quantas imagens aparecem ao mesmo tempo

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

// Set initial styles
window.addEventListener('load', () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.display = 'flex';
  track.style.transition = 'transform 0.5s ease-in-out';
  slides.forEach(slide => {
    slide.style.flex = '0 0 auto';
    slide.style.width = `${slideWidth}px`;
  });
});
