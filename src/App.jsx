import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] = useState(15);
  //let count = 15;
  const addvalue = ()=>{
    if(counter<20){
    counter++;
    setCounter(counter);
    console.log(counter)
    }
  }
  const redvalue = ()=>{
    if(counter>0){
    counter--; 
    setCounter(counter);
    console.log(counter)
    }
    
  }
  return (
    <>
     <h1> Hello!! How are you??</h1>
     <h2> Counter Value : {counter}</h2>

     <button onClick={addvalue}> Add value {counter}</button>
     <br/>
     <button onClick={redvalue}> Remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
