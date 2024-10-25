import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";



function MainContainer() {
  const[stocks, setStocks]= useState([]);
  const [portfolio, setPortfoilo] = useState([])
  const [filteredStocks, setFilteredStocks] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then(r=>r.json())
    .then(data=> {
      setStocks(data);
      setFilteredStocks(data);
    })
  }, [])

  function handleBuyStock(stock){
   const clickedStock = [...portfolio, stock]
    setPortfoilo(clickedStock)
  }

  function handleSellStock(stok){
    const newStocks = portfolio.filter(stock => stock !== stok)
    setPortfoilo(newStocks)
  }

  function alphabetically(){
    const alphabetically = [...stocks].sort((a, b) => a.ticker.localeCompare(b.ticker))
    setStocks(alphabetically)
  }

  function price(){
    const price = [...stocks].sort((a,b)=> a.price - b.price)
    setStocks(price) 
  }
  const tech = ()=> {
    const tech = filteredStocks.filter(stock => stock.type === "Tech");
    setStocks(tech)
  }

 const sportsWear=()=>{
  const sportsWear = filteredStocks.filter(stock => stock.type === "Sportswear");
  setStocks(sportsWear)
 }

 const finance=()=>{
  const finance = filteredStocks.filter(stock => stock.type === "Finance");
  setStocks(finance)
 }


  return (
    <div>
      <SearchBar onPrice={price} onAlpha={alphabetically}  onTech={tech}  onSportsWear = {sportsWear}  onFinance ={finance}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleBuyStock={handleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks = {portfolio} handleSellStock={handleSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
/**After the stocks are fetched, your job is to:

Render all the stocks onto the page. The styling of how a Stock should look like is already in the Stock component.

Allow a user to buy a stock by clicking on it and when it is bought, it should be added to MyPortfolio.

Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.

Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

Allow a user to filter stocks based on the type of the stock.

Best of luck! */