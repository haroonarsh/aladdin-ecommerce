import { NextResponse } from "next/server";

export default async function middleware(request) {
    const  { pathname } = request.nextUrl;
    const token = request.cookies.get("jwt")?.value;

    console.log("Token:", token); // Log the token value

    const protectedRoutes = ['/dashboard', '/products-page', '/account', '/account/personal-info'];
    console.log("Protected Routes:", protectedRoutes); // Log the protected routes
    console.log("Current Pathname:", pathname); // Log the current pathname

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
        if (!token) {
            const url = new URL('/login', request.url);
            url.searchParams.set('redirected', request.nextUrl.pathname);
            return NextResponse.redirect(url);
        }
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/products-page', '/dashboard', '/account', '/account/personal-info'],
};