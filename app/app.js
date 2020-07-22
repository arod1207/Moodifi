const express = require("express");
const db = require("../models");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const moodsAPI = require("../routes/moodsAPI");
app.use("/api", moodsAPI);

const activitesAPI = require("../routes/activitiesAPI");
app.use("/api", activitesAPI);

app.use("/", (req, res) => {
  res.send("hello people");
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
