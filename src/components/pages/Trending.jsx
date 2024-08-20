import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import GetCryptoData from "../../api/GetCryptoData";
import DummyUi from "../DummyUi";


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

  // console.log(data);

  if(loading) return <DummyUi />

  return (
    <div>
      <Cards cryptoData={data} />
    </div>
  );
};

export default Trending;
