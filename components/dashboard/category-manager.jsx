"use client";

import { useState } from "react";
import { Plus, X, Check, Settings } from "lucide-react";
import { Button } from "@/components/ui/landing/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/landind/card";

const ALL_CATEGORIES = [
  {
    id: "technology",
    name: "Technology",
    color: "bg-blue-500",
    selected: true,
  },
  { id: "business", name: "Business", color: "bg-green-500", selected: true },
  { id: "science", name: "Science", color: "bg-purple-500", selected: true },
  { id: "health", name: "Health", color: "bg-red-500", selected: true },
  {
    id: "entertainment",
    name: "Entertainment",
    color: "bg-pink-500",
    selected: false,
  },
  { id: "sports", name: "Sports", color: "bg-orange-500", selected: false },
  { id: "politics", name: "Politics", color: "bg-amber-500", selected: false },
  {
    id: "environment",
    name: "Environment",
    color: "bg-emerald-500",
    selected: false,
  },
];

export function CategoryManager() {
  const [categories, setCategories] = useState(ALL_CATEGORIES);

  const toggleCategory = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, selected: !cat.selected } : cat
      )
    );
  };

  const selectedCount = categories.filter((cat) => cat.selected).length;

  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-yellow-500" />
            Your Categories
          </span>
          <span className="text-sm text-zinc-400 font-normal">
            {selectedCount}/4 selected
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className={`justify-start border-zinc-800 hover:border-zinc-700 ${
                category.selected
                  ? "bg-zinc-800/50 text-white"
                  : "bg-transparent text-zinc-400"
              } ${
                selectedCount >= 4 && !category.selected
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => {
                if (category.selected || selectedCount < 4) {
                  toggleCategory(category.id);
                }
              }}
            >
              <span
                className={`h-2 w-2 rounded-full mr-2 ${category.color}`}
              ></span>
              <span className="flex-1 text-left">{category.name}</span>
              {category.selected ? (
                <X className="h-4 w-4 text-zinc-400" />
              ) : (
                <Plus className="h-4 w-4 text-zinc-400" />
              )}
            </Button>
          ))}
        </div>

        <Button
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black"
          disabled={selectedCount === 0}
        >
          <Check className="mr-2 h-4 w-4" />
          Update Preferences
        </Button>
      </CardContent>
    </Card>
  );
}
