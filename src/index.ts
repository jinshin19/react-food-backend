import express from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import { Server } from "http";
import { config } from "dotenv";
import { useSocket } from "./socket/socket";
config();
import "./auth/google";

import authApi from "./routes/google.auth.routes";
import foodApi from "./routes/food.routes";
import cartApi from "./routes/cart.routes";

const PORT = process.env.REACT_FOOD_BACKEND_PORT || 3001;
const app = express();
app.listen(PORT, () => console.log(`Connected at port ${PORT}`));
const server = new Server(app);
useSocket(server);
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
app.use(passport.initialize());

app.use("/api/v1/", authApi);
app.use("/api/v1/", foodApi);
app.use("/api/v1/", cartApi);
