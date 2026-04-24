import cloudinary from "../config/cloudinary.js";
import { Blog } from "../models/blogModal.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const filePath = req.file.path;
    if (!title || !content) {
      return res.json({ message: "All fields are Required" });
    }
    if (!filePath) {
      return res.json({ message: "image file is required" });
    }

    const result = await cloudinary.uploader.upload(filePath);
    const imageUrl = result.secure_url;

    const newBlog = await Blog.create({ title, content, image: imageUrl });

    if (!newBlog) {
      return res.json({ message: "Something went Wrong" });
    }
    return res
      .status(201)
      .json({ message: "Blog Posted Successfully", newBlog });
  } catch (error) {
    console.log(error);
  }
};
