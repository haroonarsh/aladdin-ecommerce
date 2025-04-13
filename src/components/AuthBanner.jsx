'use client';

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export const AuthBanner = () => {

    const { showBanner, setShowBanner } = useAuth();
    const router = useRouter();

    if (!showBanner) return null;
        
    return (
        <div className="fixed top-0 left-0 right-0 bg-yellow-100 p-4 text-center z-50">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
            <span>Please login to access all features</span>
            <div className="space-x-4">
                <button
                onClick={() => {
                setShowBanner(false);
                router.push('/login');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Login
            </button>
            <button
                onClick={() => setShowBanner(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
                Dismiss
            </button>
            </div>
            </div>
        </div>
    );
};