const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const db = require("./models");
const passport = require("./config/passport");
const app = express();
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const methodOverride = require("method-override");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());

require("dotenv").config();

app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.engine(
  "handlebars",
  expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", "handlebars");

app.use(express.static("public"));

require("./routes/playlistAPI")(app);
require("./routes/htmlRoutes")(app);
require("./routes/passportAPI")(app);

app.use("/", (req, res) => {
  res.render("login");
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
