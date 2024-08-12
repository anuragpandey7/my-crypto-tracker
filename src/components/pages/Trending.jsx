import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import GetCryptoData from "../../api/GetCryptoData";
import Loading from "./Loading";

const Trending = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetCryptoData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  console.log(data);

  if(loading) return <Loading />

  return (
    <div>
      <Cards cryptoData={data} />
    </div>
  );
};

export default Trending;
