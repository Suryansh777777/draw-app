import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";

const app = express();

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("Hello from server");
});

app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign({ userId }, "secret");
  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  console.log(req.body);
  res.send("Hello from server");
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
