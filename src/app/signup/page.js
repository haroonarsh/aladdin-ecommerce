'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useAuth } from '@/hooks/useAuth'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function SignupPage() {

    const { register, loading, error } = useAuth();
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(loading)
    const [isError, setIsError] = useState(error)
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNo: '',
        Password: '',
        Date: ''
    })

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        await register(formData);
        console.log(formData)
    };

    // Show error toast when there's an error
    useEffect(() => {
        if (error) {
            toast.error(error.message || "Registration failed! Please try again.");
        }
    }, [error]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <Link href="/" className="flex justify-center text-3xl font-bold text-teal-600">
                    <Image src="/images/Logo-white.png" width={100} height={100} alt='Logo' className="invert" />
                </Link>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-teal-600 hover:text-teal-500">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    id="FirstName"
                                    value={formData.FirstName}
                                    // autoComplete='off'
                                    onChange={handleChange}
                                    name="FirstName"
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    id="LastName"
                                    value={formData.LastName}
                                    // autoComplete='off'
                                    onChange={handleChange}
                                    name="LastName"
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                value={formData.Email}
                                autoComplete='off'
                                onChange={handleChange}
                                name="Email"
                                type="email"
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                            />
                        </div>


                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative mt-1">
                                <input
                                    id="password"
                                    value={formData.Password}
                                    autoComplete='off'
                                    onChange={handleChange}
                                    name="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                                />

                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-3"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-gray-500" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>


                        <div>
                            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="relative mt-1">
                                <input
                                    id="phoneNo"
                                    // autoComplete='off'
                                    value={formData.PhoneNo}
                                    onChange={handleChange}
                                    name="PhoneNo"
                                    // type={showPassword ? 'text' : 'password'}
                                    required
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                                />
                            </div>
                        </div>


                        <div className="flex items-start">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I agree to the{' '}
                                <Link href="/terms" className="text-teal-600 hover:text-teal-500">
                                    Terms and Conditions
                                </Link>{' '}
                                and{' '}
                                <Link href="/privacy" className="text-teal-600 hover:text-teal-500">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>


                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex w-full justify-center items-center gap-2 rounded-md border border-transparent bg-cyan-700 cursor-pointer py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            >
                                {isLoading ? (

                                    <>
                                        <span>Create Account</span>
                                        {/* <Spinner className="h-4 w-4" /> */}
                                    </>
                                ) : "Create Account"}
                                {!isLoading && <ArrowRight className="h-4 w-4" />}
                            </button>

                            {isError && (
                                <div className='text-red-500 text-center py-3 font-bold'>
                                    {Array.isArray(isError) ? isError.join(', ') : isError}
                                </div>
                            )}
                        </div>
                    </form>


                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <Link
                                href="http://localhost:5000/auth/google"
                                // type="button"
                                // onClick={handleGoogleLogin}
                                className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Google
                            </Link>

                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                            >
                                <svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
