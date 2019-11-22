const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

/* GET home page */
router.get("/", (req, res) => {
  axios.get("https://www.google.com/search?tbm=isch&q=planet+texture").then(x => {
    const $ = cheerio.load(x.data);

    let xxxx1 = [];

    $("#search img").each(y => {
      xxxx1.push(
        $("#search img")
          .eq(y)
          .attr("src")
      );
    });

    const shuffle = array => array.sort(() => Math.random() - 0.5);
    xxxx1 = shuffle(xxxx1);

    res.json(xxxx1);
  });
});

module.exports = router;

// const randomFloat = (min, max) => Math.random() * (max - min) + min;
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const shuffle = array => array.sort(() => Math.random() - 0.5);
