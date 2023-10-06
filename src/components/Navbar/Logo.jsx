import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex center-items justify-center mt-2">
      <MotionLink
        to="/home"
        className="w-20 h-20 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
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
