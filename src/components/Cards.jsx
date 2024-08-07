import React from "react";
import CardComp from "./CardComp";

const Cards = ({cryptoData}) => {
  // console.log(cryptoData)
  return (
    <div className="grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 m-5">
      {cryptoData.map((element) => (
        <CardComp item={element} />
      ))}
    </div>
  );
};

export default Cards;
