"use client";

import React, { useEffect, useRef } from "react";

export default function WaterCurrentsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Wave parameters simulating deep sea currents
    const waves = [
      {
        y: height * 0.3,
        length: 280,
        amplitude: 20,
        speed: 0.008,
        color: "rgba(0, 212, 255, 0.05)",
        phase: 0,
      },
      {
        y: height * 0.5,
        length: 360,
        amplitude: 30,
        speed: 0.005,
        color: "rgba(24, 255, 209, 0.04)",
        phase: Math.PI * 0.5,
      },
      {
        y: height * 0.7,
        length: 220,
        amplitude: 15,
        speed: 0.01,
        color: "rgba(0, 88, 255, 0.04)",
        phase: Math.PI,
      },
      {
        y: height * 0.45,
        length: 440,
        amplitude: 35,
        speed: 0.004,
        color: "rgba(0, 212, 255, 0.03)",
        phase: Math.PI * 1.5,
      },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        for (let x = 0; x < width; x++) {
          // Compound wave formulas to create organic, non-repetitive motion
          const y =
            wave.y +
            Math.sin(x / wave.length + wave.phase) * wave.amplitude * Math.sin(wave.phase * 0.3) +
            Math.cos(x / (wave.length * 0.5) - wave.phase * 0.7) * (wave.amplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
        wave.phase += wave.speed;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
