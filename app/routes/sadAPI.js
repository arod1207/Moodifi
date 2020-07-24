const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/sad/all", (req, res) => {
  db.sad.findAll().then((playlists) => {
    res.send(playlists);
  });
});

module.exports = router;
