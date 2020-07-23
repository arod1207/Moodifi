const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/happy/all", (req, res) => {
  db.happy.findAll().then((playlists) => {
    res.send(playlists);
  });
});

module.exports = router;
