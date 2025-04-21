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
    }
};