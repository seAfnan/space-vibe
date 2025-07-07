import { CardData, SkillsContent } from "./types";
import { Zap } from "lucide-react";

const SkillsCard = ({ card }: { card: CardData }) => {
  const content = card.content as SkillsContent;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="text-purple-400" size={20} />
        <h3 className="text-xl font-bold text-white">{card.title}</h3>
      </div>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {Object.entries(content).map(
          ([category, skills]: [string, string[]]) => (
            <div
              key={category}
              className="bg-white/5 p-3 rounded-lg border border-white/10"
            >
              <h4 className="font-semibold text-purple-300 text-sm mb-2 capitalize">
                {category}
              </h4>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-500/20 text-purple-200 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
