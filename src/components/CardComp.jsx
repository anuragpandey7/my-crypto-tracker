import React from "react";
import { MdStarBorder } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { IoIosTrendingDown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { Link } from "react-router-dom";

const CardComp = ({ item, checker }) => {
  // console.log(item);
  return (
    <div className="flex flex-col border shadow-xl rounded-2xl  p-5 gap-4 bg-violet-50">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 S">
          <Link className="flex gap-2 items-center" to={`/coins/${item.id}`}>
            <abbr title="Click to know more ...">
              <img
                className="w-9"
                src={checker === "top10" ? item.thumb : item.image}
                alt={"Crypto Symbol"}
                loading="lazy"
              />
            </abbr>

            <h2>{item.symbol}</h2>
            <h3 className="border rounded-3xl font-bold p-2">{item.name}</h3>
          </Link>
        </div>
        <div>
          <MdStarBorder className="text-[26px]" />
        </div>
      </div>
      <div className="flex items-center gap-3 font-bold border rounded-3xl  p-2">
        {checker !== "top10" && (
          <h3 className="border px-2 py-1 text-[22px] rounded-3xl  shadow-sm">
            &#x24;{item.price_change_24h}
          </h3>
        )}

        {checker === "top10" ? (
          item.data.price_change_percentage_24h.usd > 0 ? (
            <IoIosTrendingUp className="text-green-700 text-3xl" />
          ) : (
            <IoIosTrendingDown className="text-red-700 text-3xl" />
          )
        ) : item.ath_change_percentage > 0 ? (
          <IoIosTrendingUp className="text-green-700 text-3xl" />
        ) : (
          <IoIosTrendingDown className="text-red-700 text-3xl" />
        )}

        {/* {item.price_change_24h > 0 ? (
          <IoIosTrendingUp className="text-green-700 text-3xl " />
        ) : (
          <IoIosTrendingDown className="text-red-700 text-2xl" />
        )} */}
      </div>
      {/* <div className="font-bold border rounded-3xl   p-2 ">
        <h1>
          {item.symbol.toLocaleUpperCase()} Price : &#x24;
          {`${item.current_price}`}
        </h1>
      </div>
      <div className="font-bold border rounded-3xl w-full p-2 mb-2 ">
        <h3 className="mb-2">Market Cap : {item.market_cap}</h3>
        <h3>Total Volume : {item.total_volume}</h3>
      </div> */}
      <div className="font-bold border rounded-3xl w-full p-2 mb-2">
        <div>
          Total Volume: $
          {checker === "top10" ? item.data.total_volume : item.total_volume}
        </div>
        <div>
          Market capcity: $
          {checker === "top10" ? item.data.market_cap : item.market_cap}
        </div>
      </div>
    </div>
  );
};

export default CardComp;
