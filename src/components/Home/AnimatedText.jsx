/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0.4,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duartion: 1.8,
    },
  },
};

const AnimatedText = ({ className = "", text }) => {
  return (
    <div className="py-2 flex text-center overflow-hidden">
      <motion.h1
        className={`w-full inline-block text-dark font-bold capitalize text-6xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((words, index) => (
          <motion.span
            className=" inline-block"
            key={words + "-" + index}
            variants={singleWord}
          >
            {words}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
