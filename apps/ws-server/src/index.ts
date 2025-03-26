import WebSocket from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws, request) => {
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const decoded = jwt.verify(token, JWT_SECRET);

  if (typeof decoded == "string") {
    ws.close();
    return;
  }

  if (!decoded || decoded.userId) {
    ws.close();
    return;
  }
  console.log("Client connected");
  ws.on("message", (message) => {
    ws.send(`Hello from client: ${message}`);
    console.log("Received message:", message);
  });

  ws.send("Hello from server");
});
