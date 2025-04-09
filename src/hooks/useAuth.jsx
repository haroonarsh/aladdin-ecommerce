import { authService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export const useAuth = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const register = async (userData) => {
        try {
            setLoading(true);
            const { user } = await authService.register(userData);
            setUser(user);
            toast.success("Registration successful! Redirecting to products page...");
            setTimeout(() => {
                router.push('/products-page'); // Redirect to products page after registration
            }, 4000);
            return user; // Return user data if needed
        } catch (error) {
            toast.error("Registration failed! Please try again.");
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const checkAuth = async () => {
        try {
            const user = await authService.checkSession();
            setUser(user);
            toast.success("Authenticated! Redirecting to products page...");
            setTimeout(() => {
            router.push('/products-page'); // Redirect to products page if authenticated
            }, 4000);
            return true; // User is authenticated
        } catch (error) {
            setTimeout(() => {
                router.push('/login'); // Redirect to login page if not authenticated
            }, 4000);
            return false; // User is not authenticated
        }
    };

  return { user, loading, error, register, checkAuth };
}
