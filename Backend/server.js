import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import {
  getUserDetail,
  loginUser,
  registerUser,
} from "./controllers/usercontroller.js";
import { isAuthenticated } from "./middlewares/auth.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();
// middlewares
app.use(express.json());

// routes
app.use("/api/v1/user", authRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Is up And Running on port ${port}`);
});

connectDB();
