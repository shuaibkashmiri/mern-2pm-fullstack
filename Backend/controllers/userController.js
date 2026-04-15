import { User } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { fullname, email, phone } = req.body;
    const createUser = await User.create({ fullname, email, phone });
    res.json({ message: "User Created", createUser });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = async (req, res) => {
  const { _id } = req.params;
  const getUser = await User.findById(_id);
  res.json(getUser);
};

export const deleteUser = async (req, res) => {
  const { _id } = req.params;
  const deleteUser = await User.findByIdAndDelete(_id);
  res.json({ message: "user Deleted" });
};
