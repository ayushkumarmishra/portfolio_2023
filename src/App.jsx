// import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import HeaderNavbar from "./components/Navbar/HeaderNavbar";
import Preloader from "./components/Preloader/preloader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div>
      {!isLoaded && <Preloader />} {/* Show preloader until isLoaded is true */}
      {isLoaded && (
        <>
          <HeaderNavbar />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
