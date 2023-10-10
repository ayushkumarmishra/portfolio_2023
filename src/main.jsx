import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skill.jsx";
import Project from "./components/Projects/Project.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Contact from "./components/Contact/Contact.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/experiences",
        element: <Experience />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <div className="font-montserrat bg-light w-full min-h-screen cursor">
        <App />
      </div>
    </RouterProvider>
  </React.StrictMode>
);
