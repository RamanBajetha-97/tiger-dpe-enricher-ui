const express = require("express");
const path = require("path");

const app = express();

// Serve static files from React build
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`React app running on port ${port}`);
});
