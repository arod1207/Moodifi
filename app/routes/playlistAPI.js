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
      CATEGORY: "Moods"
    }
  }).then((playlist) => {
    console.log(playlist)
    res.render("moods", {
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
    res.render("active", {
      playlist
    });
  })
});

router.post("/playlist/activities/:id", (req, res) => {
  db.playlist
    .increment("Rating", {
      where: { id: req.params.id },
    })
    .then((playlist) => {
      res.redirect('/playlist/activities/all')
      });
    });

router.post("/playlist/moods/:id", (req, res) => {
      db.playlist
        .increment("Rating", {
          where: { id: req.params.id },
        })
        .then((playlist) => {
          res.redirect('/playlist/moods/all')
          });
        });

module.exports = router;
