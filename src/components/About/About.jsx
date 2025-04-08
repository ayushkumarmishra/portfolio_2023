/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";
import ayush from "../../../public/about.jpg";
import { motion } from "framer-motion";
import Education from "./Education";
import { Link as ScrollLink } from "react-scroll";
import {
  AgeIcon,
  InterestIcon,
  LocationIcon,
  NationalityIcon,
} from "../Navbar/Icons";

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-8 sm:pt-12 mb-0">
        <div className="flex flex-col items-center justify-center w-full">

          <AnimatedText text="Passion fuels Purpose!" className="mb-8 sm:mb-14 !text-2xl sm:!text-4xl md:!text-6xl text-center" />
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-12 md:gap-16">
          <div className="col-span-full md:col-span-5 flex flex-col items-start justify-start order-2 md:order-1">
            <div className="font-sans overflow-hidden mb-4 text-dark/60 w-full font-extrabold !items-start text-lg sm:text-2xl uppercase flex flex-row">
              <h2 className="mr-1">A</h2>
              <h2 className="mr-1 text-3xl sm:text-5xl tracking-widest">B</h2>
              <h2 className="mr-1">O</h2>
              <h2 className="mr-1">U</h2>
              <h2 className="mr-1">T</h2>
              <hr className="w-full mx-auto border-2 mt-2 sm:mt-3 h-0 mb-3" />
            </div>
            <p className="font-semibold text-sm sm:text-base mb-4">
              Hi, I'm Ayush Mishra, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. I am always looking for new and innovative ways to bring my
              client's visions to life.
            </p>
            <p className="font-medium mb-4 text-sm sm:text-base">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium mb-6 text-sm sm:text-base">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look
              forward to the opportunity to bring my skills and passion to
              your next project.
            </p>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1.2,
                type: "spring",
              }}
              className="flex flex-col sm:flex-row w-full py-4 sm:py-8 justify-center items-start sm:items-center gap-6 sm:gap-0"
            >
              <div className="flex flex-col w-full sm:w-[50%] space-y-4 sm:space-y-6">
                <div className="flex flex-row w-full space-x-2 items-center text-sm sm:text-base">
                  <AgeIcon className="w-5 sm:w-6 min-w-[1.25rem]" />
                  <span className="font-bold">Age: </span>
                  <span>23</span>
                </div>
                <div className="flex flex-row w-full space-x-2 items-center text-sm sm:text-base">
                  <LocationIcon fill="black" className="w-5 sm:w-6 min-w-[1.25rem]" />
                  <span className="font-bold">Location :</span>
                  <span>Hyderabad, India</span>
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-[50%] space-y-4 sm:space-y-6">
                <div className="flex flex-row w-full space-x-2 text-sm sm:text-base">
                  <NationalityIcon className="w-5 sm:w-6 min-w-[1.25rem]" />
                  <span className="font-bold">Nationality :</span>
                  <span>Indian</span>
                </div>
                <div className="flex flex-row w-full space-x-2 items-center text-sm sm:text-base">
                  <InterestIcon className="w-5 sm:w-6 min-w-[1.25rem]" />
                  <span className="font-bold">Interests: </span>
                  <span>Cricket, Gym, Travelling.</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-full md:col-span-3 relative h-max border-4 border-solid rounded-3xl border-dark bg-light p-4 sm:p-8 order-1 md:order-2 mb-8 md:mb-0">
            <motion.div
              className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark"
              animate={{ rotate: 360, scale: 0.8 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            ></motion.div>
            <motion.img
              src={ayush}
              alt="ayush"
              className="w-full h-auto rounded-3xl"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
        <ScrollLink
          to="education-section"
          smooth={true}
          duration={1000}
          className="flex justify-center items-center w-full mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-sc btn w-[35px] h-[64px] rounded-full border-4 border-dark flex justify-center items-start p-2"
          >
            <div className="relative h-[50px]">
              <motion.div
                animate={{
                  y: ["-10%", "200%", "-10%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="w-3 h-3 rounded-full"
              >
                <div className="w-3 h-3 rounded-full bg-orange"></div>
              </motion.div>
            </div>
          </motion.button>
        </ScrollLink>
      </Layout>

      <Layout className="!pb-0">
        <Education />
      </Layout>
    </main>
  );
};

export default About;
