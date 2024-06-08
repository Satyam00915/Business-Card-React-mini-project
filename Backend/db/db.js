const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = mongoose.Schema({
  title: String,
  description: String,
  Interests: Array,
});

const User = mongoose.model("User", users);

module.exports = {
  User,
};
