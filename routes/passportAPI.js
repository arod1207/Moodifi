const passport = require("../config/passport");
const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = function (app) {
  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/index",
      failureRedirect: "/login",
      failureFlash: true,
    })
  );

  app.post("/signup", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    db.User.create({
      USERNAME: req.body.username,
      PASSWORD: hashedPassword,
    }).then((data) => {
      console.log(data);
      res.render("login");
    }).catch(function(err) {
      res.status(401).json(err);
    });
  });

  app.delete("/logout", (req,res) => {
    req.logout();
    res.redirect("/login")
  })
};
