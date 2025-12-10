import { useState } from "react";


function App() {
  const [count, setState,]=useState(1)
  function increment(){
    setCout(count + 2);
    console.log("Local;", cout);
  }
  function decrement() {
    setCount(count - 2);
    console.log("Local",count);
  }
  return (
    <div>
      <p>count</p>
      <p>Local Local variable: {count}</p>
      <button onClick={increment}> increase Local </button>
      <button on click={decrement}> decrease Local</button>
      
    </div>
  );
}

export default App;