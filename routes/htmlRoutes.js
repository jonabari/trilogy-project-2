var db = require("../models");
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/admin", function(req, res) {
    res.render("admin");
  });

  app.get("/role", function(req, res) {
    res.render("role");
  });

  app.get("/qr", function(req, res) {
    res.render("qr");
  });

  app.get("/scan", function(req, res) {
    res.render("scan");
  });

  app.get("/signature", function(req, res) {
    res.render("signature");
  });

  app.get("/success", function(req, res) {
    res.render("success");
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
