const express = require("express");//import statements
const app = express();
const mongoose = require("mongoose");//mongo db
const loveRoutes = require("./routes/loveRoutes");
const cors = require("cors");
const path = require("path");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/lovecal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "../public"))); // Adjust path if needed

// API routes
app.use("/api", loveRoutes);

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html")); // Ensure the path is correct
});

app.get('/lovestories', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/lovestories.html"));
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
