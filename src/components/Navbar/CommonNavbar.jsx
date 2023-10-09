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
    <nav className="flex flex-col z-50 justify-center items-baseline w-auto h-auto bg-opacity-20 bg-grey px-2 py-6 rounded-full fixed transform -translate-x-1/5  right-4 bottom-1/4">
      <Link
        to=""
        className={`btnc ${
          activeButton === "home" ? "bg-active" : ""
        } mr-2 flex p-4 rounded-full hover:bg-opacity-50 hover:bg-active`}
        onClick={() => handleButtonClick("home")}
      >
        <HomeIcon />
      </Link>
      <Link
        to=""
        className={`btnc ${
          activeButton === "about" ? "bg-active" : ""
        } flex mx-2  p-4 rounded-full hover:bg-opacity-50  hover:bg-active`}
        onClick={() => handleButtonClick("about")}
      >
        <AboutIcon />
      </Link>
      <Link
        to=""
        className={`btnc ${
          activeButton === "skills" ? "bg-active" : ""
        } flex mx-2  p-4 rounded-full hover:bg-opacity-50 hover:bg-active`}
        onClick={() => handleButtonClick("skills")}
      >
        <SkillIcon />
      </Link>
      <Link
        to=""
        className={`btnc ${
          activeButton === "projects" ? "bg-active" : ""
        } flex mx-2  p-4 rounded-full hover:bg-opacity-50 hover:bg-active`}
        onClick={() => handleButtonClick("projects")}
      >
        <ProjectIcon />
      </Link>
      <Link
        to=""
        className={`btnc ${
          activeButton === "experience" ? "bg-active" : ""
        } flex p-4 rounded-full hover:bg-opacity-50 hover:bg-active mx-2`}
        onClick={() => handleButtonClick("experience")}
      >
        <ExperienceIcon />
      </Link>
      <Link
        to=""
        className={`btnc ${
          activeButton === "contacts" ? "bg-active" : ""
        } flex mx-2 p-4 rounded-full hover:bg-opacity-50 hover:bg-active`}
        onClick={() => handleButtonClick("contacts")}
      >
        <ContactlIcon />
      </Link>
      <Link
        to=""
        className={`btnc ${
          activeButton === "resume" ? "bg-active" : ""
        } flex ml-2  p-4 rounded-full hover:bg-opacity-50 hover:bg-active `}
        onClick={() => handleButtonClick("resume")}
      >
        <ResumeIcon />
      </Link>
    </nav>
  );
};

export default CommonNavbar;
