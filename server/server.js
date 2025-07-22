const express = require("express");//import statements
const app = express();
const mongoose = require("mongoose");//mongo db
const loveRoutes = require("./routes/loveRoutes");
const cors = require("cors");
const path = require("path");
const LoveStory = require("./models/LoveStory");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log('MONGODB_URI:', process.env.MONGODB_URI);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "../public"))); // Adjust path if needed

// API routes
app.use("/api", loveRoutes);

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve index.ejs on root
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/lovestories', async (req, res) => {
  try {
    const stories = await LoveStory.find().sort({ createdAt: -1 });
    res.render("lovestories", { stories });
  } catch (error) {
    console.error("Error fetching love stories:", error);
    res.status(500).send("Error loading stories");
  }
});

app.get('/lovetips', (req, res) => {
  res.render('lovetips');
});
app.get('/zodiac', (req, res) => {
  res.render('zodiac');
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
