const express = require("express");
const db = require("../models");
const app = express();
var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
app.use(express.static("./public"));
=======
app.use(express.static("public"));
>>>>>>> f0ca838ba935db53264a55baac8c58c3db0c5642

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
