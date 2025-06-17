import { cartService } from "@/services/cart.service"

export const useCart = () => {

    const addToCart = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await cartService.addToCart(token, productId);
            return response;
        } catch (error) {
            throw error;
        }
    }

    const getCart = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await cartService.getCart(token);
            return response;
        } catch (error) {
            throw error;
        }
    }

    const removeFromCart = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await cartService.removeFromCart(token, productId);
            return response;
        } catch (error) {
            throw error;
        }
    }

    return { addToCart, getCart, removeFromCart };
}