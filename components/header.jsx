"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/landing/button";
import { Menu, X, Search, Zap } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-yellow-500/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 group-hover:animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black h-5 w-5" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-amber-500 transition-all">
              Newsyn
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors relative group"
          >
            Discover
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors relative group"
          >
            Categories
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors relative group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-yellow-400 relative group"
          >
            <Search size={20} />
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Button>
          <Button className="hidden md:flex bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-300 hover:to-amber-500 text-black relative overflow-hidden group">
            <span className="relative z-10">Sign Up</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
          <Button
            variant="outline"
            className="hidden md:flex border-yellow-500/30 hover:border-yellow-400 hover:text-yellow-400 relative group"
          >
            <span className="relative z-10">Log In</span>
            <span className="absolute bottom-0 left-0 w-0 h-full bg-yellow-500/10 transition-all duration-300 group-hover:w-full"></span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-zinc-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-t border-yellow-500/20 bg-black/95 backdrop-blur-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-400"
            >
              Discover
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-400"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-400"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-400"
            >
              About
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-300 hover:to-amber-500 text-black">
                Sign Up
              </Button>
              <Button
                variant="outline"
                className="w-full border-yellow-500/30 hover:border-yellow-400 hover:text-yellow-400"
              >
                Log In
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
