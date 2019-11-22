const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

const shuffle = array => array.sort(() => Math.random() - 0.5);

router.get("/", (req, res) => {
  res.render("index")
})

router.get("/planet-textures", (req, res) => {
  axios.get("https://www.google.com/search?tbm=isch&q=planet+texture").then(googleSearch => {
    const $ = cheerio.load(googleSearch.data);

    let planetTextures = [];

    $("#search img").each(planetTexture => {
      planetTextures.push(
        $("#search img")
          .eq(planetTexture)
          .attr("src")
      );
    });

    res.json(shuffle(planetTextures));
  });
});

module.exports = router;