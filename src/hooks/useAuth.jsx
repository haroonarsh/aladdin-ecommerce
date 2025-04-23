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
            localStorage.removeItem('UserData');
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
    
    const login = async (userData) => {
        try {
            setLoading(true);
            localStorage.removeItem('UserData');
            const { user } = await authService.login(userData);
            setUser(user);
            toast.success("Login successful! Redirecting to products page...");
            setTimeout(() => {
                router.push('/products-page'); // Redirect to products page after login
            }, 4000);
            return user; // Return user data if needed
        } catch (error) {
            toast.error(user.message);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

  return { user, loading, error, register, login };
}
