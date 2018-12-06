module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("users", {
    userid: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    names: DataTypes.STRING,
    lastnames: DataTypes.STRING,
    qr: DataTypes.TEXT
  });
  return User;
};
