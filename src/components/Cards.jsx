import React from "react";
import CardComp from "./CardComp";

const Cards = ({ cryptoData, checker }) => {
  // console.log(cryptoData);
  return (
    <div className="grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 m-5">
      {cryptoData.map((element) => (
        <CardComp
          item={checker === "top10" ? element.item : element}
          key={checker === "top10" ? element.item.id : element.id}
          checker={checker}
        />
      ))}
    </div>
  );
};

export default Cards;
