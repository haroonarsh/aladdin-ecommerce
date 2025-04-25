import api from "./api"

export const userService = {
    async getUser(token) {
        const response = await api.get("/api/user/getUser", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const data = response.data;
        return data; 
    },

    async updateUser(token, formData) {
        const response = await api.put("/api/user/updateUser", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const data = response.data;
        return data; 
    }
};