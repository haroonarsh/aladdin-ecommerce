'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useUser } from '@/hooks/useUser'

export default function LoginPage() {
    const router = useRouter();
    const { becomeAdmin, becomeUser } = useUser();
    const [formData, setFormData] = useState({
        role: 'user', // Default role
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (formData.role === 'admin') {
            await becomeAdmin().then(() => {
                toast.success("You are now an admin! Redirecting to admin dashboard...");
                router.push('/admin/dashboard'); // Redirect to admin dashboard if user is an admin
            })
        } else {
            await becomeUser().then(() => {
                toast.success("You are now a user! Redirecting to products page...");
                router.push('/products-page'); // Redirect to products page for regular users
            })
        } 
        setLoading(false);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <Link href="/" className="flex justify-center text-3xl font-bold text-teal-600">
                    <Image src="/images/Logo-white.png" width={100} height={100} alt='Logo' className="invert" />
                </Link>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Choose your role
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Please select your role to continue
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="role" className="block text-md font-medium text-gray-700">
                                Select Role
                            </label>
                            <select
                                name="role"
                                id="role"
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-md"
                            >
                                {/* <option value="">Select your role</option> */}
                                <option value="user" defaultChecked >User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div></div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full justify-center items-center gap-2 rounded-md border border-transparent bg-cyan-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            >
                                {loading ? (
                                    <>
                                        <span>Login account</span>
                                        {/* <Loading /> */}
                                    </>
                                ) : (
                                    "Continue"
                                )}
                                {!loading && <ArrowRight className="h-4 w-4" />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
