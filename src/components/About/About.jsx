import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";
import ayush from "../../../public/about.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <head>
        <title>Know Me Better | About Page</title>
        <meta name="description" content="just some description" />
      </head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-14 ">
          <AnimatedText text="Passion fuels Purpose!" className="mb-14" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-5 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold text-dark/75 underline underline-offset-3">
                Biography
              </h2>
              <p className="font-semibold">
                Hi, I'm Ayush Mishra, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 6 months of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max border-4 border-solid rounded-3xl border-dark bg-light p-8 items-center justify-center">
              <motion.div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark"
                animate={{ rotate: 360, scale: 0.8 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              ></motion.div>
              <motion.img
                src={ayush}
                alt="ayush"
                className="w-full h-auto rounded-3xl items-center justify-center"
                whileHover={{ scale: 1.2 }}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
