import React from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";



const NavBar = () => {
  return (
    <div>
      <header className="sticky top-0 bg-white shadow w-full">
        <div className="container flex flex-col sm:flex-row  justify-between items-center mx-auto py-4 px-8">
          <div className="flex items-center text-2xl">
            <div className="w-12 mr-3">
              <Link to={"/"}>
                <div
                  className=" flex items-center text-4xl font-extrabold sm:w-full"
                  viewBox="0 0 48 48"
                >
                  my<span className="text-blue-800">Crypto</span>Tracker
                </div>
              </Link>
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0 font-medium ">
            <Link to={"/home"} className="px-4 hover:text-blue-800">
              Home
            </Link>
            <Link to={"/trending"} className="px-4 hover:text-blue-800">
              Trending
            </Link>
            <Link to={"/top10"} className="px-4 hover:text-blue-800">
              Top10
            </Link>
            <Link to={"/watchlist"} className="px-4 hover:text-blue-800">
              Watchlist
            </Link>
          </div>
          <div className="hidden md:block justify-evenly cursor-pointer">
            <Link to={"/signup"}>
              <button
                type="button"
                className=" bg-transparent py-3 px-8 ml-2 hover:bg-blue-800 text-blue-800 border hover:text-white font-semibold rounded-2xl shadow-lg "
              >
                Sign up
              </button>
            </Link>

            <Link to={"/login"}>
              <button
                type="button"
                className=" py-3 px-8 mx-[20px] font-semibold bg-blue-800 hover:bg-white hover:text-blue-800 text-white rounded-2xl shadow-lg "
              >
                Log in
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
