import { CardData, EducationItem } from "./types";
import { GraduationCap } from "lucide-react";

const EducationCard = ({ card }: { card: CardData }) => {
  const content = card.content as EducationItem[];
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="text-yellow-400" size={20} />
        <h3 className="text-xl font-bold text-white">{card.title}</h3>
      </div>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {content.map((edu: EducationItem, idx: number) => (
          <div
            key={idx}
            className="bg-white/5 p-4 rounded-lg border border-white/10"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
              <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
                {edu.year}
              </span>
            </div>
            <p className="text-yellow-300 text-sm mb-2">{edu.institution}</p>
            <p className="text-white/70 text-xs leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
