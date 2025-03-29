"use client";
import { WS_URL } from "@/config";

import { useEffect, useState } from "react";
import { MainCanvas } from "./MainCanvas";

export function RoomCanvas({ roomId }: { roomId: string }) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMmRjYjRiZS02NzkxLTQ2NzAtODczMi0xYmRiMTk0ODBlYTUiLCJpYXQiOjE3NDMwODYzNDd9.a0EXGReHU3JaSL17X0iiJMozLxmmhlY_ZFcdjUwWruU`
    );

    ws.onopen = () => {
      setSocket(ws);
      ws.send(JSON.stringify({ type: "join_room", roomId }));
    };
  }, []);

  if (!socket) {
    return <div>Loading...</div>;
  }
  return <MainCanvas roomId={roomId} socket={socket} />;
}
