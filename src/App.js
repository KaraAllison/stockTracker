import logo from './logo.svg';
import './App.css';
import Stocks from './components/Stocks';
import stockData from './components/stockData';
import { useState } from "react";
import Table from './components/Table';

function App() {

  const [stock, setStock] = useState(stockData);
  const displayStocks = [...new Set(stockData.map((data) =>
    data.orbitType))];
  const filterByType = (currentType) => {
    const displayStocks = stockData.filter((newSatDisplay) =>
    {
      return newSatDisplay.orbitType === currentType;
    });
    setStock(displayStocks);
  };

  return (
    <div className="App">
      <Stocks />
      <Table stock={stock} />
    </div>
  );
}

export default App;
