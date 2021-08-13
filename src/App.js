import Header from "./components/Header";
import React from 'react'
import SymbolTable from "./components/SymbolTable";


function App() {
  return (
    <div className="App">   
      <Header></Header>
      <div class="container">
        <p class="mb-1">Instructions:</p>
        <p>1. Leave the page open for 5min, your data will appear. Sorry I am too poor to buy a backend server, it runs on your browser.</p>
        <p>2. Coins are ranked by 24hrVol vs. 30dAvgVol.</p>
        <p>3. If you do not understand #2, get the hell outta here.</p>
      </div>
      <div class="album py-5 bg-light">
        <div class="container">
          <SymbolTable></SymbolTable>
        </div>
      </div>
      
    </div>
  );
}

export default App;
