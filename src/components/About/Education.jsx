/* eslint-disable react/prop-types */
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ Name, Place, Degree, Branch, time, CGPA }) => {
  return (
    <li className="flex flex-col mx-auto items-center justify-between my-8 first:mt-0 last:mb-0 w-[70%]">
      <LiIcon />
      <div>
        <span className="flex flex-row justify-between items-center">
          <motion.h3 className="font-bold capitalize text-education text-2xl">
            {Name}
          </motion.h3>
          <h4 className="font-bold/80 font-montserrat text-sm">
            {Place}, India
          </h4>
        </span>
        <span className="flex font-mono my-1 font-bold">
          {Degree}&nbsp;{Branch}
        </span>
        <span className="text-degree/40 font-extrabold w-full">
          CGPA: &nbsp;{CGPA}&nbsp; &nbsp;|&nbsp;&nbsp; {time}
        </span>
        <p className="text-md font-montserrat">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          molestias id corrupti modi porro commodi deleniti iure beatae dicta
          eaque nesciunt minima totam distinctio similique possimus, veniam
          odio, nobis vitae.
        </p>
      </div>
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
    <div className="my-52">
      <div className="font-sans overflow-ellipsis mb-3 text-dark/60 w-7/12 font-extrabold !items-start text-2xl uppercase flex flex-row">
        <h2 className="mr-1">E</h2>
        <h2 className="mr-1 text-5xl tracking-widest">D</h2>
        <h2 className="mr-1">U</h2>
        <h2 className="mr-1">C</h2>
        <h2 className="mr-1">A</h2>
        <h2 className="mr-1 text-5xl tracking-widest">T</h2>
        <h2 className="mr-1">I</h2>
        <h2 className="mr-1">O</h2>
        <h2 className="mr-1">N</h2>
        <hr className="w-full mx-auto border-2 mt-3 h-0 mb-3 " />
      </div>
      <div ref={ref} className="w-[75%] mx-auto relative my-32">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark rounded-md origin-top"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-12">
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
