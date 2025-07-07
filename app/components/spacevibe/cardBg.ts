// Helper to get unique background for each card
export function getCardBg(id: string) {
  switch (id) {
    case "intro":
      return "bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-teal-400/20";
    case "experience":
      return "bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-cyan-400/20";
    case "projects":
      return "bg-gradient-to-br from-orange-500/30 via-red-500/20 to-pink-400/20";
    case "skills":
      return "bg-gradient-to-br from-purple-500/30 via-violet-500/20 to-indigo-400/20";
    case "education":
      return "bg-gradient-to-br from-yellow-400/30 via-amber-400/20 to-orange-300/20";
    case "contact":
      return "bg-gradient-to-br from-rose-500/30 via-pink-500/20 to-fuchsia-400/20";
    default:
      return "bg-white/10";
  }
}
