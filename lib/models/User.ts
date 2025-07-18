export interface User {
  _id?: string
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  accounts?: Account[]
}

export interface Account {
  _id?: string
  userId: string
  name: string
  type: "checking" | "savings" | "investment" | "credit"
  balance: number
  currency: string
  createdAt: Date
  updatedAt: Date
}

export interface Transaction {
  _id?: string
  userId: string
  accountId: string
  type: "income" | "expense" | "transfer"
  amount: number
  description: string
  category: string
  date: Date
  status: "pending" | "completed" | "failed"
  createdAt: Date
}
