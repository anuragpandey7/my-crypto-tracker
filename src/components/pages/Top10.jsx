import React, { useEffect, useState } from "react";
import GetTrendingData from "../../api/GetTrendingData";
import CardComp from "../CardComp"

const Top10 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetTrendingData().then((res) => setData(res.coins));
  }, []);

  console.log(data)

  return <div>{data.map(coin => <CardComp data = {coin} />)}</div>;
};

export default Top10;
