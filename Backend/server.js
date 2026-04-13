import express from "express";

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`The Server Is Up And Running on port ${PORT}`);
});

// middleware
app.use(express.json());

// get

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.json({ message: "Hello World!" });
});

const users = [
  { id: 1, name: "Harris" },
  {
    id: 2,
    name: "Falki",
  },
  {
    id: 3,
    name: "Burhan",
  },
];

// get request
app.get("/users", (req, res) => {
  res.json({ users });
});

// post

app.post("/user/add", (req, res) => {
  const { id, name } = req.body;
  const addUser = users.push({ id, name });
  res.json({ message: "User Added", users });
});
