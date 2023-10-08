import { Link } from "react-router-dom";
import Layout from "../Home/Layout";

const Footer = () => {
  return (
    <footer className="font-montserrat w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-6 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
        <div>
          <div className="flex items-center">
            Build with
            <span className="text-primary text-2xl px-1">&#9825;</span> by&nbsp;
            <Link
              to="https://www.linkedin.com/in/ayushkumarmishra/"
              className="underline underline-offset-2"
              target="_blank"
            >
              Ayush
            </Link>
          </div>
        </div>
        <Link
          to="https://www.linkedin.com/in/ayushkumarmishra/"
          className="underline underline-offset-2"
          target="_blank"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
