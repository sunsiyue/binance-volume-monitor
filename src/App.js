import Header from "./components/Header";
import SymbolTable from "./components/SymbolTable";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SymbolTable></SymbolTable>
    </div>
  );
}

function getData() {
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Headers": "*"
    }
  };
  fetch('https://api.binance.com/api/v3/exchangeInfo', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
}

setInterval(getData, 5000);

export default App;
