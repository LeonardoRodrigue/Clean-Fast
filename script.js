let currentSlide = 0;
let mostrandoLar = false;
let mostrandoEmpresa = false;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

function changeSlide() {
    if (slides.length === 0) return; // Verifica se há slides
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    // Incrementa o índice do slide e volta ao início se necessário
    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function goToSlide(slideIndex) {
    if (slideIndex < 0 || slideIndex >= slides.length) return; // Verifique se o índice é válido
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = slideIndex;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        slides[0].classList.add('active');
        indicators[0].classList.add('active');

        // Muda de slide automaticamente a cada 5 segundos
        setInterval(changeSlide, 1000);
    }
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