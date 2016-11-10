var bcrypt = require("bcrypt")

exports.show_users = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from users', [], function(err, results) {
      if (err) return next(err);
      res.render('user', {
        no_user: results.length === 0,
        users: results
      });
    });
  });
};
////////////////////////////////////////////////////////////////////////////////
exports.showAdd_user = function(req, res) {
    res.render('add_user', {
      user: req.session.user,
      is_admin: req.session.is_admin
    });
  }
////////////////////////////////////////////////////////////////////////////////
  var rolesMap = {
    "nelisa":"admin",
    "likhona":"user"
  }
  //////////////////////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////////////
exports.editUsers = function(req, res, next) {
  var id = req.params.id;
	console.log(id+" "+"lllllllllllllllllllllllllllllllllllllllllllll");
  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM users WHERE id = ?', [id], function(err, rows) {
      if (err) return next(err);
      res.render('edit_user', {
        data: rows[0],
        user: req.session.user,
        is_admin: req.session.is_admin
      });
    });
  });
}
////////////////////////////////////////////////////////////////////////////////
exports.update = function(req, res, next) {
  var data = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    connection.query('UPDATE users SET ? WHERE id = ?', [data, id], function(err, rows) {
      if (err) next(err);
      res.redirect('/user');
    });
  });
};
////////////////////////////////////////////////////////////////////////////////
exports.delete = function(req, res, next) {
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    connection.query('DELETE FROM users WHERE id = ?', [id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/user');
    });
  });
};
