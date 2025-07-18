import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
