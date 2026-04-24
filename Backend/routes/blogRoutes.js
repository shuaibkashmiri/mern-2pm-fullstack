import express from "express";
import { createBlog } from "../controllers/blogController.js";
import upload from "../middlewares/upload.js";
const router = express.Router();

router.post("/create", upload.single("image"), createBlog);

export default router;
