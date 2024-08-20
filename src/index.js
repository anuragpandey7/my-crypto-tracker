import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import WatchList from "./components/pages/WatchList";
import Trending from "./components/pages/Trending";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Top10 from "./components/pages/Top10";
import CoinById from "./components/pages/CoinById";
import { Provider } from "react-redux";
import { cryptoStore } from "./Store/cryptoStore";
import Error from "./components/Error";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

const AppLayout = () => {
  return (
    <Provider store={cryptoStore}>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/watchlist/",
        element: <WatchList />,
      },
      {
        path: "/top10",
        element: <Top10 />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/coins/:id",
        element: <CoinById />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
