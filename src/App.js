import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         8 fundamental things of react

      <Products></Products>
      <Products></Products>
      <Products></Products>

      </header>
    </div>
  );
}

const productStyle = {
  boxShadow: '5px 5px 10px cyan',
  margin: '20px',
  padding: '20px'
}

function Products(){
  return (
    <div style={productStyle}>
        <h3>Name: Laptop</h3>
        <h1>price: $500</h1>
    </div>
  );
}

export default App;
