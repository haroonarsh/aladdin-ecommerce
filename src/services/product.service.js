import api from "./api";

export const productService = {

    async getProducts(token) {
        const response = await api.get("/api/products/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = response.data;
        return data;
    },

    async getProductById(id) {
        const response = await api.get(`/api/products/${id}`);
        const data = response.data;
        return data;
    },

    async createProduct(token, formData) {
        const response = await api.post("/api/products/", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        })
        const data = response.data;
        return data;
    },

    async updateProduct(token, id, formData) {
        const response = await api.put(`/api/products/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        })
        const data = response.data;
        return data;
    },

    async deleteProduct(token, id) {
        const response = await api.delete(`/api/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        const data = response.data;
        return data;
    }
}
