const express = require("express");
const router = express.Router();
const { calculateLove, addLoveStory, getLoveStories,getZodiacResult } = require("../controllers/lovecontroller");

router.post("/love", calculateLove);
router.post("/lovestories", addLoveStory);
router.get("/lovestories", getLoveStories);
router.post("/zodiac-result", getZodiacResult);
module.exports = router;
