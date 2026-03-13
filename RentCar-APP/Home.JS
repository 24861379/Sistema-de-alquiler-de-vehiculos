const content = document.getElementById("content");

/* /RentCar-APP/views/secciones/ */
function loadPage(pageName) {
    const path = `../views/secciones/${pageName}.html`;
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

//para controlar el menu admin
document.addEventListener("DOMContentLoaded", () => {
    const rol = localStorage.getItem("rol");
    const adminMenu = document.getElementById("adminMenu");
console.log(localStorage.getItem("rol"));
console.log(localStorage.getItem("token"));
    if (!adminMenu) return;

    if (rol === "ADMIN") {
        adminMenu.classList.remove("hidden");
    } else {
        adminMenu.classList.add("hidden");
    }
})

//logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("token");
        localStorage.removeItem("rol");
        window.location.href = "../index.html";
    });
}

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../index.html";
}