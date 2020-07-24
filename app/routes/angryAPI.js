const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/angry/all", (req, res) => {
  db.angry.findAll().then((playlists) => {
    let angryPL = {
      angry: playlists
    };
    console.log(angryPL);
    res.render("index", angryPL)
  });
});

module.exports = router;


// router.get("/", (req, res) => {
//   burger.selectAll(function (data) {
//       var burgerObject = {
//           burgers: data
//       };
//       console.log(burgerObject);
//       res.render("index", burgerObject);
//   });
// });