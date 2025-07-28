const { orderService } = require("@/services/order.service");
import { toast } from "react-toastify";

export const useOrder = () => {

    const createOrder = async (orderData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await orderService.createOrder(token, orderData);
            toast.success('Order created successfully');
            return response;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to create order");
            console.error("Order creation error:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }

    const updateOrderStatus = async (orderId, { paymentStatus, orderStatus }) => {
        try {
            const token = localStorage.getItem('token');
            const response = await orderService.updateOrderStatus(token, orderId, { paymentStatus, orderStatus });
            toast.success('Order status updated successfully');

            return response;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update order status");
            console.error("Order status update error:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }

    const fetchAllOrders = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await orderService.fetchAllOrders(token);
            toast.success('Orders fetched successfully');
            console.log("Fetched orders:", response);
            return response;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch orders");
            console.error("Fetch orders error:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }

    const fetchOrderedProducts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await orderService.fetchOrderedProducts(token);
            toast.success('Ordered products fetched successfully');
            return response;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch ordered products");
            console.error("Fetch ordered products error:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }

    return { createOrder, updateOrderStatus, fetchAllOrders, fetchOrderedProducts };
}