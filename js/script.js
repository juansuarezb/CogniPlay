/* 
*
*/
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const links = navLinks.querySelectorAll('a');

if (menuBtn && navLinks) { 
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if(navLinks.classList.contains('active')){
            menuBtn.innerHTML = "X";
            menuBtn.setAttribute("aria-expanded", "true");
        } else {
            menuBtn.innerHTML = "&#9776;";
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });
}

if (links) {
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (menuBtn) {
                menuBtn.innerHTML = "&#9776;";
                menuBtn.setAttribute("aria-expanded", "false");
            }
        });
    });
}

/* =========================================
   TUTORIAL ONBOARDING (Solo la primera vez)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATOS DEL TUTORIAL ---
    const tutorialSteps = [
        {
            title: "¡Bienvenido a CogniPlay! 🎮",
            desc: "Una plataforma diseñada para potenciar tu mente. Aquí encontrarás juegos interactivos para reforzar tu atención y memoria de forma divertida."
        },
        {
            title: "Juegos Disponibles",
            desc: "Explora nuestra selección: 'Sopa de Letras' para mejorar tu vocabulario y atención, y 'Memorización' para desafiar tu capacidad de retención."
        },
        {
            title: "Sopa de Letras",
            desc: "En este juego, busca las palabras ocultas en la cuadrícula. Puedes seleccionarlas en horizontal, vertical o diagonal. ¡Sé rápido y preciso!"
        },
        {
            title: "Juego de Memorización",
            desc: "Ejercita tu memoria visual. Voltea las cartas para encontrar pares idénticos. Recuerda la ubicación de cada imagen y completa el tablero."
        },
        {
            title: "Consejos Útiles",
            desc: "1. Juega en un lugar tranquilo.<br>2. Sé constante para ver resultados.<br>3. ¡Diviértete mientras aprendes!"
        },
        {
            title: "¿Listo para empezar?",
            desc: "Ahora tienes el control. Explora el dashboard, elige tu reto y comienza a entrenar tu cerebro hoy mismo."
        }
    ];

    // --- VARIABLES ---
    let currentStep = 0;
    const overlay = document.getElementById('tutorial-overlay');
    const titleEl = document.getElementById('tutorial-title');
    const descEl = document.getElementById('tutorial-desc');
    const indicatorsContainer = document.getElementById('step-indicators');
    
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const btnSkip = document.getElementById('btn-skip');
    const btnClose = document.getElementById('btn-close-tutorial');

    // Validación de seguridad
    if (!overlay) return;

    // --- LÓGICA DE INICIO (Con Memoria) ---
    // Verificamos si existe la marca en el navegador
    const tutorialSeen = localStorage.getItem('cogniplay_tutorial_v1');

    if (!tutorialSeen) {
        overlay.classList.remove('hidden');
        createIndicators();
        updateModal();
    } else {
        overlay.classList.add('hidden');
        // Si ya vio el tutorial, reproducir música automáticamente
        playBackgroundMusic();
    }

    // --- FUNCIONES ---
    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        tutorialSteps.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            indicatorsContainer.appendChild(dot);
        });
    }

    function updateModal() {
        // Textos
        titleEl.textContent = tutorialSteps[currentStep].title;
        descEl.innerHTML = tutorialSteps[currentStep].desc;

        // Botones
        btnPrev.disabled = currentStep === 0;
        
        if (currentStep === tutorialSteps.length - 1) {
            btnNext.textContent = "Comenzar";
        } else {
            btnNext.textContent = "Siguiente";
        }

        // Puntos indicadores
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentStep) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function playBackgroundMusic() {
        const music = document.getElementById("background-music");
        if (music) {
            music.play().catch(error => {
                console.log("La reproducción automática fue bloqueada por el navegador:", error);
            });
        }
    }

    function closeTutorial() {
        overlay.classList.add('hidden');
        localStorage.setItem('cogniplay_tutorial_v1', 'true');
        // Reproducir música automáticamente al terminar tutorial
        playBackgroundMusic();
    }

    // --- EVENTOS ---
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (currentStep < tutorialSteps.length - 1) {
                currentStep++;
                updateModal();
            } else {
                closeTutorial();
            }
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateModal();
            }
        });
    }

    if (btnSkip) btnSkip.addEventListener('click', closeTutorial);
    if (btnClose) btnClose.addEventListener('click', closeTutorial);
});