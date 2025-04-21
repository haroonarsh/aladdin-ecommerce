import api from "./api"

export const authService = {
    async register(formData) {
        const response = await api.post("/api/user/signup", formData);
        return response.data;
    },

    async login(formData) {
        const response = await api.post("/api/user/login", formData);
        return response.data;
    },
};