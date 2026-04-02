import { useEffect, useState } from 'react'
import { Input } from "./CubicInput.tsx";

//import './App.css'

export const CubicSolver = (aVaule:number) => {
// let a:number=0;
// let b:number=0;
// let c:number=0;
// let d:number=0;
  // const [as, setAs] = useState<number>(0);
  // const [bs, setBs] = useState<number>(0);
  // const [cs, setCs] = useState<number>(0);
  // const [ds, setDs] = useState<number>(0);

  let bs:number = 0;
  let as:number = 0;
  let ds:number = 0;
  let cs:number = 0;


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
    <div onClick={upDate}>
<div>
<h2>
{as+"x³+" + bs +"x²+"+cs+"x+"+ds}
</h2>
</div>
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

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
