"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Newspaper,
  Bookmark,
  History,
  Settings,
  HelpCircle,
  LogOut,
  Zap,
  Sparkles,
  Layers,
  Globe,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/landing/button";
import { ScrollArea } from "@/components/ui/landing/scroll-area";

export function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-zinc-950 border-r border-zinc-800 h-screen flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-4">
        <Link
          href="/dashboard"
          className={`flex items-center gap-2 ${!isOpen && "justify-center"}`}
        >
          <div className="relative">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 blur-sm opacity-50"></div>
            <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black h-4 w-4" />
          </div>
          {isOpen && (
            <span className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
              NewsAI
            </span>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-zinc-400"
        >
          <ChevronRight
            className={`h-5 w-5 transition-transform ${
              !isOpen && "rotate-180"
            }`}
          />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <NavItem icon={Home} label="Dashboard" isOpen={isOpen} isActive />
            <NavItem icon={Newspaper} label="For You" isOpen={isOpen} />
            <NavItem icon={TrendingUp} label="Trending" isOpen={isOpen} />
            <NavItem icon={Globe} label="World News" isOpen={isOpen} />
            <NavItem icon={Bookmark} label="Saved Articles" isOpen={isOpen} />
            <NavItem icon={History} label="Reading History" isOpen={isOpen} />
          </div>

          {isOpen && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase text-zinc-500 font-semibold px-2">
                Categories
              </h4>
              <div className="space-y-1">
                <CategoryItem
                  label="Technology"
                  color="bg-blue-500"
                  isOpen={isOpen}
                />
                <CategoryItem
                  label="Business"
                  color="bg-green-500"
                  isOpen={isOpen}
                />
                <CategoryItem
                  label="Science"
                  color="bg-purple-500"
                  isOpen={isOpen}
                />
                <CategoryItem
                  label="Health"
                  color="bg-red-500"
                  isOpen={isOpen}
                />
              </div>
            </div>
          )}

          {isOpen && (
            <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-amber-600/5 p-3">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <h4 className="font-medium text-sm text-yellow-500">
                  AI Assistant
                </h4>
              </div>
              <p className="text-xs text-zinc-400 mb-3">
                Get personalized news recommendations with our AI assistant.
              </p>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black text-xs"
              >
                <Layers className="h-3 w-3 mr-1" />
                Customize AI
              </Button>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t border-zinc-800 p-3">
        <div className="space-y-1">
          <NavItem icon={Settings} label="Settings" isOpen={isOpen} />
          <NavItem icon={HelpCircle} label="Help & Support" isOpen={isOpen} />
          <NavItem icon={LogOut} label="Log Out" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, isOpen, isActive }) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm ${
        isActive
          ? "bg-yellow-500/10 text-yellow-500"
          : "text-zinc-400 hover:text-white hover:bg-zinc-900"
      } transition-colors ${!isOpen && "justify-center"}`}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      {isOpen && <span>{label}</span>}
    </Link>
  );
}

function CategoryItem({ label, color, isOpen }) {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
    >
      <span className={`h-2 w-2 rounded-full ${color}`}></span>
      {isOpen && <span>{label}</span>}
    </Link>
  );
}
