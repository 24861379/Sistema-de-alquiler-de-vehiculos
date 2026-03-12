const API_BASE_URL = 'http://localhost:9080';

export const API_ENDPOINTS = {
    LOGIN: `${API_BASE_URL}/usuario/login`,
    REGISTRO: `${API_BASE_URL}/usario/registro`,
};

export const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        "Content-type": "application/json",
        "Authorization": token ?`Bearer ${token}`: "",
    };
};