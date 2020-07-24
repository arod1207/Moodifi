module.exports = function (sequelize, DataTypes) {
  // Moods table used to rate the playlist
  var Cooking = sequelize.define(
    "cooking",
    {
      LINK: {
        type: DataTypes.STRING,
      },
      RATING: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
    }
  );
  return Cooking;
};
