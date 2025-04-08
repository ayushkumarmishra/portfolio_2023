/* eslint-disable react/prop-types */
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ Name, Place, Degree, Branch, time, CGPA }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="flex flex-col mx-auto items-center justify-between my-8 first:mt-0 last:mb-0 w-[70%]"
    >
      <LiIcon referenec={ref} />
      <motion.div
        initial={{ y: 50, scale: 1 }}
        whileInView={{ y: 0 }}
        transition={{ duartion: 0.8, type: "spring" }}
        className="w-full pl-8 sm:pl-16"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <h3 className="font-bold capitalize text-education text-sm sm:text-xl md:text-2xl">
            {Name}
          </h3>
          <h4 className="font-medium font-montserrat text-[10px] sm:text-sm text-dark/75">
            {Place}, India
          </h4>
        </div>
        <div className="flex font-medium my-1 sm:my-2 text-[10px] sm:text-sm md:text-base">
          {Degree}&nbsp;{Branch}
        </div>
        <div className="text-dark/50 font-medium w-full text-[10px] sm:text-sm md:text-base mb-3">
          CGPA: &nbsp;{CGPA}&nbsp; &nbsp;|&nbsp;&nbsp; {time}
        </div>
        <p className="text-[10px] sm:text-sm md:text-base font-montserrat text-dark/75 leading-relaxed">
          {Name === "Dr. Ambedkar Institute Of Technology" 
            ? "Gained expertise in software development, data structures, and web technologies. Participated in hackathons and developed multiple full-stack projects."
            : Name === "Kendriya Vidyalaya Tirumalagiri"
            ? "Developed strong foundation in mathematics and science. Actively participated in science exhibitions and sports events."
            : "Achieved academic excellence with perfect score. Developed interest in computer science and programming fundamentals."}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="min-h-screen px-4 sm:px-8" id="education-section">
      <div className="pt-8 sm:pt-12 font-sans overflow-hidden mb-6 sm:mb-8 text-dark/60 w-full sm:w-7/12 font-bold !items-start text-sm sm:text-xl md:text-2xl uppercase flex flex-row flex-wrap">
        <h2 className="mr-1">E</h2>
        <h2 className="mr-1 text-xl sm:text-4xl md:text-5xl tracking-widest">D</h2>
        <h2 className="mr-1">U</h2>
        <h2 className="mr-1">C</h2>
        <h2 className="mr-1">A</h2>
        <h2 className="mr-1 text-xl sm:text-4xl md:text-5xl tracking-widest">T</h2>
        <h2 className="mr-1">I</h2>
        <h2 className="mr-1">O</h2>
        <h2 className="mr-1">N</h2>
        <hr className="w-full mx-auto border-2 mt-2 sm:mt-3 h-0 mb-0" />
      </div>
      <div ref={ref} className="w-full sm:w-[85%] mx-auto relative my-8 sm:my-16 md:my-32">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-2 sm:left-9 top-0 w-[2px] sm:w-[4px] h-full bg-dark origin-top"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            Name="Dr. Ambedkar Institute Of Technology"
            Place="Bangalore"
            Degree="Bachelor of Engineering in"
            Branch="Computer Science and Engineering"
            time="Sep, 2019 - July, 2023"
            CGPA="8.81/10"
          />
          <Details
            Name="Kendriya Vidyalaya Tirumalagiri"
            Place="Secunderabad"
            Degree="High School in"
            Branch="PCM"
            time="Apr, 2017 - Apr, 2018"
            CGPA="80%"
          />
          <Details
            Name="Kendriya Vidyalaya No-1 Amritsar Cantt"
            Place="Punjab"
            Degree="Senior Secondary"
            Branch=""
            time="Apr, 2015 - Apr, 2016"
            CGPA="10/10"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
