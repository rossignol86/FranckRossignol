function initCarousel(className) {
  const images = document.querySelectorAll(`.${className}`);
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 2000);
}

// Initialise les deux carrousels :
initCarousel('carousel1-image');
initCarousel('carousel2-image');
