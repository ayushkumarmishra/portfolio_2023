import { Link } from "react-router-dom";
import {
  AboutIcon,
  ContactlIcon,
  ExperienceIcon,
  HomeIcon,
  ProjectIcon,
  ResumeIcon,
  SkillIcon,
} from "./Icons";
import { useState } from "react";

const CommonNavbar = () => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="fixed z-50 bg-opacity-20 bg-grey
      /* Mobile styles */
      bottom-4 left-1/2 -translate-x-1/2
      w-[90%] max-w-[400px] mx-auto
      flex flex-row items-center justify-between
      px-3 py-2 rounded-full
      /* Desktop styles */
      md:w-auto md:h-auto
      md:bottom-[20%] md:right-6 md:left-auto md:transform-none
      md:flex-col md:px-2 md:py-4 md:space-y-6">
      <Link
        to="/"
        className={`btnc ${
          activeButton === "home" ? "bg-active" : ""
        } w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-opacity-50 hover:bg-active transition-all duration-300
        flex items-center justify-center`}
        onClick={() => handleButtonClick("home")}
      >
        <HomeIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
      <Link
        to="/about"
        className={`btnc ${
          activeButton === "about" ? "bg-active" : ""
        } w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-opacity-50 hover:bg-active transition-all duration-300
        flex items-center justify-center`}
        onClick={() => handleButtonClick("about")}
      >
        <AboutIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
      <Link
        to="/skills"
        className={`btnc ${
          activeButton === "skills" ? "bg-active" : ""
        } w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-opacity-50 hover:bg-active transition-all duration-300
        flex items-center justify-center`}
        onClick={() => handleButtonClick("skills")}
      >
        <SkillIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
      <Link
        to="/projects"
        className={`btnc ${
          activeButton === "projects" ? "bg-active" : ""
        } w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-opacity-50 hover:bg-active transition-all duration-300
        flex items-center justify-center`}
        onClick={() => handleButtonClick("projects")}
      >
        <ProjectIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
      <Link
        to="/experiences"
        className={`btnc ${
          activeButton === "experience" ? "bg-active" : ""
        } w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-opacity-50 hover:bg-active transition-all duration-300
        flex items-center justify-center`}
        onClick={() => handleButtonClick("experience")}
      >
        <ExperienceIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
      <Link
        to="/contact"
        className={`btnc ${
          activeButton === "contacts" ? "bg-active" : ""
        } w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-opacity-50 hover:bg-active transition-all duration-300
        flex items-center justify-center`}
        onClick={() => handleButtonClick("contacts")}
      >
        <ContactlIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
      <Link
        to="/resume"
        className={`btnc ${
          activeButton === "resume" ? "bg-active" : ""
        } w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-opacity-50 hover:bg-active transition-all duration-300
        flex items-center justify-center`}
        onClick={() => handleButtonClick("resume")}
      >
        <ResumeIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
    </nav>
  );
};

export default CommonNavbar;
