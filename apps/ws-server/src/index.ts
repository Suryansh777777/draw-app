import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New connection");

  ws.on("message", (message) => {
    ws.send(`Hello from client: ${message}`);
    console.log("Received message:", message);
  });

  ws.send("Hello from server");
});
