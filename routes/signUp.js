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


  if (data.username.length < 3 || data.password.length < 3) {
    req.flash("warning", 'Username/Password too short, should be 3 letters long');
    return res.redirect("/signUp_users");
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









// exports.add_users = function(req, res, next) {
//
//     var password = req.body.password;
//     var data = {
//         username: req.body.username
//     };
//     var user = req.body.username;
//
//
//     if (user.length < 3 || password.length < 3) {
//         req.flash('warning', 'Username/Password too short, minimum length should be 4 letters long');
//         return res.redirect("/signup");
//     } else {
//       req.getConnection(function(err, connection) {
//           if (err)
//               return next(err);
//
//           bcrypt.hash(password, 10, function(err, hash) {
//               data.password = hash;
//
//               connection.query('insert into users set ?', data, function(err, data) {
//                   if (err) {
//                       req.flash('warning', "Username already exists");
//                       res.redirect('/signup');
//                   } else {
//                       req.flash('success', "Thank you for registering, Now login");
//                       res.redirect('/login');
//                   }
//               });
//           });
//       });
//     }
// };
//
