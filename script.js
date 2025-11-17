// script.js: Arquivo JavaScript para interatividade no site AutoTechGarage.

// Evento que executa quando o documento é carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato na página de suporte - adiciona evento de submissão
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault(); // Previna o envio padrão do formulário
            if (validateForm(formContato)) { // Valida os campos requeridos
                alert('Mensagem enviada com sucesso!'); // Simula envio bem-sucedido
                formContato.reset(); // Reseta o formulário
            }
        });
    }

    // Formulário de agendamento - adiciona evento de submissão
    const formAgendamento = document.getElementById('formAgendamento');
    if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(e) {
            e.preventDefault(); // Previna o envio padrão do formulário
            if (validateForm(formAgendamento)) { // Valida os campos requeridos
                alert('Agendamento solicitado com sucesso!'); // Simula envio bem-sucedido
                formAgendamento.reset(); // Reseta o formulário
            }
        });
    }

    // Animações de scroll: Fade-in para seções ao rolar - usa IntersectionObserver para detectar visibilidade
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona classe visible quando a seção entra na viewport
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Adiciona classe inicial para animação
        observer.observe(section); // Observa cada seção
    });

    // Smooth scrolling para links internos - adiciona scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Previna o comportamento padrão do link
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Scroll suave
            });
        });
    });

    // Animação de parallax simples no hero ao scroll - ajusta posição de fundo com base no scroll
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.pageYOffset; // Obtém posição de scroll
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Aplica efeito parallax
        }
    });

    // Interatividade nos cards - adiciona sombra intensificada no hover
    const cards = document.querySelectorAll('.card, .card-equipe');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 15px 30px rgba(255, 0, 0, 0.6)'; // Sombra mais intensa no hover
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'; // Volta à sombra normal
        });
    });
});

// Função de validação genérica para formulários - verifica campos requeridos e destaca erros
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('[required]');
    inputs.forEach(input => {
        if (!input.value.trim()) { // Verifica se o campo está vazio
            isValid = false;
            input.style.borderColor = 'red'; // Destaque em vermelho para erro
        } else {
            input.style.borderColor = '#ddd'; // Volta à borda normal
        }
    });
    return isValid; // Retorna true se todos os campos estiverem válidos
}