import { cartService } from "@/services/cart.service"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useCart = () => {
    const router = useRouter();

    const addToCart = async (productId, quantity) => {
        try {
            const token = localStorage.getItem('token');
            const response = await cartService.addToCart(token, productId, quantity);
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
            toast.success('Product removed from cart successfully');
            return response;
        } catch (error) {
            throw error;
        }
    }

    return { addToCart, getCart, removeFromCart };
}