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
            const user = await authService.register(userData);
            setUser(user.data);
            localStorage.setItem('UserData', JSON.stringify(user.data)); // Store user data in local storage
            // setTimeout(() => {
                if (user.data.user.Role === 'admin') {
                    toast.success("Registration successful! Redirecting to admin dashboard...");
                    router.push('/admin/dashboard'); // Redirect to admin dashboard if user is an admin
                } else {
                    toast.success("Registration successful! Redirecting to products page...");
                    router.push('/products-page'); // Redirect to products page for regular users
                }
            // }, 4000);
            return user; // Return user data if needed
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed! Please try again.");
            console.log("Registration error:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    
    const login = async (userData) => {
        try {
            setLoading(true);
            localStorage.removeItem('UserData');
            localStorage.removeItem('jwt'); // Remove JWT token from local storage
            const user = await authService.login(userData);

            // if (user === undefined || user === null) {
            //     toast.error("Login failed! Please try again.");
            //     return;
            // }
            setUser(user.data);
            localStorage.setItem('UserData', JSON.stringify(user.data)); // Store user data in local storage

                if (user.data.user.Role === 'admin') {
                    toast.success("Login successful! Redirecting to admin dashboard...");
                    router.push('/admin/dashboard'); // Redirect to admin dashboard if user is an admin
                } else {
                    toast.success("Login successful! Redirecting to products page...");
                    router.push('/products-page'); // Redirect to products page for regular users
                }
            return user; // Return user data if needed
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed! Please try again.");
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            localStorage.removeItem('UserData');
            localStorage.removeItem('jwt'); // Remove JWT token from local storage
            await authService.logout();
            setUser(null);
            toast.success("Logout successful! Redirecting to login page...");
            setTimeout(() => {
                router.push('/login'); // Redirect to login page after logout
            }, 4000);
        } catch (error) {
            toast.error("Logout failed! Please try again.");
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

  return { user, loading, error, register, login, logout };
}
