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
      LIKED: {
        type: DataTypes.INTEGER,
      },
      DISLIKED: {
        type: DataTypes.INTEGER,
      },
      IMAGE: {
        type: DataTypes.STRING,
        allowNull: "false",
      },
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
    }
  );
  return Playlist;
};
