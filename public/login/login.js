var { checkSchema } = require('express-validator/check');

$("#login").click(function() {
  app.get('/user/:email', checkSchema({
    email: {
      in: ['params', 'query'],
      errorMessage: "Email/password does not match our records."
    },
    password: {
      in: ['params', 'query'],
      errorMessage: "Email/password does not match our records."
    },
  },
  ), (req, res, next) => {
    localStorage.clear();
    console.log(res.id)
    var userinfo = res.id;
    localStorage.setItem("deliveringUserId", JSON.stringify(userinfo));
  });
});
