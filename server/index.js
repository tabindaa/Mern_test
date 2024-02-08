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

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("Express Server is running");
});
