
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
      className="green-pink--elevate-gradient rounded-[20px] py-4 sm:py-5 px-3 sm:px-6 min-h-[100px] sm:min-h-[120px] flex justify-evenly items-center flex-col w-full"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={icon}
        alt={title}
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <h3 className="text-white-100 text-xs sm:text-base md:text-lg font-bold text-center">
        {title}
      </h3>
    </motion.div>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
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
          className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[180px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-10 h-10 sm:w-16 sm:h-16 object-contain mb-3 sm:mb-0" 
          />
          <h3 className="text-white-100 text-sm sm:text-[20px] font-bold text-center">
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
      <Layout className="pt-8 sm:pt-14 mb-0 px-4 sm:px-0">
        <AnimatedText 
          text="Key Skills and Proficiencies" 
          className="mb-8 sm:mb-14 !text-2xl sm:!text-4xl md:!text-6xl text-center" 
        />
        
        <div className="pt-8 sm:pt-12 font-sans overflow-hidden mb-3 text-dark/60 w-full sm:w-7/12 font-extrabold !items-start text-lg sm:text-2xl uppercase flex flex-row flex-wrap mx-0 sm:mx-5">
          <h2 className="mr-1">S</h2>
          <h2 className="mr-1 text-3xl sm:text-5xl tracking-widest">K</h2>
          <h2 className="mr-1">I</h2>
          <h2 className="mr-1">L</h2>
          <h2 className="mr-1">L</h2>
          <h2 className="mr-1">S</h2>
          <hr className="w-full mx-auto border-2 mt-2 sm:mt-3 h-0 mb-0 sm:mb-3" />
        </div>

        <div className="mt-8 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-12 px-4 sm:px-0">
          {skillTopic.map((service, index) => (
            <motion.div
              key={service.title}
              className="w-full"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                delay: index * 0.2,
              }}
            >
              <HeadingCard {...service} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 px-4 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              className="w-full sm:w-[250px] flex justify-center items-center"
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
