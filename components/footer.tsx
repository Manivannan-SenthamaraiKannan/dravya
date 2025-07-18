import Link from "next/link"
import {
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Dravya</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the latest fintech insights, product updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <CreditCard className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Dravya</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing digital banking with cutting-edge technology. Secure, fast, and intelligent financial
              solutions for the modern world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>support@dravya.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Bangalore, IN</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Features
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Pricing
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Security
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  API Documentation
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/mobile"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Mobile App
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  About Us
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Careers
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Press & Media
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/investors"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Investors
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  Blog
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  Help Center
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  System Status
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Community
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  Tutorials
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4">Trusted & Certified</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm">🏆 Best Fintech App 2024</div>
              <div className="text-sm">🔒 SOC 2 Certified</div>
              <div className="text-sm">🛡️ PCI DSS Compliant</div>
              <div className="text-sm">⭐ 4.9/5 App Store Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Dravya Financial Technologies. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/compliance" className="text-gray-400 hover:text-white transition-colors">
                Compliance
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <Link href="https://twitter.com/dravya" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com/dravya" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/dravya" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/dravya"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com/dravya" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
