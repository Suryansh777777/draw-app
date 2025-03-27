import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMmRjYjRiZS02NzkxLTQ2NzAtODczMi0xYmRiMTk0ODBlYTUiLCJpYXQiOjE3NDMwODYzNDd9.a0EXGReHU3JaSL17X0iiJMozLxmmhlY_ZFcdjUwWruU`
    );
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);
  return {
    socket,
    loading,
  };
}
