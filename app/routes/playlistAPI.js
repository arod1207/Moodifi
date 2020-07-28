const express = require("express");
// const router = express.Router();
const db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
app.get("/playlist/moods/all", (req, res) => {
  db.playlist
    .findAll({
      raw: true,
      where: {
        CATEGORY: "Moods",
      },
    })
    .then((playlist) => {
      console.log(playlist);
      res.render("moods", {
        playlist,
      });
    });
});

app.get("/playlist/moods/sad", (req, res) => {
  db.playlist
    .findAll({
      raw: true,
      where: {
        NAME: "Sad",
      },
    })
    .then((playlist) => {
      console.log(playlist);
      res.render("moods", {
        playlist,
      });
    });
});

app.get("/playlist/moods/happy", (req, res) => {
  db.playlist
    .findAll({
      raw: true,
      where: {
        NAME: "Happy",
      },
    })
    .then((playlist) => {
      console.log(playlist);
      res.render("moods", {
        playlist,
      });
    });
});

app.get("/playlist/moods/angry", (req, res) => {
  db.playlist
    .findAll({
      raw: true,
      where: {
        NAME: "Angry",
      },
    })
    .then((playlist) => {
      console.log(playlist);
      res.render("moods", {
        playlist,
      });
    });
});

app.get("/playlist/activities/all", (req, res) => {
  db.playlist
    .findAll({
      raw: true,
      where: {
        CATEGORY: "Activities",
      },
    })
    .then((playlist) => {
      console.log(playlist);
      res.render("active", {
        playlist,
      });
    });
});

app.post("/playlist/activities/like/:id", (req, res) => {
  db.playlist
    .increment("Liked", {
      where: { id: req.params.id },
    })
    .then(() => {
      res.redirect("/playlist/activities/all");
    });
});

app.post("/playlist/activities/dislike/:id", (req, res) => {
  db.playlist
    .decrement("Disliked", {
      where: { id: req.params.id },
    })
    .then(() => {
      res.redirect("/playlist/activities/all");
    });
});

app.post("/playlist/moods/like/:id", (req, res) => {
  db.playlist
    .increment("Liked", {
      where: { id: req.params.id },
    })
    .then(() => {
      res.redirect("/playlist/moods/all");
    });
});

app.post("/playlist/moods/dislike/:id", (req, res) => {
  db.playlist
    .decrement("Disliked", {
      where: { id: req.params.id },
    })
    .then(() => {
      res.redirect("/playlist/moods/all");
    });
});

};
