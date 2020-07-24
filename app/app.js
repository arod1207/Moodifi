const express = require("express");
const db = require("./models");
const app = express();
var exphbs = require("express-handlebars");
var path = require ('path');

const PORT = process.env.PORT || 3060;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.set("views", path.join(__dirname, "views"))
// console.log("blah", __dirname)
app.use(express.static("public"));


const happyAPI = require("./routes/playlistAPI");
app.use("/api", happyAPI);

const sadAPI = require("./routes/playlistAPI");
app.use("/api", sadAPI);

const angryAPI = require("./routes/playlistAPI");
app.use("/api", angryAPI);

app.use("/", (req, res) => {
  res.render("index");
});


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
