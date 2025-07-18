import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CreditCard, Bell, Settings, LogOut } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <CreditCard className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Dravya</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/dashboard" className="text-gray-900 font-medium">
            Dashboard
          </Link>
          <Link href="/dashboard/transactions" className="text-gray-600 hover:text-gray-900">
            Transactions
          </Link>
          <Link href="/dashboard/investments" className="text-gray-600 hover:text-gray-900">
            Investments
          </Link>
          <Link href="/dashboard/cards" className="text-gray-600 hover:text-gray-900">
            Cards
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
