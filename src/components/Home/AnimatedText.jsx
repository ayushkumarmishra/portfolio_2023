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
    <div className="w-full overflow-hidden py-2">
      <motion.h1
        className={`inline-block text-dark font-bold break-words hyphens-auto
          ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            className="inline-block"
            key={word + "-" + index}
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
