// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { CubicSolver } from "./CubicEquation.tsx";
import { History } from "./CubicHistory.tsx";

import React, { useEffect, useState } from 'react';

// import './index.css'
//uneState saves adnd rerenders. ref just saves 



export const Input = (counting:number) => {
  console.log("inputed the input                     .");

  
  
  let [a, setA] = useState<number>(1);
  let [b, setB] = useState<number>(1);
  let [c, setC] = useState<number>(1);
  let [d, setD] = useState<number>(1);
  let [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //const formData = new FormData(form);  
  };

  useEffect(() => {
    setA(Number(document.getElementById("ahistory") as HTMLElement))
    setB(Number(document.getElementById("bhistory") as HTMLElement))
    setC(Number(document.getElementById("chistory") as HTMLElement))
    setD(Number(document.getElementById("dhistory") as HTMLElement))
  },[counting])
  

  return (
    <div>
      <h1>
        Cubic Solver
      </h1>

      <form name="theform" id="form" onSubmit={handleSubmit}>

        <label /*for="a"*/>a-vaule:</label> 
        <input type="number" value={a} id="a" name="a" required onChange={(e) => {setA(Number(e.target.value)); }}></input>
        <br></br>
        <label /*for="b"*/>b-vaule:</label>
        <input type="number" value={b} id="b" name="b" required onChange={(e) => {setB(Number(e.target.value)); {handleClick};}}></input>
        <br></br>
        <label /*for="c"*/>c-vaule:</label>
        <input type="number" value={c} id="c" name="c" required onChange={(e) => {setC(Number(e.target.value)); {handleClick};}}></input>
        <br></br>
        <label /*for="d"*/>d-vaule:</label> 
        <input type="number" value={d} id="d" name="d" required onChange={(e) => {setD(Number(e.target.value)); {handleClick};}}></input>
        <br></br>
        <button type="submit" value="Calculate" id="submit" 
onClick={handleClick}
      >SAVE</button>
      </form>
       <CubicSolver
aVaule={a}
bVaule={b}
cVaule={c}
dVaule={d}
/>
    </div>
  ); 
};          //function history (props) { return <p>props.numbers[0]</p> //up to 3 for each vaules. {} to use numbers in table but also they need to be remembered!!!
//        < history aVaule={a} bVaule={b} cVaule={c} dVaule={d}/>
// {/* const numbers = [{a}, {b}, {c}, {d}]; */}
       /* < History aVaule={a} bVaule={b} cVaule={c} dVaule={d}/> */
//
