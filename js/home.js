document.getElementById('witcherGame').addEventListener('click', function() {
    window.location.href = 'game_info.html'; // Replace with the actual path to your game info file
});

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides .screenshot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function showSlide(i) {
    index += i;
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(-1));
nextButton.addEventListener('click', () => showSlide(1));