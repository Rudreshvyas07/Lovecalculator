const express = require("express");
const router = express.Router();
const { calculateLove } = require("../controllers/lovecontroller");

router.post("/love", calculateLove);

module.exports = router;
