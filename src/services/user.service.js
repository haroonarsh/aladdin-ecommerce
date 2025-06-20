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
    },

    async updateImage(image) {
        const response = await api.put("/api/user/updateImage", image, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data",
            }
        })
        const data = response.data;
        return data;
    },

    async updatePassword(token, formData) {
        const response = await api.put("/api/user/updatePassword", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = response.data;
        return data;
    },

    async becomeAdmin(token) {
        const response = await api.put("/api/user/becomeSeller", {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = response.data;
        return data;
    },

    async becomeUser(token) {
        const response = await api.put("/api/user/becomeBuyer", {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = response.data;
        return data;
    }
};