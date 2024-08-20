import React from "react";
import { useSelector } from "react-redux";

import Cards from "../Cards";
import DummyUi from "../DummyUi";

const WatchList = () => {
  const watchlistData = useSelector((store) => store.watchList);
  return watchlistData.length === 0 ? (
    <DummyUi />
  ) : (
    <Cards cryptoData={watchlistData} />
  );
};

export default WatchList;
