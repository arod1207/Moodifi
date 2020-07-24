const express = require("express");
const router = express.Router();
const db = require("../models");

// Get all angry PL //
router.get("/mood/angry/all", (req, res) => {
  db.angry.findAll().then((playlist) => {
    res.render("index", {
      playlist,
    });
  });
});

// Update angry rating //
router.put("/mood/angry/rating", (req, res) => {
  db.angry.update({
    RATING: req.body.rating
  }).then((rating) => res.render(rating))
});

// Get all happy PL //
router.get("/mood/happy/all", (req, res) => {
  db.happy.findAll().then((playlist) => {
    res.render("index", {
      playlist,
    });
  });
});

// Get all sad PL //
router.get("/mood/sad/all", (req, res) => {
  db.sad.findAll().then((playlist) => {
    res.render("index", {
      playlist,
    });
  });
});

// Get all commute PL //
router.get("/activities/commute/all", (req, res) => {
  db.commute.findAll().then((playlist) => {
    res.render("index", {
      playlist,
    });
  });
});

// Get all cooking PL //
router.get("/activities/cooking/all", (req, res) => {
  db.cooking.findAll().then((playlist) => {
    res.render("index", {
      playlist,
    });
  });
});

// Get all workout PL //
router.get("/activities/workout/all", (req, res) => {
  db.workout.findAll().then((playlist) => {
    res.render("index", {
      playlist,
    });
  });
});

// Get all studying PL //
router.get("/activities/studying/all", (req, res) => {
  db.studying.findAll().then((playlist) => {
    res.render("index", {
      playlist,
    });
  });
});

module.exports = router;
