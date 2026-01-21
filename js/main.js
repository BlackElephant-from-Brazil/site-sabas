/* ==========================================================================
   SABAS LOCADORA - JavaScript Principal
   ========================================================================== */

// --------------------------------------------------------------------------
// Banco de dados de veículos
// --------------------------------------------------------------------------
const veiculosDB = {
    'volvo-xc60': {
        nome: 'Volvo XC60',
        categoria: 'Executivo',
        descricao: 'SUV premium sueco com o mais alto padrão de segurança do mercado. Interior em couro, tecnologia de ponta e conforto incomparável para executivos exigentes.',
        passageiros: 4,
        portaMalas: '505L',
        cambio: 'Automático 8v',
        seguranca: '5 estrelas',
        imagemPrincipal: 'assets/images/vehicles/cars/xc60/WhatsApp-Image-2025-09-01-at-14.53.45.jpeg',
        galeria: [
            { src: 'assets/images/vehicles/cars/xc60/WhatsApp-Image-2025-09-01-at-14.53.45.jpeg', alt: 'Volvo XC60 - Vista externa' },
            { src: 'assets/images/vehicles/cars/xc60/WhatsApp-Image-2025-09-01-at-14.53.43.jpeg', alt: 'Volvo XC60 - Interior' },
            { src: 'assets/images/vehicles/cars/xc60/WhatsApp-Image-2025-09-01-at-14.53.45-1.jpeg', alt: 'Volvo XC60 - Detalhe' },
            { src: 'assets/images/vehicles/cars/xc60/WhatsApp-Image-2025-09-01-at-14.53.45-2.jpeg', alt: 'Volvo XC60 - Lateral' }
        ],
        diferenciais: [
            'Sistema de segurança Volvo City Safety',
            'Interior 100% em couro premium',
            'Ar-condicionado digital bizona',
            'Central multimídia com Apple CarPlay e Android Auto',
            'Câmera 360° para estacionamento',
            'Bancos com aquecimento e ventilação'
        ],
        veiculosRelacionados: ['eclipse-cross', 'sprinter', 'peugeot-expert']
    },
    'eclipse-cross': {
        nome: 'Mitsubishi Eclipse Cross',
        categoria: 'Executivo',
        descricao: 'SUV compacto com design arrojado e excelente desempenho. Perfeito para viagens executivas com estilo, conforto e tecnologia de ponta.',
        passageiros: 4,
        portaMalas: '448L',
        cambio: 'CVT Automático',
        seguranca: '5 estrelas',
        imagemPrincipal: 'assets/images/vehicles/cars/eclipse/WhatsApp-Image-2025-09-01-at-14.53.27.jpeg',
        galeria: [
            { src: 'assets/images/vehicles/cars/eclipse/WhatsApp-Image-2025-09-01-at-14.53.27.jpeg', alt: 'Eclipse Cross - Vista externa' },
            { src: 'assets/images/vehicles/cars/eclipse/WhatsApp-Image-2025-09-01-at-14.53.28.jpeg', alt: 'Eclipse Cross - Interior' },
            { src: 'assets/images/vehicles/cars/eclipse/WhatsApp-Image-2025-09-01-at-14.53.29.jpeg', alt: 'Eclipse Cross - Detalhe' },
            { src: 'assets/images/vehicles/cars/eclipse/WhatsApp-Image-2025-09-01-at-14.53.30.jpeg', alt: 'Eclipse Cross - Lateral' }
        ],
        diferenciais: [
            'Tração integral AWC (All Wheel Control)',
            'Design coupé arrojado e moderno',
            'Central multimídia touchscreen',
            'Ar-condicionado automático',
            'Câmera de ré com sensores',
            'Bancos em couro sintético premium'
        ],
        veiculosRelacionados: ['volvo-xc60', 'nissan-sentra', 'peugeot-expert']
    },
    'nissan-sentra': {
        nome: 'Nissan Sentra',
        categoria: 'Executivo',
        descricao: 'Sedan executivo com design sofisticado, amplo espaço interno e acabamento premium. Ideal para viagens de negócios com máximo conforto.',
        passageiros: 4,
        portaMalas: '460L',
        cambio: 'CVT Automático',
        seguranca: '5 estrelas',
        imagemPrincipal: 'assets/images/vehicles/cars/sentra/WhatsApp-Image-2024-07-19-at-10.28.15.jpeg',
        galeria: [
            { src: 'assets/images/vehicles/cars/sentra/WhatsApp-Image-2024-07-19-at-10.28.15.jpeg', alt: 'Nissan Sentra - Vista externa' },
            { src: 'assets/images/vehicles/cars/sentra/WhatsApp-Image-2024-07-19-at-10.28.14-1.jpeg', alt: 'Nissan Sentra - Interior' },
            { src: 'assets/images/vehicles/cars/sentra/WhatsApp-Image-2024-07-19-at-10.28.14-4.jpeg', alt: 'Nissan Sentra - Painel' },
            { src: 'assets/images/vehicles/cars/sentra/WhatsApp-Image-2024-07-19-at-10.28.11.jpeg', alt: 'Nissan Sentra - Banco traseiro' }
        ],
        diferenciais: [
            'Design Zero Gravity nos bancos',
            'Painel digital de 7 polegadas',
            'Ar-condicionado digital automático',
            'Central multimídia com navegação',
            'Freios ABS com EBD',
            'Controle de estabilidade e tração'
        ],
        veiculosRelacionados: ['nissan-versa', 'eclipse-cross', 'volvo-xc60']
    },
    'nissan-versa': {
        nome: 'Nissan Versa',
        categoria: 'Executivo',
        descricao: 'Sedan compacto com excelente custo-benefício. Confortável, econômico e ideal para trajetos urbanos e intermunicipais.',
        passageiros: 4,
        portaMalas: '480L',
        cambio: 'CVT Automático',
        seguranca: '4 estrelas',
        imagemPrincipal: 'assets/images/vehicles/cars/versa/WhatsApp-Image-2024-07-28-at-13.08.13.jpeg',
        galeria: [
            { src: 'assets/images/vehicles/cars/versa/WhatsApp-Image-2024-07-28-at-13.08.13.jpeg', alt: 'Nissan Versa - Vista externa' },
            { src: 'assets/images/vehicles/cars/versa/WhatsApp-Image-2024-07-28-at-13.08.14.jpeg', alt: 'Nissan Versa - Interior' }
        ],
        diferenciais: [
            'Motor 1.6 eficiente e econômico',
            'Amplo espaço interno para a categoria',
            'Ar-condicionado',
            'Direção elétrica',
            'Central multimídia',
            'Porta-malas de 480 litros'
        ],
        veiculosRelacionados: ['nissan-sentra', 'eclipse-cross', 'peugeot-expert']
    },
    'peugeot-expert': {
        nome: 'Peugeot Expert',
        categoria: 'Minivan',
        descricao: 'Minivan versátil e espaçosa. Perfeita para pequenos grupos, famílias ou equipes corporativas com bagagem extra.',
        passageiros: 8,
        portaMalas: 'Extra Grande',
        cambio: 'Automático 6v',
        seguranca: '4 estrelas',
        imagemPrincipal: 'assets/images/vehicles/minivans/expert/WhatsApp-Image-2025-09-01-at-14.53.16.jpeg',
        galeria: [
            { src: 'assets/images/vehicles/minivans/expert/WhatsApp-Image-2025-09-01-at-14.53.16.jpeg', alt: 'Peugeot Expert - Vista externa' },
            { src: 'assets/images/vehicles/minivans/expert/WhatsApp-Image-2025-09-01-at-14.53.16-1.jpeg', alt: 'Peugeot Expert - Interior' },
            { src: 'assets/images/vehicles/minivans/expert/WhatsApp-Image-2025-09-01-at-14.53.16-2.jpeg', alt: 'Peugeot Expert - Bancos' },
            { src: 'assets/images/vehicles/minivans/expert/WhatsApp-Image-2025-09-01-at-14.53.17.jpeg', alt: 'Peugeot Expert - Lateral' }
        ],
        diferenciais: [
            'Configuração para até 8 passageiros',
            'Amplo espaço para bagagens',
            'Portas laterais deslizantes',
            'Ar-condicionado traseiro',
            'Altura interna generosa',
            'Perfeita para aeroportos e eventos'
        ],
        veiculosRelacionados: ['sprinter', 'renault-master', 'volvo-xc60']
    },
    'sprinter': {
        nome: 'Mercedes Sprinter',
        categoria: 'Van',
        descricao: 'Van executiva de alto padrão alemão. Espaçosa, confortável e ideal para grupos, eventos corporativos e traslados de aeroporto.',
        passageiros: 15,
        portaMalas: 'Bagageiro amplo',
        cambio: 'Automático 7G-Tronic',
        seguranca: '5 estrelas',
        imagemPrincipal: 'assets/images/vehicles/vans/sprinter/WhatsApp-Image-2025-09-01-at-14.53.34.jpeg',
        galeria: [
            { src: 'assets/images/vehicles/vans/sprinter/WhatsApp-Image-2025-09-01-at-14.53.34.jpeg', alt: 'Mercedes Sprinter - Vista externa' },
            { src: 'assets/images/vehicles/vans/sprinter/WhatsApp-Image-2025-09-01-at-14.53.35.jpeg', alt: 'Mercedes Sprinter - Interior' },
            { src: 'assets/images/vehicles/vans/sprinter/WhatsApp-Image-2025-09-01-at-14.53.35-1.jpeg', alt: 'Mercedes Sprinter - Bancos' },
            { src: 'assets/images/vehicles/vans/sprinter/WhatsApp-Image-2025-09-01-at-14.53.36.jpeg', alt: 'Mercedes Sprinter - Traseira' }
        ],
        diferenciais: [
            'Padrão Mercedes-Benz de qualidade',
            'Ar-condicionado em toda a cabine',
            'Bancos reclináveis individuais',
            'Bagageiro amplo para malas',
            'Iluminação LED interna',
            'Sistema de entretenimento'
        ],
        veiculosRelacionados: ['renault-master', 'peugeot-expert', 'volvo-xc60']
    },
    'renault-master': {
        nome: 'Renault Master',
        categoria: 'Van',
        descricao: 'Van robusta e espaçosa para transporte de grupos. Conforto e praticidade para eventos, viagens corporativas e traslados.',
        passageiros: 16,
        portaMalas: 'Bagageiro XL',
        cambio: 'Manual 6v',
        seguranca: '4 estrelas',
        imagemPrincipal: 'assets/images/vehicles/vans/master/WhatsApp-Image-2025-09-01-at-14.53.47-3.jpeg',
        galeria: [
            { src: 'assets/images/vehicles/vans/master/WhatsApp-Image-2025-09-01-at-14.53.47-3.jpeg', alt: 'Renault Master - Vista externa' },
            { src: 'assets/images/vehicles/vans/master/WhatsApp-Image-2025-09-01-at-14.53.46.jpeg', alt: 'Renault Master - Interior' },
            { src: 'assets/images/vehicles/vans/master/WhatsApp-Image-2025-09-01-at-14.53.46-2.jpeg', alt: 'Renault Master - Bancos' }
        ],
        diferenciais: [
            'Maior capacidade da frota (16 passageiros)',
            'Motor diesel econômico e potente',
            'Ar-condicionado dianteiro e traseiro',
            'Amplo espaço para bagagens',
            'Altura interna confortável',
            'Ideal para grupos grandes'
        ],
        veiculosRelacionados: ['sprinter', 'peugeot-expert', 'eclipse-cross']
    }
};

document.addEventListener('DOMContentLoaded', function() {
    
    // --------------------------------------------------------------------------
    // 0. Carregar veículo dinamicamente (página carro.html)
    // --------------------------------------------------------------------------
    const urlParams = new URLSearchParams(window.location.search);
    const veiculoId = urlParams.get('id');
    
    if (veiculoId && veiculosDB[veiculoId]) {
        carregarVeiculo(veiculoId);
    }
    
    function carregarVeiculo(id) {
        const veiculo = veiculosDB[id];
        if (!veiculo) return;
        
        // Atualizar título da página
        document.title = `${veiculo.nome} | Sabas Locadora de Veículos`;
        
        // Atualizar breadcrumb
        const breadcrumbAtual = document.querySelector('.hero-interno__breadcrumb span:last-child');
        if (breadcrumbAtual) {
            breadcrumbAtual.textContent = veiculo.nome;
        }
        
        // Atualizar título
        const tituloVeiculo = document.querySelector('.hero-interno__titulo');
        if (tituloVeiculo) {
            tituloVeiculo.textContent = veiculo.nome;
        }
        
        // Atualizar tag de categoria
        const tagCategoria = document.querySelector('.carro-galeria__principal + .card__tag, .carro-info .card__tag');
        const tagElement = document.querySelector('.card__tag');
        if (tagElement) {
            tagElement.textContent = veiculo.categoria;
        }
        
        // Atualizar imagem principal
        const imagemPrincipal = document.querySelector('.carro-galeria__principal img');
        if (imagemPrincipal && veiculo.galeria[0]) {
            imagemPrincipal.src = veiculo.galeria[0].src;
            imagemPrincipal.alt = veiculo.galeria[0].alt;
        }
        
        // Atualizar galeria de thumbs
        const galeriaContainer = document.querySelector('.carro-galeria__thumbs');
        if (galeriaContainer) {
            galeriaContainer.innerHTML = veiculo.galeria.map((img, index) => `
                <button class="carro-galeria__thumb ${index === 0 ? 'ativo' : ''}" type="button">
                    <img src="${img.src}" alt="${img.alt}" loading="lazy">
                </button>
            `).join('');
            
            // Re-adicionar event listeners para as thumbs
            const thumbs = galeriaContainer.querySelectorAll('.carro-galeria__thumb');
            thumbs.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    thumbs.forEach(t => t.classList.remove('ativo'));
                    this.classList.add('ativo');
                    
                    const newSrc = this.querySelector('img').src;
                    const newAlt = this.querySelector('img').alt;
                    
                    imagemPrincipal.style.opacity = '0';
                    setTimeout(() => {
                        imagemPrincipal.src = newSrc;
                        imagemPrincipal.alt = newAlt;
                        imagemPrincipal.style.opacity = '1';
                    }, 200);
                });
            });
        }
        
        // Atualizar nome do veículo na seção de info
        const nomeVeiculo = document.querySelector('.carro-info h2');
        if (nomeVeiculo) {
            nomeVeiculo.textContent = veiculo.nome;
        }
        
        // Atualizar descrição
        const descricaoVeiculo = document.querySelector('.carro-info > p');
        if (descricaoVeiculo) {
            descricaoVeiculo.textContent = veiculo.descricao;
        }
        
        // Atualizar especificações
        const especificacoes = document.querySelectorAll('.carro-specs__item');
        if (especificacoes.length >= 4) {
            especificacoes[0].querySelector('span:last-child').textContent = `${veiculo.passageiros} passageiros`;
            especificacoes[1].querySelector('span:last-child').textContent = veiculo.portaMalas;
            especificacoes[2].querySelector('span:last-child').textContent = veiculo.cambio;
            especificacoes[3].querySelector('span:last-child').textContent = veiculo.seguranca;
        }
        
        // Atualizar diferenciais
        const diferenciaisList = document.querySelector('.carro-diferenciais ul');
        if (diferenciaisList) {
            diferenciaisList.innerHTML = veiculo.diferenciais.map(item => 
                `<li><i data-feather="check"></i> ${item}</li>`
            ).join('');
            
            // Re-renderizar ícones feather
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }
        
        // Atualizar link do WhatsApp
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        whatsappLinks.forEach(link => {
            const baseUrl = link.href.split('?')[0];
            link.href = `${baseUrl}?text=${encodeURIComponent(`Olá! Gostaria de mais informações sobre o ${veiculo.nome}.`)}`;
        });
        
        // Atualizar veículos relacionados
        const outrosVeiculos = document.querySelector('.outros-veiculos .grid');
        if (outrosVeiculos && veiculo.veiculosRelacionados) {
            outrosVeiculos.innerHTML = veiculo.veiculosRelacionados.map(relId => {
                const rel = veiculosDB[relId];
                if (!rel) return '';
                return `
                    <article class="card">
                        <div class="card__imagem">
                            <img src="${rel.imagemPrincipal}" alt="${rel.nome}" loading="lazy">
                        </div>
                        <div class="card__conteudo">
                            <span class="card__tag">${rel.categoria}</span>
                            <h3 class="card__titulo">${rel.nome}</h3>
                            <a href="carro.html?id=${relId}" class="btn btn--secundario btn--bloco">
                                Ver Detalhes
                            </a>
                        </div>
                    </article>
                `;
            }).join('');
        }
    }
    // --------------------------------------------------------------------------
    // 1. Menu Mobile Toggle
    // --------------------------------------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('ativo');
            nav.classList.toggle('ativo');
            
            // Accessibility
            const isExpanded = this.classList.contains('ativo');
            this.setAttribute('aria-expanded', isExpanded);
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = nav.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('ativo');
                nav.classList.remove('ativo');
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('ativo');
                nav.classList.remove('ativo');
            }
        });
    }
    
    // --------------------------------------------------------------------------
    // 2. Header scroll effect
    // --------------------------------------------------------------------------
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // --------------------------------------------------------------------------
    // 3. Smooth Scroll para links âncora
    // --------------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // --------------------------------------------------------------------------
    // 4. Filtros de carros
    // --------------------------------------------------------------------------
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const carros = document.querySelectorAll('.card[data-categoria]');
    
    if (filtroBtns.length > 0 && carros.length > 0) {
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const categoria = this.dataset.filtro;
                
                // Atualizar botão ativo
                filtroBtns.forEach(b => b.classList.remove('ativo'));
                this.classList.add('ativo');
                
                // Filtrar carros
                carros.forEach(carro => {
                    if (categoria === 'todos' || carro.dataset.categoria === categoria) {
                        carro.style.display = 'block';
                        carro.classList.add('animate-fadeIn');
                    } else {
                        carro.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // --------------------------------------------------------------------------
    // 5. Galeria de imagens (página de detalhes)
    // --------------------------------------------------------------------------
    const galeriaThumbsContainer = document.querySelector('.carro-galeria__thumbs');
    const galeriaPrincipal = document.querySelector('.carro-galeria__principal img');
    
    if (galeriaThumbsContainer && galeriaPrincipal) {
        const thumbs = galeriaThumbsContainer.querySelectorAll('.carro-galeria__thumb');
        
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remover ativo de todos
                thumbs.forEach(t => t.classList.remove('ativo'));
                this.classList.add('ativo');
                
                // Trocar imagem principal
                const newSrc = this.querySelector('img').src;
                const newAlt = this.querySelector('img').alt;
                
                galeriaPrincipal.style.opacity = '0';
                setTimeout(() => {
                    galeriaPrincipal.src = newSrc;
                    galeriaPrincipal.alt = newAlt;
                    galeriaPrincipal.style.opacity = '1';
                }, 200);
            });
        });
    }
    
    // --------------------------------------------------------------------------
    // 6. Formulário de contato
    // --------------------------------------------------------------------------
    const formContato = document.querySelector('.contato-form');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const campos = this.querySelectorAll('[required]');
            let valido = true;
            
            campos.forEach(campo => {
                if (!campo.value.trim()) {
                    valido = false;
                    campo.style.borderColor = '#c6151d';
                } else {
                    campo.style.borderColor = '#000';
                }
            });
            
            // Email validation
            const emailField = this.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    valido = false;
                    emailField.style.borderColor = '#c6151d';
                }
            }
            
            if (valido) {
                // Simular envio
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
        
        // Remover estilo de erro ao digitar
        const inputs = formContato.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#000';
            });
        });
    }
    
    // --------------------------------------------------------------------------
    // 7. Animações ao scroll (Intersection Observer)
    // --------------------------------------------------------------------------
    const animateElements = document.querySelectorAll('.card, .vantagem, .valor-card, .contato-info__item');
    
    if (animateElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
    
    // --------------------------------------------------------------------------
    // 8. WhatsApp Click Tracking (para analytics futura)
    // --------------------------------------------------------------------------
    const whatsappBtns = document.querySelectorAll('a[href*="wa.me"], .btn--whatsapp');
    
    whatsappBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Pode ser integrado com Google Analytics ou similar
            console.log('WhatsApp click tracked');
        });
    });
    
    // --------------------------------------------------------------------------
    // 9. Lazy Loading de imagens (fallback para navegadores antigos)
    // --------------------------------------------------------------------------
    if ('loading' in HTMLImageElement.prototype) {
        // Navegador suporta lazy loading nativo
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback com Intersection Observer
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if (lazyImages.length > 0 && 'IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
    
    // --------------------------------------------------------------------------
    // 10. Ano atual no footer
    // --------------------------------------------------------------------------
    const anoElements = document.querySelectorAll('.ano-atual');
    const anoAtual = new Date().getFullYear();
    
    anoElements.forEach(el => {
        el.textContent = anoAtual;
    });
});

// --------------------------------------------------------------------------
// Função utilitária: Formatar telefone
// --------------------------------------------------------------------------
function formatarTelefone(telefone) {
    const cleaned = telefone.replace(/\D/g, '');
    if (cleaned.length === 11) {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    return telefone;
}

// --------------------------------------------------------------------------
// Função utilitária: Abrir WhatsApp
// --------------------------------------------------------------------------
function abrirWhatsApp(numero, mensagem = '') {
    const url = `https://wa.me/${numero}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`;
    window.open(url, '_blank');
}
