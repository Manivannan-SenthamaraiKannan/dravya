import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Plus, ArrowUpDown, CreditCard } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Send Money",
      description: "Transfer to friends & family",
      icon: Send,
      color: "bg-blue-500",
    },
    {
      title: "Add Money",
      description: "Deposit to your account",
      icon: Plus,
      color: "bg-green-500",
    },
    {
      title: "Exchange",
      description: "Convert currencies",
      icon: ArrowUpDown,
      color: "bg-purple-500",
    },
    {
      title: "Pay Bills",
      description: "Manage your payments",
      icon: CreditCard,
      color: "bg-orange-500",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {actions.map((action) => (
          <Button key={action.title} variant="outline" className="w-full justify-start h-auto p-4 bg-transparent">
            <div className={`p-2 rounded-lg ${action.color} mr-4`}>
              <action.icon className="h-4 w-4 text-white" />
            </div>
            <div className="text-left">
              <div className="font-medium">{action.title}</div>
              <div className="text-sm text-gray-500">{action.description}</div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
