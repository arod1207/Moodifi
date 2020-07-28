const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });
};
