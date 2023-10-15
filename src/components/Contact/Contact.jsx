/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";
import { motion } from "framer-motion";
import {
  CallIcon,
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  TwitterIcon,
} from "../Navbar/Icons";

const contact = () => {
  return (
    <>
      <Layout className="pt-10 pb-5">
        <div className="flex items-center justify-center w-full">
          <AnimatedText text="Contact Us Page" />
        </div>
      </Layout>
      <div
        className="flex w-full min-h-screen justify-center 
      text-white-100 
      bg-light
      items-center "
      >
        <div
          className="w-full flex flex-col space-y-6 shadow-card max-w-4xl
          p-8
          rounded-xl
        bg-cyan
        sm:p-12
        md:flex-row md:space-x-6 md:space-y-0 md:max-w-5xl"
        >
          <div className="flex flex-col justify-between space-y-8 ">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Say Hello</h1>
              <p className="pt-3 font-montserrat text-sm">
                Thank you for reaching out. I'm excited to hear from you.
                Whether you have a project idea, a collaboration proposal, or
                just want to say hi, your message is important to me.
              </p>
              <p className="pt-2 font-montserrat text-sm">
                Feel free to share the details of your inquiry, and I'll get
                back to you as soon as possible. Your interest in my work means
                a lot.
              </p>
            </div>
            <div className="flex flex-col space-y-4 text-white-100 ">
              <div className="inline-flex space-x-2 items-center">
                <CallIcon />
                <span className="text-white-100 font-bold">+91-8437592932</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <MailIcon />
                <span className="font-bold">mishraayushsec@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <LocationIcon />
                <span className="font-bold">Hyderabad, India</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <h2 className="font-bold">Follow me</h2>
              <motion.a
                href="https://www.linkedin.com/in/ayushkumarmishra/"
                target={"_blank"}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-6"
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
            </div>
          </div>

          <div>
            <div className="bg-white-100 p-8 rounded-xl text-grey/60 shadow-lg md:w-96">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="
                  ring-1 ring-grey/40
                  w-full px-4 py-2 mt-2 rounded-md outline-none focus:ring-2  focus:ring-teal"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="
                  ring-1 ring-grey/40
                  w-full px-4 py-2 mt-2 rounded-md outline-none focus:ring-2  focus:ring-teal"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    cols="0"
                    placeholder="Write Something to me..."
                    className="
                  ring-1 ring-grey/40
                  w-full px-4 py-2 mt-2 rounded-md outline-none focus:ring-2  focus:ring-teal"
                  ></textarea>
                </div>
                <button className="inline-block self-end bg-cyan text-white-100 font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

//  <div className="w-full mb-10 h-auto flex flex-col gap-4 justify-center items-center mx-20">
//    <h2 className="font-bold text-3xl w-full flex justify-center items-center pt-10">
//      Say Hello
//    </h2>
//    <div className="w-full text-dark grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 mx-auto">
//
//      <input
//        type="text"
//        placeholder="Second Name"
//        className="w-full px-3 py-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
//      />
//    </div>

//    <input
//      type="email"
//      placeholder="Email"
//      className="w-full px-3 py-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
//    />
//    <input
//      type="text"
//      placeholder="Subject"
//      className="w-full py-3 px-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
//    />

//    <textarea
//      name="message"
//      id=""
//      cols="0"
//      rows="10"
//      placeholder="Write Something to me...."
//      className="w-full px-3 py-3 rounded-md border border-[rgba(255,255,255,0,3)] bg-education focus: border-primary outline-none"
//    ></textarea>
//  </div>;

{
  /* <nav className="flex items-center justify-center flex-wrap">

</nav>; */
}
