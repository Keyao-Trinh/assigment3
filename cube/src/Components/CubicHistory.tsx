import {useRef, useState, useEffect} from "react";
import { Input } from "./CubicInput.tsx";



export const History = (aVaule:number, bVaule:number, cVaule:number, dVaule:number, count:number) => {
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

}, [count]);
  
  let [a, setA] = useState<number>(0);
  let [b, setB] = useState<number>(0);
  let [c, setC] = useState<number>(0);
  let [d, setD] = useState<number>(0);
  
  


  

return(
    <div>

<table
   onClick={() => (Input.setA(Number(aRef)), Input.setB(Number(bRef)), Input.setC(Number(cRef)), Input.setD(Number(dRef)))}
  // document.getElementById("a") as HTMLElement 
  >
<tr>
<td>{aRef.current}</td>
<td>{bRef.current}</td>
<td>{cRef.current}</td>
<td>{dRef.current}</td>
</tr>
</table>
    </div>
);
};
