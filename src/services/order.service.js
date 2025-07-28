import api from "./api";

export const orderService = {
    async createOrder(token, orderData) {
        const response = await api.post('/api/order/create', orderData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = response.data;
        return data;
    },

    async updateOrderStatus(token, orderId, statusData) {
        const response = await api.put('/api/order/update-status', { orderId, ...statusData }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        return data;
    },

    async fetchAllOrders(token) {
        const response = await api.get('/api/order/fetch-all', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        return data;
    },

    async fetchOrderedProducts(token) {
        const response = await api.get('/api/order/fetch-ordered-products', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        return data;
    }
}