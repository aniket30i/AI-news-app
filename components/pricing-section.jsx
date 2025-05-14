"use client";

import { useState, useEffect } from "react";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Clock,
  Layers,
  Brain,
  Shield,
  Headphones,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/landing/button";

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isYearly, setIsYearly] = useState(true);

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

    const element = document.getElementById("pricing-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="pricing-section" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-600/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center space-y-4 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-2">
            <Sparkles size={14} className="animate-pulse" />
            Choose Your Experience
          </div>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Unlock the Power of AI-Curated News
            </span>
          </h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Select the plan that fits your needs and elevate your news
            experience with our cutting-edge AI technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto mt-2"></div>
        </div>

        <div className="flex justify-center mt-8 mb-12">
          <div
            className={`bg-zinc-900/50 p-1 rounded-full border border-zinc-800 inline-flex transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-gradient-to-r from-yellow-400 to-amber-600 text-black"
                  : "text-zinc-400"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly
                  ? "bg-gradient-to-r from-yellow-400 to-amber-600 text-black"
                  : "text-zinc-400"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
              <span className="ml-1 text-xs">
                {isYearly ? "(Save 20%)" : ""}
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div
            className={`rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="mr-2 h-6 w-6 text-zinc-400" />
                Free
              </h3>
              <p className="text-zinc-400 mb-6">
                Perfect for casual readers who want to stay informed.
              </p>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-zinc-500 ml-2">/ forever</span>
              </div>

              <Button
                variant="outline"
                className="w-full border-zinc-700 hover:border-yellow-500 hover:text-yellow-500 relative group overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute bottom-0 left-0 w-0 h-full bg-yellow-500/10 transition-all duration-300 group-hover:w-full"></span>
              </Button>
            </div>

            <div className="border-t border-zinc-800 p-8">
              <h4 className="font-medium mb-4 text-zinc-300">
                What's included:
              </h4>
              <ul className="space-y-3">
                <FeatureItem included>
                  Access to daily news summaries from 3 categories
                </FeatureItem>
                <FeatureItem included>
                  Basic AI-powered article recommendations
                </FeatureItem>
                <FeatureItem included>
                  Limited keyword highlighting in summaries
                </FeatureItem>
                <FeatureItem included>Standard news feed updates</FeatureItem>
                <FeatureItem>Advanced sentiment analysis</FeatureItem>
                <FeatureItem>Entity extraction and insights</FeatureItem>
                <FeatureItem>Unlimited categories selection</FeatureItem>
                <FeatureItem>Priority customer support</FeatureItem>
              </ul>
            </div>
          </div>

          {/* Premium Tier */}
          <div
            className={`rounded-2xl relative transition-all duration-1000 transform h-full ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-2xl blur opacity-30"></div>

            <div className="relative rounded-2xl border border-yellow-500/30 bg-zinc-900/50 backdrop-blur-sm overflow-hidden h-full">
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              </div>

              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Zap className="mr-2 h-6 w-6 text-yellow-500" />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Premium
                  </span>
                </h3>
                <p className="text-zinc-300 mb-6">
                  The ultimate news experience for the informed reader.
                </p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    ${isYearly ? "7.99" : "9.99"}
                  </span>
                  <span className="text-zinc-500 ml-2">
                    / {isYearly ? "month (billed yearly)" : "month"}
                  </span>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-300 hover:to-amber-500 text-black relative group overflow-hidden">
                  <span className="relative z-10">Get Premium</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </div>

              <div className="border-t border-zinc-800 p-8">
                <h4 className="font-medium mb-4 text-zinc-200">
                  Everything in Free, plus:
                </h4>
                <ul className="space-y-3">
                  <PremiumFeatureItem icon={Layers}>
                    <span className="font-medium">Unlimited access</span> to all
                    news categories and features
                  </PremiumFeatureItem>
                  <PremiumFeatureItem icon={Brain}>
                    <span className="font-medium">Advanced AI insights</span>{" "}
                    with detailed entity extraction
                  </PremiumFeatureItem>
                  <PremiumFeatureItem icon={Star}>
                    <span className="font-medium">Enhanced summaries</span> with
                    comprehensive keyword highlighting
                  </PremiumFeatureItem>
                  <PremiumFeatureItem icon={Headphones}>
                    <span className="font-medium">Audio articles</span> with
                    natural text-to-speech technology
                  </PremiumFeatureItem>
                  <PremiumFeatureItem icon={Shield}>
                    <span className="font-medium">Priority support</span> with
                    24/7 customer assistance
                  </PremiumFeatureItem>
                  <PremiumFeatureItem icon={Sparkles}>
                    <span className="font-medium">Exclusive content</span> from
                    premium news sources
                  </PremiumFeatureItem>
                </ul>
              </div>

              {/* Animated corner accent */}
            </div>
          </div>
        </div>

        {/* <div
          className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-amber-600/5 p-6">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Not sure which plan is right for you?
            </h3>
            <p className="text-zinc-300 mb-4">
              Start with our 14-day free trial of Premium. No credit card
              required. Cancel anytime.
            </p>
            <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-300 hover:to-amber-500 text-black">
              Start Free Trial
            </Button>
          </div>
        </div> */}
        <div className="mt-16 text-center text-3xl font-bold">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            What our users are saying...
          </span>
        </div>
        <div
          className={`mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-6 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <TestimonialCard
            quote="The AI summaries save me so much time. I can stay informed without spending hours reading."
            author="Sarah J."
            role="Marketing Executive"
          />
          <TestimonialCard
            quote="Premium is worth every penny. The entity extraction helps me understand complex news topics quickly."
            author="Michael T."
            role="Financial Analyst"
          />
          <TestimonialCard
            quote="I love how the app curates news specifically for my interests. It's like having a personal news editor."
            author="David L."
            role="Software Engineer"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ children, included }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 h-5 w-5 mt-0.5">
        {included ? (
          <Check className="h-5 w-5 text-yellow-500" />
        ) : (
          <X className="h-5 w-5 text-zinc-600" />
        )}
      </div>
      <span
        className={`ml-3 ${
          included ? "text-zinc-300" : "text-zinc-600 line-through"
        }`}
      >
        {children}
      </span>
    </li>
  );
}

function PremiumFeatureItem({ children, icon: Icon }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 h-5 w-5 mt-0.5 text-yellow-500">
        <Icon className="h-5 w-5" />
      </div>
      <span className="ml-3 text-zinc-200">{children}</span>
    </li>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="h-4 w-4 fill-yellow-500 text-yellow-500"
          />
        ))}
      </div>
      <div className="flex flex-col justify-between h-[85%]">
        <p className="text-zinc-300 mb-4 italic">"{quote}"</p>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-zinc-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
