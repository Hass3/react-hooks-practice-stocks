import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks]= useState([]);
  const [filterStocks, setFilterStocks] = useState([]);
  const[portfolio, setPortfolio] = useState([]);

  function onBuy(name, price){
    const newStock = {name, price}
    const updatedStocks = [...portfolio, newStock]
    setPortfolio(updatedStocks)
  }

  function onSell (name){
    const sellStock = portfolio.filter(stock => stock.name !== name);
    setPortfolio(sellStock);
  }

  // function onSort(value){
  //   const alphabeticallyStocks = filterStocks.sort((a,b)=>a.name.localeCompare(b.name))
  //   const priceSorted = filterStocks.sort((a, b) => a.price - b.price)
  //   if(value === "Alphabetically"){
  //     setStocks(alphabeticallyStocks)
  //   }
  //   // }
  //   // else if(value === "Price"){
  //   //   setStocks(priceSorted)                                                              //******WORK ON SEARCH ONLY */
  //   // }
  //   // else {
  //   //   setStocks(filterStocks)
  //   // }
  // }



  return (
    <div>
      <SearchBar onSort ={onSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks = {stocks} setStocks={setStocks} setFilterStocks = {setFilterStocks} onBuy ={onBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks = {portfolio} onSell = {onSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
