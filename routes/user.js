var bcrypt = require("bcrypt")
exports.show_users = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from users', [], function(err, results) {
      if (err) return next(err);
      res.render('user', {
        no_user: results.length === 0,
        users: results,
        user: req.session.user,
        is_admin: req.session.is_admin
      });
    });
  });
};
////////////////////////////////////////////////////////////////////////////////
exports.showAdd_user = function(req, res) {
    res.render('add_user');
  }
  ////////////////////////////////////////////////////////////////////////////////
exports.add_users = function(req, res, next) {
    req.getConnection(function(err, connection) {
      if (err) return next(err);
      var input = req.body;
      var data = {
        username: input.username,
        email: input.email,
        password: input.password
      };
      bcrypt.hash(data.password, 10, function(err, hash) {
        console.log(hash);
        if (err) {
          return next(err);
        }
        data.password = hash;
        connection.query('insert into users set ? ', data, function(err, data) {
          if (err) return next(err);
          res.redirect('/user');
        })
      })
    })
  }
  ////////////////////////////////////////////////////////////////////////////////
exports.getUsers = function(req, res, next) {
  var id = req.params.id;
	console.log(id+" "+"lllllllllllllllllllllllllllllllllllllllllllll");
  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM users WHERE id = ?', [id], function(err, rows) {
      if (err) return next(err);
      console.log('ddddddddddddddddddddddddddddddddddddddddddddddddddddd', rows);
      res.render('edit_user', {
        page_title: "Edit Customers - Node.js",
        data: rows[0]
      });
    });
  });
}
