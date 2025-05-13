import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { HeroSection } from "@/components/dashboard/hero-section"
import { HottestNews } from "@/components/dashboard/hottest-news"
import { CategoryManager } from "@/components/dashboard/category-manager"
import { AiInsights } from "@/components/dashboard/ai-insights"
import { BackgroundEffects } from "@/components/background-effects"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <BackgroundEffects />
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 relative z-10">
        <HeroSection />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <HottestNews />
          </div>
          <div className="space-y-8">
            <CategoryManager />
            <AiInsights />
          </div>
        </div>
      </main>
    </div>
  )
}
