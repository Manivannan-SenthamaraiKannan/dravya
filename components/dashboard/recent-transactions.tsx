import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDownLeft, Coffee, Car, ShoppingBag } from "lucide-react"

export function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      type: "expense",
      description: "Starbucks Coffee",
      amount: -12.5,
      date: "Today, 2:30 PM",
      category: "Food & Dining",
      icon: Coffee,
      status: "completed",
    },
    {
      id: 2,
      type: "income",
      description: "Salary Deposit",
      amount: 3500.0,
      date: "Yesterday, 9:00 AM",
      category: "Income",
      icon: ArrowDownLeft,
      status: "completed",
    },
    {
      id: 3,
      type: "expense",
      description: "Uber Ride",
      amount: -25.8,
      date: "Yesterday, 6:45 PM",
      category: "Transportation",
      icon: Car,
      status: "completed",
    },
    {
      id: 4,
      type: "expense",
      description: "Amazon Purchase",
      amount: -89.99,
      date: "2 days ago",
      category: "Shopping",
      icon: ShoppingBag,
      status: "pending",
    },
    {
      id: 5,
      type: "income",
      description: "Freelance Payment",
      amount: 750.0,
      date: "3 days ago",
      category: "Income",
      icon: ArrowDownLeft,
      status: "completed",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${transaction.type === "income" ? "bg-green-100" : "bg-red-100"}`}>
                  <transaction.icon
                    className={`h-4 w-4 ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                  />
                </div>
                <div>
                  <div className="font-medium">{transaction.description}</div>
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "income" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                </div>
                <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
