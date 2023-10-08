// import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import HeaderNavbar from "./components/Navbar/HeaderNavbar";
import Preloader from "./components/Preloader/preloader";
import Cursor from "./components/Cursor/CustomCursor";
import About from "./components/About/About";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {!isLoaded && <Preloader />}
      {isLoaded && (
        <div>
          <Cursor />
          <HeaderNavbar />
          <Home />
          {/* <About /> */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
