module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    deliveringUserId: DataTypes.INTEGER,
    deliveringUserEmail: DataTypes.STRING,
    receivingUserId: DataTypes.INTEGER,
    receivingUserEmail: DataTypes.STRING,
    signature: DataTypes.TEXT
  });
  return Order;
  // eslint-disable-next-line prettier/prettier
};