import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  const [isDrawing, setIsDrawing] = useState<Boolean>(false);

  useEffect(() => {
    if (null !== canvasRef.current) {
      const canvas = canvasRef.current
      canvas.width = window.innerWidth * 2
      canvas.height = window.innerHeight * 2
      canvas.style.width = `${window.innerWidth - 5}px`
      canvas.style.height = `${window.innerHeight - 5}px`

      const context = canvas.getContext('2d')
      if (context !== null) {
        context.scale(2, 2)
        context.lineCap = 'round'
        context.strokeStyle = 'black'
        context.lineWidth = 5
        contextRef.current = context
      }
    }
  }, [])

  const startDrawing = ({nativeEvent}: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current?.beginPath()
    contextRef.current?.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current?.closePath()
    setIsDrawing(false)
  }

  const draw = ({nativeEvent}:React.MouseEvent) => {
    if (!isDrawing) {
      return
    }

    const { offsetX, offsetY } = nativeEvent
    contextRef.current?.lineTo(offsetX, offsetY)
    contextRef.current?.stroke()
  }

  return (
    <canvas
      onMouseDown={ startDrawing}
      onMouseUp={ finishDrawing}
      onMouseMove={ draw}
      ref={canvasRef}
    />
  );
}

export default App;
