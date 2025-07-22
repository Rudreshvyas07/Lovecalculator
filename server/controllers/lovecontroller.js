// controller.js (for Love Calculator with MongoDB and savage comments)
const LoveResult = require("../models/LoveResult");
const LoveStory = require("../models/LoveStory");


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

const zodiacResults = {
  Aries: [
    "You are bold and adventurous! Today is a great day to start something new.",
    "Your energy is contagious. Spread it!",
    "Take the lead—others will follow.",
    "A surprise is waiting for you around the corner.",
    "Your courage will inspire someone today.",
    "Try something new and exciting!",
    "Your passion is your superpower.",
    "A little patience will go a long way.",
    "You light up every room you enter.",
    "Trust your instincts—they're spot on!"
  ],
  Taurus: [
    "Stability is your strength. Trust your instincts today.",
    "A small luxury will bring you great joy.",
    "Your loyalty is appreciated by those around you.",
    "Take time to enjoy the simple things.",
    "A financial opportunity may arise—be ready!",
    "Your determination will pay off soon.",
    "Someone values your advice more than you know.",
    "A calm approach will solve a problem.",
    "Your patience is your secret weapon.",
    "Treat yourself—you deserve it!"
  ],
  Gemini: [
    "Your curiosity leads to new adventures.",
    "A conversation will spark a great idea.",
    "Embrace your playful side today!",
    "You’ll make a new friend soon.",
    "Your wit will charm someone special.",
    "Try learning something new.",
    "Your adaptability is your strength.",
    "A fun surprise is coming your way.",
    "Share your thoughts—people are listening.",
    "Your energy is infectious!"
  ],
  Cancer: [
    "Your caring nature brightens someone’s day.",
    "Home is your happy place—enjoy it.",
    "A heartfelt message will make a difference.",
    "Trust your intuition—it’s guiding you well.",
    "A family member has good news.",
    "Your kindness will be returned.",
    "Take time for self-care.",
    "A memory will bring you joy today.",
    "You’re stronger than you think.",
    "Let your emotions guide you to happiness."
  ],
  Leo: [
    "Your confidence shines bright—let it lead the way.",
    "A creative project will bring you praise.",
    "You’re the center of attention—enjoy it!",
    "A bold move will pay off.",
    "Your generosity inspires others.",
    "Take the stage—your talents deserve to be seen.",
    "A compliment is coming your way.",
    "Your leadership will be needed today.",
    "Share your joy with others.",
    "You’re unstoppable!"
  ],
  Virgo: [
    "Your attention to detail saves the day.",
    "A plan comes together perfectly.",
    "Someone appreciates your helpfulness.",
    "A tidy space brings a tidy mind.",
    "Your advice is spot on—share it.",
    "A new routine will boost your mood.",
    "You’ll solve a tricky problem easily.",
    "Your kindness is noticed.",
    "Take a break—you’ve earned it.",
    "Your hard work pays off soon."
  ],
  Libra: [
    "Balance brings you peace today.",
    "A new partnership is on the horizon.",
    "Your charm opens doors.",
    "A beautiful moment awaits you.",
    "Harmony at home brings happiness.",
    "A fair solution will resolve a conflict.",
    "Your style turns heads.",
    "A compliment brightens your day.",
    "Share your ideas—they’re brilliant.",
    "Love is in the air!"
  ],
  Scorpio: [
    "Your passion is magnetic—use it wisely.",
    "A secret will be revealed.",
    "Trust your instincts—they’re powerful.",
    "A mystery will be solved soon.",
    "Your loyalty is unwavering.",
    "Transformation is coming—embrace it.",
    "A deep conversation brings clarity.",
    "You’ll uncover hidden talents.",
    "Your determination impresses others.",
    "Let your intuition guide you."
  ],
  Sagittarius: [
    "Adventure calls—answer it!",
    "A new journey begins today.",
    "Your optimism lifts everyone’s spirits.",
    "A learning opportunity excites you.",
    "Share your wisdom—it’s valuable.",
    "A spontaneous plan brings joy.",
    "Your honesty is refreshing.",
    "Travel is on the horizon.",
    "A friend brings good news.",
    "Keep exploring—great things await."
  ],
  Capricorn: [
    "Your ambition leads to success.",
    "A goal is within reach—keep going.",
    "Your discipline inspires others.",
    "A reward is coming for your hard work.",
    "Stay focused—results will follow.",
    "A wise decision pays off.",
    "Your patience is admirable.",
    "A mentor offers valuable advice.",
    "You’re building a strong foundation.",
    "Celebrate your achievements!"
  ],
  Aquarius: [
    "Your originality stands out—embrace it.",
    "A new idea sparks excitement.",
    "You’ll make a positive impact today.",
    "A group project brings success.",
    "Your vision inspires others.",
    "A surprise encounter delights you.",
    "Innovation is your strength.",
    "A friend seeks your advice.",
    "Share your dreams—they’re possible.",
    "You’re ahead of the curve!"
  ],
  Pisces: [
    "Your creativity flows—express it!",
    "A dream offers insight.",
    "Compassion guides your actions.",
    "A peaceful moment soothes you.",
    "Your intuition is strong today.",
    "A new inspiration appears.",
    "You’ll help someone in need.",
    "Music or art brings you joy.",
    "A gentle approach works best.",
    "Let your imagination soar!"
  ]
};

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

exports.addLoveStory = async (req, res) => {
  try {
    const { story } = req.body;
    if (!story) {
      return res.status(400).json({ message: "Story is required." });
    }
    const newStory = new LoveStory({ story });
    await newStory.save();
    res.status(201).json({ message: "Thank you for sharing your story!" });
  } catch (error) {
    console.error("Error saving love story:", error);
    res.status(500).json({ message: "Server error." });
  }
};

exports.getLoveStories = async (req, res) => {
  try {
    const stories = await LoveStory.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    console.error("Error fetching love stories:", error);
    res.status(500).json({ message: "Server error." });
  }
};

exports.getZodiacResult = (req, res) => {
  const { zodiacSign } = req.body;
  if (!zodiacSign || !zodiacResults[zodiacSign]) {
    return res.status(400).json({ message: "Valid zodiac sign required" });
  }
  const results = zodiacResults[zodiacSign];
  const randomIndex = Math.floor(Math.random() * results.length);
  res.json({ result: results[randomIndex] });
};
