import {useRef} from "react";
import { Input } from "./cube/src/Components/CubicInput.tsx";



export const history = () => {
    // set a,b,c,d to old vaules
    //   
    //
  //    const [a, setA] = useRef<number>(0);
  // const [b, setB] = useState<number>(0);
  // const [c, setC] = useState<number>(0);
  // const [d, setD] = useState<number>(0);

  const aRef=useRef<number>(Input.a);
  const bRef=useRef<number>(Input.b);
  const cRef=useRef<number>(Input.c);
  const dRef=useRef<number>(Input.d);

  

return(
    <div>

<table
   onClick={() => setA(aRef) }
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
