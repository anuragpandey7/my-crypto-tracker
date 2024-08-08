import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex top-0 justify-between items-center max-w-full h-[100px]  shadow-lg border-2 p drop-shadow-[10px] px-[15px] gap-[30px]">
      <Link to={"/home"}>
        <div className=" text-[45px] font-extrabold">
          my<span className="text-blue-800">Crypto</span>Tracker
        </div>
      </Link>
      <div className="flex w-1/5 justify-between cursor-pointer font-medium ">
        <Link to={"/home"}>
          <p className="hover:text-blue-800">Home</p>
        </Link>
        <Link to={"/pricing"}>
          <p className="hover:text-blue-800">Pricing</p>
        </Link>
        <Link to={"/trending"}>
          <p className="hover:text-blue-800">Trending</p>
        </Link>
        <Link to={"/top10"}>
          <p className="hover:text-blue-800">Top10</p>
        </Link>
      </div>

      <div className="flex gap-5  justify-evenly cursor-pointer">
        <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded">
          Sign up
        </button>
        <button className=" hover:bg-fuchsia-50 hover:text-blue-800 bg-blue-800 text-white  font-semibold  py-2 px-4 border border-blue-900 hover:border-transparent rounded hover:border-black">
          Try for Free
        </button>
      </div>
    </div>
  );
};

export default NavBar;
