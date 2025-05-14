"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/landing/card";
import { Badge } from "@/components/ui/landing/badge";
import {
  Clock,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  ArrowRight,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/landing/button";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "AI Breakthrough: New Model Understands Context Better Than Ever",
    description:
      "Researchers have developed a new AI model that can understand context in conversations with unprecedented accuracy.",
    category: "Technology",
    readTime: "4 min read",
    image: "/LandingPageImages/card-one.jpg",
    date: "Today",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    id: 2,
    title: "Global Markets React to New Economic Policies",
    description:
      "Stock markets worldwide show mixed reactions to the newly announced economic stimulus package.",
    category: "Business",
    readTime: "6 min read",
    image: "/LandingPageImages/card-two.jpg",
    date: "Today",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Breakthrough in Renewable Energy Storage",
    description:
      "Scientists announce a major breakthrough in energy storage technology that could revolutionize renewable energy.",
    category: "Science",
    readTime: "5 min read",
    image: "/LandingPageImages/card-three.jpg",
    date: "Today",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
  },
  {
    id: 4,
    title: "New Study Reveals Benefits of Intermittent Fasting",
    description:
      "A comprehensive study shows significant health benefits associated with various intermittent fasting protocols.",
    category: "Health",
    readTime: "7 min read",
    image: "/LandingPageImages/card-four.jpg",
    date: "Today",
    gradient: "from-red-400 via-rose-500 to-pink-600",
  },
];

export function DailyNewsSuggestions() {
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

    const element = document.getElementById("daily-news-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="daily-news-section" className="py-16 md:py-20 relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/2 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-600/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="space-y-8">
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                <Newspaper className="text-black" size={20} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Today's Curated Picks
              </h2>
            </div>
            <p className="text-zinc-300">
              Personalized news suggestions based on your interests
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"></div>
          </div>
          <Button
            variant="outline"
            className="border-yellow-500/30 hover:border-yellow-400 hover:text-yellow-400 relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1">
              View All
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-full bg-yellow-500/10 transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {NEWS_ITEMS.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-500 bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-zinc-700/50 group relative"
              style={{
                transitionDelay: `${index * 150}ms`,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-500/0 to-amber-600/0 rounded-lg blur opacity-0 group-hover:opacity-100 group-hover:via-yellow-500/20 transition-all duration-500"></div>

              <div className="relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-300 group-hover:opacity-60 mix-blend-overlay"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${item.gradient
                        .split(" ")[0]
                        .replace("from-", "")}, ${item.gradient
                        .split(" ")[2]
                        .replace("to-", "")})`,
                    }}
                  ></div>

                  <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-1">
                    {item.category}
                  </Badge>
                </div>

                <CardHeader className="p-4 pb-2 relative">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {item.readTime}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-4 pt-0">
                  <CardDescription className="line-clamp-2 text-zinc-400">
                    {item.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button
                    variant="link"
                    className="p-0 h-8 text-yellow-400 hover:text-yellow-500 group-hover:underline"
                  >
                    Read More
                  </Button>
                </CardFooter>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
