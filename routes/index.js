const express = require("express");
const router = express.Router();
const fs = require("fs");
require('dotenv').config();


// this serves the map :)
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
