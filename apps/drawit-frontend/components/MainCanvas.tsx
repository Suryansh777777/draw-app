"use client";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { initDraw } from "@/draw";
import { Tool, Topbar } from "./TopBar";
import { Game } from "@/draw/Game";

export function MainCanvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<Game>();
  const [selectedTool, setSelectedTool] = useState<Tool>("circle");

  useEffect(() => {
    game?.setTool(selectedTool);
  }, [selectedTool, game]);

  useEffect(() => {
    if (canvasRef.current) {
      const game = new Game(canvasRef.current, roomId, socket);
      setGame(game);
    }
  }, [canvasRef, roomId, socket]);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
      <Topbar setSelectedTool={setSelectedTool} selectedTool={selectedTool} />
    </div>
  );
}
