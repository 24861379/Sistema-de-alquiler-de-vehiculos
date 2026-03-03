const content = document.getElementById("content");

function loadPage(pageName) {
    const path = `secciones/${pageName}.html`;
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error(`No se encotro la página`);
            return response.text();
        })
        .then(html => {
            content.innerHTML = html;
            updateActiveLink(pageName);
        })
        .catch(() => {
            content.innerHTML = `<h2>Error 404: Página no encontrada</h2>`;
        });
}



function getCurrentPageFromHash() {
    const hash = window.location.hash.replace('#', '');
    return hash ? hash : 'dashboard'; // fallback por defecto
}

function route() {
    const page = getCurrentPageFromHash();
    loadPage(page);
}

function updateActiveLink(page) {
    document.querySelectorAll('.sidebar-link').forEach(link => {
        const target = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', target === page);
    });
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);

// guardar la ruta cuando se hace click en enlaces que van fuera
/* document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    // si el link sale del SPA (ej. contiene hojaRandom.html), guardar hash actual
    if (a.href && a.href.includes('hojaRandom.html')) {
        sessionStorage.setItem('lastRoute', location.hash || '#ejerciciciosTeoria');
    }
}); */

// al cargar la app, si no hay hash intenta restaurar la última ruta guardada
/* window.addEventListener('load', () => {
    if (!location.hash) {
        const last = sessionStorage.getItem('lastRoute');
        if (last) location.hash = last;
    }
}); */

/* CLONAR MENÚ EN OFFCANVAS(SIN DUPLICAR HTML) */
/* const offcanvasElement = document.getElementById('subMenuOffcanvas');
const mainMenu = document.getElementById('mainNavList');
const offcanvasBody = document.getElementById('offcanvasMenu');

offcanvasElement.addEventListener('show.bs.offcanvas', function () {
    // Clonar el menú y cambiar a columna
    const clone = mainMenu.cloneNode(true);
    clone.classList.remove('justify-content-center');
    clone.classList.add('flex-column');
    clone.querySelectorAll('.nav-link').forEach(link => {
        link.classList.add('text-white');
    });
    offcanvasBody.innerHTML = '';
    offcanvasBody.appendChild(clone);
});
 */
// Sincronizar clase "active" entre menús
/* document.querySelectorAll('#mainNavList .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const href = this.getAttribute('href');
        document.querySelectorAll(`.nav-link[href="${href}"]`).forEach(l => l.classList.add('active'));
    });
}); */