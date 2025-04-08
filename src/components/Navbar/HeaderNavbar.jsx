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
    <header className="w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4">
          {/* Logo container */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4 mb-4 sm:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                className="h-10 sm:h-12 md:h-16 w-auto" 
                src={LogoImage} 
                alt="logo_ayush_mishra" 
              />
            </Link>
            
            {/* Social Icons - Mobile Only */}
            <div className="sm:hidden flex items-center justify-center flex-wrap gap-1">
              <motion.a
                href="https://www.linkedin.com/in/ayushkumarmishra/"
                target={"_blank"}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-4"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://github.com/ayushkumarmishra"
                target={"_blank"}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-4"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-4"
                target={"_blank"}
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-4"
              >
                <DiscordIcon />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/ayush_mishra04/"
                target={"_blank"}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-4"
              >
                <InstagramIcon />
              </motion.a>
            </div>

            <nav className="sm:hidden">
              <h2>
                <Logo />
              </h2>
            </nav>
          </div>

          {/* AKM - Desktop Only */}
          <nav className="hidden sm:block">
            <h2>
              <Logo />
            </h2>
          </nav>
          
          {/* Social Icons - Desktop Only */}
          <nav className="hidden sm:flex items-center justify-center flex-wrap gap-2">
            <motion.a
              href="https://www.linkedin.com/in/ayushkumarmishra/"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/ayushkumarmishra"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
              target={"_blank"}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
            >
              <DiscordIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ayush_mishra04/"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
            >
              <InstagramIcon />
            </motion.a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavbar;
