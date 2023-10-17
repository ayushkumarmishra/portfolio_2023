import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import web from "../assets/web.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import cpp from "../assets/c.svg";
import flutter from "../assets/flutter.svg";
import Hashedin from "../assets/hashedin.png";
import Bajaj from "../assets/bajaj.png";

const skillTopic = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const services = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "C++",
    icon: cpp,
  },
  {
    title: "Flutter",
    icon: flutter,
  },
  {
    title: "git",
    icon: git,
  },
];

const experienceData = [
  {
    title: "Software Engineering Associate",
    companyName: "HashedIn By Deloitte",
    location: "Bangalore, India",
    description: {
      first:
        "Worked with the team developing a product that aims to provide Car-Pooling as a one-stop solution for daily commute for the employees, a B2B carpooling app.",
      second:
        "Developed frontend using Flutter and used Node.js for backend and Firebase and its services for Database.",
    },

    icon: Hashedin,
    date: "March, 2023 - June, 2023",
    companyLink: "https://hashedin.com/",
    certificateLink:
      "https://drive.google.com/file/d/1DK0jnU2CpJfeIJcVy1t3jeh3ofSuTqua/view",
  },
  {
    title: "Frontend Development Intern",
    companyName: "Bajaj Finserv Health",
    location: "Pune, India",
    description: {
      first:
        "Upgraded the location picker and the Search bar Feature in the health library part of the website that allows the user to search their doctor and clinic’s based on their specific location.",
      second:
        "The technologies used were Typescript, Emotionjs, Next.js and React.js.",
    },
    icon: Bajaj,
    date: "Jan, 2023 - Mar, 2023",
    companyLink: "https://www.bajajfinservhealth.in/",
    certificateLink: "",
  },
];

export { services, skillTopic, experienceData };
