import React, {useEffect} from "react";
import Stock from "./Stock";

function StockContainer({stocks, setStocks, setFilterStocks, onBuy}) {

  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then(r=>r.json())
    .then(stocks=>{
      setStocks(stocks);
      setFilterStocks(stocks);
    })
  }, [])

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock=> <Stock key={stock.name} name={stock.name} price={stock.price} onClick={()=> onBuy(stock.name, stock.price)} />)}
    </div>
  );
}

export default StockContainer;
