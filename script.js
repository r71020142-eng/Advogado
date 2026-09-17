/**
 * JAVASCRIPT: RODRIGO RODRIGUES | LANDING PAGE
 * Triagem dinâmica para WhatsApp e interações da página
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuração do Número Oficial do WhatsApp
    const WHATSAPP_PHONE = '14077663620'; // +1 (407) 766-3620

    // 2. Manipulador do Formulário de Triagem Rápida
    const triageForm = document.getElementById('triageForm');
    
    if (triageForm) {
        triageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const accidentType = document.getElementById('accidentType').value;
            const accidentTime = document.getElementById('accidentTime').value;
            const cityLocation = document.getElementById('cityLocation').value.trim() || 'Orlando / FL';

            // Monta a mensagem personalizada e humanizada para o WhatsApp
            const message = `Olá Rodrigo! Vi seu site e gostaria de fazer a triagem gratuita do meu caso:
🚨 Tipo: ${accidentType}
⏱️ Quando ocorreu: ${accidentTime}
📍 Localização: ${cityLocation}

Poderia me orientar sobre os próximos passos e meus direitos?`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

            // Abre o WhatsApp diretamente
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }

    // 3. Comportamento do FAQ (Fechar outros itens ao abrir um novo)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                faqItems.forEach((otherItem) => {
                    if (otherItem !== item && otherItem.open) {
                        otherItem.removeAttribute('open');
                    }
                });
            }
        });
    });

    // 4. Efeito de aparição suave da tooltip flutuante do WhatsApp (Apenas em Desktop para não cobrir o mobile)
    const floatingWhatsapp = document.getElementById('floatingWhatsapp');
    if (floatingWhatsapp && window.innerWidth >= 900) {
        let hasScrolled = false;
        window.addEventListener('scroll', () => {
            if (!hasScrolled && window.scrollY > 150 && window.innerWidth >= 900) {
                hasScrolled = true;
                const tooltip = floatingWhatsapp.querySelector('.floating-whatsapp-tooltip');
                if (tooltip) {
                    tooltip.style.display = 'flex';
                    tooltip.style.animation = 'fadeIn 0.5s ease';
                }
            }
        }, { passive: true });
    }

    // 5. Rolagem suave para âncoras internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
