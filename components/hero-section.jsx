"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/landing/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400/20 via-amber-500/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-600/20 via-amber-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

      {/* Animated circles */}
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-yellow-400/30 animate-ping"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-yellow-500/30 animate-ping"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-amber-400/30 animate-ping"
        style={{ animationDuration: "5s" }}
      ></div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div
          className={`flex-1 space-y-6 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-2 relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles size={14} className="animate-pulse" />
              AI-Powered News
            </span>
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-yellow-500/10 to-amber-600/10 transition-all duration-700 group-hover:w-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Discover News</span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent relative">
              Curated for You
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 400 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3C100 3 100 3 200 3C300 3 300 3 400 3"
                  stroke="url(#paint0_linear)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="1 14"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0"
                    y1="3"
                    x2="400"
                    y2="3"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FACC15" />
                    <stop offset="0.5" stopColor="#EAB308" />
                    <stop offset="1" stopColor="#D97706" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-[600px] leading-relaxed">
            Get personalized news recommendations based on your interests. Our
            AI analyzes thousands of sources to bring you the most relevant
            stories from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-300 hover:to-amber-500 text-black relative group overflow-hidden">
              <span className="relative z-10 flex items-center gap-1">
                Get Started
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500/30 hover:border-yellow-400 hover:text-yellow-400 relative group overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-yellow-500/10 transition-all duration-300 group-hover:w-full"></span>
            </Button>
          </div>
        </div>
        <div
          className={`flex-1 relative transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="w-full aspect-square max-w-[500px] rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-1 backdrop-blur-sm border border-yellow-500/20 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="AI News Curation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/30 to-yellow-400/20 mix-blend-overlay"></div>

              {/* Floating UI elements */}
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 text-xs font-medium animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                AI Powered
              </div>
              <div
                className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 text-xs font-medium animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                Personalized
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-black/70 backdrop-blur-sm border border-yellow-500/40 text-white text-sm font-medium">
                Your News, Your Way
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 blur-3xl"></div>
          <div
            className="absolute -right-8 -bottom-8 w-16 h-16 rounded-full border border-yellow-500/30 animate-spin"
            style={{ animationDuration: "10s" }}
          ></div>
          <div
            className="absolute -left-4 -top-4 w-12 h-12 rounded-full border border-yellow-500/20 animate-spin"
            style={{ animationDuration: "15s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
