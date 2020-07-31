var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/index", isAuthenticated, (req, res) => {
    res.render("index", {
      user: req.user,
    });
  });
  app.get("/beta", isAuthenticated, (req, res) => {
    res.render("beta");
  });
};
