import React, { useEffect, useRef } from "react";
import { Hill } from "./Background/hill";
import { SheepController } from "./Background/sheep-controller";
import { Moon } from "./Background/moon";

const Sheeps = () => {
  const canvasRef = useRef(null);
  const requestAnimationRef = useRef(null); // useRef는 current속성을 가진 객체를 반환

  const render = () => {
    const canvas = canvasRef.current; // current에는 null이 들어가있음
    const ctx = canvas.getContext("2d");

    const moon = new Moon();
    const hills = [
      new Hill("#fd6bea", 0.2, 12),
      new Hill("#ff59c2", 0.5, 8),
      new Hill("#ff4674", 1.4, 6),
    ];

    const sheepController = new SheepController();
    let stageWidth = document.body.clientWidth;
    let stageHeight = 100;
    const resize = () => {
      canvas.width = stageWidth * 2;
      canvas.height = stageHeight * 2;
      ctx.scale(2, 2);

      moon.resize(stageWidth, stageHeight);

      for (let i = 0; i < hills.length; i++) {
        hills[i].resize(stageWidth, stageHeight);
      }

      sheepController.resize(stageWidth, stageHeight);
    };

    const animate = (t) => {
      requestAnimationRef.current = requestAnimationFrame(animate);

      ctx.clearRect(0, 0, stageWidth, stageHeight);
      moon.draw(ctx, t);

      let dots;
      for (let i = 0; i < hills.length; i++) {
        dots = hills[i].draw(ctx);
      }

      sheepController.draw(ctx, t, dots);
    };
    window.addEventListener("resize", resize);
    resize();

    requestAnimationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    };
  });

  return <canvas ref={canvasRef}></canvas>;
};

export default Sheeps;
