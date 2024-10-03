let currentIndex = 0;
const carousel = document.querySelector('.carousel2');
const items = document.querySelectorAll('.carousel-item2');
const totalItems = items.length;

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

// Function to update the carousel based on the current index
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Pause auto-slide on user interaction and resume after a delay
carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 3000));

// Handle manual controls
document.querySelector('.prev2').addEventListener('click', prevSlide);
document.querySelector('.button2').addEventListener('click', nextSlide);
