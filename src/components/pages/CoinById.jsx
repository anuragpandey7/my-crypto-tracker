import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetDataById from "../../api/GetDataById";
import CoinDetails from "./CoinDetails";

const CoinById = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    GetDataById(id)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  console.log(data)
  
  return (
    <div>
      <CoinDetails apiData = {data}/>
    </div>
  );
};

export default CoinById;
