const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/activities/all", (req, res) => {
  db.activities.findAll().then((playlists) => {
    res.send(playlists);
  });
});

module.exports = router;
