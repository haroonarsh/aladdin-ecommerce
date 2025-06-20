import api from "./api";

export const cartService = {
    async getCart(token) {
        const response = await api.get('/api/cart/get', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        return data;
    },

    async addToCart(token, productId, quantity) {
        const response = await api.post('/api/cart/add', { productId, quantity }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        return data;
    },

    async removeFromCart(token, productId) {
        const response = await api.delete(`/api/cart/remove/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        return data;
    }
}