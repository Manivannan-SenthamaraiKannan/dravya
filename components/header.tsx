import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <CreditCard className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Dravya</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
