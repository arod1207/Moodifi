const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/angry/all", (req, res) => {
  db.angry.findAll().then((playlists) => {
    res.send(playlists);
  });
});

module.exports = router;
