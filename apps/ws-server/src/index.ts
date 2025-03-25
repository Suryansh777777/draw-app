import WebSocket from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws, request) => {
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const decoded = jwt.verify(token, JWT_SECRET);
  if (!decoded || (decoded as JwtPayload).userId) {
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
