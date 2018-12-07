var db = require("../models");

module.exports = function (app) {
  //Order Routes
  app.get("/api/orders", function (req, res) {
    db.Order.findAll({}).then(function (dbOrders) {
      res.json(dbOrders);
    });
  });

  app.post("/api/orders", function (req, res) {
    console.log(req.body);
    db.Order.create(req.body).then(function (dbOrders) {
      var data = {
        dbOrders: dbOrders
      };
      res.json(data);
    }).catch(function (error) {
      var errormessage = {
        error: error.original.sqlMessage
      };
      res.json(errormessage);
    });
  });

  //User Routes
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  app.post("/api/users/create", function (req, res) {
    db.User.create(req.body).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/user/:id", function (req, res) {
    db.User.findById(req.params.id).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });
};