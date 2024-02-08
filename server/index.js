const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 4000;
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://tabinda:FirstCopy123%40@cluster0.ogp5rus.mongodb.net/mern?retryWrites=true&w=majority`
);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Get Users!!!</h1>");
});
app.get("/getUsers", (req, res) => {
  UserModel.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.get("/:name", (req, res) => {
  // const selectedName =  UserModel.findById(req.params.name);
  // res.json(selectedName)
  console.log(req.params.name);
  UserModel.findById(req.params.name)
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => res.json(err));
});
app.post("/addUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(PORT, () => {
  console.log("Express Server is running");
});
