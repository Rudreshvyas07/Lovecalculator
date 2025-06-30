// controller.js (for Love Calculator with MongoDB and savage comments)
const LoveResult = require("../models/LoveResult");

const savageComments = [
  "You're like oil and water—never mixing!",
  "Your love story ends before it even begins.",
  "Don't even think about it, bro 😂",
  "It's a disaster waiting to happen! 💣",
  "Not in this universe!",
  "This love is like WiFi—weak signal! 📶",
  "Better luck in your next life!",
  "You + Crush = Comedy show! 🎭",
  "It’s like trying to microwave ice cream. Doesn’t work!",
  "This match? More like mismatch! 😬",
  "Romeo and Juliet? Nah, more like Tom and Jerry!",
  "If this is love, I’m Elon Musk!",
  "You wish! 😂",
  "It’s a trap! 🚨",
  "Your crush just friendzoned you in their dreams too!",
  "Love? Even Google can't find it between you two.",
  "No chemistry, just biology exams! 🧪",
  "You'll need divine intervention!",
  "Crush is sending a restraining order mentally.",
  "Your destiny is solo Netflix nights! 🍿",
  "One word: delusional!",
  "Hope is good, but not here. 😆",
  "Your love score is buffering... forever.",
  "Even AI ships you with loneliness! 🤖",
  "Cupid skipped your address!",
  "Crush blocked your vibes.",
  "No spark, no flame, just ashes. 😶‍🌫️",
  "You’re in a fantasy league of your own.",
  "Too savage to be true!",
  "The only thing mutual is air!",
  "You’re in a one-sided love Bermuda triangle.",
  "No match found. Try Tinder maybe?",
  "This isn’t love, it’s an illusion!",
  "Stay strong, soldier. 🫡",
  "Heartbreak loading... 💔",
  "Your love story was a bug in the matrix.",
  "Their soul doesn’t recognize yours.",
  "Even horoscopes gave up!",
  "Friendzone is your new home address.",
  "Let it go, Elsa-style! ❄️",
  "Why chase? They’re running at 5G speed!",
  "Your ship sank before it sailed! 🚢",
  "This love math doesn’t add up!",
  "You two are as compatible as pineapple on pizza! 🍍🍕",
  "Go focus on your syllabus first!",
  "Universe says: try again never!",
  "Your love life is a horror genre.",
  "This isn’t a match—it’s a mismatch massacre!",
  "You two together? Only in dreams!",
  "Rejected by fate itself!",
  "Cupid’s arrow hit someone else.",
  "All signs point to NO!",
  "Try again... in another lifetime."
];

exports.calculateLove = async (req, res) => {
  try {
    const { yourName, crushName, yourAge, crushAge } = req.body;

    if (!yourName || !crushName || !yourAge || !crushAge) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Generate a random comment from savage list
    const randomIndex = Math.floor(Math.random() * savageComments.length);
    const result = savageComments[randomIndex];

    // Save to MongoDB
    const loveResult = new LoveResult({
      yourName,
      crushName,
      yourAge,
      crushAge,
      result
    });
    await loveResult.save();

    res.status(200).json({ message: result });
  } catch (error) {
    console.error("Error calculating love:", error);
    res.status(500).json({ message: "Server error." });
  }
};
