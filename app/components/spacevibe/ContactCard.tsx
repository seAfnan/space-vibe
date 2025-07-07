import { CardData, ContactContent } from "./types";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactCard = ({ card }: { card: CardData }) => {
  const content = card.content as ContactContent;
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Mail className="text-rose-400" size={20} />
        <h3 className="text-xl font-bold text-white">{card.title}</h3>
      </div>
      <p className="text-white/80 text-sm mb-6">{content.message}</p>
      <div className="space-y-3">
        <a
          href={`mailto:${content.email}`}
          className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all"
        >
          <Mail size={16} />
          <span className="text-sm">{content.email}</span>
        </a>
        <div className="flex gap-2">
          <a
            href={content.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all"
          >
            <Github size={16} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all"
          >
            <Linkedin size={16} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
