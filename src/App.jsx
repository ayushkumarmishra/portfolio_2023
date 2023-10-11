// import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import HeaderNavbar from "./components/Navbar/HeaderNavbar";
import Preloader from "./components/Preloader/preloader";
import Cursor from "./components/Cursor/CustomCursor";
import CommonNavbar from "./components/Navbar/CommonNavbar";
import { Outlet } from "react-router-dom";
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
          <CommonNavbar />
          <HeaderNavbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
