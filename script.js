
let mostrandoLar = false;
let mostrandoEmpresa = false;
// Adicione ao script.js

let currentSlide = 0;
let intervalId;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function goToSlide(slideIndex) {
    clearInterval(intervalId); // Pausa o carrossel automático quando o usuário seleciona uma etapa

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = slideIndex;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');

    intervalId = setInterval(changeSlide, 5000); // Reinicia o carrossel automático após a seleção
}

document.addEventListener('DOMContentLoaded', () => {
    slides[0].classList.add('active');
    indicators[0].classList.add('active');

    intervalId = setInterval(changeSlide, 5000); // Troca de slide a cada 5 segundos
});


function showLar() {
    if (mostrandoLar) {
        // Se já estiver mostrando, oculta a seção "Para o seu lar"
        document.getElementById('lar-section').style.display = 'none';
        mostrandoLar = false;
    } else {
        // Caso contrário, exibe a seção "Para o seu lar" e oculta a seção "Para sua empresa"
        document.getElementById('lar-section').style.display = 'flex';
        document.getElementById('empresa-section').style.display = 'none';
        mostrandoLar = true;
        mostrandoEmpresa = false; // Atualiza o estado da empresa
    }
}

function showEmpresa() {
    if (mostrandoEmpresa) {
        // Se já estiver mostrando, oculta a seção "Para sua empresa"
        document.getElementById('empresa-section').style.display = 'none';
        mostrandoEmpresa = false;
    } else {
        // Caso contrário, exibe a seção "Para sua empresa" e oculta a seção "Para o seu lar"
        document.getElementById('empresa-section').style.display = 'flex';
        document.getElementById('lar-section').style.display = 'none';
        mostrandoEmpresa = true;
        mostrandoLar = false; // Atualiza o estado do lar
    }
}

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Fecha o dropdown ao clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.user-icon img')) {
        const dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
};