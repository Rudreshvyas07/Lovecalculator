const mongoose = require("mongoose");

const loveStorySchema = new mongoose.Schema({
  story: { type: String, required: true },
}, { timestamps: true });
 
module.exports = mongoose.model("LoveStory", loveStorySchema); 