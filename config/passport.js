const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcryptjs");


passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
    },
    function (username, password, done) {
      db.User.findOne({
        where: {
          USERNAME: username,
        },
      }).then(async (dbUser) => {
        console.log(dbUser);
        if (dbUser === null) {
          return done(null, false, {
            message: "Incorrect Username",
          });
        } else if (await bcrypt.compare(password, dbUser.PASSWORD)) {
          return done(null, dbUser);
        } else {
          return done(null, false, {
            message: "Password Incorrect",
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;