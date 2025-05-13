"use client";

import { useState } from "react";
import {
  ArrowRight,
  Clock,
  Sparkles,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  ExternalLink,
  TrendingUp,
  Smile,
  Frown,
  Meh,
  User,
  Building,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/landing/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CATEGORIES = [
  {
    id: "technology",
    name: "Technology",
    color: "from-blue-400 to-indigo-600",
    textColor: "text-blue-400",
    articles: [
      {
        id: 1,
        title:
          "AI Breakthrough: New Model Understands Context Better Than Ever",
        description:
          "Researchers have developed a new AI model that can understand context in conversations with unprecedented accuracy, opening new possibilities for human-computer interaction.",
        image: "/placeholder.svg?height=200&width=400",
        source: "Tech Insights",
        time: "4 min read",
        date: "2 hours ago",
        sentiment: "positive",
        entities: [
          { type: "organization", name: "OpenAI", count: 5 },
          { type: "person", name: "Sam Altman", count: 3 },
          { type: "location", name: "San Francisco", count: 2 },
        ],
        summary:
          "A new AI model developed by researchers shows 40% better contextual understanding compared to previous models. The breakthrough uses a novel neural architecture that processes conversational context more effectively, potentially revolutionizing virtual assistants and customer service bots.",
        keywords: [
          "AI model",
          "contextual understanding",
          "neural architecture",
          "virtual assistants",
        ],
      },
      {
        id: 2,
        title:
          "Quantum Computing Reaches New Milestone With 1000-Qubit Processor",
        description:
          "Scientists announce the development of the first 1000-qubit quantum processor, marking a significant step toward practical quantum computing applications.",
        image: "/placeholder.svg?height=200&width=400",
        source: "Quantum Review",
        time: "6 min read",
        date: "Yesterday",
        sentiment: "positive",
        entities: [
          { type: "organization", name: "IBM", count: 4 },
          { type: "person", name: "Dr. Emily Chen", count: 2 },
          { type: "location", name: "Zurich", count: 1 },
        ],
        summary:
          "IBM researchers have created the first 1000-qubit quantum processor, achieving unprecedented quantum volume. This breakthrough could accelerate progress in fields like cryptography, material science, and drug discovery where quantum computing shows promise.",
        keywords: ["quantum computing", "qubits", "quantum volume", "IBM"],
      },
    ],
  },
  {
    id: "business",
    name: "Business",
    color: "from-green-400 to-emerald-600",
    textColor: "text-green-400",
    articles: [
      {
        id: 1,
        title: "Global Markets React to New Economic Policies",
        description:
          "Stock markets worldwide show mixed reactions to the newly announced economic stimulus package, with Asian markets rallying while European indices remain cautious.",
        image: "/placeholder.svg?height=200&width=400",
        source: "Financial Times",
        time: "5 min read",
        date: "3 hours ago",
        sentiment: "neutral",
        entities: [
          { type: "organization", name: "Federal Reserve", count: 6 },
          { type: "person", name: "Janet Yellen", count: 3 },
          { type: "location", name: "Wall Street", count: 4 },
        ],
        summary:
          "Global markets showed varied responses to the $1.9 trillion stimulus package. Asian markets rose by 2.3% on average, while European markets remained flat. Analysts cite inflation concerns as the main factor for cautious European trading despite positive economic indicators.",
        keywords: [
          "stimulus package",
          "global markets",
          "inflation concerns",
          "economic indicators",
        ],
      },
      {
        id: 2,
        title: "Tech Startup Secures $500M in Series C Funding",
        description:
          "A promising AI startup has secured one of the largest Series C funding rounds of the year, signaling continued investor confidence in artificial intelligence technologies.",
        image: "/placeholder.svg?height=200&width=400",
        source: "Venture Beat",
        time: "3 min read",
        date: "Yesterday",
        sentiment: "positive",
        entities: [
          { type: "organization", name: "NeuralTech", count: 7 },
          { type: "person", name: "Maria Rodriguez", count: 2 },
          { type: "location", name: "Silicon Valley", count: 3 },
        ],
        summary:
          "NeuralTech has raised $500 million in Series C funding led by Sequoia Capital, valuing the company at $3.2 billion. The AI startup plans to use the funds to expand its machine learning platform and enter new markets in Europe and Asia.",
        keywords: [
          "Series C funding",
          "AI startup",
          "venture capital",
          "machine learning",
        ],
      },
    ],
  },
  {
    id: "science",
    name: "Science",
    color: "from-purple-400 to-violet-600",
    textColor: "text-purple-400",
    articles: [
      {
        id: 1,
        title: "Breakthrough in Renewable Energy Storage",
        description:
          "Scientists announce a major breakthrough in energy storage technology that could revolutionize renewable energy adoption with longer-lasting and more efficient batteries.",
        image: "/placeholder.svg?height=200&width=400",
        source: "Science Daily",
        time: "7 min read",
        date: "Yesterday",
        sentiment: "positive",
        entities: [
          { type: "organization", name: "MIT", count: 5 },
          { type: "person", name: "Dr. James Wong", count: 4 },
          { type: "location", name: "Cambridge", count: 2 },
        ],
        summary:
          "MIT researchers have developed a new type of battery using sustainable materials that can store renewable energy for up to 30 days with minimal loss. The technology could solve the intermittency problem of solar and wind power, making renewable energy more reliable for grid applications.",
        keywords: [
          "renewable energy",
          "battery technology",
          "energy storage",
          "sustainability",
        ],
      },
      {
        id: 2,
        title: "New Exoplanet Discovered in Habitable Zone",
        description:
          "Astronomers have identified a potentially habitable exoplanet orbiting a nearby star, making it one of the most promising candidates for future exploration.",
        image: "/placeholder.svg?height=200&width=400",
        source: "Astronomy Now",
        time: "8 min read",
        date: "2 days ago",
        sentiment: "positive",
        entities: [
          { type: "organization", name: "NASA", count: 6 },
          { type: "person", name: "Dr. Sarah Johnson", count: 3 },
          { type: "location", name: "Proxima Centauri", count: 5 },
        ],
        summary:
          "Astronomers using the James Webb Space Telescope have discovered an Earth-sized exoplanet in the habitable zone of Proxima Centauri, just 4.2 light-years away. Initial spectroscopic analysis suggests the presence of water vapor in its atmosphere, making it a prime target for future studies.",
        keywords: [
          "exoplanet",
          "habitable zone",
          "James Webb Telescope",
          "Proxima Centauri",
        ],
      },
    ],
  },
  {
    id: "health",
    name: "Health",
    color: "from-red-400 to-rose-600",
    textColor: "text-red-400",
    articles: [
      {
        id: 1,
        title: "New Study Reveals Benefits of Intermittent Fasting",
        description:
          "A comprehensive study shows significant health benefits associated with various intermittent fasting protocols, particularly for metabolic health and longevity.",
        image: "/placeholder.svg?height=200&width=400",
        source: "Health Journal",
        time: "6 min read",
        date: "5 hours ago",
        sentiment: "positive",
        entities: [
          { type: "organization", name: "Harvard Medical School", count: 4 },
          { type: "person", name: "Dr. Michael Rosenfeld", count: 3 },
          { type: "location", name: "Boston", count: 1 },
        ],
        summary:
          "A large-scale study following 2,000 participants over 5 years found that intermittent fasting protocols reduced inflammatory markers by 40% and improved insulin sensitivity. The research suggests that time-restricted eating patterns may be more important than caloric restriction for certain health benefits.",
        keywords: [
          "intermittent fasting",
          "metabolic health",
          "inflammation",
          "insulin sensitivity",
        ],
      },
      {
        id: 2,
        title: "Breakthrough in Alzheimer's Research Shows Promise",
        description:
          "Researchers have identified a new mechanism that could lead to more effective treatments for Alzheimer's disease, potentially slowing or halting its progression.",
        image: "/placeholder.svg?height=200&width=400",
        source: "Neuroscience Today",
        time: "9 min read",
        date: "Yesterday",
        sentiment: "positive",
        entities: [
          { type: "organization", name: "Johns Hopkins", count: 5 },
          { type: "person", name: "Dr. Lisa Chen", count: 4 },
          { type: "location", name: "Baltimore", count: 2 },
        ],
        summary:
          "Johns Hopkins researchers have discovered a previously unknown mechanism that contributes to the formation of amyloid plaques in Alzheimer's disease. The finding has led to a new experimental drug that reduced plaque formation by 65% in animal models, with human trials scheduled to begin next year.",
        keywords: [
          "Alzheimer's disease",
          "amyloid plaques",
          "neurodegeneration",
          "clinical trials",
        ],
      },
    ],
  },
];

export function HottestNews() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);
  const [expandedArticle, setExpandedArticle] = useState(null);

  const activeCategory = CATEGORIES.find((cat) => cat.id === activeTab);

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-yellow-500" />
            <h2 className="text-2xl font-bold">Today's Hottest News</h2>
          </div>
          <p className="text-zinc-400">
            Top stories from your selected categories
          </p>
        </div>
      </div>

      <Tabs
        defaultValue={CATEGORIES[0].id}
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="bg-zinc-900/50 border border-zinc-800 p-1 mb-6">
          {CATEGORIES.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-none data-[state=inactive]:text-zinc-400 data-[state=inactive]:hover:text-white"
              style={{
                backgroundImage: `linear-gradient(to right, ${category.color
                  .split(" ")[0]
                  .replace("from-", "")}, ${category.color
                  .split(" ")[1]
                  .replace("to-", "")})`,
              }}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {CATEGORIES.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="mt-0 space-y-8"
          >
            {category.articles.map((article) => (
              <Card
                key={article.id}
                className="bg-zinc-900/50 border-zinc-800 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  <div className="space-y-4">
                    <Badge
                      className="bg-gradient-to-r text-black"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${category.color
                          .split(" ")[0]
                          .replace("from-", "")}, ${category.color
                          .split(" ")[1]
                          .replace("to-", "")})`,
                      }}
                    >
                      {category.name}
                    </Badge>
                    <h3 className="text-2xl font-bold">{article.title}</h3>

                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <span>{article.source}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.time}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <p className="text-zinc-300">{article.description}</p>

                    <div className="rounded-md border border-zinc-800 bg-black/30 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 flex items-center justify-center">
                            <Sparkles className="h-3 w-3 text-black" />
                          </div>
                          <h4 className="font-medium text-sm">AI Summary</h4>
                        </div>

                        <SentimentBadge sentiment={article.sentiment} />
                      </div>

                      <p className="text-sm text-zinc-300">
                        {article.summary.split(" ").map((word, i) => {
                          const isKeyword = article.keywords.some(
                            (keyword) =>
                              keyword
                                .toLowerCase()
                                .includes(word.toLowerCase()) ||
                              word.toLowerCase().includes(keyword.toLowerCase())
                          );
                          return (
                            <span
                              key={i}
                              className={
                                isKeyword ? "text-yellow-500 font-medium" : ""
                              }
                            >
                              {word}{" "}
                            </span>
                          );
                        })}
                      </p>

                      {expandedArticle === article.id && (
                        <div className="pt-3 border-t border-zinc-800 mt-3">
                          <h5 className="text-sm font-medium mb-2">
                            Key Entities
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {article.entities.map((entity, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs"
                              >
                                {entity.type === "person" && (
                                  <User className="h-3 w-3 text-blue-400" />
                                )}
                                {entity.type === "organization" && (
                                  <Building className="h-3 w-3 text-green-400" />
                                )}
                                {entity.type === "location" && (
                                  <MapPin className="h-3 w-3 text-red-400" />
                                )}
                                <span>{entity.name}</span>
                                <span className="text-zinc-500">
                                  ({entity.count})
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Button
                        variant="link"
                        className="h-auto p-0 text-xs text-yellow-500 hover:text-yellow-400"
                        onClick={() =>
                          setExpandedArticle(
                            expandedArticle === article.id ? null : article.id
                          )
                        }
                      >
                        {expandedArticle === article.id
                          ? "Show less"
                          : "Show key entities"}
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black">
                        Read Full Article
                      </Button>
                      <Button
                        variant="outline"
                        className="border-zinc-700 hover:border-yellow-500 hover:text-yellow-500"
                      >
                        <Bookmark className="mr-2 h-4 w-4" />
                        Save for Later
                      </Button>
                    </div>
                  </div>

                  <div className="relative rounded-lg overflow-hidden group">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-overlay"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${category.color
                          .split(" ")[0]
                          .replace("from-", "")}, ${category.color
                          .split(" ")[1]
                          .replace("to-", "")})`,
                      }}
                    ></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-white/70 hover:text-white bg-black/20 backdrop-blur-sm"
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-white/70 hover:text-white bg-black/20 backdrop-blur-sm"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-white/70 hover:text-white bg-black/20 backdrop-blur-sm"
                          >
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white/70 hover:text-white bg-black/20 backdrop-blur-sm"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex justify-center">
              <Button
                variant="outline"
                className="border-zinc-800 hover:border-yellow-500 hover:text-yellow-500 group"
              >
                <span>Explore More {category.name} News</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function SentimentBadge({ sentiment }) {
  if (sentiment === "positive") {
    return (
      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs">
        <Smile className="h-3 w-3" />
        <span>Positive</span>
      </div>
    );
  } else if (sentiment === "negative") {
    return (
      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/10 text-red-500 text-xs">
        <Frown className="h-3 w-3" />
        <span>Negative</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs">
        <Meh className="h-3 w-3" />
        <span>Neutral</span>
      </div>
    );
  }
}
