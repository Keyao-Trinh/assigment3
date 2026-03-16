import React, { useRef, useEffect } from 'react';
import { CubicSolver } from "./Components/CubicEquation";
export const Graph = (props) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');


        ctx.beginPath();
        ctx.moveTo(0, 0);
        let i = -200;
        let y = 0;
        while (i < 200) {
            y = ((a * i * i * i) + (b * i * i) + (c * i) + d);
            ctx.lineTo(((i * 10) + 200), ((y * 10) + 200));
            i = (i + 0.01);
        }
        ctx.stroke();


        canvas.addEventListener('click', () => {


        });

    }, []);

    return (
        <canvas ref={canvasRef} />;


    );

}
