import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


export const Input = () => {
  console.log("inputed the input                     .");

  return (
    <div>
      <h1>
        Cubic Solver
      </h1>

      <form name="theform" id="form" onSubmit={handleSubmit}>

        <label for="a">a-vaule:</label> 
        <input type="number" vaule={a} name="a" required onChange={(e) => setA(Number(e.target.vaule))}></input>
        <br></br>
        <label for="b">b-vaule:</label>
        <input type="number" id="b" name="b" required onChange={(e) => setB(Number(e.target.vaule))}></input>
        <br></br>
        <label for="c">c-vaule:</label>
        <input type="number" id="c" name="c" required onChange={(e) => setC(Number(e.target.vaule))}></input>
        <br></br>
        <label for="d">d-vaule:</label> 
        <input type="number" id="d" name="d" required onChange={(e) => setD(Number(e.target.vaule))}></input>
        <br></br>
        <input type="submit" vaule="Calculate" id="submit">SAVE</input>

      </form>

    </div>
  );
};


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
