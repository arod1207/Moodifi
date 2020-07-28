const passport = require("../config/passport");
const db = require("../models");

module.exports = function (app) {
  // app.post(
  //   "/login",
  //   passport.authenticate("local", {
  //     successRedirect: "/index",
  //     failureRedirect: "/login",
  //     failureFlash: true,
  //   })
  // );

    
  app.post("/signup", (req, res) => {
    db.User.create({
      USERNAME: req.body.username,
      PASSWORD: req.body.password
    })
      .then(function() {
        res.redirect(307, "/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
};
