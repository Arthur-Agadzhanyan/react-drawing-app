import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (null !== canvasRef.current) {
      const canvas = canvasRef.current
      canvas.width = window.innerWidth * 2
      canvas.height = window.innerHeight * 2
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.width = `${window.innerHeight}px`

      const context = canvas.getContext('2d')
      context!.scale(2,2)
      context!.lineCap = 'round'
      contextRef.current = context
    }
  }, [])

  const startDrawing = () => {

  }

  const finishDrawing = () => {

  }

  const draw = () => {

  }

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

export default App;
