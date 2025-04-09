"use client";

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

 export const ProtectedRoute = ({ children }) => {

    const { checkAuth, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const verifyAuth = async () => {
            const isAuthenticated = await checkAuth();
            if (!isAuthenticated) {
                toast.error("Authentication failed! Redirecting to login page...");
                // router.push('/login'); // Redirect to login page if not authenticated
            }
        };

        verifyAuth();
    }, [router]);

  return user ? children : null; // Render children only if user is authenticated
};
