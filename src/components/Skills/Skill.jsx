/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Layout from "../Home/Layout";
import { fadeIn } from "../../utils/motion";
import AnimatedText from "../Home/AnimatedText";
import { services } from "../../constants/index";

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
          <h3 className="text-white text-[20px] font-bold text-center">
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
        <div className="pt-12 font-sans overflow-ellipsis mb-3 text-dark/60 w-7/12 font-extrabold !items-start text-2xl uppercase flex flex-row">
          <h2 className="mr-1">S</h2>
          <h2 className="mr-1 text-5xl tracking-widest">K</h2>
          <h2 className="mr-1">I</h2>
          <h2 className="mr-1">L</h2>
          <h2 className="mr-1">L</h2>
          <h2 className="mr-1">S</h2>
          <hr className="w-full mx-auto border-2 mt-3 h-0 mb-3 " />
        </div>

        <div className="mt-20 flex gap-10  flex-row">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Skills;
