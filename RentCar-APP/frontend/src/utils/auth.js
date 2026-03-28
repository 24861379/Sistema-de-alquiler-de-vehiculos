export const getUsuario = () => {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
};

export const getRol = () => {
    const usuario = getUsuario();
    return usuario?.rol || null;
};

// Función para cerrar sesión
export const logout = () => {
    localStorage.removeItem('usuario');
    window.location.href = '/login'; // Redirige al login después de cerrar sesión
};