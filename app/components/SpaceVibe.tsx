"use client";

import { useEffect, useState } from "react";
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Star,
  Zap,
} from "lucide-react";
import styles from "./SpaceVibe.module.css";
import { CardData } from "./spacevibe/types";
import { getCardBg } from "./spacevibe/cardBg";
import renderCardContent from "./spacevibe/renderCardContent";

const cardData: CardData[] = [
  {
    id: "intro",
    type: "intro",
    title: "About Me",
    content: {
      name: "Your Name Here", // <-- Put your name
      tagline: "Your tagline or profession", // <-- Put your tagline
      description:
        "A short description about yourself. Mention your passion, expertise, or what makes you unique.",
      avatar: "🧑‍🚀", // <-- You can use an emoji or image
      location: "Your City, Country", // <-- Put your location
      status: "Open to opportunities", // <-- Your current status
    },
    gradient: "from-blue-600/20 via-purple-600/20 to-teal-600/20",
    position:
      "top-10 left-4 right-auto mx-auto max-w-xs md:max-w-sm lg:max-w-md",
    iconColor: "text-blue-400",
    icon: <User />,
  },
  {
    id: "experience",
    type: "experience",
    title: "Experience",
    content: [
      {
        role: "Job Title", // <-- e.g. Software Engineer
        company: "Company Name", // <-- e.g. Acme Corp
        period: "2021 - Present",
        description:
          "Describe your responsibilities and achievements in this role.",
        technologies: ["Tech1", "Tech2", "Tech3"],
      },
      {
        role: "Previous Job Title",
        company: "Previous Company",
        period: "2019 - 2021",
        description: "Describe your previous role and what you worked on.",
        technologies: ["TechA", "TechB"],
      },
    ],
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    position:
      "top-1/4 right-4 left-auto mx-auto max-w-xs md:max-w-sm lg:max-w-md",
    iconColor: "text-emerald-400",
    icon: <Briefcase />,
  },
  {
    id: "projects",
    type: "projects",
    title: "Featured Projects",
    content: [
      {
        name: "Project Name", // <-- e.g. Portfolio Website
        description: "Short description of the project.",
        tech: ["React", "TypeScript"],
        link: "https://your-project-link.com", // <-- Project live link
        github: "https://github.com/yourusername/project", // <-- Project repo
        status: "live", // or "code"
      },
      {
        name: "Another Project",
        description: "Another project description.",
        tech: ["Node.js", "Express"],
        link: "https://your-other-project.com",
        github: "https://github.com/yourusername/other-project",
        status: "code",
      },
    ],
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 mx-auto max-w-xs md:max-w-md lg:max-w-lg",
    iconColor: "text-orange-400",
    icon: <Code />,
  },
  {
    id: "skills",
    type: "skills",
    title: "Technical Skills",
    content: {
      frontend: ["HTML", "CSS", "JavaScript", "React"],
      backend: ["Node.js", "Express", "MongoDB"],
      mobile: ["Flutter", "React Native"],
      tools: ["Git", "Docker", "AWS"],
      other: ["Figma", "Jest"],
    },
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    position:
      "bottom-32 right-4 left-auto mx-auto max-w-xs md:max-w-sm lg:max-w-md",
    iconColor: "text-purple-400",
    icon: <Zap />,
  },
  {
    id: "education",
    type: "education",
    title: "Education & Certifications",
    content: [
      {
        degree: "Degree Name", // <-- e.g. BSc Computer Science
        institution: "University Name", // <-- e.g. University of Somewhere
        year: "2020",
        description: "Description or focus of your studies.",
      },
      {
        degree: "Certification Name",
        institution: "Certification Provider",
        year: "2021",
        description: "What you learned or achieved.",
      },
    ],
    gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
    position:
      "bottom-16 left-4 right-auto mx-auto max-w-xs md:max-w-sm lg:max-w-md",
    iconColor: "text-yellow-400",
    icon: <GraduationCap />,
  },
  {
    id: "contact",
    type: "contact",
    title: "Get In Touch",
    content: {
      email: "your@email.com", // <-- Your email
      github: "https://github.com/yourusername", // <-- Your GitHub
      linkedin: "https://linkedin.com/in/yourprofile", // <-- Your LinkedIn
      message: "Let's connect and build something amazing!", // <-- Custom message
    },
    gradient: "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
    position:
      "bottom-4 right-4 left-auto mx-auto max-w-xs md:max-w-sm lg:max-w-md",
    iconColor: "text-rose-400",
    icon: <Mail />,
  },
];

export default function SpacePortfolio() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [ticking, setTicking] = useState(false);

  const updateZoom = () => {
    const scrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.max(0, Math.min(1, scrollY / maxScroll));

    // Background zoom effect
    const dynamicBg = document.querySelector(
      ".dynamic-background"
    ) as HTMLElement;
    const spaceTunnel = document.querySelector(".space-tunnel") as HTMLElement;
    const stars = document.querySelector(".stars") as HTMLElement;

    if (dynamicBg && spaceTunnel && stars) {
      const spaceZoom = 1 + scrollProgress * 3;
      const tunnelZoom = 1 + scrollProgress * 2;
      const starsZoom = 1 + scrollProgress * 1.5;

      dynamicBg.style.transform = `scale(${spaceZoom})`;
      spaceTunnel.style.transform = `translate(-50%, -50%) scale(${tunnelZoom})`;
      stars.style.transform = `scale(${starsZoom})`;
    }

    // Card handling
    const totalObjects = cardData.length;
    const scrollSections = totalObjects;
    const sectionProgress = scrollProgress * scrollSections;
    const activeIndex = Math.floor(sectionProgress);
    const sectionTransition = sectionProgress - activeIndex;

    const objects = document.querySelectorAll(".scroll-object");
    objects.forEach((obj, index) => {
      const element = obj as HTMLElement;
      const distance = index - activeIndex;
      let scale,
        opacity,
        translateZ,
        translateY = 0,
        blur = 0;
      let shouldShow = true;

      element.classList.remove("floating", "active-glow");

      if (distance === 0) {
        scale = 1.0;
        opacity = 1 - Math.pow(sectionTransition, 3); // slower fade out
        translateZ = 0;
        translateY = 0;
        blur = 0;
        element.classList.add("active-glow", "floating");
      } else if (distance === 1) {
        const easeInProgress = Math.pow(sectionTransition, 3); // slower fade in
        scale = 0.1 + easeInProgress * 0.9;
        opacity = 0 + easeInProgress * 1.0;
        translateZ = 100 - easeInProgress * 100;
        translateY = 0;
        blur = 3 - easeInProgress * 3;
        element.classList.add("floating");
      } else {
        shouldShow = false;
        scale = 0.1;
        opacity = 0;
        translateZ = 100;
        translateY = 0;
        blur = 3;
      }

      if (shouldShow && opacity > 0.05) {
        element.style.transform = `translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`;
        element.style.opacity = opacity.toString();
        element.style.display = "block";
        element.style.filter = `blur(${blur}px)`;
      } else {
        element.style.opacity = "0";
        element.style.display = "none";
      }
    });

    setScrollPercent(Math.round(scrollProgress * 100));

    const scrollIndicator = document.querySelector(
      ".scroll-indicator"
    ) as HTMLElement;
    if (scrollIndicator) {
      scrollIndicator.style.opacity = scrollY > 200 ? "0" : "0.7";
    }

    setTicking(false);
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateZoom);
      setTicking(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => requestTick();
    const handleResize = () => requestTick();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollAmount = window.innerHeight * 0.08;
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        window.scrollBy({ top: scrollAmount, behavior: "smooth" });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    updateZoom();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ticking]);

  return (
    <div className="relative">
      {/* Stars Background */}
      <div className="stars fixed top-0 left-0 w-full h-full -z-10 will-change-transform">
        <div
          className={`${styles.starsLayer1} absolute w-full h-full opacity-90 ${styles.twinkle1}`}
        ></div>
        <div
          className={`${styles.starsLayer2} absolute w-full h-full opacity-75 ${styles.twinkle2}`}
        ></div>
        <div
          className={`${styles.starsLayer3} absolute w-full h-full opacity-60 ${styles.twinkle3}`}
        ></div>
        <div
          className={`${styles.starsLayer4} absolute w-full h-full opacity-45 ${styles.twinkle4}`}
        ></div>
        <div
          className={`${styles.starsLayer5} absolute w-full h-full opacity-35 ${styles.twinkle5}`}
        ></div>
      </div>

      {/* Dynamic Background */}
      <div
        className="dynamic-background fixed top-0 left-0 w-full h-full -z-20"
        style={{
          background:
            "linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #16213e 100%)",
        }}
      ></div>

      {/* Space Tunnel */}
      <div className="space-tunnel fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-30">
        <div
          className={`tunnel-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full ${styles.tunnelExpand} w-[100vmax] h-[100vmax]`}
        ></div>
        <div
          className={`tunnel-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full ${styles.tunnelExpandSlow} w-[120vmax] h-[120vmax]`}
        ></div>
        <div
          className={`tunnel-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full ${styles.tunnelExpandSlower} w-[140vmax] h-[140vmax]`}
        ></div>
        <div
          className={`tunnel-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full ${styles.tunnelExpandSlowest} w-[160vmax] h-[160vmax]`}
        ></div>
      </div>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 z-50 transition-all duration-100 ease-linear"
        style={{ width: `${scrollPercent}%` }}
      />

      {/* Info Panel */}
      <div className="fixed top-5 right-5 bg-white/10 backdrop-blur-md p-4 rounded-2xl text-white z-50 border border-white/20 shadow-2xl">
        <div className="flex items-center gap-2 mb-1">
          <Star className="text-yellow-400" size={16} />
          <span className="text-sm">{scrollPercent}%</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="h-[600vh] relative">
        <div
          className="fixed top-0 left-0 w-screen h-screen overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={`scroll-object absolute w-96 h-auto p-6 flex flex-col justify-between overflow-hidden rounded-xl max-w-[90vw] max-h-[85vh] transition-all duration-500 ease-in-out will-change-transform ${
                card.position
              } ${getCardBg(
                card.id
              )} backdrop-blur-xl border border-white/20 shadow-2xl`}
              data-index={index}
              style={{
                transformOrigin: "center center",
                transformStyle: "preserve-3d",
                display: "none",
                opacity: 0,
                transform: "translateZ(100px) scale(0.1)",
                filter: "blur(3px)",
              }}
            >
              {renderCardContent(card)}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator fixed bottom-8 left-1/2 -translate-x-1/2 text-white opacity-70 text-sm z-50 animate-pulse transition-opacity duration-300 text-center">
        <div className="flex items-center gap-2">
          <span>🚀</span>
          <span>Navigate through my journey</span>
        </div>
      </div> */}

      <style jsx>{`
        /* @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-6px) rotate(1deg);
          }
          50% {
            transform: translateY(-8px) rotate(0deg);
          }
          75% {
            transform: translateY(-4px) rotate(-1deg);
          }
        } */

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 25px rgba(255, 255, 255, 0.8),
              0 0 35px rgba(255, 255, 255, 0.3);
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes tunnel-expand {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 200vmax;
            height: 200vmax;
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        .floating {
          animation: float 4s ease-in-out infinite;
        }

        .active-glow {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.3);
          /* border: 1px solid rgba(255, 255, 255, 0.5); */
        }

        .scroll-object {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }

        .scroll-object::-webkit-scrollbar {
          width: 4px;
        }

        .scroll-object::-webkit-scrollbar-track {
          background: transparent;
        }

        .scroll-object::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .scroll-object::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
