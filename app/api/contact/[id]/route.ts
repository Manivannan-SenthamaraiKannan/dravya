import { type NextRequest, NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ message: "Invalid contact ID" }, { status: 400 })
        }

        const client = await clientPromise
        const db = client.db("dravya")
        const contacts = db.collection("contacts")

        const contact = await contacts.findOne({ _id: new ObjectId(id) })

        if (!contact) {
            return NextResponse.json({ message: "Contact not found" }, { status: 404 })
        }

        return NextResponse.json({ contact })
    } catch (error) {
        console.error("Get contact error:", error)
        return NextResponse.json({ message: "Failed to fetch contact" }, { status: 500 })
    }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const { status, notes, assignedTo } = await request.json()

        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ message: "Invalid contact ID" }, { status: 400 })
        }

        const client = await clientPromise
        const db = client.db("dravya")
        const contacts = db.collection("contacts")

        const updateData: any = {
            updatedAt: new Date(),
        }

        if (status) updateData.status = status
        if (notes) updateData.notes = notes
        if (assignedTo) updateData.assignedTo = assignedTo

        const result = await contacts.updateOne({ _id: new ObjectId(id) }, { $set: updateData })

        if (result.matchedCount === 0) {
            return NextResponse.json({ message: "Contact not found" }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: "Contact updated successfully",
        })
    } catch (error) {
        console.error("Update contact error:", error)
        return NextResponse.json({ message: "Failed to update contact" }, { status: 500 })
    }
}
