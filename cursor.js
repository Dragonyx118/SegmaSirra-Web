// =====================
//   ANIMATED CURSOR
// =====================
(function () {
    // Crea gli elementi
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(ring);
    document.body.appendChild(dot);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    // Il dot segue istantaneamente
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    });

    // L'anello segue con inertia minima (lerp), più reattivo e preciso.
    // SPEED più alto = più veloce/preciso (1 = istantaneo). Regolabile.
    const SPEED = 0.55;
    const lerp = (a, b, t) => a + (b - a) * t;
    function animateRing() {
        ringX = lerp(ringX, mouseX, SPEED);
        ringY = lerp(ringY, mouseY, SPEED);
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover su elementi interattivi
    const hoverTargets = 'a, button, input, textarea, select, label, [role="button"], .feature-card, .team-card, .download-card, .contact-info-card, .stat-item';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverTargets)) {
            document.body.classList.add('cursor-hover');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverTargets)) {
            document.body.classList.remove('cursor-hover');
        }
    });

    // Click feedback
    document.addEventListener('mousedown', () => {
        document.body.classList.add('cursor-click');
    });
    document.addEventListener('mouseup', () => {
        document.body.classList.remove('cursor-click');
    });

    // Nascondi quando esce dalla finestra
    document.addEventListener('mouseleave', () => {
        ring.style.opacity = '0';
        dot.style.opacity  = '0';
    });
    document.addEventListener('mouseenter', () => {
        ring.style.opacity = '1';
        dot.style.opacity  = '1';
    });
})();