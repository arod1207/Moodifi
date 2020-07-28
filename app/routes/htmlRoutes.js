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
  res.sendFile(path.join(__dirname, "../public/login.html"));
});


app.get("/members", isAuthenticated, function(req, res) {
  res.render("/login");
});
}

