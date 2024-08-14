import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Cards from "../Cards";

const WatchList = () => {
  const watchlistData = useSelector((store) => store.watchList);
  return watchlistData.length === 0 ? (
    <Loading />
  ) : (
    <Cards cryptoData={watchlistData} />
  );
};

export default WatchList;
