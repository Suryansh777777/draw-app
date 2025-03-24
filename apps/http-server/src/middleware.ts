import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    try {
      const decoded = jwt.verify(token, "secret");
      if (decoded) {
        //@ts-ignore
        req.userId = decoded.userId;
        next();
      }
      res.status(401).json({ message: "Unauthorized" });
    } catch (err) {
      res.status(401).json({ message: "Unauthorized" });
    }
  }
}
