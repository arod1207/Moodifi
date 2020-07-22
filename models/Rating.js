module.exports = function (sequelize, DataTypes) {
  // Ratings table used to rate the playlist
  var Rating = sequelize.define("rating", {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Rating;
};
