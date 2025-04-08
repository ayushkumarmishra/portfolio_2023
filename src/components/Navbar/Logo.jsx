import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        to="/"
        className="w-10 h-8 sm:w-12 sm:h-10 md:w-16 md:h-12 bg-dark text-light flex items-center justify-center rounded-full text-base sm:text-lg md:text-xl font-bold"
        whileHover={{
          background: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
      >
        AKM
      </MotionLink>
    </div>
  );
};

export default Logo;
