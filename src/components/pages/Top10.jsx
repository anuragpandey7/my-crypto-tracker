import React, { useEffect, useState } from "react";
import GetTrendingData from "../../api/GetTrendingData";
import Cards from "../Cards";
import DummyUi from "../DummyUi";

const Top10 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetTrendingData().then((res) => setData(res.coins));
  }, []);

 

  return data.length === 0 ? (
    <DummyUi />
  ) : (
    <div>
      <Cards cryptoData={data} checker={"top10"} />
    </div>
  );
};

export default Top10;
