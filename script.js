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

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const lengthRequirement = document.getElementById('length-requirement');
    const digitRequirement = document.getElementById('digit-requirement');
    const nonDigitRequirement = document.getElementById('non-digit-requirement');

    // Valida os requisitos conforme o usuário digita a senha
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        
        // Verifica se tem pelo menos 8 caracteres
        if (password.length >= 8) {
            lengthRequirement.querySelector('.requirement-icon').textContent = '✅';
            lengthRequirement.classList.add('valid');
        } else {
            lengthRequirement.querySelector('.requirement-icon').textContent = '❌';
            lengthRequirement.classList.remove('valid');
        }

        // Verifica se tem pelo menos um dígito
        if (/\d/.test(password)) {
            digitRequirement.querySelector('.requirement-icon').textContent = '✅';
            digitRequirement.classList.add('valid');
        } else {
            digitRequirement.querySelector('.requirement-icon').textContent = '❌';
            digitRequirement.classList.remove('valid');
        }

        // Verifica se tem pelo menos um caractere não numérico
        if (/[^\d]/.test(password)) {
            nonDigitRequirement.querySelector('.requirement-icon').textContent = '✅';
            nonDigitRequirement.classList.add('valid');
        } else {
            nonDigitRequirement.querySelector('.requirement-icon').textContent = '❌';
            nonDigitRequirement.classList.remove('valid');
        }
    });
});

// Função para validar a senha antes de avançar
function validarSenha() {
    const lengthRequirement = document.getElementById('length-requirement');
    const digitRequirement = document.getElementById('digit-requirement');
    const nonDigitRequirement = document.getElementById('non-digit-requirement');

    if (lengthRequirement.classList.contains('valid') &&
        digitRequirement.classList.contains('valid') &&
        nonDigitRequirement.classList.contains('valid')) {
        window.location.href = 'cadastro2.html'; // Redireciona para a próxima página
    } else {
        alert("Por favor, preencha todos os requisitos da senha antes de continuar.");
    }
}
