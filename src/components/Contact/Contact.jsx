import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";
import { motion } from "framer-motion";
import { config } from "../../config";
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

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    emailjs.init(config.emailjs.publicKey);

    emailjs
      .send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        {
          from_name: form.firstName,
          to_name: "Ayush",
          from_email: form.email,
          to_email: config.emailjs.email,
          message: form.message,
          reply_to: form.email,
        }
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setLoading(false);
          setSubmitStatus("success");
          setForm({
            firstName: "",
            email: "",
            message: "",
          });
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error("Error sending email:", error);
          setLoading(false);
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-8 sm:pt-12 mb-0 px-4 sm:px-6 lg:px-8">
        <AnimatedText
          text="Let's Connect and Create Something Amazing"
          className="mb-8 sm:mb-14 !text-2xl sm:!text-4xl md:!text-6xl text-center"
        />
        <div className="flex w-full justify-center items-center">
          <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-12 max-w-4xl sm:max-w-5xl bg-cyan rounded-xl shadow-card p-6 sm:p-8">
            <div className="flex flex-col justify-between space-y-6 sm:space-y-8 w-full sm:w-1/2">
              <div>
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide">Say Hello</h1>
                <p className="pt-3 font-montserrat text-sm sm:text-base leading-relaxed">
                  Thank you for reaching out. I'm excited to hear from you.
                  Whether you have a project idea, a collaboration proposal, or
                  just want to say hi, your message is important to me.
                </p>
                <p className="pt-2 font-montserrat text-sm sm:text-base leading-relaxed">
                  Feel free to share the details of your inquiry, and I'll get
                  back to you as soon as possible. Your interest in my work means
                  a lot.
                </p>
              </div>
              
              <div className="flex flex-col space-y-3 sm:space-y-4 text-white-100">
                <div className="inline-flex space-x-2 items-center">
                  <CallIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base font-bold">{config.contact.phone}</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base font-bold">{config.contact.email}</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <LocationIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base font-bold">{config.contact.location}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <h2 className="font-bold text-lg sm:text-xl">Follow me</h2>
                <div className="flex space-x-4">
                  <motion.a
                    href={config.social.linkedin}
                    target="_blank"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <LinkedInIcon />
                  </motion.a>
                  <motion.a
                    href={config.social.github}
                    target="_blank"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <GithubIcon />
                  </motion.a>
                  <motion.a
                    href="/"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </motion.a>
                  <motion.a
                    href="/"
                    target="_blank"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <DiscordIcon />
                  </motion.a>
                  <motion.a
                    href={config.social.instagram}
                    target="_blank"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <InstagramIcon />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <div className="bg-white-100 p-6 sm:p-8 rounded-xl text-grey/60 shadow-lg">
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm sm:text-base block mb-1">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal ring-1 ring-grey/40 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm sm:text-base block mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal ring-1 ring-grey/40 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm sm:text-base block mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Write Something to me..."
                      required
                      className="w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal ring-1 ring-grey/40 text-sm sm:text-base resize-none"
                    ></textarea>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {submitStatus === "success" && (
                      <p className="text-green-500 text-sm">Message sent successfully!</p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-block self-end bg-cyan text-white-100 font-bold rounded-lg px-4 sm:px-6 py-2 uppercase text-sm sm:text-base hover:bg-cyan/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Contact;