module.exports = function (sequelize, DataTypes) {
  // Moods table used to rate the playlist
  var Angry = sequelize.define(
    "angry",
    {
      ANGRY: {
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
  return Angry;
};
