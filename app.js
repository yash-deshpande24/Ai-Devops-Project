const express = require("express");
const path = require("path");
const app = express();

// ✅ Serve public folder
app.use(express.static("public"));

// Optional (force index.html on root)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Test API
app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});