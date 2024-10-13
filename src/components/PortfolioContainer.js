import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onSell}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocks.map(stock=> <Stock key={stock.name} name={stock.name} price={stock.price} onClick={()=> onSell(stock.name, stock.price)} />)
      }
    </div>
  );
}

export default PortfolioContainer;
