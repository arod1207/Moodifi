const express = require("express");
const db = require("../models");
const app = express();
var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("./public"));

const happyAPI = require("../routes/happyAPI");
app.use("/api", happyAPI);

const sadAPI = require("../routes/sadAPI");
app.use("/api", sadAPI);

const angryAPI = require("../routes/angryAPI");
app.use("/api", angryAPI);

app.use("/", (req, res) => {
  res.render("index");
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
