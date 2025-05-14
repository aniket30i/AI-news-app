"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/landing/button";
import { Input } from "@/components/ui/landing/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send,
  Zap,
} from "lucide-react";

export function Footer() {
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

    const element = document.getElementById("footer-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <footer id="footer-section" className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black to-black pointer-events-none"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-yellow-600/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-400/5 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="container py-12 md:py-16 relative">
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 group-hover:animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black h-5 w-5" />
              </div>

              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-amber-500 transition-all">
                Newsyn
              </span>
            </Link>

            <p className="mt-4 text-zinc-300">
              AI-powered news curation platform that delivers personalized
              content based on your interests and preferences.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map((social, index) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-zinc-500 hover:text-yellow-400 hover:bg-zinc-900 relative group"
                >
                  <social.icon size={20} />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.label}
                  </span>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600"></span>
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Features", "Pricing", "Contact"].map(
                (item, index) => (
                  <li
                    key={item}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Link
                      href="#"
                      className="text-zinc-400 hover:text-yellow-400 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 relative inline-block">
              Categories
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Technology",
                "Business",
                "Science",
                "Health",
                "Entertainment",
              ].map((item, index) => (
                <li key={item} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-yellow-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 relative inline-block">
              Subscribe
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600"></span>
            </h3>
            <p className="text-zinc-300 mb-4">
              Get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-zinc-900/50 border-zinc-800/50 focus:border-yellow-500 pr-10"
                />
                <Button className="absolute right-0 top-0 h-full aspect-square bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-300 hover:to-amber-500 text-black">
                  <Send size={16} />
                </Button>
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-zinc-800/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Newsyn. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, index) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-zinc-500 hover:text-yellow-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
