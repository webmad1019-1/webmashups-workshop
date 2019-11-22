const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

/* GET home page */
router.get("/", (req, res, next) => {
  axios
    .get(
      "https://www.google.com/search?tbm=isch&q=planet+texture"
    )
    .then(x => {
      const $ = cheerio.load(x.data);

      let xxxx1 = [];

      $("#search img").each(x => {
        xxxx1.push(
          $("#search img")
            .eq(x)
            .attr("src")
        );
      });

      res.json(xxxx1);
    });
});

module.exports = router;
