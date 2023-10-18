import Layout from "./Layout";
import ProfilePic from "../../../public/developer.png";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LinkArrow } from "../Navbar/Icons";
import lightBulb from "../../../public/bulb.svg";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";

function Home() {
  return (
    <main className="w-full flex text-dark min-h-screen items-center bg-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <Tilt className="xs:w-[250px] w-1/2">
            <motion.div
              className="w-[85%] picture-container"
              variants={fadeIn("right", "spring", 0.5, 0.75)}
            >
              <motion.div
                className=""
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                <img
                  src={ProfilePic}
                  alt="profile_pic_ayush"
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </Tilt>
          <div className="w-1/2 font-montserrat flex flex-col self-center ">
            <h1 className="flex flex-row items-center justify-start min-w-fit">
              <AnimatedText
                text="Hii there!"
                className="!font-normal text-left !text-2xl !w-auto"
              />
              <span
                className="custom-wave text-4xl ml-2"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </h1>
            <motion.div
              className="text-left text-4xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              I&quot;m{" "}
              <motion.span className="font-semibold">Ayush Mishra</motion.span>
            </motion.div>
            <h2 className="py-2">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className="!text-left !text-6xl !font-extrabold"
              />
            </h2>
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                to="/resume"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                hover:text-dark 
          border-2 border-solid border-transparent hover:border-dark
          "
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                to="/contact"
                className="flex items-center bg-white text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light 
          border-2 border-solid border-dark hover:border-dark
          mx-4"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <div className="absolute right-8 bottom-8 inline-block w-16 ">
        <img src={lightBulb} alt="ayush" className="w-full h-auto" />
      </div>
    </main>
  );
}

export default Home;
