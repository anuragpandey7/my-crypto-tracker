import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";


const CoinDetails = ({ apiData }) => {
  console.log(apiData);

  if (apiData == []) return <h1>Loading</h1>;
  return (
    <div className="flex flex-col w-2/5 border shadow-3xl font-bold text-[20px] m-9 p-5 gap-5">
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
          <li>{apiData.market_data.market_cap_rank}</li>
        </ul>
      </div>
      <div>Hey</div>
    </div>
  );
};

export default CoinDetails;
