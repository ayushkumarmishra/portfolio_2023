/* eslint-disable react/prop-types */
import Layout from "../Home/Layout";
import AnimatedText from "../Home/AnimatedText";
import { Link } from "react-router-dom";
import { GithubIcon } from "../Navbar/Icons";
import carPool from "../../assets/car-pool.jpg";
import { motion } from "framer-motion";

const FeatureProject = ({ type, title, summary, link, github, img }) => {
  return (
    <motion.article
      className="w-full flex items-center justify-between rounded-3xl  border-solid border-dark bg-light border-4 shadow-2xl shadow-card p-8"
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <Link
        to="/link"
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto " />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl ">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link to={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            to={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="flex w-full items-center justify-center bg-light text-dark border-2 rounded-2xl p-6 relative flex-col rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        to="/link"
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto " />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-2">
        <span className="text-primary font-medium text-xl ">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full underline ">
          <Link to={link} target="_blank" className="text-lg font-semibold">
            Visit
          </Link>
          <Link to={github} target="_blank" className="w-8">
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
      <Layout className="pt-12 mb-0 ">
        <AnimatedText
          text='"Empowering Ideas with Exceptional Execution"'
          className="mb-16"
        />
        <div className="grid grid-cols-12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeatureProject
              title="Crypto Screener Application"
              summary="feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
              type="Featured Project"
              link="/"
              github="/"
              img={carPool}
            />
          </div>
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="col-span-6"
          >
            <ProjectTem
              title="React Portfolio Website"
              type="Featured Project"
              link="/"
              github="/"
              img={carPool}
            />
          </motion.div>
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="col-span-6"
          >
            <ProjectTem
              title="React Portfolio Website"
              type="Featured Project"
              link="/"
              github="/"
              img={carPool}
            />
          </motion.div>
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="col-span-6"
          >
            <ProjectTem
              title="React Portfolio Website"
              type="Featured Project"
              link="/"
              github="/"
              img={carPool}
            />
          </motion.div>
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="col-span-6"
          >
            <ProjectTem
              title="React Portfolio Website"
              type="Featured Project"
              link="/"
              github="/"
              img={carPool}
            />
          </motion.div>
        </div>
      </Layout>
    </main>
  );
};

export default Project;
