const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
app.get("/playlist/moods/all", isAuthenticated, (req, res) => {
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

app.get("/playlist/moods/sad", isAuthenticated, (req, res) => {
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

app.get("/playlist/moods/happy", isAuthenticated, (req, res) => {
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

app.get("/playlist/moods/angry", isAuthenticated, (req, res) => {
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

app.get("/playlist/activities/all", isAuthenticated, (req, res) => {
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
