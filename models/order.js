module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("orders", {
    orderid: DataTypes.INTEGER,
    deliveringUserId: DataTypes.INTEGER,
    deliveringUserEmail: DataTypes.STRING,
    receivingUserId: DataTypes.INTEGER,
    receivingUserEmail: DataTypes.STRING,
    signature: DataTypes.TEXT
  });
  return Order;
};
