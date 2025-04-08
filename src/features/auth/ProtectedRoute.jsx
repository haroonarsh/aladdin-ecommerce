import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

 export const ProtectedRoute = ({ children }) => {

    const { checkAuth, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const verifyAuth = async () => {
            const isAuthenticated = await checkAuth();
            if (!isAuthenticated) {
                router.push('/login'); // Redirect to login page if not authenticated
            }
        };

        verifyAuth();
    }, [router]);

  return user ? children : null; // Render children only if user is authenticated
};
