// script.js
// script.js: Arquivo JavaScript para interatividade no site AutoTechGarage. Melhorias: Validação robusta, otimização. Adicionados comentários explicando cada parte.

// Evento que executa quando o documento é totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário de contato e adiciona evento de submissão
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o envio padrão do formulário
            if (validateForm(formContato)) { // Valida os campos
                alert('Mensagem enviada com sucesso!'); // Alerta de sucesso simulado
                formContato.reset(); // Reseta o formulário
            }
        });
    }

    // Seleciona o formulário de agendamento e adiciona evento de submissão
    const formAgendamento = document.getElementById('formAgendamento');
    if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o envio padrão
            if (validateForm(formAgendamento)) { // Valida os campos
                alert('Agendamento solicitado com sucesso!'); // Alerta de sucesso simulado
                formAgendamento.reset(); // Reseta o formulário
            }
        });
    }

    // Observador para animações de fade-in ao scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona classe visible quando visível
            }
        });
    }, { threshold: 0.1 }); // Threshold para detecção

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Adiciona classe inicial para animação
        observer.observe(section); // Observa cada seção
    });

    // Adiciona smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Previne comportamento padrão
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Scroll suave
            });
        });
    });

    // Efeito parallax no hero ao scroll
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.pageYOffset; // Posição de scroll
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Aplica parallax
        }
    });

    // Interatividade nos cards com hover
    const cards = document.querySelectorAll('.card, .card-equipe');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 15px 30px rgba(255, 0, 0, 0.6)'; // Sombra intensificada
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'; // Sombra normal
        });
    });
});

// Função de validação para formulários
function validateForm(form) {
    let isValid = true; // Flag de validade
    const inputs = form.querySelectorAll('[required]'); // Seleciona campos requeridos
    inputs.forEach(input => {
        if (!input.value.trim()) { // Verifica se vazio
            isValid = false;
            input.style.borderColor = 'red'; // Borda vermelha para erro
            input.setCustomValidity('Este campo é obrigatório.'); // Mensagem de erro
        } else {
            input.style.borderColor = '#ddd'; // Borda normal
            input.setCustomValidity(''); // Remove mensagem de erro
        }
    });
    return isValid; // Retorna status de validade
}