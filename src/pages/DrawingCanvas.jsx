import { useState } from 'react';

export default function DrawingCanvas() {
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handlePointerDown = (e) => {
    setIsDrawing(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const newPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    
    setLines([...lines, [newPoint]]);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const newPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    // React State Rule: Do not mutate! Copy the array and update the last line segment
    const updatedLines = [...lines];
    const lastLineIndex = updatedLines.length - 1;
    updatedLines[lastLineIndex] = [...updatedLines[lastLineIndex], newPoint];

    setLines(updatedLines);
  };

  // 3. Stop tracing when the user releases the mouse
  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    setLines([]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <button onClick={clearCanvas} style={{ marginBottom: '10px', padding: '8px 16px', cursor: 'pointer' }}>
        Clear Board
      </button>

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          backgroundColor: '#fafafa',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          cursor: 'crosshair',
          overflow: 'hidden',
          touchAction: 'none'
        }}
      >
        {lines.map((line, lineIndex) => (
          line.map((point, pointIndex) => (
            <div
              key={`${lineIndex}-${pointIndex}`}
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${point.x}px, ${point.y}px)`,
                left: -4,
                top: -4,
                width: 8,
                height: 8,
              }}
            />
          ))
        ))}
      </div>
    </div>
  );
}
