import { DashboardHeader } from "@/components/dashboard/header"
import { AccountOverview } from "@/components/dashboard/account-overview"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { SpendingChart } from "@/components/dashboard/spending-chart"

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardHeader />
            <main className="container py-8">
                <div className="grid gap-8">
                    <AccountOverview />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <SpendingChart />
                        </div>
                        <QuickActions />
                    </div>
                    <RecentTransactions />
                </div>
            </main>
        </div>
    )
}
