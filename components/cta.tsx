import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to take control of your finances?</h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          Join millions of users who trust Dravya for their financial needs. Start your free trial today and experience
          the future of banking.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Link href="/signup">
            <Button size="lg" variant="secondary">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
