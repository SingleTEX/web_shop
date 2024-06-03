document.getElementById('witcherGame').addEventListener('click', function()
{

    window.location.href = 'game_info.html'; 
});
document.getElementById('fallout4').addEventListener('click', function()
{

    window.location.href = 'fallout.html'; 
});
document.getElementById('falloutnew').addEventListener('click', function()
{

    window.location.href = 'falloutnew.html'; 
});
document.getElementById('skyrim').addEventListener('click', function() {

    window.location.href = 'skyrim.html'; 
});

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides .screenshot');
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

