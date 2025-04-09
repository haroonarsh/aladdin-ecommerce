import api from "./api"

export const authService = {
    async register(formData) {
        const response = await api.post("/api/user/signup", formData);
        return response.data;
    },

    async checkSession() {
        const response = await api.get("/api/user/check");
        return response.data.user;
    }
};