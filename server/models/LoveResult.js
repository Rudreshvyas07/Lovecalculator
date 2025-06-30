const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  yourName: String,
  crushName: String,
  yourAge: Number,
  crushAge: Number,
  result: String,
});

module.exports = mongoose.model("User", userSchema);
