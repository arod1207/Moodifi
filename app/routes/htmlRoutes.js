const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app){


app.get("/login", (req, res) => {
  res.render("login")
})

app.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.render("index");
  }
});

app.get("/signup", (req, res) => {
  res.render("signup")
});


app.get("/members", isAuthenticated, function(req, res) {
  res.render("/login");
});
}

