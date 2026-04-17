import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;
    if (!email || !fullname || !password) {
      return res.status(400).json({ message: "All Credentials Required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User Already Registered! Login Instead" });
    }

    const encryptPassword = await bcrypt.hash(password, 10);

    await User.create({ fullname, email, password: encryptPassword });
    return res.status(201).json({ message: "User Created Successfully !" });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (password != existingUser.password) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    return res
      .status(200)
      .json({ message: "User Logged In Successfully ", existingUser });
  } catch (error) {
    console.log(error);
  }
};
