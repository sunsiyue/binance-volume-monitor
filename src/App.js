import Header from "./components/Header";
import React from 'react'
import SymbolTable from "./components/SymbolTable";


function App() {
  return (
    <div className="App">   
      <Header></Header>
      <div class="container">
        <p class="mb-1">Instruction: Leave the page open for 5min, your data will appear. Sorry I am too poor so there is no backend to this tool, it runs on your browser.</p>
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
