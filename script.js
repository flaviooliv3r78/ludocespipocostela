// Menu mobile toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de scroll para elementos
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('fade-in-up'); } });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.destaque, .produto-card, .contato-item');
    animateElements.forEach(el => observer.observe(el));
});

// Formulário de contato
const contactForm = document.querySelector('.contato-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        setTimeout(() => { alert('Mensagem enviada com sucesso! Entraremos em contato em breve.'); contactForm.reset(); submitButton.textContent = originalText; submitButton.disabled = false; }, 2000);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Botão CTA scroll para produtos
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const produtosSection = document.querySelector('#produtos');
        if (produtosSection) { produtosSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
}

// Adicionar classe ativa ao link do menu baseado na seção visível
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    let current = '';
    sections.forEach(section => { const sectionTop = section.offsetTop; if (window.scrollY >= (sectionTop - 200)) { current = section.getAttribute('id'); } });
    navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === `#${current}`) { link.classList.add('active'); } });
});

// Preloader (opcional)
window.addEventListener('load', () => { document.body.classList.add('loaded'); });

// Hover nos cards
document.querySelectorAll('.produto-card').forEach(card => {
    card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-10px) scale(1.02)'; });
    card.addEventListener('mouseleave', () => { card.style.transform = 'translateY(0) scale(1)'; });
});

// WhatsApp flutuante - mostrar após scroll
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    whatsappFloat.style.opacity = '0';
    whatsappFloat.style.transform = 'scale(0)';
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { whatsappFloat.style.opacity = '1'; whatsappFloat.style.transform = 'scale(1)'; whatsappFloat.style.transition = 'all 0.3s ease'; }
        else { whatsappFloat.style.opacity = '0'; whatsappFloat.style.transform = 'scale(0)'; }
    });
    if (window.innerWidth <= 768) { whatsappFloat.style.opacity = '1'; whatsappFloat.style.transform = 'scale(1)'; }
}

// Tooltip WhatsApp
const whatsappLink = document.querySelector('.whatsapp-float a');
if (whatsappLink) { whatsappLink.setAttribute('title', 'Fale conosco no WhatsApp!'); }

// Funcionalidades específicas para PWA
// Gestos de swipe para navegação (mantido)
let touchStartX = 0; let touchEndX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; });
document.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); });
function handleSwipe() {
    const sections = ['home', 'sobre', 'produtos', 'contato'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    if (touchEndX < touchStartX - 50 && currentIndex < sections.length - 1) { document.getElementById(sections[currentIndex + 1]).scrollIntoView({ behavior: 'smooth' }); }
    else if (touchEndX > touchStartX + 50 && currentIndex > 0) { document.getElementById(sections[currentIndex - 1]).scrollIntoView({ behavior: 'smooth' }); }
}
function getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    let current = 'home';
    sections.forEach(section => { const rect = section.getBoundingClientRect(); if (rect.top <= 100 && rect.bottom >= 100) { current = section.id; } });
    return current;
}

// Feedback tátil
function addHapticFeedback() { if ('vibrate' in navigator) { navigator.vibrate(30); } }
document.querySelectorAll('button, .cta-button, .whatsapp-float a, .install-fab').forEach(el => { el.addEventListener('click', addHapticFeedback); });

// Removido: código que travava rolagem
// Removido: pull-to-refresh global
// Pull-to-refresh apenas em mobile instalado (standalone)
(function enablePTRIfStandalone() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator.standalone === true);
    const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent);
    if (!isStandalone || !isMobile) { return; }
    let startY = 0; let pullDistance = 0; const pullThreshold = 100;
    document.addEventListener('touchstart', e => { if (window.scrollY === 0) { startY = e.touches[0].pageY; } }, { passive: true });
    document.addEventListener('touchmove', e => {
        if (window.scrollY === 0 && startY > 0) {
            pullDistance = e.touches[0].pageY - startY;
            if (pullDistance > 0) { document.body.style.transform = `translateY(${Math.min(pullDistance * 0.5, pullThreshold)}px)`; }
        }
    }, { passive: true });
    document.addEventListener('touchend', () => {
        if (pullDistance > pullThreshold) { location.reload(); }
        document.body.style.transform = '';
        startY = 0; pullDistance = 0;
    });
})();

// Indicadores online/offline
window.addEventListener('online', () => { showNotification('Conexão restaurada!', 'success'); });
window.addEventListener('offline', () => { showNotification('Você está offline. Algumas funcionalidades podem não estar disponíveis.', 'warning'); });

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: ${type === 'success' ? '#4CAF50' : type === 'warning' ? '#FF9800' : '#2196F3'}; color: white; padding: 15px 25px; border-radius: 25px; z-index: 10000; font-weight: 600; box-shadow: 0 4px 15px rgba(0,0,0,0.2); animation: slideDown 0.3s ease;`;
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.animation = 'slideUp 0.3s ease'; setTimeout(() => { document.body.removeChild(notification); }, 300); }, 3000);
}

// Estilos para notificações
const style = document.createElement('style');
style.textContent = `@keyframes slideDown { from { transform: translateX(-50%) translateY(-100%); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } } @keyframes slideUp { from { transform: translateX(-50%) translateY(0); opacity: 1; } to { transform: translateX(-50%) translateY(-100%); opacity: 0; } }`;
document.head.appendChild(style);
