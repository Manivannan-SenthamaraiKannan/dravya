import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, email, phone, company, subject, category, message, priority } = await request.json()

        // Validate required fields
        if (!firstName || !lastName || !email || !subject || !category || !message) {
            return NextResponse.json({ message: "Please fill in all required fields" }, { status: 400 })
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "Please enter a valid email address" }, { status: 400 })
        }

        // Connect to database
        const client = await clientPromise
        const db = client.db("dravya")
        const contacts = db.collection("contacts")

        // Create contact record
        const contactData = {
            firstName,
            lastName,
            email: email.toLowerCase(),
            phone: phone || null,
            company: company || null,
            subject,
            category,
            message,
            priority: priority || "medium",
            status: "new",
            createdAt: new Date(),
            updatedAt: new Date(),
            ipAddress: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
            userAgent: request.headers.get("user-agent") || "unknown",
        }

        const result = await contacts.insertOne(contactData)

        // Send auto-response email (in a real app, you'd use an email service)
        console.log("Contact form submission:", {
            id: result.insertedId,
            email,
            subject,
            category,
            priority,
        })

        // Create ticket number for reference
        const ticketNumber = `DRV-${Date.now().toString().slice(-6)}`

        return NextResponse.json(
            {
                success: true,
                message: "Thank you for contacting us! We'll get back to you soon.",
                ticketNumber,
                contactId: result.insertedId,
            },
            { status: 201 },
        )
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json(
            {
                message: "Something went wrong. Please try again later.",
                error: process.env.NODE_ENV === "development" ? error.message : undefined,
            },
            { status: 500 },
        )
    }
}

export async function GET(request: NextRequest) {
    try {
        // This endpoint could be used by admin to view contact submissions
        // Add authentication check here in production

        const { searchParams } = new URL(request.url)
        const page = Number.parseInt(searchParams.get("page") || "1")
        const limit = Number.parseInt(searchParams.get("limit") || "10")
        const status = searchParams.get("status")
        const category = searchParams.get("category")

        const client = await clientPromise
        const db = client.db("dravya")
        const contacts = db.collection("contacts")

        // Build query
        const query: any = {}
        if (status) query.status = status
        if (category) query.category = category

        // Get contacts with pagination
        const skip = (page - 1) * limit
        const contactsList = await contacts.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).toArray()

        const total = await contacts.countDocuments(query)

        return NextResponse.json({
            contacts: contactsList,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        })
    } catch (error) {
        console.error("Get contacts error:", error)
        return NextResponse.json({ message: "Failed to fetch contacts" }, { status: 500 })
    }
}
