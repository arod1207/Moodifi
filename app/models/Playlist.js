module.exports = function (sequelize, DataTypes) {
  // Moods table used to rate the playlist
  const Playlist = sequelize.define(
    "playlist",
    {
      NAME: {
        type: DataTypes.STRING,
      },
      LINK: {
        type: DataTypes.STRING,
      },
      CATEGORY: {
        type: DataTypes.BOOLEAN,
      },
      RATING: {
        type: DataTypes.INTEGER,
      },
      IMAGE: {
        type: DataTypes.STRING,
        allowNull: "false"
      }
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
    }
  );
  return Playlist;
};
