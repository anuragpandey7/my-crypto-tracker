import React, { useEffect, useState } from "react";
import GetTrendingData from "../../api/GetTrendingData";
import Cards from "../Cards";
import Loading from "./Loading";

const Top10 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetTrendingData().then((res) => setData(res.coins));
  }, []);

 

  return data.length === 0 ? (
    <Loading/> 
  ) : (
    <div>
      <Cards cryptoData={data} checker={"top10"} />
    </div>
  );
};

export default Top10;
