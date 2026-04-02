import { useEffect, useState } from 'react'
import { Input } from "./CubicInput.tsx";

//import './App.css'
type abcd = {aVaule:number, bVaule:number, cVaule:number, dVaule:number,}
export const CubicSolver = ({aVaule, bVaule, cVaule, dVaule}:abcd) => {
// let a:number=0;
// let b:number=0;
// let c:number=0;
// let d:number=0;
  // const [as, setAs] = useState<number>(0);
  // const [bs, setBs] = useState<number>(0);
  // const [cs, setCs] = useState<number>(0);
  // const [ds, setDs] = useState<number>(0);

  let as = aVaule;
  let bs = bVaule;
  let cs = cVaule;
  let ds = dVaule;


  // useEffect (() => {
    const upDate = () => {
      as = Number(document.getElementById("a") as HTMLElement);
       bs = Number(document.getElementById("b") as HTMLElement);
       cs = Number(document.getElementById("c") as HTMLElement);
     ds = Number(document.getElementById("d") as HTMLElement);
    }
  
  // setAs(Number(document.getElementById("a") as HTMLElement));
  // setBs(Number(document.getElementById("b") as HTMLElement));
  // setCs(Number(document.getElementById("c") as HTMLElement));
  // setDs(Number(document.getElementById("d") as HTMLElement));

  // }, []);
//  const handleSubmit (event: React.FormEvent) => {
//     event.preventDefault();
//     const formData = new FormData(form);
//  };fhf gc    

  return (
    <div >
      {/* <button onClick = {upDate}> e</button> */}
<div>
<h2>
{as+"x³+" + bs +"x²+"+cs+"x+"+ds}
</h2>
</div>
    </div>
  )
}


// export default App
