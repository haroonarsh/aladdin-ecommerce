import { authService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

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
            router.push('/products-page');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const checkAuth = async () => {
        try {
            const user = await authService.checkSession();
            setUser(user);
            return true; // User is authenticated
        } catch (error) {
            router.push('/login'); // Redirect to login page
            return false; // User is not authenticated
        }
    };

  return { user, loading, error, register, checkAuth };
}
