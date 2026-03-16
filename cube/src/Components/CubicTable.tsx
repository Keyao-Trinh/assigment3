    import { CubicSolver } from "./Components/CubicEquation";
export const table = () => {
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
      <td id="p" type="number">-</td>
    </tr>
    <tr>
      <th>q</th>
      <td id="q" type="number">-</td>
    </tr>
    <tr>
      <th>discriminate</th>
      <td id="dis" type="number">-</td>
    </tr>
    <tr>
      <th>root 1</th>
      <td id="rootone" type="number">-</td>
    </tr>
    <tr>
      <th>root 2</th>
      <td id="roottwo" type="number">-</td>
    </tr>
    <tr>
      <th>root 3</th>
      <td id="rootthree" type="number">-</td>
    </tr>
  </table>
  
  </div>
    );
}