var bcrypt = require("bcrypt");

var loginNumber = 0;



exports.Inloggin = function(req, res) {
  var data = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    locked: 0,
    admin: 0
  };


  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from users where username = ? ', data.username, function(err, users) {
      if (err) return next(err);
      console.log("//////////////////////////////////////////////////////////////////");



      console.log(data.password);
      var user = users[0];

        if (err) return next(err);



        if (!user) {
                       req.flash('warning', 'No user found.');
                       return res.redirect("/login_users");
    }

if (!user.password == data.password)

console.log(data);
            return (null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

        // all is well, return successful user
        return done(null, user[0]);



    			//  if (!user.length) {
          // return (null, false, req.flash('loginMessage', 'No user found.'));
          //           // req.flash is the way to set flashdata using connect-flash
          //           console.log(user);
          //       }





      res.redirect('/home');
    });
  });
};
// var bcrypt = require('bcrypt');
// var login_count = 0;
// module.exports = function(req, res) {
//     var username = req.body.username;
//     var password = req.body.password;
//
//     req.getConnection(function(err, connection) {
//
//         connection.query('SELECT * FROM users where username = ?', username, function(err, users) {
//             var user = users[0];
//
//             if (user === undefined) {
//                 req.flash('warning', 'Invalid username');
//                 return res.redirect("/login");
//             } else if (user.locked === 0) {
//                 var id = user.id;
//
//                 bcrypt.compare(password, user.password, function(err, match) {
//                     if (match) {
//                         req.session.user = user;
//                         req.session.admintab = {
//                             admin: req.session.user.admin,
//                             user: req.session.user.username
//                         };
//
//
//                         return res.redirect("/");
//                     } else {
//                         login_count++;
//                         if (login_count === 3) {
//                             connection.query('UPDATE users SET locked = 1 WHERE id = ?', [id], function(err, rows) {
//                                 req.flash('warning', 'Account locked');
//                                 return res.redirect("/login");
//                             });
//                         } else {
//                             req.flash('warning', 'Invalid password');
//                             return res.redirect("/login");
//                         }
//                     }
//                 });
//             } else {
//                 req.flash('warning', 'Account locked');
//                 return res.redirect("/login");
//             }
//         });
//     });
// }
//
//
//                   // if(data.email && data.password){
//                   // }
//                   // else {
//                   //   var err = new Error("email and password are required");
//                   //   err.status = 401;
//                   //   return next(err);
//                   // }
