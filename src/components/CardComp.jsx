import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { IoIosTrendingDown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleAddCoin ,handleRemoveCoin} from "../Store/watchListSlice";

const CardComp = ({ item, checker }) => {
  const watchlistData = useSelector((store) => store.watchList);

  const isPresent = (element, array) =>
    array.some((obj) => JSON.stringify(obj) === JSON.stringify(element));

  const starRenderingLogic = isPresent(item, watchlistData);

  console.log(starRenderingLogic);

  const dispatch = useDispatch();

  const addCoin = () => {
    dispatch(handleAddCoin(item));
  };

  const removeCoin = () => {
    dispatch(handleRemoveCoin(item));
  };
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
          {" "}
          {!starRenderingLogic ? (
            <MdOutlineStarRate onClick={addCoin} className="text-[30px]" />
          ) : (
            <MdOutlineStar onClick={removeCoin} className="text-[30px] text-yellow-400"  />
          )}
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
