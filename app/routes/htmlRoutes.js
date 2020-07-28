const isAuthenticated = require("../config/middleware/isAuthenticated");
var passport = require("../config/passport");

module.exports = function(app){
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.get("/login", (req, res) => {
  res.render("login")
})

app.get("/members", isAuthenticated, function(req, res) {
  res.render("/login");
});
}

