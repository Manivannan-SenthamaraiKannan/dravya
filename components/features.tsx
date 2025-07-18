import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, PieChart, Shield, Smartphone, TrendingUp, Users, Wallet, Globe } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: CreditCard,
      title: "Digital Payments",
      description: "Send and receive money instantly with zero fees on domestic transfers.",
      color: "bg-blue-500",
    },
    {
      icon: PieChart,
      title: "Expense Tracking",
      description: "Automatically categorize and track your spending with intelligent insights.",
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      title: "Investment Platform",
      description: "Invest in stocks, ETFs, and crypto with fractional shares and low fees.",
      color: "bg-purple-500",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your money and data are protected with 256-bit encryption and 2FA.",
      color: "bg-red-500",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Manage your finances on-the-go with our award-winning mobile app.",
      color: "bg-yellow-500",
    },
    {
      icon: Users,
      title: "Multi-User Accounts",
      description: "Share accounts with family members and manage permissions easily.",
      color: "bg-indigo-500",
    },
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Store multiple cards and payment methods in one secure digital wallet.",
      color: "bg-pink-500",
    },
    {
      icon: Globe,
      title: "Global Transfers",
      description: "Send money internationally with competitive exchange rates.",
      color: "bg-teal-500",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Everything you need to manage your money
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From everyday banking to advanced investing, Dravya provides all the tools you need to take control of your
            financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 card-hover bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
