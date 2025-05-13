import { Sparkles, Zap, BarChart3, Lightbulb, Languages, Brain, TrendingUp, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AiInsights() {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border border-zinc-800 bg-black/30 p-4">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="h-4 w-4 text-yellow-500" />
            <h4 className="font-medium text-sm">Today's Reading Stats</h4>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400">Articles Read</span>
              <span className="font-medium">7</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-yellow-400 to-amber-600 h-1.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400">Reading Time</span>
              <span className="font-medium">32 min</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-yellow-400 to-amber-600 h-1.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400">Topics Explored</span>
              <span className="font-medium">5</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-yellow-400 to-amber-600 h-1.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-black/30 p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-yellow-500" />
            <h4 className="font-medium text-sm">Trending Topics For You</h4>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            <div className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
              Quantum Computing
            </div>
            <div className="px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
              Sustainable Energy
            </div>
            <div className="px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs">
              AI Ethics
            </div>
            <div className="px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
              Mental Health
            </div>
          </div>

          <Button variant="link" className="h-auto p-0 text-xs text-yellow-500 hover:text-yellow-400">
            View all trending topics
          </Button>
        </div>

        <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-amber-600/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-yellow-500" />
            <h4 className="font-medium text-sm text-yellow-500">Content Recommendations</h4>
          </div>
          <p className="text-xs text-zinc-400 mb-3">
            Our AI has analyzed your reading patterns and found these topics might interest you:
          </p>
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-sm">
              <Brain className="h-3 w-3 text-purple-400" />
              <span>Advances in Neuroscience</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Layers className="h-3 w-3 text-blue-400" />
              <span>Web3 Development</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Languages className="h-3 w-3 text-green-400" />
              <span>Language Learning Techniques</span>
            </div>
          </div>
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black text-xs"
          >
            <Zap className="h-3 w-3 mr-1" />
            Explore Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
