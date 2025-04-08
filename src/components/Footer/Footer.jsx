import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-montserrat w-full border-t-2 border-solid border-dark font-medium text-sm sm:text-base">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 py-2 sm:py-4 px-4 sm:px-6 lg:px-8">
          <span className="w-full sm:w-auto text-center sm:text-left text-dark/75">
            {new Date().getFullYear()} &copy; All Rights Reserved
          </span>
          
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
          
          <Link
            to="https://www.linkedin.com/in/ayushkumarmishra/"
            className="w-full sm:w-auto text-center sm:text-left underline underline-offset-2 hover:text-primary transition-colors duration-300"
            target="_blank"
          >
            Say Hello
          </Link>
        </div>
    </footer>
  );
};

export default Footer;
