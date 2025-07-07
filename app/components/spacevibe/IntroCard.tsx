import { CardData, IntroContent } from "./types";

const IntroCard = ({ card }: { card: CardData }) => {
  const content = card.content as IntroContent;
  return (
    <div className="text-center space-y-8 relative">
      {/* Floating space particles */}
      <div className="absolute inset-0">
        <div className="absolute top-6 left-1/4 w-1 h-1 bg-white/80 rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-1/3 w-0.5 h-0.5 bg-blue-400/70 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-12 left-1/3 w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-cyan-400/50 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-6 right-1/5 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="text-6xl mb-6 animate-float drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
        {content.avatar}
      </div>

      <h1 className="text-2xl font-semibold text-white mb-3 tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
        {content.name}
      </h1>

      <p className="text-sm text-cyan-200 italic mb-6 font-normal tracking-wide drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]">
        {content.tagline}
      </p>

      <p className="text-xs text-white/80 leading-relaxed mb-6 tracking-wide drop-shadow-[0_0_4px_rgba(255,255,255,0.2)] max-w-xs mx-auto">
        {content.description}
      </p>

      <div className="flex items-center justify-center gap-2 text-xs text-blue-200 mb-4 tracking-wide drop-shadow-[0_0_4px_rgba(59,130,246,0.3)]">
        <span>{content.location}</span>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 text-green-300 text-xs tracking-wide drop-shadow-[0_0_4px_rgba(34,197,94,0.3)]">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse drop-shadow-[0_0_3px_rgba(34,197,94,0.5)]"></div>
        {content.status}
      </div>
    </div>
  );
};

export default IntroCard;
