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

window.onclick = function (event) {
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

function validarSenhaDiarista() {
    const lengthRequirement = document.getElementById('length-requirement');
    const digitRequirement = document.getElementById('digit-requirement');
    const nonDigitRequirement = document.getElementById('non-digit-requirement');

    if (lengthRequirement.classList.contains('valid') &&
        digitRequirement.classList.contains('valid') &&
        nonDigitRequirement.classList.contains('valid')) {
        window.location.href = 'cadastro-diarista4.html'; // Redireciona para a próxima página
    } else {
        alert("Por favor, preencha todos os requisitos da senha antes de continuar.");
    }
}

document.querySelectorAll('.filtro-item').forEach(function (button) {
    button.addEventListener('click', function () {
        // Obter o id da seção associada ao botão clicado
        const sectionId = button.id.replace('toggle', '').toLowerCase(); // Modifica para pegar o ID correto

        // Obter todas as seções
        const sections = ['servicos', 'pacotes', 'assinaturas', 'avaliacoes'];

        // Alterna a exibição da seção clicada
        sections.forEach(function (section) {
            var sectionElement = document.getElementById(section);

            // Se o ID da seção for igual ao botão clicado, alterna a visibilidade
            if (section === sectionId) {
                if (sectionElement.style.display === 'none' || sectionElement.style.display === '') {
                    sectionElement.style.display = 'block';
                } else {
                    sectionElement.style.display = 'none';
                }
            } else {
                // Garante que as outras seções estejam ocultas
                sectionElement.style.display = 'none';
            }
        });
    });
});

/*window.onload = function() {
    // Faz a requisição para o backend e preenche as diaristas na tela
    fetch('/api/diaristas')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        return response.json();
    })
    .then(diaristas => {
        console.log(diaristas);
        const container = document.getElementById('diaristas-container');
        diaristas.forEach(diarista => {
            const div = document.createElement('div');
            div.classList.add('profissional');
            div.innerHTML = `
                <img src="${diarista.imagem}" alt="${diarista.nome}">
                <div class="info">
                    <p>${diarista.nome}</p>
                    <p>⭐ ${diarista.avaliacao} - ${diarista.tempo} - ${diarista.recomendacoes} recomendações</p>
                </div>
                <button class="preco">${diarista.preco}</button>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Erro ao carregar as diaristas:', error));
};*/

function marcarServico() {
    // Exibe a mensagem de agendamento com a nova frase
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Serviço agendado para a data disponível mais próxima! Você irá receber por email o horário disponível da diarista.';
    mensagem.style.display = 'block';

    // Esconde a mensagem após 5 segundos
    setTimeout(function() {
        mensagem.style.display = 'none';
    }, 5000);
}


function carregarDiaristas() {
    fetch('diaristas.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar dados das diaristas");
            }
            return response.json();
        })
        .then(diaristas => {
            const container = document.querySelector('.profissionais');
            container.innerHTML = ''; // Limpa o container antes de renderizar
            diaristas.forEach(diarista => {
                const div = document.createElement('div');
                div.classList.add('profissional');

                div.innerHTML = `
                    <img src="${diarista.foto}" alt="${diarista.nome}">
                    <div class="info">
                        <p>${diarista.nome}</p>
                        <p>${diarista.avaliacao}</p>
                    </div>
                    <button class="preco" onclick="verDetalhes('${diarista.id}')">${diarista.preco}</button>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error("Erro ao carregar diaristas:", error));
}

function verDetalhes(id) {
    window.location.href = `opcoes2.html?id=${encodeURIComponent(id)}`;
}

function carregarDetalhes() {
    const urlParams = new URLSearchParams(window.location.search);
    const idDiarista = urlParams.get('id');

    fetch('diaristas.json')
        .then(response => response.json())
        .then(diaristas => {
            const diarista = diaristas.find(d => d.id === idDiarista);
            if (diarista) {
                // Atualizar as informações da diarista
                document.querySelector('#foto-perfil').src = diarista.foto;
                document.querySelector('#nome-diarista').textContent = diarista.nome;
                document.querySelector('#avaliacao-diarista').textContent = diarista.avaliacao;
                document.querySelector('#preco-diarista').textContent = diarista.preco;

                // Exibir o endereço
                document.querySelector('.localizacao p').textContent = diarista.localizacao;

                // Exibir os serviços
                const servicosContainer = document.querySelector('#servicos .servicos-container');
                servicosContainer.innerHTML = ''; // Limpa os serviços antes de renderizar
                diarista.servicos.forEach(servico => {
                    const btn = document.createElement('button');
                    btn.classList.add('servico-item');
                    btn.textContent = servico;
                    // Adiciona o evento de clique para exibir a mensagem
                    btn.onclick = marcarServico;
                    servicosContainer.appendChild(btn);
                });
            }
        })
        .catch(error => console.log(error));
}

function renderizarServicos(servicos) {
    const servicosContainer = document.querySelector('#servicos .servicos-container');
    servicosContainer.innerHTML = ''; // Limpa os serviços antes de renderizar
    servicos.forEach(servico => {
        const btn = document.createElement('button');
        btn.classList.add('servico-item');
        btn.textContent = servico;
        servicosContainer.appendChild(btn);
    });
}

// Executa funções ao carregar a página
window.onload = function () {
    const page = document.body.getAttribute('data-page');
    if (page === 'opcoes') {
        carregarDiaristas();
    } else if (page === 'opcoes2') {
        carregarDetalhes();
    }
};

const loadingMessage = document.getElementById('loading-message');
if (loadingMessage) loadingMessage.remove();
