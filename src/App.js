import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      <Users></Users>
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

//using react to get restCountries api data
function Users(){
  const [users, userDetails] = useState([]);
  useEffect(()=>{
    // console.log('use effect used');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => userDetails(data))
  },[])
  return(
    <div>
    <h3>Dynamic Users: {users.length}</h3>
        {
           console.log(users)
        }
        <ul>
         { users.map(user => <li>UserName: {user.name}, Email: {user.email}</li>)}
        </ul>
    </div>
  )
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
  const [count,setCount] = useState(0);
  const increaseBtn = () =>{
    const newCount = count+1;
    setCount(newCount);
  }
  const decreaseBtn = () =>{
    const newCount = count-1;
    if(newCount>=0){
      setCount(newCount);
    }else{
      alert('You have to order at least 1 product')
    }
  }
  return (
    <div>
      <Order order={count}></Order>
      <h2>Count : {count}</h2>
      <button onClick={increaseBtn}>Increment</button>
      <button onClick={decreaseBtn}>Decrement</button>
    </div>
  )
}
function Order(props){
  return (
    <div>
        <h3>Order : {props.order}</h3>
    </div>
  )
}

export default App;
