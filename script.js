/* script.js — Theme toggle, typed animation, scroll spy, stat counter */
(function () {
    "use strict";

    /* ── THEME ─────────────────────────────── */
    const body        = document.body;
    const themeBtn    = document.getElementById("theme-toggle");
    const themeIcon   = document.getElementById("theme-icon");
    const saved       = localStorage.getItem("theme");

    function applyTheme(isLight) {
        body.classList.toggle("light", isLight);
        themeIcon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
    }
    applyTheme(saved === "light");

    themeBtn.addEventListener("click", () => {
        const goLight = !body.classList.contains("light");
        localStorage.setItem("theme", goLight ? "light" : "dark");
        applyTheme(goLight);
    });

    /* ── PRINT PDF ─────────────────────────── */
    document.getElementById("print-pdf").addEventListener("click", () => window.print());

    /* ── TYPED EFFECT ──────────────────────── */
    const phrases = [
        "Analista de Datos",
        "Especialista SSOMA",
        "Automatizacion Python",
        "Power BI & SQL",
        "SIG ISO 9001/14001/45001"
    ];
    const el = document.getElementById("typed-role");
    if (el) {
        let pi = 0, ci = 0, deleting = false;
        function type() {
            const phrase = phrases[pi];
            el.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
            if (!el.nextSibling || el.nextSibling.className !== "cursor") {
                const cur = document.createElement("span");
                cur.className = "cursor";
                el.after(cur);
            }
            let delay = deleting ? 55 : 95;
            if (!deleting && ci > phrase.length)      { delay = 1800; deleting = true; }
            else if (deleting && ci < 0)               { deleting = false; ci = 0; pi = (pi + 1) % phrases.length; delay = 400; }
            setTimeout(type, delay);
        }
        setTimeout(type, 800);
    }

    /* ── SCROLL REVEAL ─────────────────────── */
    const sections = document.querySelectorAll(".cv-section");
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    sections.forEach(s => revealObs.observe(s));

    /* ── SIDE NAV SPY ──────────────────────── */
    const navDots    = document.querySelectorAll(".nav-dot");
    const allSections = document.querySelectorAll("section[id]");
    const spyObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                navDots.forEach(d => d.classList.remove("active"));
                const active = document.querySelector(`.nav-dot[href="#${e.target.id}"]`);
                if (active) active.classList.add("active");
            }
        });
    }, { threshold: 0.4 });
    allSections.forEach(s => spyObs.observe(s));

    /* ── ANIMATED COUNTERS ─────────────────── */
    const statNums = document.querySelectorAll(".stat-number[data-target]");
    const countObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            countObs.unobserve(e.target);
            const target = +e.target.dataset.target;
            const duration = 1200;
            const start = performance.now();
            function update(now) {
                const progress = Math.min((now - start) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                e.target.textContent = Math.round(ease * target);
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }, { threshold: 0.5 });
    statNums.forEach(n => countObs.observe(n));

    /* ── SMOOTH NAV CLICK ──────────────────── */
    navDots.forEach(dot => {
        dot.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(dot.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
    });

})();
