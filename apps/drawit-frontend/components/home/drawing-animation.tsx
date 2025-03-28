"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DrawingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Drawing settings
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#7c3aed"; // Primary color

    // Animation paths (simple diagram elements)
    const paths = [
      // Rectangle
      {
        points: [
          [100, 100],
          [300, 100],
          [300, 200],
          [100, 200],
          [100, 100],
        ],
        color: "#7c3aed",
      },
      // Circle
      {
        circle: true,
        center: [400, 150],
        radius: 70,
        color: "#2563eb",
      },
      // Arrow
      {
        points: [
          [180, 250],
          [320, 350],
        ],
        arrow: true,
        color: "#059669",
      },
      // Text box
      {
        points: [
          [100, 300],
          [250, 300],
          [250, 380],
          [100, 380],
          [100, 300],
        ],
        color: "#dc2626",
      },
      // Connection line
      {
        points: [
          [250, 340],
          [350, 340],
          [350, 220],
        ],
        color: "#f59e0b",
      },
    ];

    let currentPathIndex = 0;
    let currentPointIndex = 0;
    let progress = 0;
    let lastTimestamp = 0;

    // Animation speed
    const speed = 0.2;

    // Draw a point on the canvas
    function drawPoint(x: number, y: number, color: string) {
      if (!ctx) return;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw a line between two points
    function drawLine(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color: string
    ) {
      if (!ctx) return;
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Draw an arrow head
    function drawArrowhead(
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      color: string
    ) {
      if (!ctx) return;
      const headLength = 15;
      const angle = Math.atan2(toY - fromY, toX - fromX);

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(
        toX - headLength * Math.cos(angle - Math.PI / 6),
        toY - headLength * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        toX - headLength * Math.cos(angle + Math.PI / 6),
        toY - headLength * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fill();
    }

    // Draw a circle
    function drawCircle(
      x: number,
      y: number,
      radius: number,
      progress: number,
      color: string
    ) {
      if (!ctx) return;
      const startAngle = 0;
      const endAngle = Math.PI * 2 * progress;

      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.stroke();
    }

    // Animation loop
    function animate(timestamp: number) {
      if (!isDrawing) return;
      if (!lastTimestamp) lastTimestamp = timestamp;

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Update progress
      progress += speed * (deltaTime / 1000);

      const currentPath = paths[currentPathIndex];

      if ("circle" in currentPath && currentPath.circle) {
        // Draw circle
        if (progress <= 1) {
          ctx?.clearRect(0, 0, canvas.width, canvas.height);

          // Redraw all completed paths
          for (let i = 0; i < currentPathIndex; i++) {
            const path = paths[i];

            if ("circle" in path && path.circle) {
              drawCircle(
                path.center[0],
                path.center[1],
                path.radius,
                1,
                path.color
              );
            } else if ("points" in path) {
              for (let j = 0; j < path.points.length - 1; j++) {
                const [x1, y1] = path.points[j];
                const [x2, y2] = path.points[j + 1];
                drawLine(x1, y1, x2, y2, path.color);

                if (path.arrow && j === path.points.length - 2) {
                  drawArrowhead(x1, y1, x2, y2, path.color);
                }
              }
            }
          }

          // Draw current circle with progress
          drawCircle(
            currentPath.center[0],
            currentPath.center[1],
            currentPath.radius,
            progress,
            currentPath.color
          );
        } else {
          // Move to next path
          currentPathIndex++;
          progress = 0;

          if (currentPathIndex >= paths.length) {
            // Restart animation after a delay
            setTimeout(() => {
              ctx?.clearRect(0, 0, canvas.width, canvas.height);
              currentPathIndex = 0;
              currentPointIndex = 0;
              progress = 0;
            }, 1000);
          }
        }
      } else if ("points" in currentPath) {
        // Draw line segments
        if (currentPointIndex < currentPath.points.length - 1) {
          const [x1, y1] = currentPath.points[currentPointIndex];
          const [x2, y2] = currentPath.points[currentPointIndex + 1];

          // Calculate current point along the line
          const currentX = x1 + (x2 - x1) * progress;
          const currentY = y1 + (y2 - y1) * progress;

          ctx?.clearRect(0, 0, canvas.width, canvas.height);

          // Redraw all completed paths
          for (let i = 0; i < currentPathIndex; i++) {
            const path = paths[i];

            if ("circle" in path && path.circle) {
              drawCircle(
                path.center[0],
                path.center[1],
                path.radius,
                1,
                path.color
              );
            } else if ("points" in path) {
              for (let j = 0; j < path.points.length - 1; j++) {
                const [x1, y1] = path.points[j];
                const [x2, y2] = path.points[j + 1];
                drawLine(x1, y1, x2, y2, path.color);

                if (path.arrow && j === path.points.length - 2) {
                  drawArrowhead(x1, y1, x2, y2, path.color);
                }
              }
            }
          }

          // Draw completed segments of current path
          for (let i = 0; i < currentPointIndex; i++) {
            const [x1, y1] = currentPath.points[i];
            const [x2, y2] = currentPath.points[i + 1];
            drawLine(x1, y1, x2, y2, currentPath.color);
          }

          // Draw current segment with progress
          drawLine(x1, y1, currentX, currentY, currentPath.color);

          if (progress >= 1) {
            // Move to next point
            currentPointIndex++;
            progress = 0;

            // Draw arrow if needed and at the end of the path
            if (
              currentPath.arrow &&
              currentPointIndex === currentPath.points.length - 1
            ) {
              const [x1, y1] = currentPath.points[currentPointIndex - 1];
              const [x2, y2] = currentPath.points[currentPointIndex];
              drawArrowhead(x1, y1, x2, y2, currentPath.color);
            }
          }
        } else {
          // Move to next path
          currentPathIndex++;
          currentPointIndex = 0;
          progress = 0;

          if (currentPathIndex >= paths.length) {
            // Restart animation after a delay
            setTimeout(() => {
              ctx?.clearRect(0, 0, canvas.width, canvas.height);
              currentPathIndex = 0;
              currentPointIndex = 0;
              progress = 0;
            }, 1000);
          }
        }
      }

      requestAnimationFrame(animate);
    }

    // Start animation
    requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      setIsDrawing(false);
    };
  }, [isDrawing]);

  return (
    <motion.div
      className="relative w-full h-full rounded-lg overflow-hidden bg-background/50 backdrop-blur-sm border shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
