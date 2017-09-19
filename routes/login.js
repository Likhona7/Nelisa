var bcrypt = require("bcrypt");



exports.Inloggin = function(req, res) {


  var rolesMap = {
    "nelisa": "admin",
    "aluta": "viewer"
  };

  var inputUser = {
    //  email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    is_admin: rolesMap[req.body.username] === "admin"
  };




  var inputUsers = [inputUser];

  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from users where username = ?', inputUser.username, function(err, users) {


      if (users.length === 0) {
        req.flash('warning', 'Invalid username');
        console.log("Access denied....");
        return res.redirect("/login_users");
      } else {
        var dbUser = users[0];
        bcrypt.compare(inputUser.password, dbUser.password, function(err, match) {
          console.log(match);
          if (match) {
            req.session.user = inputUser;
            // req.session.user;
            // req.session.is_admin = {
            //   admin: req.session.user.admin,
            //   user: req.session.user.username
            // };
            if (err) return next(err);
            return res.redirect("/home");
          } else {
            return res.redirect("/login");
            console.log("Wrong Password.....");

          }

        })
      }
    });
  });
}
