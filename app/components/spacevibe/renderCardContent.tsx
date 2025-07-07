import { CardData } from "./types";
import IntroCard from "./IntroCard";
import ExperienceCard from "./ExperienceCard";
import ProjectsCard from "./ProjectsCard";
import SkillsCard from "./SkillsCard";
import EducationCard from "./EducationCard";
import ContactCard from "./ContactCard";

const renderCardContent = (card: CardData) => {
  switch (card.type) {
    case "intro":
      return <IntroCard card={card} />;
    case "experience":
      return <ExperienceCard card={card} />;
    case "projects":
      return <ProjectsCard card={card} />;
    case "skills":
      return <SkillsCard card={card} />;
    case "education":
      return <EducationCard card={card} />;
    case "contact":
      return <ContactCard card={card} />;
    default:
      return null;
  }
};

export default renderCardContent;
