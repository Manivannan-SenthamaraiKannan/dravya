import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import jwt from "jsonwebtoken"

export async function GET(request: NextRequest) {
  try {
    // Get token from cookie
    const token = request.cookies.get("token")?.value
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback-secret") as any
    const userId = decoded.userId

    const client = await clientPromise
    const db = client.db("dravya")
    const accounts = db.collection("accounts")

    // Get user's accounts
    const userAccounts = await accounts.find({ userId }).toArray()

    return NextResponse.json({ accounts: userAccounts }, { status: 200 })
  } catch (error) {
    console.error("Get accounts error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback-secret") as any
    const userId = decoded.userId

    const { name, type, initialBalance = 0 } = await request.json()

    if (!name || !type) {
      return NextResponse.json({ message: "Name and type are required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("dravya")
    const accounts = db.collection("accounts")

    const result = await accounts.insertOne({
      userId,
      name,
      type,
      balance: initialBalance,
      currency: "USD",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({ message: "Account created successfully", accountId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Create account error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
