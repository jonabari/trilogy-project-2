module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("users", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    names: DataTypes.STRING,
    lastnames: DataTypes.STRING,
    qr: DataTypes.TEXT
  });
  return User;
};