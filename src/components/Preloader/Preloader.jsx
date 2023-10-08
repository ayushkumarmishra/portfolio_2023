import { useEffect, useState } from "react";
import loadingLoaderGif from "../../../public/loading_loader.gif";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div
      className={`${
        isLoading ? "flex" : "hidden"
      } items-center justify-center fixed inset-0 bg-white`}
    >
      <img src={loadingLoaderGif} alt="Loading..." className="w-1/4 h-1/4" />
    </div>
  );
};

export default Preloader;
