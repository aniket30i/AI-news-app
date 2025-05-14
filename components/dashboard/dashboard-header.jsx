"use client";

import { useState } from "react";
import {
  Bell,
  Search,
  Settings,
  User,
  ChevronDown,
  Menu,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/landing/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 blur-sm opacity-50"></div>
              <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black h-4 w-4" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
              NewsAI
            </span>
          </div>

          <nav className="hidden md:flex items-center ml-8">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-yellow-400"
            >
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-yellow-400"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-yellow-400"
            >
              Saved
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <Input
              placeholder="Search articles..."
              className="pl-8 bg-zinc-900/50 border-zinc-800 focus-visible:ring-yellow-500"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-zinc-400" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-yellow-500"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 flex items-center gap-2 px-2"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-amber-600 text-black">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start text-sm">
                  <span className="font-medium">John Doe</span>
                  <span className="text-xs text-zinc-500">Premium Plan</span>
                </div>
                <ChevronDown className="h-4 w-4 text-zinc-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-zinc-900 border-zinc-800"
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-800" />
              <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-800" />
              <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer text-red-500">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile search and menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 border-t border-zinc-800">
          <div className="relative my-4">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <Input
              placeholder="Search articles..."
              className="pl-8 bg-zinc-900/50 border-zinc-800 focus-visible:ring-yellow-500"
            />
          </div>
          <nav className="flex flex-col space-y-2">
            <Button
              variant="ghost"
              className="justify-start text-zinc-400 hover:text-yellow-400"
            >
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-zinc-400 hover:text-yellow-400"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-zinc-400 hover:text-yellow-400"
            >
              Saved
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
