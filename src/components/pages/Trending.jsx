import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import GetCryptoData from "../../api/GetCryptoData";


const Trending = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    GetCryptoData().then(res=>setData(res));
  }, []);

  
  return (
    <div>
      <Cards cryptoData={data}/>
    </div>
  );
};

export default Trending;
