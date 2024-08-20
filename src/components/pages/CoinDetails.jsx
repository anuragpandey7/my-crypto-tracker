import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DummyUi from "../DummyUi";

const CoinDetails = ({ apiData }) => {
  // console.log(apiData);

  if (apiData.length === 0) return <DummyUi />;
  return (
    <div className="flex flex-col w-2/5 border shadow-3xl font-bold text-[20px] m-9 p-5 gap-5 rounded-3xl bg-cyan-50">
      <div className="flex items-center gap-[30px] ">
        <Link to={"/home"}>
          <span className="text-gray-600">Home</span>
        </Link>
        <MdNavigateNext />
        <span className="text-gray-400">{apiData.name} Price</span>
      </div>
      <div>
        <ul className="list-none flex items-center gap-[30px]">
          <li>
            <img
              src={apiData.image.thumb}
              alt={apiData.symbol}
              className="w-9 border shadow-2xl rounded-2xl"
            />
          </li>
          <li>{apiData.symbol} Price</li>
          <li className=" w-[30px] border shadow-3xl rounded-lg">
            <span className="items-center">#{apiData.market_cap_rank}</span>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <span>${apiData.market_data.current_price.usd}</span>
        <span>
          {apiData.market_data.price_change_percentage_1h_in_currency.usd <
          0 ? (
            <div className="flex gap-2">
              <FaCaretDown className="text-red-500 text-3xl" />{" "}
              <span>
                {apiData.market_data.market_cap_change_percentage_24h}%
              </span>
            </div>
          ) : (
            <FaCaretUp />
          )}
        </span>
      </div>
    </div>
  );
};

export default CoinDetails;
