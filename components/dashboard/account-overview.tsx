import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, CreditCard } from "lucide-react"

export function AccountOverview() {
  const accounts = [
    {
      name: "Checking Account",
      balance: "$12,450.00",
      change: "+2.5%",
      trend: "up",
      icon: DollarSign,
      color: "bg-blue-500",
    },
    {
      name: "Savings Account",
      balance: "$45,230.00",
      change: "+1.2%",
      trend: "up",
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      name: "Investment Portfolio",
      balance: "$23,890.00",
      change: "-0.8%",
      trend: "down",
      icon: TrendingUp,
      color: "bg-purple-500",
    },
    {
      name: "Credit Card",
      balance: "-$1,250.00",
      change: "+15.3%",
      trend: "down",
      icon: CreditCard,
      color: "bg-red-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {accounts.map((account, index) => (
        <Card
          key={account.name}
          className="bg-white shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{account.name}</CardTitle>
            <div className={`p-2 rounded-lg ${account.color}`}>
              <account.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">{account.balance}</div>
            <div className="flex items-center text-xs">
              {account.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={account.trend === "up" ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                {account.change}
              </span>
              <span className="ml-1 text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
