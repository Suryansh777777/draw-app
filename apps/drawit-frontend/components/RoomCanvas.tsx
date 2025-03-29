"use client";
import { WS_URL } from "@/config";

import { useEffect, useState } from "react";
import { MainCanvas } from "./MainCanvas";

export function RoomCanvas({ roomId }: { roomId: string }) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYjdmNWI5MC1hY2VkLTQ5OGQtYmI5Yi02YzFhOWEwNmNjZjkiLCJpYXQiOjE3NDMyNDc3MzV9.NAZRVUHZ5buxVOiFNfvNcHF2q7TfE7NqPEdy0HcI8ho`
    );

    ws.onopen = () => {
      setSocket(ws);
      const data = JSON.stringify({ type: "join_room", roomId });
      ws.send(data);
    };
  }, [roomId]);

  if (!socket) {
    return <div>Loading...</div>;
  }
  return <MainCanvas roomId={roomId} socket={socket} />;
}
