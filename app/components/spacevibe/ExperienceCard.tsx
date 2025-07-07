import { CardData, ExperienceItem } from "./types";
import { Briefcase } from "lucide-react";

const ExperienceCard = ({ card }: { card: CardData }) => {
  const content = card.content as ExperienceItem[];
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="text-emerald-400" size={20} />
        <h3 className="text-xl font-bold text-white">{card.title}</h3>
      </div>
      <div className="space-y-4 max-h-80 overflow-y-auto">
        {content.map((exp: ExperienceItem, idx: number) => (
          <div
            key={idx}
            className="bg-white/5 p-4 rounded-lg border border-white/10"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-white">{exp.role}</h4>
              <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>
            <p className="text-emerald-300 text-sm mb-2">{exp.company}</p>
            <p className="text-white/80 text-xs leading-relaxed mb-3">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {exp.technologies.map((tech: string, techIdx: number) => (
                <span
                  key={techIdx}
                  className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
