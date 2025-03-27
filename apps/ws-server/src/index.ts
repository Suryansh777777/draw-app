import WebSocket from "ws";
import jwt from "jsonwebtoken";
import { prismaClient } from "@repo/db/client";
import { JWT_SECRET } from "@repo/backend-common/config";
interface User {
  ws: WebSocket;
  rooms: string[];
  userId: string;
}

const wss = new WebSocket.Server({ port: 8080 });

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    if (typeof decoded == "string") {
      return null;
    }
    if (!decoded || !decoded.userId) {
      return null;
    }
    return decoded.userId;
  } catch (error) {
    return null;
  }
  return null;
}
wss.on("connection", (ws, request) => {
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const userId = checkUser(token);

  if (userId == null) {
    ws.close();
    return null;
  }
  //User has connected
  users.push({
    ws,
    rooms: [],
    userId,
  });

  ws.on("message", async function message(data) {
    if (typeof data !== "string") {
      return;
    }
    const parsedData = JSON.parse(data); //{type:"join_room",roomId:"room1"}

    if (parsedData.type === "join_room") {
      const user = users.find((x) => x.ws === ws); // find this user in global users array and push the room id
      user?.rooms.push(parsedData.roomId);
      console.log("user joined room", user);
    }

    if (parsedData.type === "leave_room") {
      const user = users.find((x) => x.ws === ws); // find this user in global users array and push the room id
      // user?.rooms.splice(user?.rooms.indexOf(parsedData.roomId), 1);
      if (!user) return;
      user.rooms = user?.rooms.filter((x) => x !== parsedData.roomId);
    }

    if (parsedData.type === "chat") {
      const roomId = parsedData.roomId;
      const message = parsedData.message;
      //dumb approach
      //better approach =>push it to a queue (chess app video)

      await prismaClient.chat.create({
        data: {
          message,
          roomId,
          userId,
        },
      });

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "chat",
              message: message,
              roomId,
            })
          );
        }
      });
    }
  });

  ws.send("Hello from server");
});
