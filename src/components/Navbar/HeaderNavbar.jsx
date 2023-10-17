// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import LogoImage from "../../assets/logo.png";
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";
import { Link } from "react-router-dom";
const HeaderNavbar = () => {
  return (
    <header className="w-full px-20 py-2 font-medium flex items-center justify-between bg-light">
      <Link to="/" className="flex justify-center items-center">
        <img className="h-20 w-auto" src={LogoImage} alt="logo_ayush_mishra" />
      </Link>
      <nav>
        <h2>
          <Logo />
        </h2>
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/ayushkumarmishra/"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/ayushkumarmishra"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          target={"_blank"}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <DiscordIcon />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/ayush_mishra04/"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <InstagramIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
