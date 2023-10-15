import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";

const Experience = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center">
        <Layout className="pt-12 mb-0 ">
          <AnimatedText
            text='"Professional excellence painted in pixels. Discover my journey."'
            className="mb-14 "
          />
        </Layout>
      </div>
    </>
  );
};

export default Experience;
