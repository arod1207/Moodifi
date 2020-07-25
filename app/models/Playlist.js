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
        type: DataTypes.STRING,
      },
      RATING: {
        type: DataTypes.INTEGER,
      }
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
    }
  );
  return Playlist;
};
