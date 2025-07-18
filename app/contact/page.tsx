"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    MessageSquare,
    HeadphonesIcon,
    Users,
    Building,
} from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        category: "",
        message: "",
        priority: "medium",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")
        setErrorMessage("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus("success")
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    subject: "",
                    category: "",
                    message: "",
                    priority: "medium",
                })
            } else {
                setSubmitStatus("error")
                setErrorMessage(data.message || "Failed to send message. Please try again.")
            }
        } catch (error) {
            setSubmitStatus("error")
            setErrorMessage("Network error. Please check your connection and try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4 sm:text-5xl">Get in Touch</h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Have questions about Dravya? We're here to help you with your financial journey.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span>24/7 Support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MessageSquare className="h-4 w-4" />
                                <span>Quick Response</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <HeadphonesIcon className="h-4 w-4" />
                                <span>Expert Help</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="space-y-8">
                            {/* Contact Methods */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Phone className="h-5 w-5 text-blue-600" />
                                        <span>Contact Information</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Phone Support</p>
                                            <p className="text-gray-600">+91 1234567890</p>
                                            <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM PST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Email Support</p>
                                            <p className="text-gray-600">support@dravya.com</p>
                                            <p className="text-sm text-gray-500">Response within 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Office Address</p>
                                            <p className="text-gray-600">Bangalore, IN</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Support Categories */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Users className="h-5 w-5 text-blue-600" />
                                        <span>Support Categories</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                            <Building className="h-4 w-4 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-sm">Account Issues</p>
                                                <p className="text-xs text-gray-600">Login, password, account access</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                            <MessageSquare className="h-4 w-4 text-green-600" />
                                            <div>
                                                <p className="font-medium text-sm">Transaction Support</p>
                                                <p className="text-xs text-gray-600">Payments, transfers, disputes</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                            <HeadphonesIcon className="h-4 w-4 text-purple-600" />
                                            <div>
                                                <p className="font-medium text-sm">Technical Help</p>
                                                <p className="text-xs text-gray-600">App issues, bugs, features</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Business Hours */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Clock className="h-5 w-5 text-blue-600" />
                                        <span>Business Hours</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span className="font-medium">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span className="font-medium">Closed</span>
                                        </div>
                                        <div className="pt-2 border-t">
                                            <p className="text-xs text-gray-600">
                                                Emergency support available 24/7 for critical account issues
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {submitStatus === "success" && (
                                    <Alert className="mb-6 border-green-200 bg-green-50">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <AlertDescription className="text-green-800">
                                            Thank you for your message! We'll get back to you within 24 hours.
                                        </AlertDescription>
                                    </Alert>
                                )}

                                {submitStatus === "error" && (
                                    <Alert variant="destructive" className="mb-6">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errorMessage}</AlertDescription>
                                    </Alert>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="firstName">First Name *</Label>
                                            <Input
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                                required
                                                disabled={isSubmitting}
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="lastName">Last Name *</Label>
                                            <Input
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                                required
                                                disabled={isSubmitting}
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                required
                                                disabled={isSubmitting}
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                disabled={isSubmitting}
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="company">Company (Optional)</Label>
                                        <Input
                                            id="company"
                                            value={formData.company}
                                            onChange={(e) => handleInputChange("company", e.target.value)}
                                            disabled={isSubmitting}
                                            placeholder="Your Company Name"
                                        />
                                    </div>

                                    {/* Inquiry Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="category">Category *</Label>
                                            <Select
                                                value={formData.category}
                                                onValueChange={(value) => handleInputChange("category", value)}
                                                disabled={isSubmitting}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="account">Account Issues</SelectItem>
                                                    <SelectItem value="transaction">Transaction Support</SelectItem>
                                                    <SelectItem value="technical">Technical Help</SelectItem>
                                                    <SelectItem value="billing">Billing & Payments</SelectItem>
                                                    <SelectItem value="feature">Feature Request</SelectItem>
                                                    <SelectItem value="partnership">Partnership</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label htmlFor="priority">Priority</Label>
                                            <Select
                                                value={formData.priority}
                                                onValueChange={(value) => handleInputChange("priority", value)}
                                                disabled={isSubmitting}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="low">Low</SelectItem>
                                                    <SelectItem value="medium">Medium</SelectItem>
                                                    <SelectItem value="high">High</SelectItem>
                                                    <SelectItem value="urgent">Urgent</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) => handleInputChange("subject", e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                            placeholder="Brief description of your inquiry"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => handleInputChange("message", e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                            placeholder="Please provide detailed information about your inquiry..."
                                            rows={6}
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                            <CardDescription>Quick answers to common questions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium mb-2">How do I reset my password?</h4>
                                        <p className="text-sm text-gray-600">
                                            Click "Forgot Password" on the login page and follow the instructions sent to your email.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Are my transactions secure?</h4>
                                        <p className="text-sm text-gray-600">
                                            Yes, we use bank-level encryption and security measures to protect all your financial data.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">How long do transfers take?</h4>
                                        <p className="text-sm text-gray-600">
                                            Domestic transfers are instant, while international transfers take 1-3 business days.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium mb-2">What are your fees?</h4>
                                        <p className="text-sm text-gray-600">
                                            We offer free domestic transfers and competitive rates for international transactions.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Is there a mobile app?</h4>
                                        <p className="text-sm text-gray-600">
                                            Yes, our mobile app is available on both iOS and Android app stores.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">How do I close my account?</h4>
                                        <p className="text-sm text-gray-600">
                                            Contact our support team and we'll help you close your account securely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    )
}
