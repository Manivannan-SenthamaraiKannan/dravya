import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              The Future of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Digital Banking
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto sm:text-xl">
              Experience seamless financial management with Dravya. Send money, track expenses, invest smartly, and grow
              your wealth with our cutting-edge fintech platform.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#features">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <Shield className="h-6 w-6 text-green-500 flex-shrink-0" />
            <span className="font-medium">Bank-level Security</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <Zap className="h-6 w-6 text-yellow-500 flex-shrink-0" />
            <span className="font-medium">Instant Transfers</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <TrendingUp className="h-6 w-6 text-blue-500 flex-shrink-0" />
            <span className="font-medium">Smart Investments</span>
          </div>
        </div>
      </div>
    </section>
  )
}
