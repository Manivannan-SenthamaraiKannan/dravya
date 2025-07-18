// MongoDB Database Initialization Script
// This script sets up the initial database structure and indexes

import { MongoClient } from "mongodb"

async function initializeDatabase() {
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

    // Create collections and indexes
    console.log("Setting up collections and indexes...")

    // Users collection
    const users = db.collection("users")
    await users.createIndex({ email: 1 }, { unique: true })
    console.log("✓ Users collection and email index created")

    // Accounts collection
    const accounts = db.collection("accounts")
    await accounts.createIndex({ userId: 1 })
    await accounts.createIndex({ userId: 1, type: 1 })
    console.log("✓ Accounts collection and indexes created")

    // Transactions collection
    const transactions = db.collection("transactions")
    await transactions.createIndex({ userId: 1 })
    await transactions.createIndex({ accountId: 1 })
    await transactions.createIndex({ userId: 1, createdAt: -1 })
    await transactions.createIndex({ date: -1 })
    console.log("✓ Transactions collection and indexes created")

    // Insert sample data for demo purposes
    console.log("Inserting sample data...")

    // Sample user (password: "demo123")
    const hashedPassword = "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5uO.G"

    const sampleUser = await users.insertOne({
      firstName: "John",
      lastName: "Doe",
      email: "demo@dravya.com",
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    console.log("✓ Sample user created (email: demo@dravya.com, password: demo123)")

    // Sample accounts
    const sampleAccounts = await accounts.insertMany([
      {
        userId: sampleUser.insertedId.toString(),
        name: "Checking Account",
        type: "checking",
        balance: 12450.0,
        currency: "USD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: sampleUser.insertedId.toString(),
        name: "Savings Account",
        type: "savings",
        balance: 45230.0,
        currency: "USD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: sampleUser.insertedId.toString(),
        name: "Investment Portfolio",
        type: "investment",
        balance: 23890.0,
        currency: "USD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])

    console.log("✓ Sample accounts created")

    // Sample transactions
    const checkingAccountId = sampleAccounts.insertedIds[0].toString()
    const savingsAccountId = sampleAccounts.insertedIds[1].toString()

    await transactions.insertMany([
      {
        userId: sampleUser.insertedId.toString(),
        accountId: checkingAccountId,
        type: "expense",
        amount: -12.5,
        description: "Starbucks Coffee",
        category: "Food & Dining",
        date: new Date(),
        status: "completed",
        createdAt: new Date(),
      },
      {
        userId: sampleUser.insertedId.toString(),
        accountId: checkingAccountId,
        type: "income",
        amount: 3500.0,
        description: "Salary Deposit",
        category: "Income",
        date: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
        status: "completed",
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        userId: sampleUser.insertedId.toString(),
        accountId: checkingAccountId,
        type: "expense",
        amount: -25.8,
        description: "Uber Ride",
        category: "Transportation",
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        status: "completed",
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        userId: sampleUser.insertedId.toString(),
        accountId: savingsAccountId,
        type: "income",
        amount: 750.0,
        description: "Freelance Payment",
        category: "Income",
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        status: "completed",
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      },
    ])

    console.log("✓ Sample transactions created")

    console.log("\n🎉 Database initialization completed successfully!")
    console.log("\nDatabase Structure:")
    console.log("├── users (with email index)")
    console.log("├── accounts (with userId indexes)")
    console.log("└── transactions (with userId, accountId, and date indexes)")

    console.log("\nSample Data Created:")
    console.log("├── Demo user: demo@dravya.com (password: demo123)")
    console.log("├── 3 sample accounts with realistic balances")
    console.log("└── 4 sample transactions")

    console.log("\nNext Steps:")
    console.log("1. Set your MONGODB_URI environment variable")
    console.log("2. Set your JWT_SECRET environment variable")
    console.log("3. Run: npm run dev")
    console.log("4. Visit: http://localhost:3000")
    console.log("5. Login with: demo@dravya.com / demo123")
  } catch (error) {
    console.error("Database initialization failed:", error)
  } finally {
    await client.close()
    console.log("MongoDB connection closed")
  }
}

// Run the initialization
initializeDatabase().catch(console.error)
