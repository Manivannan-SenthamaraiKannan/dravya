import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import clientPromise from "@/lib/mongodb"

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, email, password } = await request.json()

        // Validate input
        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 })
        }

        if (password.length < 6) {
            return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 })
        }

        // Connect to database
        const client = await clientPromise
        const db = client.db("dravya")
        const users = db.collection("users")

        // Check if user already exists
        const existingUser = await users.findOne({ email: email.toLowerCase() })
        if (existingUser) {
            return NextResponse.json({ message: "User with this email already exists" }, { status: 400 })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Create user
        const result = await users.insertOne({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        // Create default accounts for the user
        const accounts = db.collection("accounts")
        await accounts.insertMany([
            {
                userId: result.insertedId.toString(),
                name: "Checking Account",
                type: "checking",
                balance: 1000.0, // Starting balance
                currency: "USD",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userId: result.insertedId.toString(),
                name: "Savings Account",
                type: "savings",
                balance: 5000.0, // Starting balance
                currency: "USD",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])

        // Create JWT token for immediate login
        const token = jwt.sign(
            {
                userId: result.insertedId.toString(),
                email: email.toLowerCase(),
            },
            process.env.JWT_SECRET || "your-fallback-secret-key",
            { expiresIn: "7d" },
        )

        // Create response
        const response = NextResponse.json(
            {
                success: true,
                message: "Account created successfully",
                user: {
                    id: result.insertedId.toString(),
                    firstName,
                    lastName,
                    email: email.toLowerCase(),
                },
            },
            { status: 201 },
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
        console.error("Signup error:", error)
        return NextResponse.json(
            {
                message: "Something went wrong. Please try again.",
                error: process.env.NODE_ENV === "development" ? error.message : undefined,
            },
            { status: 500 },
        )
    }
}
