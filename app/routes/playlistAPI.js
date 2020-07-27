const express = require("express");
const router = express.Router();
const db = require("../models");

var rating;

// GET LINKS AND RATINGS //
// router.get("/playlist/:category/:name", (req, res) => {
//   db.playlist.findOne({
//     where: {
//       CATEGORY: req.params.category,
//       NAME: req.params.name
//     }
//   }).then((playlist) => {
//     console.log(playlist)
//     res.render("index", {
//       playlist
//     });
//   })
// });

router.get("/playlist/moods/all", (req, res) => {
  db.playlist.findAll({
    raw: true,
    where: {
      CATEGORY: "Mood"
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
    raw: true,
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

router.post("/playlist/:category/:name", (req, res) => {
  db.playlist.update(
    {RATING: rating++},
    {where: {
      CATEGORY: req.params.category,
      NAME: req.params.name
    }}
  ).then((playlist) => {
    res.render('index', {
      playlist
    })
  })
});
module.exports = router;
