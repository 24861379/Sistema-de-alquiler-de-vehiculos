import { login } from "../services/authService.js";


const form = document.querySelector("form");
const alertContainer = document.getElementById("alertContainer");
const loginBtn = document.getElementById("loginBtn");
const btnText = document.getElementById("btnText");
const spinner = document.getElementById("loadingSpinner");

const passwordInput = document.getElementById("Password");
const togglePasswordBtn = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = form.elements.Email.value;
    const password = form.elements.Password.value;

    setLoading(true);
    alertContainer.innerHTML = ""; // Limpiar alertas anteriores

    try {
        const response = await login({
            email: email,
            password: password
        });

        if (response.token) {
            showAlert("Login exitoso", "success");
            
            //guardo el token en localStorage
            localStorage.setItem("token", response.token);
            localStorage.setItem("rol", response.rol);

            setTimeout(() => { 
                window.location.href = "./views/inicio.html";
            }, 800);
            
        }
    } catch (error) {
        console.error(error);
        showAlert(error.message, "danger");
        setLoading(false);
    }
});

const showAlert = (message, type = "danger") => { 
    alertContainer.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert"> 
        ${message}    
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}

const setLoading = (isLoading) => {
  loginBtn.disabled = isLoading;
  spinner.classList.toggle("d-none", !isLoading);
  btnText.textContent = isLoading ? "Ingresando..." : "Ingresar";
};

//ocultar o mostrar contraseña
togglePasswordBtn.addEventListener("click", () => {
    const password = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", password ? "text" : "password");
    
    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
});

