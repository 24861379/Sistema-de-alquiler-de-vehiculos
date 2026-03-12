import { login } from "../services/authservice.js";


const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = form.elements.Email.value;
    const password = form.elements.Password.value;

    try {
        const response = await login({
            email: email,
            password: password
        });

        if (response.token) {
            alert("Login exitoso");
            window.location.href = "./views/inicio.html";
        } else {
            alert("Credenciales incorrectas");
        }

    } catch (error) {
        console.error(error);
        alert("Error al iniciar sesión");
    }
});
