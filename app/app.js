const express = require("express");
const db = require("../models");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

const happyAPI = require("../routes/happyAPI");
app.use("/api", happyAPI);

const sadAPI = require("../routes/sadAPI");
app.use("/api", sadAPI);

const angryAPI = require("../routes/angryAPI");
app.use("/api", angryAPI);

app.use("/", (req, res) => {
  res.send("hello people");
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
