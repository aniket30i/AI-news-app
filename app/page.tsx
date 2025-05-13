import { NewsCategories } from "@/components/news-categories";
import { DailyNewsSuggestions } from "@/components/daily-news-suggestions";
import { ForeignNews } from "@/components/foreign-news";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import PricingSection from "@/components/pricing-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <NewsCategories />
        <DailyNewsSuggestions />
        <ForeignNews />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
