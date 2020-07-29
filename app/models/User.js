module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    USERNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // The password cannot be null
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
