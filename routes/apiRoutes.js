var db = require("../models");

module.exports = function(app) {
  app.get("/api/orders", function(req, res) {
    db.Order.findAll({}).then(function(dbOrders) {
      res.json(dbOrders);
    });
  });

  app.post("/api/orders", function(req, res) {
    console.log(req.body);
    db.Order.create(req.body).then(function(dbOrders) {
      res.json(dbOrders);
    });
  });

  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/user/:id", function(req, res) {
    db.User.findById(req.params.id).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/user/:email", function(req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
