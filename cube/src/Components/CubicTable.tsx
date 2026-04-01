export const Table = () => {

  const a = Number(document.getElementById("a") as HTMLElement);
  const b = Number(document.getElementById("b") as HTMLElement);
  const c = Number(document.getElementById("c") as HTMLElement);
  const d = Number(document.getElementById("d") as HTMLElement);

  let rootthree: number;
  let roottwo: number;
  let rootone: number;
  // function solve(a: number, b: number, c: number, d: number) {

  const p = ((3 * a * c) - (b * b)) / (3 * a * a);
  const q = (((27 * a * a * d) - (9 * a * b * c) + (2 * b * b * b)) / (27 * a * a * a));
  let pvaule = document.getElementById("p") as HTMLElement;
  pvaule.innerText = String(p);
  let qvaule = document.getElementById("q") as HTMLElement;
  qvaule.innerText = String(q);
  // function diqscriminant(p,q,b,a){
  const dis: number = (((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)));
  let disvaule = document.getElementById("dis") as HTMLElement;
  disvaule.innerText = String(dis);

  if (dis == 0) {
      if (p == 0) {
          rootone = (Math.cbrt(((-1 * q) / 2) + (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) + (Math.cbrt(((-1 * q) / 2) - (Math.sqrt(((q / 2) * (q / 2)) + ((p / 3) * (p / 3) * (p / 3)))))) - (b / 3 * a);
          roottwo = rootone;
          rootthree = rootone;
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



    return (
<div>
<table id="table">
  <tr>
  <th> 
  <h1> Table Data
  </h1> 
  </th>
  </tr>
    <tr>
      <th>p</th>
      <td id="p" /*type="number"*/ >{p}</td>
    </tr>
    <tr>
      <th>q</th>
      <td id="q"/*type="number"*/ >{q}</td>
    </tr>
    <tr>
      <th>discriminate</th>
      <td id="dis" /*type="number"*/ >{dis}</td>
    </tr>
    <tr>
      <th>root 1</th>
      <td id="rootone" /*type="number"*/ >{rootone}</td>
    </tr>
    <tr>
      <th>root 2</th>
      <td id="roottwo" /*type="number"*/ >{roottwo}</td>
    </tr>
    <tr>
      <th>root 3</th>
      <td id="rootthree" /*type="number"*/ >{rootthree}</td>
    </tr>
  </table>
  </div>
    );
}


    //import { CubicSolver } from "./cube/src/Components/CubicEquation.tsx";
