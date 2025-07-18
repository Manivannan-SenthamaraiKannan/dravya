import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import clientPromise from "@/lib/mongodb"

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json()

        // Validate input
        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
        }

        // Connect to database
        const client = await clientPromise
        const db = client.db("dravya")
        const users = db.collection("users")

        // Find user by email
        const user = await users.findOne({ email: email.toLowerCase() })
        if (!user) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
        }

        // Create JWT token
        const token = jwt.sign(
            {
                userId: user._id.toString(),
                email: user.email,
            },
            process.env.JWT_SECRET || "your-fallback-secret-key",
            { expiresIn: "7d" },
        )

        // Create response with user data
        const response = NextResponse.json(
            {
                success: true,
                message: "Login successful",
                user: {
                    id: user._id.toString(),
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
            },
            { status: 200 },
        )

        // Set secure HTTP-only cookie
        response.cookies.set("auth-token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
            path: "/",
        })

        return response
    } catch (error) {
        console.error("Login error:", error)
        return NextResponse.json(
            {
                message: "Something went wrong. Please try again.",
                error: process.env.NODE_ENV === "development" ? error.message : undefined,
            },
            { status: 500 },
        )
    }
}
