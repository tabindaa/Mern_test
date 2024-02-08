const express = require("express");
const UserModel = require("../models/Users");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("<h1>Get Users!!!</h1>");
});
router.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const user = await UserModel.findById(req.params.id);
  console.log(user)
  try {
    res.json(user);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/addUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  try {
    await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const savedData = await user.save;
    res.json(savedData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
