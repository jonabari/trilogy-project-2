module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      names: DataTypes.STRING,
      lastnames: DataTypes.STRING,
      qr: DataTypes.TEXT
    },
    {
      timestamps: false
    }
  );
  return User;
};
