const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/playlist/moods/all", (req, res) => {
  db.playlist.findAll({
    where: {
      CATEGORY: "Moods"
    }
  }).then((playlist) => {
    console.log(playlist)
    res.render("index", {
      playlist
    });
  })
});

router.get("/playlist/activities/all", (req, res) => {
  db.playlist.findAll({
    where: {
      CATEGORY: "Activities"
    }
  }).then((playlist) => {
    console.log(playlist)
    res.render("index", {
      playlist
    });
  })
});

// router.post("/playlist/:category/:name", (req, res) => {
//   db.playlist.update(
//     {RATING: rating++},
//     {where: {
//       CATEGORY: req.params.category,
//       NAME: req.params.name
//     }}
//   ).then((playlist) => {
//     res.render('index', {
//       playlist
//     })
//   })
// });
module.exports = router;
