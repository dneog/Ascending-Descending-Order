
import { useState } from 'react';
import './App.css';

function App() {
  const arr= [12,8,2,10,6,4,1];
  const [add, setAdd]= useState([12,8,2,10,6,4,1]);
  const [cart, setCart] = useState(true)

  function handleIncrease(){
    setAdd(arr.sort((a,b)=> a- b))
    setCart(!cart);
  }
  function handleDecrease(){
    setAdd(arr.sort((a,b)=> b-a))
    setCart(!cart);

  }
  return (
    <div className="App">
    {cart ? (<button onClick={handleIncrease}>Change to Ascending Order</button>) : (<button onClick={handleDecrease}>change to descending order</button>)}
    
    
      <h2>Numbers</h2>
      <h1>{add.join(", ")}</h1>
    </div>
  );
}

export default App;
