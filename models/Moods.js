module.exports = function (sequelize, DataTypes) {
  // Moods table used to rate the playlist
  var Moods = sequelize.define("moods", {
    HAPPY: {
      type: DataTypes.STRING,
    },
    SAD: {
      type: DataTypes.STRING,
    },
    ANGRY: {
      type: DataTypes.STRING,
    },
  });
  return Moods;
};
