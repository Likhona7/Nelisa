var bcrypt = require("bcrypt");
exports.Inloggin = function(req, res) {
  var rolesMap = {
    "nelisa": "admin",
    "aluta": "viewer"
  };
  var inputUser = {
    // email: req.body.email,
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
            // req.session.user;
            // req.session.is_admin = {
            //   admin: req.session.user.admin,
            //   user: req.session.user.username
            // };
            if (err) return next(err);

            return res.redirect("/home");
          }





          if (inputUser.password === dbUser.password) {
            //return next();
            req.session.user = inputUser;
            res.redirect('/home');
          } else {
            return res.redirect("/login_users");
            console.log("Wrong Password.....");

          }
        })
      }
    });
  });
}



// if (err) return next(err);
// console.log("My Users DTBS Usernames------------");
// dbUsers.forEach(function(item) {
//   user1.forEach(function(item2) {
//     if (item.username == item2.name && item.password == item2.pass) {
//       req.session.user = {
//         name: req.body.username,
//         is_admin: rolesMap[req.body.username] === "admin",
//         user: rolesMap[req.body.username] === "user"
//       };
//       console.log(req.session.user);
//       res.redirect("/home");
//     }
//     if (item.username == item2.name && item.password !== item2.pass) {
//       req.flash("warning", 'Wrong Password');
//       return res.redirect("/login");
//     }
//   })
// });
//     });
//   });
// }


// if (err) return next(err);
//

//
//
//






// console.log(users);

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });
// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });


//  if (!user.length) {
// return (null, false, req.flash('loginMessage', 'No user found.'));
//           // req.flash is the way to set flashdata using connect-flash
//           console.log(user);
//       }
//res.redirect('/home');
//     });
//   });
// };
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
