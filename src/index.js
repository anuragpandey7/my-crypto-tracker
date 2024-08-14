import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import WatchList from "./components/pages/WatchList";
import Trending from "./components/pages/Trending";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Top10 from "./components/pages/Top10";
import CoinById from "./components/pages/CoinById"
import { Provider } from "react-redux";
import { cryptoStore } from "./Store/cryptoStore";


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
    errorElement: <div>ERROR FOUND</div>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/watchlist/",
        element: <WatchList  />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
