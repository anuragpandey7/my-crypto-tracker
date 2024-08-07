import React from "react";
import { MdStarBorder } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { IoIosTrendingDown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";

const CardComp = ({item}) => {
  console.log(item)

  return (
    <div className="flex flex-col border shadow-xl rounded-2xl  p-5 gap-4 bg-violet-50">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 S">
          <img className="w-9" src={item.image} alt={item.symbol} loading="lazy"/>
          {/* <h2>{data.symbol}</h2> */}
          <h3 className="border rounded-3xl font-bold p-2">{item.name}</h3>
        </div>
        <div>
          <MdStarBorder className="text-[26px]" />
        </div>
      </div>
      <div className="flex items-center gap-3 font-bold border rounded-3xl  p-2">
        <h3>&#x24;{item.price_change_24h}</h3>
        {item.ath_change_percentage > 0 ? (
          <IoIosTrendingUp className="text-green-700 text-3xl " />
        ) : (
          <IoIosTrendingDown className="text-red-700 text-2xl" />
        )}
      </div>
      <div className="font-bold border rounded-3xl   p-2 ">
        <h1>
          {item.symbol.toLocaleUpperCase()} Price : &#x24;
          {`${item.current_price}`}
        </h1>
      </div>
      <div className="font-bold border rounded-3xl w-full p-2 mb-2 ">
        <h3 className="mb-2">Market Cap : {item.market_cap}</h3>
        <h3>Total Volume : {item.total_volume}</h3>
      </div>
    </div>
  );
};

export default CardComp;
