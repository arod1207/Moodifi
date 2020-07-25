const express = require("express");
const router = express.Router();
const db = require("../models");


// Get all angry PL //
router.get("/mood/playlist/:name", (req, res) => {
  db.playlist.findOne({
    where: {
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
