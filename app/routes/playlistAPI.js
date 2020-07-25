const express = require("express");
const router = express.Router();
const db = require("../models");


// GET LINKS AND RATINGS //
router.get("/playlist/:category/:name", (req, res) => {
  db.playlist.findOne({
    where: {
      CATEGORY: req.params.category,
      NAME: req.params.name
    }
  }).then((playlist) => {
    console.log(playlist)
    res.render("index", {
      playlist
    });
  })
});

module.exports = router;
