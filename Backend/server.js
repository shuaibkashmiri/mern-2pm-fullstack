import express from "express";
import { connectDb } from "./config/db.js";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
} from "./controllers/userController.js";

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

app.post("/user/create", createUser);
app.get("/users/all", getAllUsers);
app.get("/user/:_id", getSingleUser);
app.delete("/user/delete/:_id", deleteUser);

app.listen(PORT, () => {
  console.log(`The Server Is Up And Running on port ${PORT}`);
});

connectDb();

// // get

// app.get("/", (req, res) => {
//   //   res.send("Hello World!");
//   res.json({ message: "Hello World!" });
// });

// const users = [
//   { id: 1, name: "Harris" },
//   {
//     id: 2,
//     name: "Falki",
//   },
//   {
//     id: 3,
//     name: "Burhan",
//   },
// ];

// get request
// app.get("/users", (req, res) => {
//   res.json({ users });
// });

// // post

// app.post("/user/add", (req, res) => {
//   const { id, name } = req.body;
//   const addUser = users.push({ id, name });
//   res.json({ message: "User Added", users });
//   0;
// });

// app.get("/user/:id", (req, res) => {
//   const { id } = req.params;
//   const getUser = users.find((user) => user.id == id);
//   res.json({ message: "User Found", getUser });
// });

// app.put("/user/:id/update", (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   const findUser = users.find((user) => user.id == id);
//   findUser.name = name;
//   res.json({ message: "User Updated Successfully", findUser });
// });

// app.delete("/user/delete/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const updatedUsers = users.filter((user) => user.id != id);
//   res.json({ message: "User Deleted", users: updatedUsers });
// });
