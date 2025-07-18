import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function getUser() {
    try {
        const cookieStore = cookies()
        const token = cookieStore.get("auth-token")?.value

        if (!token) {
            return null
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-fallback-secret-key") as any
        return {
            userId: decoded.userId,
            email: decoded.email,
        }
    } catch (error) {
        return null
    }
}

export async function requireAuth() {
    const user = await getUser()
    if (!user) {
        throw new Error("Authentication required")
    }
    return user
}
