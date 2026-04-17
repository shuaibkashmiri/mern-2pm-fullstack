import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { loginUser, registerUser } from "./controllers/usercontroller.js";
dotenv.config();

const app = express();
// middlewares
app.use(express.json());

// routes
app.post("/user/signup", registerUser);
app.post("/user/login", loginUser);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Is up And Running on port ${port}`);
});

connectDB();
