        const menuData = {
            aperitivos: {
                title: 'Aperitivos', icon: 'utensils',
                items: [
                    { name: 'Rollos Primavera (4 pcs)', desc: 'Crujientes rollos rellenos de vegetales', price: 65 },
                    { name: 'Wan Tones Fritos (6 pcs)', desc: 'Dumplings de cerdo y vegetales, salsa agridulce', price: 75 },
                    { name: 'Ala de Pollo Estilo China', desc: 'Alas marinadas y fritas con salsa especial', price: 85 },
                    { name: 'Bolas de Camarón (6 pcs)', desc: 'Camarón molido con vegetales, empanizado crujiente', price: 90 },
                    { name: 'Aros de Cebolla', desc: 'Aros de cebolla empanizados con salsa chipotle', price: 70 },
                    { name: 'Deditos de Queso (6 pcs)', desc: 'Tiras de queso empanizadas con salsa de mango', price: 65 },
                    { name: 'Egg Rolls (4 pcs)', desc: 'Rollos gruesos de cerdo y vegetales', price: 75 },
                    { name: 'Edamame con Sal', desc: 'Vainas de soya al vapor con sal marina', price: 55 },
                ]
            },
            sopas: {
                title: 'Sopas', icon: 'soup',
                items: [
                    { name: 'Sopa de Wan Ton', desc: 'Caldo de pollo con wan tones de cerdo', price: 75 },
                    { name: 'Sopa de Pollo con Vegetales', desc: 'Caldo claro con pollo, brócoli y zanahoria', price: 70 },
                    { name: 'Sopa Agridulce', desc: 'Caldo agridulce con huevo y tofu', price: 80 },
                    { name: 'Sopa Foshou', desc: 'Sopa tradicional con pollo, hongo y bambú', price: 85 },
                    { name: 'Sopa de Fideos', desc: 'Fideos chinos en caldo de pollo con vegetales', price: 75 },
                    { name: 'Sopa Picante de Mariscos', desc: 'Caldo picante con camarón y pescado', price: 95 },
                ]
            },
            arroces: {
                title: 'Arroces', icon: 'wheat',
                items: [
                    { name: 'Arroz Frito con Huevo', desc: 'Arroz salteado con huevo y cebollín', price: 65 },
                    { name: 'Arroz Frito Especial', desc: 'Con pollo, camarón, cerdo y vegetales', price: 120 },
                    { name: 'Arroz Frito con Pollo', desc: 'Arroz salteado con pollo y vegetales', price: 85 },
                    { name: 'Arroz Frito con Camarón', desc: 'Arroz salteado con camarón y ejotes', price: 105 },
                    { name: 'Arroz Yang Chow', desc: 'Estilo cantonés con huevo, jamón y vegetales', price: 110 },
                    { name: 'Arroz con Coco', desc: 'Arroz aromático al coco, acompañamiento', price: 55 },
                    { name: 'Arroz Vaporizado', desc: 'Arroz blanco jazmín al vapor', price: 35 },
                ]
            },
            pollo: {
                title: 'Pollo', icon: 'drumstick',
                items: [
                    { name: 'Pollo Shing Long ★', desc: 'Con brócoli, zanahoria y salsa de la casa', price: 145 },
                    { name: 'Pollo Agridulce', desc: 'Pollo crujiente con salsa agridulce y piña', price: 120 },
                    { name: 'Pollo con Almendras', desc: 'Pollo tierno con almendras y salsa de soya', price: 130 },
                    { name: 'Pollo al Limón', desc: 'Pollo en salsa de limón con pimiento', price: 125 },
                    { name: 'Pollo Kung Pao', desc: 'Con cacahuates y chiles secos estilo Sichuan', price: 135 },
                    { name: 'Pollo con Castañas', desc: 'Pollo con castañas de agua y vegetales', price: 130 },
                    { name: 'Pollo al Curry', desc: 'Pollo en curry suave con cebolla y pimiento', price: 120 },
                    { name: 'Pollo Tamarindo', desc: 'Pollo en salsa de tamarindo dulce-picante', price: 135 },
                    { name: 'Pollo con Jengibre', desc: 'Salteado con jengibre fresco y cebollín', price: 125 },
                    { name: 'Pollo Cinco Especies', desc: 'Con especias chinas tradicionales', price: 130 },
                ]
            },
            res: {
                title: 'Res', icon: 'beef',
                items: [
                    { name: 'Res con Vegetales', desc: 'Tiras de res salteadas con mixto de vegetales', price: 145 },
                    { name: 'Res al Curry', desc: 'Res en curry suave con cebolla y pimiento', price: 140 },
                    { name: 'Res en Salsa de Ostras', desc: 'Con brócoli y salsa de ostras premium', price: 150 },
                    { name: 'Res con Cebollín', desc: 'Res salteada con cebollín y jengibre', price: 145 },
                    { name: 'Res Agridulce', desc: 'Res crujiente con salsa agridulce', price: 140 },
                    { name: 'Res con Pimiento', desc: 'Res salteada con pimientos tricolores', price: 145 },
                    { name: 'Res Mongoliana', desc: 'Con cebolla y salsa de soya oscura', price: 155 },
                ]
            },
            cerdo: {
                title: 'Cerdo', icon: 'ham',
                items: [
                    { name: 'Cerdo Agridulce', desc: 'Cerdo crujiente bañado en salsa agridulce', price: 130 },
                    { name: 'Cerdo con Piña', desc: 'Cerdo con piña fresca y pimiento', price: 135 },
                    { name: 'Cerdo en Salsa de Soya', desc: 'Cerdo tierno con vegetales en soya', price: 125 },
                    { name: 'Cerdo Dong Po', desc: 'Cerdo barriga estofado lentamente estilo Hangzhou', price: 155 },
                    { name: 'Cerdo con Jengibre', desc: 'Cerdo salteado con jengibre y cebollín', price: 125 },
                    { name: 'Cerdo Mu Shu', desc: 'Con huevo, col y hongo, servido con tortillas', price: 155 },
                    { name: 'Cerdo Cinco Especies', desc: 'Con especias aromáticas chinas', price: 135 },
                ]
            },
            mariscos: {
                title: 'Mariscos', icon: 'fish',
                items: [
                    { name: 'Camarón al Ajillo ★', desc: 'Gigantes con ajo, chile seco y cebollín', price: 175 },
                    { name: 'Camarón Agridulce', desc: 'Camarón empanizado con salsa agridulce', price: 155 },
                    { name: 'Camarón con Vegetales', desc: 'Camarón con brócoli, zanahoria y bambú', price: 150 },
                    { name: 'Camarón en Salsa de Ostras', desc: 'Con ejotes y salsa de ostras', price: 160 },
                    { name: 'Filete de Pescado Tres Sabores', desc: 'Pescado entero en salsa agridulce-picante', price: 165 },
                    { name: 'Camarón al Curry', desc: 'En curry suave con leche de coco', price: 160 },
                    { name: 'Pescado al Vapor con Jengibre', desc: 'Filete al vapor con jengibre y cebollín', price: 155 },
                    { name: 'Mixto del Mar', desc: 'Camarón, pulpo y calamar salteados', price: 195 },
                ]
            },
            vegetales: {
                title: 'Vegetales', icon: 'leaf',
                items: [
                    { name: 'Mixto de Vegetales', desc: 'Brócoli, zanahoria, ejote, bambú y hongo', price: 95 },
                    { name: 'Brócoli con Pollo', desc: 'Brócoli fresco con tiras de pollo', price: 120 },
                    { name: 'Ejotes al Ajo', desc: 'Ejotes chinos salteados con ajo', price: 90 },
                    { name: 'Col China con Hongos', desc: 'Salteada con hongo shiitake y bambú', price: 95 },
                    { name: 'Espárragos al Wok', desc: 'Espárragos con salsa de soya y ajonjolí', price: 115 },
                    { name: 'Tofu con Vegetales', desc: 'Tofu salteado con mixto de vegetales', price: 85 },
                    { name: 'Espinacas al Ajo', desc: 'Espinacas chinas salteadas con ajo', price: 85 },
                ]
            },
            especiales: {
                title: 'Especiales de la Casa', icon: 'crown',
                items: [
                    { name: 'Pato Pekín ★', desc: 'Pato horneado con piel crujiente, tortillas y salsa hoisin', price: 250 },
                    { name: 'Pescado Entero a la Sal', desc: 'Pescado cocido en costra de sal con jengibre', price: 220 },
                    { name: 'Cerdo Mu Shu', desc: 'Con huevo, col, hongo, servido con tortillas', price: 155 },
                    { name: 'Pollo de la Casa Shing Long ★', desc: 'Receta secreta con 12 especias', price: 165 },
                    { name: 'Res Mongoliana', desc: 'Cebolla caramelizada con salsa oscura especial', price: 155 },
                    { name: 'Festival de Mariscos', desc: 'Camarón, pulpo, calamar y pescado para 2-3 personas', price: 380 },
                    { name: 'Banquete Shing Long', desc: 'Para 4 personas: aperitivos, sopa, 3 platillos, arroz', price: 680 },
                ]
            }
        };

        function renderMenu(category) {
            const data = menuData[category];
            const container = document.getElementById('menuContent');
            let html = `
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-10 h-10 rounded-xl bg-sl-red/10 flex items-center justify-center">
                        <i data-lucide="${data.icon}" class="w-5 h-5 text-sl-red"></i>
                    </div>
                    <h3 class="font-display text-2xl lg:text-3xl font-bold text-sl-cream">${data.title}</h3>
                    <span class="text-sl-cream/20 text-sm ml-auto">${data.items.length} platillos</span>
                </div>
                <div class="space-y-0">
            `;
            data.items.forEach((item, i) => {
                const isStar = item.name.includes('★');
                const cleanName = item.name.replace('★', '').trim();
                html += `
                    <div class="menu-item flex items-start justify-between py-4 px-3 rounded-lg" style="animation:fadeInUp 0.4s ease-out ${i * 0.05}s both">
                        <div class="flex-1 pr-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="item-name font-medium text-sl-cream/90 text-sm lg:text-base transition-colors">${cleanName}</span>
                                ${isStar ? '<span class="text-sl-red text-xs">★</span>' : ''}
                                ${isStar ? '<span class="text-[9px] bg-sl-red/10 text-sl-red px-2 py-0.5 rounded-full font-semibold">ESTRELLA</span>' : ''}
                            </div>
                            <p class="text-sl-cream/30 text-xs lg:text-sm mt-1">${item.desc}</p>
                        </div>
                        <span class="font-display font-bold text-sl-gold text-base lg:text-lg whitespace-nowrap">$${item.price}</span>
                    </div>
                `;
            });
            html += '</div>';
            container.innerHTML = html;
            lucide.createIcons();
        }

        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderMenu(tab.dataset.tab);
            });
        });

        renderMenu('aperitivos');

        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('nav-scrolled', window.scrollY > 80);
        });

        const mobileMenu = document.getElementById('mobileMenu');
        document.getElementById('menuToggle').addEventListener('click', () => mobileMenu.classList.add('open'));
        document.getElementById('menuClose').addEventListener('click', () => mobileMenu.classList.remove('open'));
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });

        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                backToTop.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
                backToTop.classList.add('opacity-100', 'translate-y-0');
            } else {
                backToTop.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
                backToTop.classList.remove('opacity-100', 'translate-y-0');
            }
        });
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealElements.forEach(el => revealObserver.observe(el));

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                }
            });
        });

        lucide.createIcons();