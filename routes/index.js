const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "/index.html"));
});

module.exports = router;
