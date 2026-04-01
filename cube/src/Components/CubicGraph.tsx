import { useRef, useEffect } from 'react';


let av = document.getElementById("a") as HTMLElement;
let a: number = Number(av);
let bv = document.getElementById("b") as HTMLElement;
let b: number = Number(bv);
let cv = document.getElementById("c") as HTMLElement;
let c: number = Number(cv);
let dv = document.getElementById("d") as HTMLElement;
let d: number = Number(dv);

export const Graph = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {


        let canvas = canvasRef.current;
       // if (canvas){
            const ctx = canvas!.getContext("2d");

        ctx!.beginPath();
        ctx!.moveTo(0, 0);
        let i = -200;
        let y = 0;
        while (i < 200) {
            y = ((a * i * i * i) + (b * i * i) + (c * i) + d);
            ctx!.lineTo(((i * 10) + 200), ((y * 10) + 200));
            i = (i + 0.01);
        }
        ctx!.stroke();
    
    
        // canvas.addEventListener('click', () => {
        // });
      //  }
    }, [av, bv, cv, dv]);

    return (
        <canvas ref={canvasRef} width="200" height="200"/>
    );

}
// export defualt canvas