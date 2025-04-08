import { Link } from "react-router-dom";
import Layout from "./Home/Layout";
import { motion } from "framer-motion";
import { LinkedInIcon, GithubIcon, TwitterIcon, DiscordIcon, InstagramIcon } from "./Navbar/Icons";

const Footer = () => {
  return (
    <footer className="font-montserrat w-full border-t-2 border-solid border-dark font-medium text-sm sm:text-base">
      <Layout className="py-2 sm:py-4">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          {/* Copyright */}
          <div className="w-full sm:w-auto text-center sm:text-left text-dark/75">
            {new Date().getFullYear()} &copy; All Rights Reserved
          </div>
          
          {/* Social Links */}
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 sm:gap-4">
            <motion.a
              href="https://www.linkedin.com/in/ayushkumarmishra/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-4 sm:w-5"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/ayushkumarmishra"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-4 sm:w-5"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-4 sm:w-5"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-4 sm:w-5"
            >
              <DiscordIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ayush_mishra04/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-4 sm:w-5"
            >
              <InstagramIcon />
            </motion.a>
          </div>
          
          {/* Built with love */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              Built with
              <span className="text-primary text-xl sm:text-2xl px-1">&#9825;</span> by&nbsp;
              <Link
                to="https://www.linkedin.com/in/ayushkumarmishra/"
                className="underline underline-offset-2 hover:text-primary transition-colors duration-300"
                target="_blank"
              >
                Ayush
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer; 