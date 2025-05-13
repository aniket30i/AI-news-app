"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const CATEGORIES = [
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
    description: "Latest in tech and innovation",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    id: "business",
    name: "Business",
    icon: "📈",
    description: "Business and financial news",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    description: "Scientific discoveries and research",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
  },
  {
    id: "health",
    name: "Health",
    icon: "🏥",
    description: "Health and wellness updates",
    gradient: "from-red-400 via-rose-500 to-pink-600",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "🎬",
    description: "Movies, music, and celebrity news",
    gradient: "from-pink-400 via-fuchsia-500 to-purple-600",
  },
  {
    id: "sports",
    name: "Sports",
    icon: "⚽",
    description: "Sports news and highlights",
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
  },
  {
    id: "politics",
    name: "Politics",
    icon: "🏛️",
    description: "Political news and analysis",
    gradient: "from-red-400 via-orange-500 to-amber-600",
  },
  {
    id: "environment",
    name: "Environment",
    icon: "🌍",
    description: "Climate and environmental news",
    gradient: "from-teal-400 via-emerald-500 to-green-600",
  },
];

export function NewsCategories() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("categories-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      if (selectedCategories.length < 4) {
        setSelectedCategories([...selectedCategories, categoryId]);
      }
    }
  };

  return (
    <section id="categories-section" className="py-16 md:py-20 relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-yellow-400/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-yellow-600/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="space-y-8">
        <div
          className={`max-w-3xl mx-auto text-center space-y-4 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-2">
            <Sparkles size={14} className="animate-pulse" />
            Personalize Your Experience
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Discover Your News Categories
            </span>
          </h2>
          <p className="text-zinc-300">
            Select up to four categories that interest you the most
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto mt-2"></div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {CATEGORIES.map((category, index) => {
            const isSelected = selectedCategories.includes(category.id);
            return (
              <Card
                key={category.id}
                className={`relative cursor-pointer transition-all duration-500 bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:bg-zinc-800/50 overflow-hidden group ${
                  isSelected
                    ? "border-2 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                    : "hover:border-yellow-900/50"
                }`}
                onClick={() => toggleCategory(category.id)}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-br ${
                    category.gradient
                  } transition-opacity duration-300 ${
                    isSelected ? "opacity-30" : "group-hover:opacity-30"
                  }`}
                ></div>

                {/* Selection indicator */}
                {isSelected && (
                  <div
                    className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-black rounded-full p-1 z-10 animate-bounce"
                    style={{ animationDuration: "2s" }}
                  >
                    <Check size={16} />
                  </div>
                )}

                <div className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-lg">{category.name}</h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    {category.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
