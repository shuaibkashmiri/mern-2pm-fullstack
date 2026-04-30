import express from "express";
import {
  createBlog,
  getAllblogs,
  getSingleBlog,
  myBlogs,
} from "../controllers/blogController.js";
import upload from "../middlewares/upload.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/create", isAuthenticated, upload.single("image"), createBlog);
router.get("/all", getAllblogs);
router.get("/my", isAuthenticated, myBlogs);
router.get("/:_id", getSingleBlog);
export default router;
