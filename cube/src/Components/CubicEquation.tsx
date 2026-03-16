import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useRef } from "react";
import { Input } from "./Components/CubicInput";
import './App.css'

export const CubicSolver = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
     let rootthree: number;
    let roottwo: number;
    let rootone: number;
  const inputRef = useRef<HTMLInputElement | null>(null);
const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

const p = ((3 * a * c) - (b * b)) / (3 * a * a);
    const q = (((27 * a * a * d) - (9 * a * b * c) + (2 * b * b * b)) / (27 * a * a * a));
const dis: number = (((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)));


if(inputRef.current){
  if (dis == 0) {
        if (p == 0) {
            rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
            roottwo = rootone;
            rootthree = rootone;
            inputRef.current.vaule = 'rootone=${rootone}, roottwo=${roototwo}, rootthree=${rootthree}';
            let one = document.getElementById("rootone") as HTMLElement;
            one.innerText = String(rootone);
            let two = document.getElementById("roottwo") as HTMLElement;
            two.innerText = String(roottwo);
            let three = document.getElementById("rootthree") as HTMLElement;
            three.innerText = String(rootthree);

            console.log('${p}');
        } else {
            rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
            roottwo = ((Math.cbrt(q / 2)) - (b / (3 * a)))
            rootthree = rootone;
            let one = document.getElementById("rootone") as HTMLElement;
            one.innerText = String(rootone);
            let two = document.getElementById("roottwo") as HTMLElement;
            two.innerText = String(roottwo);
            let three = document.getElementById("rootthree") as HTMLElement;
            three.innerText = String(rootthree);

            console.log("no refesh :O");
        }
        // let x = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
    } else {
        let theta = ((1 / 3) * (Math.acos((-q) / (2 * (Math.sqrt(-1 * (p / 3) * (p / 3) * (p / 3)))))));

        // rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
        roottwo = (((2 * (Math.sqrt(-p / 3))) * Math.cos(theta)) - (b / (3 * a)));
        rootthree = (((2 * (Math.sqrt(-p / 3))) * Math.cos(theta + (Math.PI * 2) / 3)) - (b / (3 * a)));
        rootone = (((2 * (Math.sqrt(-p / 3))) * Math.cos(theta + (Math.PI * 4) / 3)) - (b / (3 * a)));


        // let rootthr = (2*(Math.sqrt((-1*p)/3)))*Math.cos(theta+((Math.PI*4)/3));
        //cube root unity

        let one = document.getElementById("rootone") as HTMLElement;
        one.innerText = String(rootone);
        let two = document.getElementById("roottwo") as HTMLElement;
        two.innerText = String(roottwo);
        let three = document.getElementById("rootthree") as HTMLElement;
        three.innerText = String(rootthree);


        console.log(a);
    }
}






//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
