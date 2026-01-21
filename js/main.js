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
        capa: 'assets/images/vehicles/cars/xc60/capa.png',
        galeria: [
            { src: 'assets/images/vehicles/cars/xc60/1.png', alt: 'Volvo XC60 - Foto 1' },
            { src: 'assets/images/vehicles/cars/xc60/2.webp', alt: 'Volvo XC60 - Foto 2' },
            { src: 'assets/images/vehicles/cars/xc60/3.png', alt: 'Volvo XC60 - Foto 3' },
            { src: 'assets/images/vehicles/cars/xc60/4.jpeg', alt: 'Volvo XC60 - Foto 4' }
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
        capa: 'assets/images/vehicles/cars/eclipse/capa.png',
        galeria: [
            { src: 'assets/images/vehicles/cars/eclipse/1.jpeg', alt: 'Eclipse Cross - Foto 1' },
            { src: 'assets/images/vehicles/cars/eclipse/2.jpeg', alt: 'Eclipse Cross - Foto 2' },
            { src: 'assets/images/vehicles/cars/eclipse/3.jpeg', alt: 'Eclipse Cross - Foto 3' },
            { src: 'assets/images/vehicles/cars/eclipse/4.jpeg', alt: 'Eclipse Cross - Foto 4' }
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
        capa: 'assets/images/vehicles/cars/sentra/capa.png',
        galeria: [
            { src: 'assets/images/vehicles/cars/sentra/1.png', alt: 'Nissan Sentra - Foto 1' },
            { src: 'assets/images/vehicles/cars/sentra/2.avif', alt: 'Nissan Sentra - Foto 2' },
            { src: 'assets/images/vehicles/cars/sentra/3.jpg', alt: 'Nissan Sentra - Foto 3' },
            { src: 'assets/images/vehicles/cars/sentra/4.png', alt: 'Nissan Sentra - Foto 4' }
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
        capa: 'assets/images/vehicles/cars/versa/capa.png',
        galeria: [
            { src: 'assets/images/vehicles/cars/versa/1.jpeg', alt: 'Nissan Versa - Foto 1' },
            { src: 'assets/images/vehicles/cars/versa/2.png', alt: 'Nissan Versa - Foto 2' },
            { src: 'assets/images/vehicles/cars/versa/3.png', alt: 'Nissan Versa - Foto 3' },
            { src: 'assets/images/vehicles/cars/versa/4.png', alt: 'Nissan Versa - Foto 4' }
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
        capa: 'assets/images/vehicles/minivans/expert/capa.png',
        galeria: [
            { src: 'assets/images/vehicles/minivans/expert/1.png', alt: 'Peugeot Expert - Foto 1' },
            { src: 'assets/images/vehicles/minivans/expert/2.jpeg', alt: 'Peugeot Expert - Foto 2' },
            { src: 'assets/images/vehicles/minivans/expert/3.jpeg', alt: 'Peugeot Expert - Foto 3' },
            { src: 'assets/images/vehicles/minivans/expert/4.jpeg', alt: 'Peugeot Expert - Foto 4' }
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
        capa: 'assets/images/vehicles/vans/sprinter/capa.png',
        galeria: [
            { src: 'assets/images/vehicles/vans/sprinter/1.jpeg', alt: 'Mercedes Sprinter - Foto 1' },
            { src: 'assets/images/vehicles/vans/sprinter/2.png', alt: 'Mercedes Sprinter - Foto 2' },
            { src: 'assets/images/vehicles/vans/sprinter/3.jpeg', alt: 'Mercedes Sprinter - Foto 3' },
            { src: 'assets/images/vehicles/vans/sprinter/4.jpeg', alt: 'Mercedes Sprinter - Foto 4' }
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
        capa: 'assets/images/vehicles/vans/master/capa.png',
        galeria: [
            { src: 'assets/images/vehicles/vans/master/1.png', alt: 'Renault Master - Foto 1' },
            { src: 'assets/images/vehicles/vans/master/2.png', alt: 'Renault Master - Foto 2' },
            { src: 'assets/images/vehicles/vans/master/3.webp', alt: 'Renault Master - Foto 3' },
            { src: 'assets/images/vehicles/vans/master/4.jpeg', alt: 'Renault Master - Foto 4' }
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
        document.title = `${veiculo.nome} | S.Sabas Locadora`;
        
        // Atualizar breadcrumb (último span dentro do breadcrumb)
        const breadcrumbItems = document.querySelectorAll('.breadcrumb span[aria-current="page"]');
        if (breadcrumbItems.length > 0) {
            breadcrumbItems[0].textContent = veiculo.nome;
        }
        
        // Atualizar título h1 do page-header
        const tituloH1 = document.querySelector('.page-header h1');
        if (tituloH1) {
            // Separar o nome em palavras para destacar a última
            const palavras = veiculo.nome.split(' ');
            if (palavras.length > 1) {
                const ultimaPalavra = palavras.pop();
                tituloH1.innerHTML = `${palavras.join(' ')} <span class="texto-destaque">${ultimaPalavra}</span>`;
            } else {
                tituloH1.textContent = veiculo.nome;
            }
        }
        
        // Atualizar descrição do page-header
        const descricaoHeader = document.querySelector('.page-header p');
        if (descricaoHeader) {
            descricaoHeader.textContent = veiculo.descricao.substring(0, 60) + '...';
        }
        
        // Atualizar tag de categoria
        const tagElement = document.querySelector('.carro-info__categoria');
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
        const nomeVeiculo = document.querySelector('.carro-info__titulo');
        if (nomeVeiculo) {
            nomeVeiculo.textContent = veiculo.nome;
        }
        
        // Atualizar descrição
        const descricaoVeiculo = document.querySelector('.carro-info__descricao');
        if (descricaoVeiculo) {
            descricaoVeiculo.textContent = veiculo.descricao;
        }
        
        // Atualizar especificações
        const especificacoes = document.querySelectorAll('.carro-spec');
        if (especificacoes.length >= 4) {
            especificacoes[0].querySelector('.carro-spec__valor').textContent = `${veiculo.passageiros} pessoas`;
            especificacoes[1].querySelector('.carro-spec__valor').textContent = veiculo.portaMalas;
            especificacoes[2].querySelector('.carro-spec__valor').textContent = veiculo.cambio;
            especificacoes[3].querySelector('.carro-spec__valor').textContent = veiculo.seguranca;
        }
        
        // Atualizar diferenciais/recursos
        const recursosLista = document.querySelector('.carro-recursos__lista');
        if (recursosLista && veiculo.diferenciais) {
            recursosLista.innerHTML = veiculo.diferenciais.map(item => 
                `<li class="carro-recursos__item">${item}</li>`
            ).join('');
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
                            <img src="${rel.capa}" alt="${rel.nome}" loading="lazy">
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
