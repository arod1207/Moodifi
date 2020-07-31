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
    }
  });
  return User;
};
