const express = require("express");
const db = require("./models");
const app = express();
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "handlebars",
  expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const router = require("./routes/playlistAPI");
app.use(router);

app.use("/", (req, res) => {
  res.render("index");
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});