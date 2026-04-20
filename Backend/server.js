import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import {
  getUserDetail,
  loginUser,
  registerUser,
} from "./controllers/usercontroller.js";
import { isAuthenticated } from "./middlewares/auth.js";
dotenv.config();

const app = express();
// middlewares
app.use(express.json());

// routes
app.post("/user/signup", registerUser);
app.post("/user/login", loginUser);
app.get("/user/details", isAuthenticated, getUserDetail);
app.get("/simple/console", isAuthenticated, (req, res) => {
  res.json({ message: "This is Protected route" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Is up And Running on port ${port}`);
});

connectDB();
