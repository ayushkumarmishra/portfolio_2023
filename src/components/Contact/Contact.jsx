import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";
import { motion } from "framer-motion";
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Navbar/Icons";

const contact = () => {
  return (
    <>
      <Layout className="pt-14">
        <div className="flex items-center justify-center w-full">
          <AnimatedText text="Contact Us Page" />
        </div>
        <div className="w-full flex green-pink-gradient flex-row justify-center items-start mt-20 gap-10 shadow-card ">
          <div className="w-full h-auto ">
            <div className="mx-auto w-1/2 h-auto justify-center items-center my-10">
              <h3 className="my-10">
                Email :
                <span className="font-bold">mishraayushsec@gmail.com</span>
              </h3>
              <h3 className="my-10">
                Contact :<span className="font-bold">+91-8437592932</span>
              </h3>
              <h3 className="my-10">
                Location : <span className="font-bold">Hyderabad, India</span>
              </h3>
            </div>
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
          </div>
          <div className="w-full mb-10 h-auto flex flex-col gap-4 justify-center items-center mx-20">
            <h2 className="font-bold text-3xl w-full flex justify-center items-center pt-10">
              Say Hello
            </h2>
            <div className="w-full text-dark grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 mx-auto">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
              />
              <input
                type="text"
                placeholder="Second Name"
                className="w-full px-3 py-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full py-3 px-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
            />

            <textarea
              name="message"
              id=""
              cols="0"
              rows="10"
              placeholder="Write Something to me...."
              className="w-full px-3 py-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
            ></textarea>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default contact;
