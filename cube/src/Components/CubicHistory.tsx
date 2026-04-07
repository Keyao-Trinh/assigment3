import {useRef, useState, useEffect} from "react";
// import { CubicSolver } from "./CubicEquation.tsx";
// import { History } from "./CubicHistory.tsx";
// import { Table } from "./CubicTable.txs";
// import { Graph } from "./CubicGraph.txs";
import { Input } from "./CubicInput.tsx";


// type abcdc = {aVaule:number, bVaule:number, cVaule:number, dVaule:number, count:number}
export const History = (/*{aVaule, bVaule, cVaule, dVaule, count}:abcdc*/) => {
    
 let [counting, setCounting] = useState<number>(0);
    
  let a = Number(document.getElementById("a") as HTMLElement);
  let b = Number(document.getElementById("b") as HTMLElement);
  let c = Number(document.getElementById("c") as HTMLElement);
  let d = Number(document.getElementById("d") as HTMLElement);
    
    // set a,b,c,d to old vaules
    //   
    //
  //    const [a, setA] = useRef<number>(0);
  // const [b, setB] = useState<number>(0);
  // const [c, setC] = useState<number>(0);
  // const [d, setD] = useState<number>(0);
useEffect (() => {

  const aRef=useRef<number>(a);
  const bRef=useRef<number>(b);
  const cRef=useRef<number>(c);
  const dRef=useRef<number>(d);
setCounting(counting+1);
}, [count]);
  
  // let [a, setA] = useState<number>(0);
  // let [b, setB] = useState<number>(0);
  // let [c, setC] = useState<number>(0);
  // let [d, setD] = useState<number>(0);
  

return(
    <div>
<Input
counting={counting}
/>
<table
   onClick={() => (Input.setA(Number(aRef)), Input.setB(Number(bRef)), Input.setC(Number(cRef)), Input.setD(Number(dRef)))}
  // document.getElementById("a") as HTMLElement 
  >
<tr>
<td id="ahistory" >{aRef.current}</td>
<td id="bhistory" >{bRef.current}</td>
<td id="chistory" >{cRef.current}</td>
<td id="dhistory" >{dRef.current}</td>
</tr>
</table>
    </div>
);
};
