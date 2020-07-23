module.exports = function (sequelize, DataTypes) {
  // Moods table used to rate the playlist
  var Happy = sequelize.define(
    "happy",
    {
      HAPPY: {
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
  return Happy;
};
