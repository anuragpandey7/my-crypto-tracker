import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="flex w-full rounded-xl shadow-lg  absolute  justify-between items-center h-[88px] border-2 p drop-shadow-[10px] px-[15px] gap-[30px]">
    //   <Link to={"/home"}>
    //     {" "}
    //     <div className=" text-[40px] font-extrabold">
    //       my<span className="text-blue-800">Crypto</span>Tracker
    //     </div>
    //   </Link>

    //   <div>
    //     <h2>Footer</h2>
    //   </div>

    //   <div className="flex gap-5  justify-evenly items-center">

    //   </div>
    // </div>
    <div>
      <header className="sticky bottom-0 bg-white shadow w-full border">
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

          <div className="flex gap-3  justify-evenly cursor-pointer">
            <FaWhatsapp className="text-green-700 text-3xl cursor-pointer" />
            <FaFacebook className="text-blue-800 text-3xl cursor-pointer" />
            <FaGithub className="text-black text-3xl" />
            <FaInstagram className="text-red-600 text-3xl" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Footer;

