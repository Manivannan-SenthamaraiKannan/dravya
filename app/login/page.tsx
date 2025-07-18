"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CreditCard, Eye, EyeOff, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        const formData = new FormData(e.currentTarget)
        const credentials = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        }

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            })

            const data = await response.json()

            if (response.ok && data.success) {
                // Successful login
                router.push("/dashboard")
                router.refresh() // Refresh to update auth state
            } else {
                // Login failed
                setError(data.message || "Login failed. Please try again.")
            }
        } catch (error) {
            console.error("Login error:", error)
            setError("Network error. Please check your connection and try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
                        <CreditCard className="h-8 w-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">Dravya</span>
                    </Link>
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription>Sign in to your account to continue</CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="john@example.com"
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="Enter your password"
                                    disabled={isLoading}
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={isLoading}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                                Forgot password?
                            </Link>
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Signing In..." : "Sign In"}
                        </Button>
                    </form>

                    {/* Demo Account Info */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800 font-medium mb-2">Demo Account:</p>
                        <p className="text-sm text-blue-700">Email: demo@dravya.com</p>
                        <p className="text-sm text-blue-700">Password: demo123</p>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
