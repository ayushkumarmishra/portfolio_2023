import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error.jsx";
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
