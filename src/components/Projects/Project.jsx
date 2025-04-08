import Layout from "../Home/Layout";
import AnimatedText from "../Home/AnimatedText";
import { Link } from "react-router-dom";
import { GithubIcon } from "../Navbar/Icons";
import artMedium from "../../assets/art-medium.svg";
import actTracker from "../../assets/act-tracker.svg";
import mernChat from "../../assets/mern-chat.svg";
import carPool from "../../assets/car-pool.jpg";
import { motion } from "framer-motion";

const FeatureProject = ({ type, title, summary, link, github, img }) => {
  return (
    <motion.article
      className="w-full flex flex-col lg:flex-row items-center justify-between rounded-2xl sm:rounded-3xl border-solid border-dark bg-light border-2 sm:border-4 shadow-xl sm:shadow-2xl shadow-card p-4 sm:p-8"
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <Link
        to="/link"
        target="_blank"
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pt-4 lg:pt-0 lg:pl-6">
        <span className="text-primary font-medium text-base sm:text-xl">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-sm sm:text-base text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link to={github} target="_blank" className="w-8 sm:w-10">
            <GithubIcon />
          </Link>
          <Link
            to={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-4 sm:px-6 text-base sm:text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectTem = ({ type, title, link, github, img }) => {
  return (
    <article className="flex w-full items-center justify-center bg-light text-dark border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative flex-col rounded-br-2xl">
      <div className="absolute top-0 -right-2 sm:-right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] sm:rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        to="/link"
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-2">
        <span className="text-primary font-medium text-base sm:text-xl">{type}</span>
        <div className="w-full flex items-center justify-between my-2">
          <Link
            to={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="text-left text-xl sm:text-2xl md:text-3xl font-bold">{title}</h2>
          </Link>
          <Link to={github} target="_blank" className="w-6 sm:w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-8 sm:pt-12 mb-0 px-4 sm:px-8">
        <AnimatedText
          text='"Empowering Ideas with Exceptional Execution"'
          className="mb-8 sm:mb-16 !text-2xl sm:!text-4xl md:!text-6xl text-center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-24 lg:gap-y-32">
          <div className="col-span-full">
            <FeatureProject
              title="Art_Medium"
              summary="A full-stack video streaming application where users can sign up and upload their art in the form of video content. Built with TypeScript, React, tRPC, DrizzleORM, and PostgreSQL."
              type="Featured Project"
              link="https://github.com/ayushkumarmishra/Art_Medium"
              github="https://github.com/ayushkumarmishra/Art_Medium"
              img={artMedium}
            />
          </div>
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="col-span-full sm:col-span-6"
          >
            <ProjectTem
              title="ActTracker"
              type="Web Application"
              link="https://github.com/ayushkumarmishra/ActTracker"
              github="https://github.com/ayushkumarmishra/ActTracker"
              img={actTracker}
            />
          </motion.div>
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="col-span-full sm:col-span-6"
          >
            <ProjectTem
              title="MERN-chatApp"
              type="Web Application"
              link="https://github.com/ayushkumarmishra/MERN-chatApp"
              github="https://github.com/ayushkumarmishra/MERN-chatApp"
              img={mernChat}
            />
          </motion.div>
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="col-span-full sm:col-span-6"
          >
            <ProjectTem
              title="Portfolio Website"
              type="Web Application"
              link="https://github.com/ayushkumarmishra/portfolio_2023"
              github="https://github.com/ayushkumarmishra/portfolio_2023"
              img={carPool}
            />
          </motion.div>
        </div>
      </Layout>
    </main>
  );
};

export default Project;
