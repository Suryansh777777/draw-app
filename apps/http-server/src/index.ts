import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import {
  CreateUserSchema,
  SigninSchema,
  CreateRoomSchema,
} from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);
  console.log(parsedData);
  if (!parsedData.success) {
    console.log(parsedData.error);
    res.status(400).json({ message: "Invalid data" });
    return;
  }
  //db call
  try {
    const user = await prismaClient.user.create({
      data: {
        email: parsedData.data.username,
        password: parsedData.data.password,
        //todo hash the password with bcrypt
        name: parsedData.data.name,
      },
    });
    res.json({ userId: user.id });
  } catch (error) {
    res.status(411).json({ message: "User already exists" });
  }
});

app.post("/signin", async (req, res) => {
  const parsedData = SigninSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }
  //Todo check the hashed password with bcrypt
  const user = await prismaClient.user.findUnique({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });
  if (!user) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token: token });
});

app.post("/room", middleware, async (req, res) => {
  const parsedData = CreateRoomSchema.safeParse(req.body);
  if (!parsedData.success) {
    console.log(parsedData.error);
    res.status(400).json({ message: "Invalid data" });
    return;
  }
  //@ts-ignore

  const userId = req.userId;
  //db call
  try {
    const room = await prismaClient.room.create({
      data: {
        slug: parsedData.data.name,
        adminId: userId,
      },
    });

    res.json({ roomId: room.id });
  } catch (error) {
    res.status(411).json({ message: "Room already exists" });
  }
});

app.get("/chats/:roomId", middleware, async (req, res) => {
  const roomId = Number(req.params.roomId);
  //this is for old messages
  const messages = await prismaClient.chat.findMany({
    where: {
      roomId: roomId,
    },
    orderBy: {
      id: "desc",
    },
    take: 50,
  });
  res.json({
    messages,
  });
});
app.get("/room/:slug", middleware, async (req, res) => {
  const slug = req.params.slug;
  //this is for old messages
  const room = await prismaClient.room.findFirst({
    where: {
      slug,
    },
    orderBy: {
      id: "desc",
    },
  });
  res.json({
    room,
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
