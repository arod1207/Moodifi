module.exports = function (sequelize, DataTypes) {
  // Activities table used to rate the playlist
  var Activities = sequelize.define("activities", {
    WORKOUT: {
      type: DataTypes.STRING,
    },
    STUDYING: {
      type: DataTypes.STRING,
    },
    COOKING: {
      type: DataTypes.STRING,
    },
    COMMUTE: {
      type: DataTypes.STRING,
    },
  });
  return Activities;
};
