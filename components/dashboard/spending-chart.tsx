"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SpendingChart() {
  // Mock data for the chart
  const spendingData = [
    { category: "Food & Dining", amount: 1250, percentage: 35 },
    { category: "Transportation", amount: 680, percentage: 19 },
    { category: "Shopping", amount: 520, percentage: 15 },
    { category: "Entertainment", amount: 380, percentage: 11 },
    { category: "Bills & Utilities", amount: 720, percentage: 20 },
  ]

  const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-red-500"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {spendingData.map((item, index) => (
            <div key={item.category} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${colors[index]}`} />
                <span className="text-sm font-medium">{item.category}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">${item.amount}</div>
                <div className="text-xs text-gray-500">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Total Spending</span>
            <span className="text-lg font-bold">$3,550</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
