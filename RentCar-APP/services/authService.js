import { API_ENDPOINTS, getAuthHeaders } from "../config/api.config.js"; 

export const login = async (data) => { 
    const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message);
    }
    return result;
}

