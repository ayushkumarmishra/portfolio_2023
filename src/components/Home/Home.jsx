import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import { LinkArrow } from "../Navbar/Icons";
import { motion } from "framer-motion";
import profilePic from "../../../public/profile_pic.png";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import lightBulb from "../../../public/bulb.svg";

function Home() {
  return (
    <main className="w-full relative pb-0 sm:pb-0">
      <Layout className="pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 md:gap-12 pt-16 md:pt-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Tilt className="w-[280px] sm:w-[350px] md:w-[450px]">
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.75)}
                className="w-full"
            >
              <motion.div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                <img
                  src={profilePic}
                  alt="profile_pic_ayush"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          </Tilt>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
            {/* Hi there */}
            <h1 className="flex items-center justify-center md:justify-start">
              <AnimatedText
                text="Hi there!"
                className="!font-normal !text-xl sm:!text-2xl !w-auto"
              />
              <span
                className="custom-wave text-2xl sm:text-3xl ml-2"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </h1>

            {/* Name */}
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl text-center md:text-left"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              I&quot;m{" "}
              <motion.span className="font-semibold">Ayush Mishra</motion.span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="w-full">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !font-extrabold text-center md:text-left"
              />
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-center md:text-left max-w-[600px]">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start w-full gap-4 mt-2">
              <Link
                to="/resume"
                className="flex items-center justify-center bg-dark text-light p-2 px-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-light 
                hover:text-dark border-2 border-solid border-transparent hover:border-dark
                w-full sm:w-auto min-w-[120px]"
              >
                Resume <LinkArrow className="w-4 sm:w-5 ml-1" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center bg-light text-dark p-2 px-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-dark hover:text-light 
                border-2 border-solid border-dark
                w-full sm:w-auto min-w-[120px]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      {/* Light Bulb */}
      <div className="fixed right-4 sm:right-8 bottom-24 sm:bottom-8 w-10 sm:w-16 z-10">
        <img src={lightBulb} alt="ayush" className="w-full h-auto" />
      </div>
    </main>
  );
}

export default Home;
