import Layout from "./Layout";
import ProfilePic from "../../../public/developer.png";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LinkArrow } from "../Navbar/Icons";
function Home() {
  return (
    <main className="w-full flex text-dark min-h-screen items-center bg-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <img src={ProfilePic} alt="" className="w-full h-auto" />
          </div>
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
            <div className="text-left text-4xl">
              I&quot;m{" "}
              <motion.span className="font-semibold">Ayush Mishra</motion.span>
            </div>
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
                to="/contacts"
                className="flex items-center bg-white text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light 
          border-2 border-solid border-transparent hover:border-dark
          mx-4"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default Home;
