import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  const plans = [
    {
      name: "Personal",
      price: "Free",
      description: "Perfect for individuals getting started",
      features: [
        "Free domestic transfers",
        "Expense tracking",
        "Basic investment options",
        "Mobile app access",
        "24/7 customer support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "Advanced features for serious investors",
      features: [
        "Everything in Personal",
        "Advanced analytics",
        "Priority customer support",
        "International transfers",
        "Investment research tools",
        "Tax optimization",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "$29.99",
      period: "/month",
      description: "Complete solution for businesses",
      features: [
        "Everything in Premium",
        "Multi-user accounts",
        "Business expense management",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-blue-500 shadow-lg scale-105" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup">
                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
