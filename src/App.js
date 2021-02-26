import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
      {/*
      <Products product={productsDetails[0]}></Products>
      <Products product={productsDetails[1]}></Products>
      <Products product={productsDetails[2]}></Products>
      */}
      <Counter></Counter>
      {
        productsDetails.map(product => <Products product={product}></Products>)
      }

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

function Counter(){
  const [count,setCount] = useState(5);
  const increaseBtn = () =>{
    const newCount = count+1;
    setCount(newCount);
  }
  const decreaseBtn = () =>{
    const newCount = count-1;
    if(newCount>=0){
      setCount(newCount);
    }
  }
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increaseBtn}>Increment</button>
      <button onClick={decreaseBtn}>Decrement</button>
    </div>
  )
}

export default App;
