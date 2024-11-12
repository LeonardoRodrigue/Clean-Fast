let mostrandoLar = false;
let mostrandoEmpresa = false;
let currentSlide = 0;
let intervalId;

// Controle de Slides
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    if (slides.length && indicators.length) {
        slides[0].classList.add('active');
        indicators[0].classList.add('active');
        intervalId = setInterval(changeSlide, 5000);
    }
});

function changeSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    if (slides.length && indicators.length) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
}

function goToSlide(slideIndex) {
    clearInterval(intervalId);
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    if (slides.length && indicators.length) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');

        currentSlide = slideIndex;

        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');

        intervalId = setInterval(changeSlide, 5000);
    }
}

// Controle de exibição das seções "Para o seu lar" e "Para sua empresa"
function showLar() {
    const larSection = document.getElementById('lar-section');
    const empresaSection = document.getElementById('empresa-section');

    if (larSection && empresaSection) {
        if (mostrandoLar) {
            larSection.style.display = 'none';
            mostrandoLar = false;
        } else {
            larSection.style.display = 'flex';
            empresaSection.style.display = 'none';
            mostrandoLar = true;
            mostrandoEmpresa = false;
        }
    }
}

function showEmpresa() {
    const larSection = document.getElementById('lar-section');
    const empresaSection = document.getElementById('empresa-section');

    if (larSection && empresaSection) {
        if (mostrandoEmpresa) {
            empresaSection.style.display = 'none';
            mostrandoEmpresa = false;
        } else {
            empresaSection.style.display = 'flex';
            larSection.style.display = 'none';
            mostrandoEmpresa = true;
            mostrandoLar = false;
        }
    }
}

// Controle de dropdown
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu) {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }
}

window.onclick = function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu && !event.target.matches('.user-icon img')) {
        dropdownMenu.style.display = 'none';
    }
};

// Alternância de visibilidade da senha
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const passwordToggle = document.querySelector(".toggle-password");
    if (passwordField && passwordToggle) {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            passwordToggle.textContent = "🙈";
        } else {
            passwordField.type = "password";
            passwordToggle.textContent = "👁️";
        }
    }
}

// Validação do checkbox antes de avançar
function validarConcordo() {
    const checkbox = document.getElementById("concordo");

    if (checkbox && checkbox.checked) {
        if (window.location.pathname.includes('cadastro-diarista4.html')) {
            window.location.href = 'cadastro-diarista5.html';
        } else if (window.location.pathname.includes('cadastro-diarista7.html')) {
            window.location.href = 'opcoes.html';
        }
    } else {
        alert("Por favor, aceite os Termos e Condições antes de continuar.");
    }
}
