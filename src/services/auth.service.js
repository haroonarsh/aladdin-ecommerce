import api from "./api"

export const authService = {
    async register(formData) {
        const response = await api.post("/api/user/signup", formData);
        return response.data;
    },

    async login(formData) {
        const response = await api.post("/api/user/login", formData);
        console.log("Login Response:", response);
        return response.data;
    },

    async logout() {
        const response = await api.post("/api/user/logout");
        return response.data;
    }
};