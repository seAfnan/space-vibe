import { CardData, ProjectItem } from "./types";
import { Code, ExternalLink, Github } from "lucide-react";

const ProjectsCard = ({ card }: { card: CardData }) => {
  const content = card.content as ProjectItem[];
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Code className="text-orange-400" size={20} />
        <h3 className="text-xl font-bold text-white">{card.title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto">
        {content.map((project: ProjectItem, idx: number) => (
          <div
            key={idx}
            className="bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-white text-sm">
                {project.name}
              </h4>
              <div className="flex gap-1">
                {project.status === "live" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white"
                >
                  <Github size={14} />
                </a>
              </div>
            </div>
            <p className="text-white/70 text-xs leading-relaxed mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.slice(0, 3).map((tech: string, techIdx: number) => (
                <span
                  key={techIdx}
                  className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
