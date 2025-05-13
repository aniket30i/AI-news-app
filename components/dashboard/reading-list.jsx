"use client";

import { useState } from "react";
import {
  Clock,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/landing/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ARTICLES = [
  {
    id: 1,
    title: "The Future of Remote Work: How Companies Are Adapting",
    description:
      "As remote work becomes the new normal, companies are finding innovative ways to maintain productivity and team cohesion.",
    category: "Business",
    categoryColor: "from-green-400 to-emerald-600",
    image: "/placeholder.svg?height=100&width=200",
    readTime: "8 min read",
    date: "3 hours ago",
    aiHighlights: [
      "remote work trends",
      "productivity tools",
      "team collaboration",
      "hybrid models",
    ],
  },
  {
    id: 2,
    title: "Quantum Computing Breakthrough Could Transform Data Security",
    description:
      "Scientists have achieved a significant milestone in quantum computing that may revolutionize how we approach data encryption.",
    category: "Technology",
    categoryColor: "from-blue-400 to-indigo-600",
    image: "/placeholder.svg?height=100&width=200",
    readTime: "6 min read",
    date: "Yesterday",
    aiHighlights: [
      "quantum computing",
      "data encryption",
      "cybersecurity",
      "quantum supremacy",
    ],
  },
  {
    id: 3,
    title: "New Study Links Gut Microbiome to Mental Health",
    description:
      "Researchers have found compelling evidence connecting the bacteria in your gut to various aspects of mental health and cognitive function.",
    category: "Health",
    categoryColor: "from-red-400 to-rose-600",
    image: "/placeholder.svg?height=100&width=200",
    readTime: "5 min read",
    date: "2 days ago",
    aiHighlights: [
      "gut microbiome",
      "mental health",
      "probiotics",
      "brain function",
    ],
  },
];

export function ReadingList() {
  const [savedArticles, setSavedArticles] = useState([]);

  const toggleSave = (id) => {
    if (savedArticles.includes(id)) {
      setSavedArticles(savedArticles.filter((articleId) => articleId !== id));
    } else {
      setSavedArticles([...savedArticles, id]);
    }
  };

  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Your Reading List</CardTitle>
          <Button
            variant="ghost"
            className="text-zinc-400 hover:text-yellow-500 group"
          >
            <span>View All</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="recommended">
          <TabsList className="bg-zinc-950 border border-zinc-800 mb-6">
            <TabsTrigger
              value="recommended"
              className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
            >
              Recommended
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
            >
              Saved
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
            >
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="mt-0 space-y-4">
            {ARTICLES.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                isSaved={savedArticles.includes(article.id)}
                onToggleSave={() => toggleSave(article.id)}
              />
            ))}
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            {savedArticles.length > 0 ? (
              <div className="space-y-4">
                {ARTICLES.filter((article) =>
                  savedArticles.includes(article.id)
                ).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    isSaved={true}
                    onToggleSave={() => toggleSave(article.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Bookmark className="h-12 w-12 text-zinc-700 mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-1">No saved articles</h3>
                <p className="text-zinc-500 text-sm max-w-md mx-auto">
                  Articles you save will appear here for easy access. Start
                  saving articles you want to read later.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <div className="text-center py-8">
              <Clock className="h-12 w-12 text-zinc-700 mx-auto mb-3" />
              <h3 className="text-lg font-medium mb-1">Reading history</h3>
              <p className="text-zinc-500 text-sm max-w-md mx-auto">
                Articles you've read will appear here. You haven't read any
                articles yet.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function ArticleCard({ article, isSaved, onToggleSave }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors group">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 md:w-1/4 relative">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover aspect-video sm:aspect-auto"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${article.categoryColor
                .split(" ")[0]
                .replace("from-", "")}, ${article.categoryColor
                .split(" ")[1]
                .replace("to-", "")})`,
            }}
          ></div>
          <Badge
            className="absolute top-2 left-2 bg-gradient-to-r text-black text-xs"
            style={{
              backgroundImage: `linear-gradient(to right, ${article.categoryColor
                .split(" ")[0]
                .replace("from-", "")}, ${article.categoryColor
                .split(" ")[1]
                .replace("to-", "")})`,
            }}
          >
            {article.category}
          </Badge>
        </div>

        <div className="p-4 sm:w-2/3 md:w-3/4 flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-medium text-base sm:text-lg group-hover:text-yellow-500 transition-colors">
              {article.title}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 flex-shrink-0 ${
                isSaved
                  ? "text-yellow-500"
                  : "text-zinc-500 hover:text-yellow-500"
              }`}
              onClick={onToggleSave}
            >
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-500 mt-1 mb-2">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
            {article.description}
          </p>

          {expanded && (
            <div className="mb-3 mt-1">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-3 w-3 text-yellow-500" />
                <span className="text-xs font-medium text-yellow-500">
                  AI Highlights
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.aiHighlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-zinc-500 hover:text-zinc-300"
              >
                <ThumbsUp className="h-3 w-3 mr-1" />
                <span className="text-xs">24</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-zinc-500 hover:text-zinc-300"
              >
                <MessageSquare className="h-3 w-3 mr-1" />
                <span className="text-xs">8</span>
              </Button>
            </div>

            <Button
              variant="link"
              size="sm"
              className="h-8 p-0 text-yellow-500 hover:text-yellow-400"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Show AI highlights"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
