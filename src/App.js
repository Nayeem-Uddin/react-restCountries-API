import logo from './logo.svg';
import './App.css';

function App() {
  const productsDetails = [
    {name: 'laptop', price: '$700'},
    {name: 'mobile', price: '$250'},
    {name: 'tablet', price: '$300'},    
  ]
  return (
    <div className="App">
      <header className="App-header">
         8 fundamental things of react

      <Products product={productsDetails[0]}></Products>
      <Products product={productsDetails[1]}></Products>
      <Products product={productsDetails[2]}></Products>

      </header>
    </div>
  );
}

const productStyle = {
  boxShadow: '5px 5px 10px cyan',
  margin: '20px',
  padding: '20px'
}

function Products(props){
  // console.log(props);
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
        <h3>Name: {name}</h3>
        <h1>price: {price}</h1>
    </div>
  );
}

export default App;
