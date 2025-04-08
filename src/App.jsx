import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import HeaderNavbar from "./components/Navbar/HeaderNavbar";
import Preloader from "./components/Preloader/Preloader";
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
        <div className="min-h-screen flex flex-col">
          <Cursor />
          <CommonNavbar />
          <HeaderNavbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
