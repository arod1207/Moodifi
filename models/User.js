module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    USERNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IMAGE: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  return User;
};
