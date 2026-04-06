// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { CubicSolver } from "./CubicEquation.tsx";
import { History } from "./CubicHistory.tsx";
import { Table } from "./CubicTable.txs";


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
    <div class="relitive">
      <h1 class="text-4xl font-serif p-2 static font-bold text-amber-700" >
        Cubic Solver
      </h1>

      <form name="theform" id="form" onSubmit={handleSubmit}>

        <label /*for="a"*/ class="p-1 font-sans">a-vaule: </label> 
        <input type="number" value={a} id="a" name="a" required onChange={(e) => {setA(Number(e.target.value)); }}></input>
        <br></br>
        <label /*for="b"*/ class="p-1 font-sans"    >b-vaule: </label>
        <input type="number" value={b} id="b" name="b" required onChange={(e) => {setB(Number(e.target.value)); {handleClick};}}></input>
        <br></br>
        <label /*for="c"*/ class="p-1 font-sans" >c-vaule: </label>
        <input type="number" value={c} id="c" name="c" required onChange={(e) => {setC(Number(e.target.value)); {handleClick};}}></input>
        <br></br>
        <label /*for="d"*/ class="p-1 font-sans" >d-vaule: </label> 
        <input type="number" value={d} id="d" name="d" required onChange={(e) => {setD(Number(e.target.value)); {handleClick};}}></input>
        <br></br>
        <button type="submit" value="Calculate" id="submit" 
          class="outline-amber-700 rounded-lg p-2 border-2 border-grey-700 bg-amber-500 hover:bg-amber-700 font-sans text-amber-50 delay-100"
onClick={handleClick}
      >SAVE</button>
      </form>
       <CubicSolver
aVaule={a}
bVaule={b}
cVaule={c}
dVaule={d}
/>
      <Table
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
