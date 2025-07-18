// MongoDB Contact Collection Initialization Script

import { MongoClient } from "mongodb"

async function initializeContactCollection() {
    const uri = process.env.MONGODB_URI

    if (!uri) {
        console.error("MONGODB_URI environment variable is not set")
        return
    }

    const client = new MongoClient(uri)

    try {
        await client.connect()
        console.log("Connected to MongoDB")

        const db = client.db("dravya")
        const contacts = db.collection("contacts")

        // Create indexes for better performance
        await contacts.createIndex({ email: 1 })
        await contacts.createIndex({ category: 1 })
        await contacts.createIndex({ status: 1 })
        await contacts.createIndex({ priority: 1 })
        await contacts.createIndex({ createdAt: -1 })
        await contacts.createIndex({ firstName: "text", lastName: "text", subject: "text", message: "text" })

        console.log("✓ Contact collection indexes created")

        // Insert sample contact for testing
        const sampleContact = {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phone: "+1 (555) 987-6543",
            company: "Tech Solutions Inc",
            subject: "Account Setup Help",
            category: "account",
            message: "I need help setting up my business account and understanding the features available.",
            priority: "medium",
            status: "new",
            createdAt: new Date(),
            updatedAt: new Date(),
            ipAddress: "192.168.1.1",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        }

        await contacts.insertOne(sampleContact)
        console.log("✓ Sample contact created")

        console.log("\n🎉 Contact collection initialization completed!")
        console.log("\nContact Collection Structure:")
        console.log("├── Indexes on email, category, status, priority, createdAt")
        console.log("├── Full-text search on name, subject, and message")
        console.log("└── Sample contact record created")

        console.log("\nContact Categories:")
        console.log("├── account - Account Issues")
        console.log("├── transaction - Transaction Support")
        console.log("├── technical - Technical Help")
        console.log("├── billing - Billing & Payments")
        console.log("├── feature - Feature Request")
        console.log("├── partnership - Partnership")
        console.log("└── other - Other")

        console.log("\nContact Statuses:")
        console.log("├── new - New submission")
        console.log("├── in-progress - Being handled")
        console.log("├── resolved - Issue resolved")
        console.log("└── closed - Ticket closed")
    } catch (error) {
        console.error("Contact collection initialization failed:", error)
    } finally {
        await client.close()
        console.log("MongoDB connection closed")
    }
}

// Run the initialization
initializeContactCollection().catch(console.error)
