/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Layout from "../Home/Layout";
import { fadeIn } from "../../utils/motion";
import AnimatedText from "../Home/AnimatedText";
import { services } from "../../constants/index";
import { skillTopic } from "../../constants/index";

const HeadingCard = ({ title, icon }) => {
  return (
    <motion.div
      className="green-pink--elevate-gradient rounded-[20px] py-5 px-12 min-h-[50px] flex justify-evenly items-center flex-col mx-auto my-10"
      initial={{ scale: 1 }}
      whileHover={{ scale: [1.2] }}
    >
      <motion.img
        src={icon}
        alt={title}
        className="w-10 h-10 object-contain"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <h3 className="text-white-100 text-[20px] font-bold text-center">
        {title}
      </h3>
    </motion.div>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white-100 text-[20px] font-bold text-center">
            {title}
          </h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <>
      <Layout className="pt-14 mb-0 ">
        <AnimatedText text="Key Skills and Proficiencies" className="mb-14" />
        <div className="pt-12 font-sans overflow-ellipsis mb-3 text-dark/60 w-7/12 font-extrabold !items-start text-2xl uppercase flex flex-row mx-5">
          <h2 className="mr-1">S</h2>
          <h2 className="mr-1 text-5xl tracking-widest">K</h2>
          <h2 className="mr-1">I</h2>
          <h2 className="mr-1">L</h2>
          <h2 className="mr-1">L</h2>
          <h2 className="mr-1">S</h2>
          <hr className="w-full mx-auto border-2 mt-3 h-0 mb-3 " />
        </div>

        <div className="mt-20 flex flex-row gap-12">
          {skillTopic.map((service, index) => (
            <HeadingCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-40 flex flex-wrap gap-12">
          {services.map((service, index) => (
            <motion.div
              className=" w-[250px] flex !flex-row justify-center items-center mx-auto"
              key={service.title}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
            >
              <ServiceCard key={service.title} index={index} {...service} />
            </motion.div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Skills;
