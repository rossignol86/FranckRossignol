const images = document.querySelectorAll('.carousel-image');
let current = 0;

setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 2000); // toutes les 2 secondes
