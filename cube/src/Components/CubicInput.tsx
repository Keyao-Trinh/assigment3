// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { History } from "./cube/src/Components/CubisHistory.tsx";

import React, { useRef, useState } from 'react';

// import './index.css'
//uneState saves adnd rerenders. ref just saves 

let [a, setA] = useState<number>(0);
let [b, setB] = useState<number>(0);
let [c, setC] = useState<number>(0);
let [d, setD] = useState<number>(0);


export const Input = () => {
  console.log("inputed the input                     .");
 
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //const formData = new FormData(form);  
  };


  return (
    <div>
      <h1>
        Cubic Solver
      </h1>

      <form name="theform" id="form" onSubmit={handleSubmit}>

        <label /*for="a"*/>a-vaule:</label> 
        <input type="number" value={a} id="a" name="a" required onChange={(e) => setA(Number(e.target.value))}></input>
        <br></br>
        <label /*for="b"*/>b-vaule:</label>
        <input type="number" value={b} id="b" name="b" required onChange={(e) => setB(Number(e.target.value))}></input>
        <br></br>
        <label /*for="c"*/>c-vaule:</label>
        <input type="number" value={c} id="c" name="c" required onChange={(e) => setC(Number(e.target.value))}></input>
        <br></br>
        <label /*for="d"*/>d-vaule:</label> 
        <input type="number" value={d} id="d" name="d" required onChange={(e) => setD(Number(e.target.value))}></input>
        <br></br>
        <input type="submit" value="Calculate" id="submit" 
        onClick={}
        < History 
        aVaule={a} 
        bVaule={b} 
        cVaule={c}
        dVaule={d}/>

        >SAVE</input>
        {/* /* send things to history */ */}
  
  
  
     
      </form>

    </div>
  ); 
};