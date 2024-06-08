const express = require("express");
const cors = require("cors");
const { userSchema } = require("./zod/zod");
const { User } = require("./db/db");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/card", async (req, res) => {
  //Get All the Users
  User.find({}).then((users) => {
    res.json({
      users,
    });
  });
});

app.post("/create", async (req, res) => {
  const createPayLoad = req.body;
  const parsePayLoad = userSchema.safeParse(createPayLoad);
  
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "Inputs are not Valid!!",
    });
    return;
  }

  await User.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    Interests: createPayLoad.Interests,
  });
  res.json({
    msg: "User Created",
  });
});

app.listen(3000);
