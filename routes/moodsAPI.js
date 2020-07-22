const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/moods/all", (req, res) => {
  db.moods.findAll().then((playlists) => {
    res.send(playlists);
  });
});

module.exports = router;
