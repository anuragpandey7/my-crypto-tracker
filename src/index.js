import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Pricing from "./components/pages/Pricing";
import Trending from "./components/pages/Trending";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Top10 from "./components/pages/Top10";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>ERROR FOUND</div>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/top10",
        element: <Top10 />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
