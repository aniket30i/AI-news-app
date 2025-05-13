"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/landing/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const FOREIGN_NEWS = [
  {
    id: 1,
    title: "European Union Announces New Climate Initiative",
    description:
      "The EU has unveiled an ambitious new climate plan that aims to reduce carbon emissions by 60% by 2030, setting a new global benchmark for climate action.",
    country: "Belgium",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=600",
    source: "European Times",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    id: 2,
    title: "Tech Innovation Summit Draws Global Attention in Tokyo",
    description:
      "Tokyo's annual Tech Innovation Summit has attracted record attendance this year, with groundbreaking announcements from leading tech companies across Asia.",
    country: "Japan",
    region: "Asia",
    image: "/placeholder.svg?height=300&width=600",
    source: "Tokyo Tech Review",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
  },
];

export function ForeignNews() {
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

    const element = document.getElementById("foreign-news-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="foreign-news-section" className="py-16 md:py-20 relative">
      {/* Background elements */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-yellow-600/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-400/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>

        {/* Decorative elements */}
        <div
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full border border-yellow-500/30 animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full border border-yellow-500/20 animate-ping"
          style={{ animationDuration: "5s" }}
        ></div>
      </div>

      <div className="space-y-6">
        <div
          className={`flex items-center gap-3 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
              <Globe className="text-black" size={24} />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 blur-md opacity-50"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Global Perspective
            </h2>
            <p className="text-zinc-300">
              Stay informed with important news from around the world
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {FOREIGN_NEWS.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-500 bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-zinc-700/50 group relative"
              style={{
                transitionDelay: `${index * 200}ms`,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-500/0 to-amber-600/0 rounded-lg blur opacity-0 group-hover:opacity-100 group-hover:via-yellow-500/20 transition-all duration-500"></div>

              <div className="relative">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                  {/* Colorful gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-300 group-hover:opacity-50 mix-blend-overlay"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${item.gradient
                        .split(" ")[0]
                        .replace("from-", "")}, ${item.gradient
                        .split(" ")[2]
                        .replace("to-", "")})`,
                    }}
                  ></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black">
                        {item.region}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <MapPin size={12} className="text-yellow-500" />
                        {item.country}
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-400 to-amber-600 rotate-45 transform origin-top-right -translate-y-12 translate-x-12 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                    <span>{item.source}</span>
                    <span>•</span>
                    <span className="text-yellow-500">{item.region}</span>
                  </div>
                  <CardDescription className="text-base text-zinc-300">
                    {item.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-300 hover:to-amber-500 text-black relative group/btn overflow-hidden">
                    <span className="relative z-10 flex items-center gap-1">
                      Read Full Article
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
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
