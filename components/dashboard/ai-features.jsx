import {
  Sparkles,
  Zap,
  Lightbulb,
  Headphones,
  Languages,
  Clock,
  Palette,
  Brain,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/landing/card";
import { Button } from "@/components/ui/landing/button";

export function AiFeatures() {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          AI Features
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <FeatureCard
            icon={Lightbulb}
            title="Smart Summaries"
            description="Get AI-generated summaries of any article"
            active={true}
          />
          <FeatureCard
            icon={Headphones}
            title="Audio Articles"
            description="Listen to articles with text-to-speech"
            active={false}
          />
          <FeatureCard
            icon={Languages}
            title="Translate"
            description="Translate articles to your language"
            active={false}
          />
          <FeatureCard
            icon={Clock}
            title="Reading Time"
            description="Estimated time to read articles"
            active={true}
          />
          <FeatureCard
            icon={Palette}
            title="Theme Customizer"
            description="Personalize your reading experience"
            active={false}
          />
          <FeatureCard
            icon={Brain}
            title="Topic Analysis"
            description="Discover related topics and concepts"
            active={true}
          />
        </div>

        <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-amber-600/5 p-3">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <h4 className="font-medium text-sm text-yellow-500">
              Upgrade to Premium
            </h4>
          </div>
          <p className="text-xs text-zinc-400 mb-3">
            Unlock all AI features and get unlimited article summaries with our
            premium plan.
          </p>
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black text-xs"
          >
            Upgrade Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function FeatureCard({ icon: Icon, title, description, active }) {
  return (
    <div
      className={`rounded-lg border p-3 flex flex-col ${
        active
          ? "border-yellow-500/20 bg-yellow-500/5"
          : "border-zinc-800 bg-zinc-900/30"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon
          className={`h-4 w-4 ${active ? "text-yellow-500" : "text-zinc-500"}`}
        />
        <h3
          className={`text-sm font-medium ${
            active ? "text-yellow-500" : "text-zinc-300"
          }`}
        >
          {title}
        </h3>
      </div>
      <p className="text-xs text-zinc-400">{description}</p>
      {!active && (
        <div className="mt-2">
          <span className="text-[10px] uppercase font-semibold tracking-wider bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
            Premium
          </span>
        </div>
      )}
    </div>
  );
}
