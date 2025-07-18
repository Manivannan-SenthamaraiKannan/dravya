import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

export function middleware(request: NextRequest) {
    // Get the pathname of the request
    const { pathname } = request.nextUrl

    // Define protected routes
    const protectedRoutes = ["/dashboard"]
    const authRoutes = ["/login", "/signup"]

    // Check if the current path is protected
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))
    const isAuthRoute = authRoutes.includes(pathname)

    // Get the token from cookies
    const token = request.cookies.get("auth-token")?.value

    // If it's a protected route and no token, redirect to login
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    // If it's an auth route and user is already logged in, redirect to dashboard
    if (isAuthRoute && token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET || "your-fallback-secret-key")
            return NextResponse.redirect(new URL("/dashboard", request.url))
        } catch (error) {
            // Token is invalid, continue to auth page
            const response = NextResponse.next()
            response.cookies.delete("auth-token")
            return response
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/login", "/signup"],
}
