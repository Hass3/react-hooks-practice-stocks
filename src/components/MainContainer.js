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

  function onSort(value){
      if(value === "Price"){
        const priceSorted = [...filterStocks].sort((a, b) => a.price - b.price)
        setStocks(priceSorted)

    }
     if(value === "Alphabetically"){
      const alphabeticallyStocks = [...filterStocks].sort((a,b)=>a.ticker.localeCompare(b.ticker))
      setStocks(alphabeticallyStocks)
    }
    }

  function onType(value){
    if(value === "Tech"){
      const techStocks = filterStocks.filter(stock=> stock.type === "Tech")
      setStocks(techStocks)
    }
    if(value === "Finance"){
      const finaceStocks = filterStocks.filter(stock=> stock.type === "Finance") 
      setStocks(finaceStocks)
    }
    if(value === "Sportswear"){
      const sportWearStocks = filterStocks.filter(stock=> stock.type === "Sportswear")
      setStocks(sportWearStocks)
    }
  }

  return (
    <div>
      <SearchBar onSort ={onSort} onType={onType}/>
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
