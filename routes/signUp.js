var bcrypt = require('bcrypt');


exports.add_users = function(req, res, next) {
  var data = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    // comfirmPassword: req.body.confirmPassword,
    locked: 0,
    admin: 0
  };

console.log(data);
  if (data.username.length < 3 || data.password.length < 3) {
    req.flash("warning", 'Username/Password too short, should be 3 letters long');
    return res.redirect("/signUp");
  } else {
    req.getConnection(function(err, connection) {
      if (err) return next(err);

      bcrypt.hash(data.password, 10, function(err, hash) {
        console.log(hash);
        if (err) {
          return next(err);
        }
        data.password = hash;

        if (err) return next(err);
        connection.query('insert into users set ?', data, function(err, data) {
          if (err) return next(err);
          console.log(data);
          res.redirect('/login');
        });

      });
      // };
    });
  };
};
