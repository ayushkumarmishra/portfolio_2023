import Layout from "./Layout";
import ProfilePic from "../../../public/developer.png";
import AnimatedText from "./AnimatedText";
function Home() {
  return (
    <main className="w-full flex text-dark min-h-screen items-center bg-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <img src={ProfilePic} alt="" className="w-full h-auto" />
          </div>
          <div className="w-1/2 font-montserrat flex flex-col self-center ">
            <h1 className="flex flex-row items-center justify-start min-w-fit">
              <AnimatedText
                text="Hii there!"
                className="text-left !text-5xl !w-auto"
              />
              <span
                className="custom-wave text-5xl ml-2"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </h1>
            <h2>
              I&quot;m
              <span> Ayush Mishra</span>
            </h2>
            <h4>Turning Vision Into Reality With Code And Design.</h4>
            <p>
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default Home;
